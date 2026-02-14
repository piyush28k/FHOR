import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthProvider.jsx";
import { useNavigate } from "react-router-dom";

function notification() {
  const navigate = useNavigate()
  const { user } = useAuth();
  const [noti, useNoti] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    const getMessages = async () => {
      if (user === null) return;
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/chat/getNoti`,
          { user },
        );
        useNoti(res.data);
      } catch (err) {
        console.log("get message is returning error =>", err);
      }
    };
    getMessages();
  }, [user]);
  return (
    <>
      <div className="h-screen w-full flex justify-center m-4 my-7">
        <div className="w-1/2 h-full">
          {noti.length === 0 ? (
            <div>no messages</div>
          ) : (
            <div className="">
              {noti.map((n, i) => (
                <button  onClick={()=>navigate(`${n.link}`)} key={i} className="border my-3 cursor-pointer w-full p-2 px-5 rounded-2xl flex justify-between border-black text-start">
                  <div>
                    <h1 className="text-xl font-bold">{n.senderName}</h1>
                    <h1>"{n.message}"</h1>
                  </div>
                  <div>
                    {new Date(n.createdAt).toLocaleTimeString()}
                    <span>  -- </span>
                    {new Date(n.createdAt).toLocaleDateString()}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default notification;

{
  /* <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 rounded-full">
            {unreadCount}
</span> */
}
