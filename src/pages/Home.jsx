import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

export default function Home() {
  return (
    <Flex
      height="30vh"
      width={"100%"}
      direction="column"
      justifyContent={"center"}
      padding="0vh 0vh 0vh 37%"
    >
      <Heading fontSize="10vh" color="black" fontWeight={"bold"}>
        Welcome!
      </Heading>

      <Heading fontSize="8vh" color="#C95D40">
        To Task Lists
      </Heading>
    </Flex>
  );
}
