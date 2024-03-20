import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { TiSocialLinkedinCircular } from 'react-icons/ti'; // Importing from the correct package
import { TbBrandNextjs } from 'react-icons/tb';

interface SkillProps {
  icon: React.ComponentType<any>; // Adjust the type of icon
  name: string;
  level: string;
}

interface SkillCategoryProps {
  title: string;
  color: string;
  children: React.ReactNode;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, color, children }) => (
  <div className="bg-white shadow-md p-6 rounded-lg">
    <h2 className={`text-2xl font-semibold mb-4 text-center text-${color}`}>{title}</h2>
    <ul>
      {children}
    </ul>
  </div>
);

const Skill: React.FC<SkillProps> = ({ icon: Icon, name, level }) => ( // Adjusted icon prop
  <li className="flex items-center justify-between mb-4">
    <div className="flex items-center">
      <Icon className={`w-6 h- mr-4 text-${name.toLowerCase()} rounded-full`} /> {/* Using the icon component directly */}
      <span className="text-lg dark:text-black">{name}</span>
    </div>
    <div className="flex items-center">
      <div className="w-32 bg-gray-300 rounded-full overflow-hidden">
        <div className={`bg-${name.toLowerCase()} text-xs leading-none py-1 text-center text-white bg-primary dark:bg-darkprimary rounded-full`} style={{ width: `${level}%` }}>{level}%</div>
      </div>
    </div>
  </li>
);

const Skills: React.FC = () => {
  return (
    <div className="container md:h-screen container m-auto py-8 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8 text-center">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillCategory title="Frontend Development" color="primary">
          <Skill icon={FaHtml5} name="HTML5" level="90" />
          <Skill icon={FaCss3} name="CSS3" level="85" />
          <Skill icon={FaJs} name="JavaScript (ES6+)" level="80" />
          <Skill icon={FaReact} name="React.js" level="85" />
          <Skill icon={TbBrandNextjs} name="Next.js" level="80" />
        </SkillCategory>
        <SkillCategory title="Backend Development" color="primary">
          <Skill icon={FaNodeJs} name="Node.js" level="75" />
          <Skill icon={FaPython} name="Python" level="70" />
          <Skill icon={FaPython} name="Laravel" level="70" />
        </SkillCategory>
        <SkillCategory title="Database" color="primary">
          <Skill icon={FaDatabase} name="MySQL" level="80" />
        </SkillCategory>
      </div>
    </div>
  );
};

export default Skills;
