import { useState } from "react";

const App = () => {
  const [active, setActive] = useState("JavaScript");

  const languages = [
    { name: "JavaScript", color: "bg-yellow-400" },
    { name: "Python", color: "bg-blue-400" },
    { name: "Java", color: "bg-red-500" },
    { name: "C++", color: "bg-green-500" },
    { name: "Ruby", color: "bg-pink-400" },
    { name: "Go", color: "bg-blue-300" },
    { name: "Swift", color: "bg-orange-400" },
    { name: "Kotlin", color: "bg-purple-500" },
    { name: "PHP", color: "bg-indigo-400" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Programming Languages
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {languages.map((lang) => (
          <div
            key={lang.name}
            onClick={() => setActive(lang.name)}
            className={`cursor-pointer p-6 rounded-lg shadow-md text-white font-medium text-center ${
              active === lang.name ? `${lang.color} scale-105` : "bg-gray-200"
            } transform transition-all duration-300 ease-in-out`}
          >
            {lang.name}
          </div>
        ))}
      </div>
      <div className="mt-8">
        <p className="text-lg">
          Selected Language:{" "}
          <span className="font-bold text-blue-600">{active}</span>
        </p>
      </div>
    </div>
  );
};

export default App;
