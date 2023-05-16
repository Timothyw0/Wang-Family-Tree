import { lazy, memo, useEffect, useState, Suspense } from "react";
import ReactFlow, { Controls, Background } from "reactflow";
import apiService from "../../interfaces/axiosService";
import "reactflow/dist/style.css";

const Navbar = lazy(() => import("../../components/Navbar"));

const Home = () => {
  const [treeData, setTreeData] = useState<any>(undefined);

  useEffect(() => {
    apiService.getTree().then(({ data }) => {
      setTreeData(data);
    });
  }, []);

  return (
    <Suspense fallback="Loading...">
      <Navbar />
      <div style={{ height: "50vh" }}>
        <ReactFlow nodes={treeData?.nodes} edges={treeData?.edges} fitView>
          <Controls />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>
    </Suspense>
  );
};

export default memo(Home);
