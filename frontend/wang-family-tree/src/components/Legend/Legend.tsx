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
import { InfoIcon } from "@chakra-ui/icons";

const Legend = () => {
  const [showLegend, setShowLegend] = useState<boolean>(false);

  return showLegend ? (
    <Card>
      <CardHeader>
        <Stack direction="row">
          <Heading size="md">Wang Family Tree</Heading>
          <CloseButton onClick={() => setShowLegend(!showLegend)} />
        </Stack>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="1">
          <Box>
            <Heading size="sm">Red Color</Heading>
            <Text pt="2" fontSize="xs">
              Male
            </Text>
          </Box>
          <Box>
            <Heading size="sm">Green Color</Heading>
            <Text pt="2" fontSize="xs">
              Female
            </Text>
          </Box>
          <Box>
            <Heading size="sm">Star</Heading>
            <Text pt="2" fontSize="xs">
              Something
            </Text>
          </Box>
          <Box>
            <Heading size="sm">1, 2, 3...</Heading>
            <Text pt="2" fontSize="xs">
              Something
            </Text>
          </Box>
          <Box>
            <Heading size="sm">一, 二, 三...</Heading>
            <Text pt="2" fontSize="xs">
              Something
            </Text>
          </Box>
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
