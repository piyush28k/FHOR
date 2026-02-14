import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import ImageUploader from "../components/ImageUpload";
import { useAuth } from "../context/AuthProvider.jsx";
import axios from "axios";

function Public() {
  const [text, settext] = useState("");
  const [img, setimg] = useState("");
  const { profile, user } = useAuth();
  const [post, setpost] = useState([]);

  // console.log(profile)

  const handleImageUpload = (url) => {
    setimg(url);
  };

  const handlepost = async (e) => {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/post/addpost`,
      {
        image: img,
        profileImg: profile.photo,
        username: profile.name,
        link: `${import.meta.env.VITE_SENDER_URL}/explore/${user}`,
        text,
        title:profile.title
      },
    );

    if (!res) console.log("error in adding post", res);

    alert("post added!");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  useEffect(() => {
    const find = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/post/getpost`,
      );
      if (!res) console.log("error in getting res", res);
      console.log(res.data.data);
      setpost(res.data.data);
    };
    find();
  }, []);

  return (
    <>
      {/* <Loading/> */}
      <div className="flex bg-[#F4F2EE] justify-center">
        <div className="h-full w-2/5 ">
          <div className="bg-white w-full flex flex-col border rounded-xl p-3 my-5 border-gray-400">
            <ImageUploader onUpload={handleImageUpload} />
            {img && <img src={img} alt="Profile" className="mt-2" />}
            <input
              className="border-gray-300 border p-2 my-2 rounded-xl outline-gray-400"
              type="text"
              name="text"
              value={text}
              onChange={(e) => settext(e.target.value)}
              placeholder="text"
            />
            <button
              onClick={handlepost}
              className="w-full h-10 bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-xl text-white font-bold"
            >
              ADD POST
            </button>
          </div>

          {post.length === 0 ? (
            <div className="h-screen w-full text-2xl">No post found!</div>
          ) : (
            <div>
              {post.map((p,i) => (
                <div key={i} className="bg-white justify-between w-full mb-2 h-auto border rounded-xl p-4 border-gray-400">
                  <div className="flex mb-5 justify-between items-center">
                    <div className="flex items-center">
                      <img
                        className="h-12 w-12 object-cover rounded-full mr-2"
                        src={p.profileImg}
                        alt=""
                      />
                      <div>
                        <h1 className="text-lg font-semibold">{p.username}</h1>
                        <h1 className="text-sm text-gray-600">
                          {p.title}
                        </h1>
                      </div>
                    </div>
                    <div>{new Date(p.createdAt).toLocaleTimeString()}
                    <span> - </span>
                    {new Date(p.createdAt).toLocaleDateString()}</div>
                  </div>

                  <div className="">
                    <div className="flex justify-center my-3.5">
                      <img
                        src={p.image}
                        alt=""
                      />
                    </div>
                    <h1>{p.text}</h1>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Public;
