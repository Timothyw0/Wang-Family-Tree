import { memo, useState } from "react";
import {
  Box,
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
import { useLanguageSelector } from "../../hooks/useLanguageSelector";

const Legend = () => {
  const [showLegend, setShowLegend] = useState<boolean>(false);
  const { textLang } = useLanguageSelector("legend");

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
