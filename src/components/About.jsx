import { LaptopMinimalCheck } from "lucide-react";

function About() {
  return (
    <div className="flext flex-col px-9 pb-5 md:px-56 lg:px-72">
      <h2 className="text-2xl tracking-tight font-medium mb-3 flex gap-3 items-center text-primary">
        About <LaptopMinimalCheck />
      </h2>
      <p className="text-primary">
        I am a frontend developer, and currently learning full stack
        development. I like tech a lot. I really enjoy learning new technology.
      </p>
    </div>
  );
}

export default About;
