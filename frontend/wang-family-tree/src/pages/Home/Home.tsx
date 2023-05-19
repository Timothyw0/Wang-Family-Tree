import { lazy, memo, useEffect, useMemo, useState, Suspense } from "react";
import ReactFlow, { Background, Panel } from "reactflow";
import { toPng } from "html-to-image";
import WangNode from "../../components/WangNode";
import treeJSON from "../../assets/data/familyTree.json";
import "reactflow/dist/style.css";
import styles from "./Home.module.css";
import { Button } from "@chakra-ui/react";

const Legend = lazy(() => import("../../components/Legend"));
const Navbar = lazy(() => import("../../components/Navbar"));

const Home = () => {
  const [treeData, setTreeData] = useState<any>(undefined);
  const nodeTypes = useMemo(() => ({ wangNode: WangNode }), []);

  const downloadImage = async () => {
    const reactFlow: HTMLElement = document.querySelector(".react-flow")!;
    const reactPicture = await toPng(reactFlow);
    const a = document.createElement("a");

    a.setAttribute("download", "Wang-Family-Tree.png");
    a.setAttribute("href", reactPicture);
    a.click();

    a.remove();
  };

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
          nodes={useMemo(
            () =>
              treeData?.nodes?.map((elem: any) => ({
                ...elem,
                style: {
                  border: "1px solid #777",
                  padding: 10,
                  borderRadius: "5px",
                  width: "150px",
                },
              })),
            [treeData]
          )}
          edges={treeData?.edges}
          nodeTypes={nodeTypes}
          nodesConnectable={false}
          fitView
        >
          <Background color="#aaa" gap={16} />
          <Panel position="bottom-right">
            <Button onClick={downloadImage}>Download Image</Button>
          </Panel>
        </ReactFlow>
        <div className={styles.legend}>
          <Legend />
        </div>
      </div>
    </Suspense>
  );
};

export default memo(Home);
