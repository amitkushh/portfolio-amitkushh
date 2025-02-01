import { Folder } from "lucide-react";
import Cards from "../components/SmallProjects/Cards";

function Projects() {
  return (
    <div className="flext flex-col px-9 py-5">
      <h2 className="text-2xl font-semibold mb-10 flex gap-3 items-center ">
        Projects <Folder />
      </h2>
      <div>
        <Cards />
      </div>
    </div>
  );
}

export default Projects;
