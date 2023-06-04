import { memo, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardBody,
  CloseButton,
  Heading,
  IconButton,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { InfoIcon, StarIcon } from "@chakra-ui/icons";
import { toPng } from "html-to-image";
import { useLanguageSelector } from "../../hooks/useLanguageSelector";

const Legend = () => {
  const [showLegend, setShowLegend] = useState<boolean>(false);
  const { textLang } = useLanguageSelector("legend");

  const downloadImage = async () => {
    const reactFlow: HTMLElement = document.querySelector(".react-flow")!;
    const reactPicture = await toPng(reactFlow, {
      backgroundColor: "#fff",
    });
    const a = document.createElement("a");

    a.setAttribute("download", "Wang-Family-Tree.png");
    a.setAttribute("href", reactPicture);
    a.click();

    a.remove();
  };

  return showLegend ? (
    <Card>
      <CardHeader>
        <Stack direction="row">
          <Heading size="md" className="pr-20">
            {textLang?.legendTitle}
          </Heading>
          <CloseButton onClick={() => setShowLegend(!showLegend)} />
        </Stack>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="1">
          {textLang?.legendItems?.map((item: Array<string>) => {
            return (
              <Box>
                <Heading size="sm">
                  {item?.[0] === "Star" ? <StarIcon /> : item?.[0]}
                </Heading>
                <Text pt="2" fontSize="xs">
                  {item?.[1]}
                </Text>
              </Box>
            );
          })}
          <Button onClick={downloadImage}>{textLang?.downloadText}</Button>
        </Stack>
      </CardBody>
    </Card>
  ) : (
    <IconButton
      aria-label="legend-toggle"
      icon={<InfoIcon />}
      onClick={() => setShowLegend(!showLegend)}
    />
  );
};

export default memo(Legend);
