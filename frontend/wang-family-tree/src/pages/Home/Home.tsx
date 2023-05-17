import { lazy, memo, useEffect, useState, Suspense } from "react";
import ReactFlow, { Background } from "reactflow";
import apiService from "../../interfaces/axiosService";
import "reactflow/dist/style.css";
import styles from "./Home.module.css";

const Legend = lazy(() => import("../../components/Legend"));
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
      <div className={styles.flowGraph}>
        <ReactFlow nodes={treeData?.nodes} edges={treeData?.edges} fitView>
          <Background color="#aaa" gap={16} />
        </ReactFlow>
        <div className={styles.legend}>
          <Legend />
        </div>
      </div>
    </Suspense>
  );
};

export default memo(Home);
