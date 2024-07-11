import React from 'react';

type Props = {};

function BackgroundCircles({ }: Props) {
  return (
    <div className='relative flex justify-center items-center'>
      {/* Ping animation with border color */}
      <div className='absolute border-[#333333] rounded-full xl:h-[200px] xl:w-[200px] mt-52 animate-ping' />

      {/* Static circles with border color */}
      <div className='absolute border border-[#333333] h-[400px] w-[400px]  rounded-full h-[200px] w-[200px] mt-52' />
      <div className='absolute border border-[#333333] h-[600px] w-[600px]  rounded-full h-[200px] w-[200px] mt-52' />

      {/* Larger circle with pulse animation and border color */}
      <div className='absolute border border-[#F7AB0A] opacity-20 rounded-full h-[180px] w-[180px] xl:h-[650px] xl:w-[650px] 
      xl:mt-52 mt-48 animate-pulse' />

      {/* Largest static circle with border color */}
      <div className='absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52' />
    </div>
  );
}

export default BackgroundCircles;
