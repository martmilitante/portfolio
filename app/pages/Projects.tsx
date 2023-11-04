import { projectArr } from "../staticData/data";
import Card from "../components/Card";

const Projects = () => {
  return (
    <div id="projects" className="pt-40">
      <h1 className="text-center text-xl font-bold pb-24">Projects</h1>
      <div className="lg:columns-4 md:columns-2 sm:columns-1 gap-12 px-20">
        {projectArr.map((proj, idx) => {
          return <Card heading={proj.heading} body={proj.body} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
