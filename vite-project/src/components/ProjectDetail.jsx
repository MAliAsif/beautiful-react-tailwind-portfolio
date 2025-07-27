import { useParams } from "react-router-dom";
import ProjectDetail1 from "./ProjectDetail1";
import ProjectDetail2 from "./ProjectDetail2";
import ProjectDetail3 from "./ProjectDetail3";
import ProjectDetail4 from "./ProjectDetail4";
import ProjectDetail5 from "./ProjectDetail5";


export default function ProjectDetail() {
  const { id } = useParams();

  const detailComponents = {
    1: <ProjectDetail1 />,
    2: <ProjectDetail2 />,
    3: <ProjectDetail3 />,
    4: <ProjectDetail4 />,
    5: <ProjectDetail5 />,

  };

  if (!detailComponents[id]) {
    return (
      <div className="p-10 text-center text-red-500 font-semibold">
        Project Not Found
      </div>
    );
  }

  return (
    <div >
      {detailComponents[id]}

    </div>
  );
}
