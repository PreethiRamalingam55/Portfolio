import { useState } from "react";

export default function Educations() {
  const [openEducationIndex, setOpenEducationIndex] = useState(-1);
  const [openExperienceIndex, setOpenExperienceIndex] = useState(-1);

  const toggleEducationAccordion = (index:any) => {
    setOpenEducationIndex(openEducationIndex === index ? -1 : index);
  };

  const toggleExperienceAccordion = (index:any) => {
    setOpenExperienceIndex(openExperienceIndex === index ? -1 : index);
  };


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
    <div className="relative md:h-screen container mx-auto px-4 py-8 flex flex-col justify-center">
      <span className="font-caveat absolute left-auto bottom-0 z-[-1] w-full text-[250px] md:text-[350px] opacity-5 font-semibold leading">
        History
      </span>
      <h5 className='text-center font-bold text-3xl my-2'>PROFESSIONAL </h5>
      <p className='font-caveat font-semibold text-2xl text-center'><span className='text-primary dark:text-darkprimary'>My</span> Story</p>
      <div className="grid md:grid-cols-12">
        <div className="md:col-span-5 gap-3">
          <h6 className="text-2xl text-center p-4 border-b-2 border-[#a3a5a7] ">Educations</h6>
          {Education?.map((edu, index) => (
            <div key={index} className="mb-4">
              <h5
                onClick={() => toggleEducationAccordion(index)}
                className="cursor-pointer flex items-center justify-between text-xl my-2 p-4 border-b-[1px] border-primary dark:border-darkprimary"
              >
                {edu.title}
                <div className=" border-2 border-[#a3a5a7] rounded-full w-10 h-10 flex justify-center items-center">
                  <span className="font-semibold text-xl ">{openEducationIndex === index ? "-" : "+"}</span>
                </div>
              </h5>
              {openEducationIndex === index && (
                <div className="accordion-transition">
                  <div className="flex justify-between font-semibold ">
                    <p className="text-lg">{edu.department}</p>
                    <p className="text-lg">{edu.year}</p>
                  </div>
                  <p>{edu.place}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="col-span-1"></div>
        <div className="md:col-span-5">
          <h6 className="text-2xl text-center p-4 border-b-2 border-[#a3a5a7] ">Experience</h6>
          {Experience?.map((epx, index) => (
            <div key={index} className="mb-4">
              <h5
                onClick={() => toggleExperienceAccordion(index)}
                className="cursor-pointer flex items-center justify-between text-xl my-2 p-4 border-b-[1px] border-primary dark:border-darkprimary"
              >
                {epx.title}
                <div className=" border-2 border-[#a3a5a7] rounded-full w-10 h-10 flex justify-center items-center">
                  <span className="font-semibold text-xl ">{openExperienceIndex === index ? "-" : "+"}</span>
                </div>
              </h5>
              {openExperienceIndex === index && (
                <div className="accordion-transition">
                  <div className="flex justify-between font-semibold">
                    <p className="text-lg">{epx.company}</p>
                    <p className="text-lg">{epx.year}</p>
                  </div>
                  <p>{epx.des}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
