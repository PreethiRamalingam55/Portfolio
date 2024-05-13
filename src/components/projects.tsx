import React, { useState } from 'react'

export default function Skill() {

  const projects = [
    {
      title: 'Project 1',
      image:'',
    },
    {
      title: 'Project 2',
      image:'',
    }
  ];

  return (
    <div className='relative container py-8 flex flex-col justify-center'>
      {/* <span className='font-caveat absolute left-auto bottom-0 z-[-1] w-100 text-[250px] md:text-[350px] opacity-5 font-semibold leading'>skills</span> */}
      <h1 className="text-5xl font-semibold text-gray-700 dark:text-darkprimary uppercase my-5 relative">
      Projects
      </h1>
      <p className="font-caveat font-semibold text-2xl my-2">
        <span className="text-primary dark:text-darkprimary">My</span> Projects
      </p>

    </div>
  )
}
