import { memo } from "react";
import { StarIcon } from "@chakra-ui/icons";
import { Handle, Position } from "reactflow";
import { useLanguageSelector } from "../../hooks/useLanguageSelector";

const WangNode = ({ data }: { data: any }) => {
  const { language } = useLanguageSelector();

  const nodeBody = data?.names?.map((name: any) => {
    return (
      <>
        <Handle
          type="target"
          position={Position.Top}
          style={{ background: "#555" }}
        />
        <p style={{ color: name?.isMale ? "red" : "green" }}>
          {name?.isWang && <StarIcon />}
          {name?.hasBio ? (
            <a href="#" className="underline hover:no-underline">
              {language === "English"
                ? name?.name?.english
                : name?.name?.chinese}
            </a>
          ) : language === "English" ? (
            name?.name?.english
          ) : (
            name?.name?.chinese
          )}
        </p>
        <Handle
          type="source"
          position={Position.Bottom}
          style={{ background: "#555" }}
        />
      </>
    );
  });

  return <div style={{ textAlign: "center" }}>{nodeBody}</div>;
};

export default memo(WangNode);
