import { BrainCircuit } from "lucide-react";

function Skills() {
  return (
    <div className="flext flex-col px-9 py-10 border-b-2 md:px-56 lg:px-72">
      <h2 className="text-2xl font-semibold mb-6 flex gap-3 items-center text-primary">
        Skills <BrainCircuit />
      </h2>
      <div className="flex flex-wrap gap-2 text-primary">
        <span className="py-1 px-7 rounded-full ">
          Html
        </span>
        <span className="py-1 px-7 rounded-full ">
          CSS
        </span>
        <span className="py-1 px-7 rounded-full ">
          JavaScript
        </span>
        <span className="py-1 px-7 rounded-full ">
          React Js
        </span>
        <span className="py-1 px-7 rounded-full">
          Tailwind
        </span>
        <span className="py-1 px-7 rounded-full">
          Git/GitHub
        </span>
      </div>
    </div>
  );
}

export default Skills;
