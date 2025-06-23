"use client";
import { useState, useEffect } from "react";

export default function MusicSlider() {
  const [selected, setSelected] = useState(1);

  const songs = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1485579149621-3123dd979885?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prev) => (prev >= songs.length ? 1 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getCircularPosition = (index) => {
    const rawPosition = index - (selected - 1);
    const half = Math.floor(songs.length / 2);
    if (rawPosition > half) return rawPosition - songs.length;
    if (rawPosition < -half) return rawPosition + songs.length;
    return rawPosition;
  };

  const getStyle = (position) => {
    switch (position) {
      case 0:
        return { translate: 0, scale: 1.2, zIndex: 5, opacity: 1 };
      case -1:
        return { translate: -220, scale: 1, zIndex: 4, opacity: 1 };
      case -2:
        return { translate: -400, scale: 0.9, zIndex: 3, opacity: 1 };
      case 1:
        return { translate: 220, scale: 1, zIndex: 4, opacity: 1 };
      case 2:
        return { translate: 400, scale: 0.9, zIndex: 3, opacity: 1 };
      default:
        return { opacity: 0 };
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#c394f8] p-4 relative py-10">
      <div className="mb-[10px] text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-8 text-black">
          Content Created By Team
        </h1>
        <p className="text-lg md:text-xl mt-2 text-black">Watch our Latest Content</p>
      </div>

      <div className="relative flex justify-center items-center w-full max-w-[1400px] h-[700px]">
        {songs.map((song, index) => {
          const position = getCircularPosition(index);
          const { translate, scale, zIndex, opacity } = getStyle(position);
          return (
            <div
              key={song.id}
              className="absolute transition-all duration-700 ease-in-out cursor-pointer"
              style={{
                transform: `translateX(${translate}px) scale(${scale})`,
                zIndex: zIndex,
                opacity: opacity,
                width: "250px",
                height: "444px",
              }}
              onClick={() => setSelected(song.id)}
            >
              <img
                src={song.img}
                alt="card"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-0 mb-10 flex space-x-3">
        {songs.map((song) => (
          <button
            key={song.id}
            className={`w-3 h-3 rounded-full ${
              selected === song.id ? "bg-blue-500" : "bg-gray-400"
            }`}
            onClick={() => setSelected(song.id)}
          />
        ))}
      </div>
    </div>
  );
}
