import { useState } from "react";

export default function Educations() {
 
  const Education = [
    {
      title: "Degree",
      department: "Electronics and Communication Engineering",
      college: "Adhiyamaan College of Engineering",
      place: "Hosur",
      year: "2018 - 2021",
    },
    {
      title: "HSC",
      department: "Computer Science",
      college: "Trinity Matriculation Higher Secondary School",
      place: "Krishnagiri",
      year: "2017 - 2018",
    },
    {
        title: "SSCL",
        department: "High School",
        college: "Trinity Matriculation Higher Secondary School",
        place: "Krishnagiri",
        year: "2014 - 2015",
      },
  ];

  const Experience = [
    {
        title:'FullStack Developer',
        company : 'Knewtontech',
        year : '2023 - Present',
        des: 'Worked as a FullStack Developer for 1 year, which included a 3-month internship. Also involved in exploring new roles within the company.',
    },
    {
      title: 'Intern FullStack Developer',
      company: 'TechbessHive',
      year: '2023',
      des: 'Completed an internship as a FullStack Developer in 2023.'
    }
  ]
  return (
    <div className="relative container mx-auto px-4 py-8 flex flex-col justify-center">
      {/* <span className="font-caveat absolute left-auto bottom-0 z-[-1] w-full text-[250px] md:text-[350px] opacity-5 font-semibold leading">
        History
      </span> */}
      <h1 className="text-5xl font-semibold text-gray-700 dark:text-darkprimary uppercase my-5 relative">
      PROFESSIONAL
      </h1>
      <p className="font-caveat font-semibold text-2xl my-2">
        <span className="text-primary dark:text-darkprimary">My</span> Story
      </p>
    </div>
  );
}
