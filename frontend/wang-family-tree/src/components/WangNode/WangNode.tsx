import { memo } from "react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { Handle, Position } from "reactflow";
import { useLanguageSelector } from "../../hooks/useLanguageSelector";
import "./WangNode.css";

const WangNode = ({ data }: { data: any }) => {
  const { language } = useLanguageSelector();

  const isWangMale: boolean = data?.names?.[0]?.isMale || false;
  const ageOrder = (
    <strong style={{ color: isWangMale ? "red" : "green" }}>
      {isWangMale ? data?.ageOrder : String.fromCharCode(data?.ageOrder + 64)}
    </strong>
  );

  const nodeNames = data?.names?.map((name: any, index: number) => {
    return (
      <div key={index}>
        <p style={{ color: name?.isMale ? "red" : "green" }}>
          {name?.isWang && <StarIcon />}
          {name?.hasBio ? (
            <Link to={`/${name?.id}`} className="underline hover:no-underline">
              {language === "English"
                ? name?.name?.english
                : name?.name?.chinese}
            </Link>
          ) : language === "English" ? (
            name?.name?.english
          ) : (
            name?.name?.chinese
          )}
        </p>
      </div>
    );
  });

  return (
    <div>
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: "#555" }}
      />
      {data?.ageOrder && ageOrder}
      {nodeNames}
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: "#555" }}
      />
      <Handle
        type="target"
        position={Position.Bottom}
        style={{ background: "#555" }}
      />
    </div>
  );
};

export default memo(WangNode);
