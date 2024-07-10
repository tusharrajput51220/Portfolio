import React from 'react';

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <div className='relative flex justify-center items-center'>
      {/* Ping animation with border color */}
      <div className='absolute border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
      
      {/* Static circles with border color */}
      <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52' />
      <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52' />
      
      {/* Larger circle with pulse animation and border color */}
      <div className='absolute border border-[#F7AB0A] opacity-20 rounded-full h-[650px] w-[650px] mt-52 animate-pulse' />
      
      {/* Largest static circle with border color */}
      <div className='absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52' />
    </div>
  );
}

export default BackgroundCircles;
