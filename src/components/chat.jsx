import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAuth } from "../context/AuthProvider.jsx";
import axios from "axios";
import { useRef } from "react";

function chat(props) {
  const socket = useRef();
  const [text, settext] = useState("");
  const [room, setroom] = useState("");
  const [messages, setMessages] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    socket.current = io("http://localhost:4000");
  }, []);

  useEffect(() => {
    if (room) {
      socket.current.emit("join_room", room);
    }
  }, [room]);

  useEffect(() => {
    if (user && props.id) {
      setroom([user, props.id].sort().join("_"));
    }
  }, [user, props.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/chat/addMessage`,
        {
          room,
          sender: user,
          message: text,
        }
      );

      // console.log(res.data);

      if (!res) console.log("error in addMessage => ", res);
      // console.log(room)

      socket.current.emit("send_message", {
        room,
        sender: user,
        message: text,
      });

      const updatedMsg = [...messages];
      updatedMsg.push({ sender: user, message: text });
      setMessages(updatedMsg);
      settext("");
    } catch (err) {
      console.error("error in addMessage => ", err);
    }
  };

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/chat/getmessage`,
          { room }
        );
        // console.log(res)
        setMessages(res.data);
      } catch (err) {
        console.log("get message is returning error =>", err);
      }
    };
    getMessages();
  }, [room, user, socket.current]);

  useEffect(() => {
    const handleReceiveMessage = (data) => {
      setMessages((list) => [
        ...list,
        { sender: data.sender, message: data.message, room: data.room },
      ]);
    };

    socket.current.on("receive_message", handleReceiveMessage);

    return () => {
      socket.current.off("receive_message", handleReceiveMessage);
    };
  }, [socket.current]);

  console.log(messages);

  return (
    <>
      <>
        <div className="border border-gray-200 rounded-lg">
          <div className="h-80 w-full border-b-1 flex p-4 border-gray-500 bg-pink-200 overflow-auto">
            {messages.length === 0 ? (
              <h1>no messages</h1>
            ) : (
              <div className="w-full flex flex-col gap-1 ">
                {messages.map((message, i) => (
                  <div key={i}>
                    <h4
                      className={` ${
                        message.sender == props.id ? "text-right" : "text-left"
                      }`}
                    >
                      {message.message}
                    </h4>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="w-full flex justify-center items-center">
            <input
              type="text"
              value={text}
              onChange={(e) => settext(e.target.value)}
              className="w-5/6 p-1.5 border-1 border-gray-500"
            />
            <button onClick={handleSubmit} className=" w-1/6">
              send
            </button>
          </div>
        </div>
      </>
    </>
  );
}

export default chat;
