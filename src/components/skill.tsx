import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faVuejs, faNodeJs, faPython, faDatabase } from '@fortawesome/free-brands-svg-icons';

export default function Skills() {
  return (
    <div className="h-screen container m-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillCategory title="Frontend Development" color="primary">
          <Skill icon={faHtml5} name="HTML5" level="90" />
          <Skill icon={faCss3} name="CSS3" level="85" />
          <Skill icon={faJs} name="JavaScript (ES6+)" level="80" />
          <Skill icon={faReact} name="React.js" level="85" />
          <Skill icon={faVuejs} name="Next.js" level="80" />
        </SkillCategory>
        <SkillCategory title="Backend Development" color="primary">
          <Skill icon={faNodeJs} name="Node.js" level="75" />
          <Skill icon={faPython} name="Python" level="70" />
          <Skill icon={faPython} name="Laravel" level="70" />
        </SkillCategory>
        <SkillCategory title="Database" color="primary">
          <Skill icon={faDatabase} name="MySQL" level="80" />
          <Skill icon={faDatabase} name="MongoDB" level="75" />
          <Skill icon={faDatabase} name="PostgreSQL" level="70" />
        </SkillCategory>
      </div>
    </div>
  );
}

const SkillCategory = ({ title, color, children }) => (
  <div className="bg-white shadow-md p-6 rounded-lg">
    <h2 className={`text-2xl font-semibold mb-4 text-center text-${color}`}>{title}</h2>
    <ul>
      {children}
    </ul>
  </div>
);

const Skill = ({ icon, name, level }) => (
  <li className="flex items-center justify-between mb-4">
    <div className="flex items-center">
      <FontAwesomeIcon icon={icon} className={`w-6 h-6 mr-4 text-${name.toLowerCase()} rounded-full`} />
      <span className="text-lg dark:text-black">{name}</span>
    </div>
    <div className="flex items-center">
      <div className="w-32 bg-gray-300 rounded-full overflow-hidden">
        <div className={`bg-${name.toLowerCase()} text-xs leading-none py-1 text-center text-white bg-primary dark:bg-darkprimary rounded-full`} style={{ width: `${level}%` }}>{level}%</div>
      </div>
    </div>
  </li>
);
