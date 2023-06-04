import { lazy, memo, useEffect, useMemo, useState, Suspense } from "react";
import ReactFlow, { Background, useStore } from "reactflow";
import { useZoomSelector } from "../../hooks/useZoomSelector";
import WangNode from "../../components/WangNode";
import treeJSON from "../../assets/data/familyTree.json";
import "reactflow/dist/style.css";
import styles from "./Home.module.css";

const Legend = lazy(() => import("../../components/Legend"));
const Navbar = lazy(() => import("../../components/Navbar"));

interface EdgeObject {
  source: string;
  target: string;
}

interface NameObject {
  name: {
    chinese: string;
    english: string;
  };
  id: number;
  isWang?: boolean;
  isMale?: boolean;
  hasBio?: boolean;
}

interface NodeObject {
  id: string;
  data: {
    names: Array<NameObject>;
    ageOrder?: number;
  };
  position: {
    x: number;
    y: number;
  };
  style?: object;
}

interface TreeObject {
  nodes: Array<NodeObject>;
  edges: Array<EdgeObject>;
}

const Home = () => {
  const [treeData, setTreeData] = useState<TreeObject>();
  const nodeTypes = useMemo(() => ({ wangNode: WangNode }), []);
  const { zoom, setNewZoom } = useZoomSelector();

  const zoomState = useStore((state) => state?.transform);

  const handleMove = () => {
    setNewZoom(zoomState);
  };

  const documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
  };

  useEffect(() => {
    // apiService.getTree().then(({ data }) => {
    // setTreeData(data);
    // });
    window.addEventListener("resize", documentHeight);
    documentHeight();
    setTreeData(treeJSON);
    return () => window.removeEventListener("resize", documentHeight);
  }, []);

  return (
    <Suspense fallback="Loading...">
      <Navbar />
      <div className={styles.flowGraph}>
        <ReactFlow
          nodes={useMemo(
            () =>
              treeData?.nodes?.map((elem: NodeObject) => ({
                ...elem,
                type: "wangNode",
                style: {
                  border: "1px solid #777",
                  padding: 10,
                  borderRadius: "5px",
                  background: "#fff",
                  textAlign: "center",
                  width: "175px",
                  ...elem?.style,
                },
              })),
            [treeData]
          )}
          edges={useMemo(
            () =>
              treeData?.edges?.map((elem: EdgeObject) => ({
                ...elem,
                id: `e-${elem?.source}-${elem?.target}`,
                type: "step",
              })),
            [treeData]
          )}
          nodeTypes={nodeTypes}
          nodesConnectable={false}
          minZoom={0}
          onMoveEnd={handleMove}
          defaultViewport={{
            x: zoom[0] || 0,
            y: zoom[1] || 0,
            zoom: zoom[2] || 1,
          }}
          fitView={!zoom?.length}
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
