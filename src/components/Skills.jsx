import { BrainCircuit } from "lucide-react";

function Skills() {
  return (
    <div className="flext flex-col px-9 py-10 border-b-2">
      <h2 className="text-2xl font-semibold mb-6 flex gap-3 items-center">
        Skills <BrainCircuit />
      </h2>
      <div className="flex flex-wrap gap-2">
        <span className="py-1 px-7 rounded-full bg-[#292929] text-white">
          Html
        </span>
        <span className="py-1 px-7 rounded-full bg-[#292929] text-white">
          CSS
        </span>
        <span className="py-1 px-7 rounded-full bg-[#292929] text-white">
          JavaScript
        </span>
        <span className="py-1 px-7 rounded-full bg-[#292929] text-white">
          React Js
        </span>
        <span className="py-1 px-7 rounded-full bg-[#292929] text-white">
          Tailwind
        </span>
        <span className="py-1 px-7 rounded-full bg-[#292929] text-white">
          Git/GitHub
        </span>
      </div>
    </div>
  );
}

export default Skills;
