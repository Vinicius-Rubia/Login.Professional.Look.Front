import React from "react";

export const Home: React.FC = () => {
  return (
    <div className="relative w-full flex flex-col">
      <img
        className="absolute top-0 z-0 -translate-y-1/2"
        src={"https://farmui.vercel.app/bg-back.png"}
        alt="back bg"
      />

      <div className="absolute -z-1 inset-0 h-[600px] w-full bg-transparent opacity-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="text-center mt-40">
        <h1 className="text-7xl flex flex-col -space-y-[97px]">
          <span className="[clip-path:polygon(0_0,100%_0,100%_60%,0_60%)] text-white text-8xl font-black font-mono">Are you in?</span>
          <span className="[clip-path:polygon(0%_60%,100%_60%,100%_100%,0_100%)] text-white text-8xl font-black font-mono mr-2">Are you in?</span>
        </h1>
      </div>
    </div>
  );
};