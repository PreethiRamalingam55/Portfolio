import React from 'react'
import { FaAnglesRight } from "react-icons/fa6";
export default function Skill() {

  const skills = [
    {
      title: 'Development',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Node', 'Next']
    },
    {
      title: 'Special Skills',
      skills: ['Communication', 'Teamwork','Leadership','Flexibility']
    }
  ];
  
  return (
    <div className='relative md:h-screen container mx-auto px-4 py-8 flex flex-col justify-center items-center'>
      <span className='font-caveat absolute left-auto bottom-0 z-[-1] w-100 text-[250px] md:text-[350px] opacity-5 font-semibold leading'>skills</span>
      <h5 className='text-center font-bold text-3xl my-2'>PROFESSIONAL SKILLS</h5>
      <p className='font-caveat font-semibold text-2xl'><span className='text-primary dark:text-darkprimary'>My</span> Talent</p>
      <div className="flex flex-wrap items-center justify-center gap-10 my-5">
        {
          skills?.map((skillCategory, index) => (
            <div key={index} className="bg-white dark:bg-transparent shadow-lg rounded-lg p-10">
              <h5 className='text-2xl font-semibold my-5'>{skillCategory.title}</h5>
              <ul>
                {
                  skillCategory.skills.map((skill, i) => (
                    <li key={i} className='flex items-center gap-5 my-2'>
                      <FaAnglesRight style={{ fontSize: '0.8em' }}/>
                      {skill}
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>

    </div>
  )
}
