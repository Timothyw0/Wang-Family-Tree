import { lazy, memo, useEffect, useMemo, useState, Suspense } from "react";
import ReactFlow, { Background } from "reactflow";
import WangNode from "../../components/WangNode";
import treeJSON from "../../assets/data/familyTree.json";
import "reactflow/dist/style.css";
import styles from "./Home.module.css";

const Legend = lazy(() => import("../../components/Legend"));
const Navbar = lazy(() => import("../../components/Navbar"));

const Home = () => {
  const [treeData, setTreeData] = useState<any>(undefined);
  const nodeTypes = useMemo(() => ({ wangNode: WangNode }), []);

  useEffect(() => {
    // apiService.getTree().then(({ data }) => {
    // setTreeData(data);
    // });
    setTreeData(treeJSON);
  }, []);

  return (
    <Suspense fallback="Loading...">
      <Navbar />
      <div className={styles.flowGraph}>
        <ReactFlow
          nodes={treeData?.nodes?.map((elem: any) => ({
            ...elem,
            style: {
              border: "1px solid #777",
              padding: 10,
              borderRadius: "5px",
              width: "150px",
            },
          }))}
          edges={treeData?.edges}
          nodeTypes={nodeTypes}
          fitView
        >
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
