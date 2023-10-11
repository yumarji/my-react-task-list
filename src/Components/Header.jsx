import { Box, Flex, Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        padding={"0.5rem"}
      >
        <Heading fontSize="1.5rem">TASK LIST</Heading>
      </Flex>
    </Box>
  );
}
