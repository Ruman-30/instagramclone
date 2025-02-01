import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Post from "./Post";

const Feed = () => {
  const [openStory, setOpenStory] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(null);
  const [width, setWidth] = useState(0);
  const growth = useRef(null);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const { storyData } = useSelector((state) => state.stories);

  const storyHandler = (index) => {
    setCurrentStoryIndex(index);
    setOpenStory(true);
    timeoutRef.current = setTimeout(() => {
      setOpenStory(false);
    }, 5500);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setWidth(0);

    growthRef();
  };

  const growthRef = () => {
    intervalRef.current = setInterval(() => {
      setWidth((prevWidth) => {
        const newWidth = prevWidth + 1;
        if (growth.current) {
          growth.current.style.width = `${newWidth}%`; 
        }
        if (newWidth >= 100) {
          clearInterval(intervalRef.current);
        }
        return newWidth;
      });
    }, 50);
  };

  const closeStory = () => {
    setOpenStory(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <div>
      <div className="top flex justify-between items-center px-2">
        <img
          className="h-28"
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-text-icon.png"
          alt=""
        />
        <div>
          <i className="ri-heart-line text-3xl ml-3"></i>
          <i className="ri-messenger-line text-3xl ml-3"></i>
        </div>
      </div>
      <div className="story-con h-[15vh] whitespace-nowrap overflow-x-auto custom-scroll pl-2">
        {storyData.map((elem, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                storyHandler(idx); 
              }}
              className="story h-[11vh] w-[24vw] rounded-full inset-0 border-4 border-transparent bg-clip-border bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 overflow-hidden relative inline-block mr-2"
            >
              <img
                src={elem.profileImage}
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          );
        })}
      </div>

      {openStory && currentStoryIndex !== null && (
        <div className="h-screen w-full bg-zinc-500 absolute top-0 z-10">
          <div className="absolute flex justify-between w-full p-2">
            <div className="progress absolute">
              <div ref={growth} className="growth"></div>
            </div>
            <div className="flex items-center mt-6">
              <img
                className="mr-2 h-[5vh] w-[11vw] rounded-full bg-cyan-300 object-center object-cover"
                src={storyData[currentStoryIndex].profileImage}
                alt=""
              />
              <div className="flex items-center text-lg text-white">
                <h1 className="mr-2">{storyData[currentStoryIndex].name}</h1>
                <p className="mt-1">7h</p>
              </div>
            </div>
            <div className="text-white flex items-center">
              <i className="ri-more-2-line text-2xl"></i>
              <i
                onClick={() => {
                  closeStory();
                }}
                className="ri-close-line text-4xl"
              ></i>
            </div>
          </div>

          <img
            className="object-center object-cover h-full w-full"
            src={storyData[currentStoryIndex].story} 
            alt=""
          />
          <div className="absolute bottom-7 px-2 flex items-center">
            <input
              type="text"
              placeholder="Send message..."
              className="w-[75vw] py-2 px-4 text-white placeholder-white bg-transparent border-2 border-white rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            />
            <div className="text-white">
              <i className="ri-heart-line text-3xl ml-2"></i>
              <i className="ri-share-forward-line text-3xl ml-2"></i>
            </div>
          </div>
        </div>
      )}
      <Post />
      <Footer />
    </div>
  );
};

export default Feed;
