import { Education, Experience } from "@/contents/content";
export default function Educations() {
  return (
    <div className="relative mx-auto px-4 py-20 flex flex-col justify-center">
      <h1 className="text-3xl md:text-5xl font-semibold text-gray-700 dark:text-darkprimary uppercase my-5 relative">
        PROFESSIONAL
      </h1>
      <p className="font-caveat font-semibold text-2xl my-2">
        <span className="text-primary dark:text-darkprimary">My</span> Story
      </p>

      <div className="mt-8">
        <h2 className="text-3xl font-semibold text-gray-700 dark:text-darkprimary mb-4">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Education.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{edu.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{edu.department}</p>
              <p className="text-gray-600 dark:text-gray-300">{edu.college}</p>
              <p className="text-gray-600 dark:text-gray-300">{edu.place}</p>
              <p className="text-gray-600 dark:text-gray-300">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-semibold text-gray-700 dark:text-darkprimary mb-4">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Experience.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{exp.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
              <p className="text-gray-600 dark:text-gray-300">{exp.year}</p>
              <p className="text-gray-600 dark:text-gray-300">{exp.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
