import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";

export default function Footer(props) {
  const { onDeleteList, pendingToDo, completedToDo } = props;

  function handleClearClick() {
    onDeleteList();
  }

  return (
    <Box width="100%" padding="2rem">
      <Flex direction={"row"} alignItems={"center"} justifyContent="center">
        <Text width="8rem" color={"red"} fontSize="1rem">
          Pending: {pendingToDo}
        </Text>
        <Text width="8rem" fontSize="1rem">
          {" "}
          Completed: {completedToDo}
        </Text>
        <Button colorScheme="red" onClick={handleClearClick}>
          Clear All
        </Button>
      </Flex>
    </Box>
  );
}
