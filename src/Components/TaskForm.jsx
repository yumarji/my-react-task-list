import React from "react";
import { useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  Button,
  Stack,
  Flex,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

export default function TaskForm(props) {
  const { addTask } = props;

  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const [formValidation, setFormValidation] = useState({
    taskName: undefined,
  });

  const color = useColorModeValue("black", "White");
  const bg = useColorModeValue("gray.200", "gray.500");

  const onSubmitForm = () => {
    addTask(taskName, taskDescription);
    setTaskName("");
    setTaskDescription("");
    setFormValidation({
      ...formValidation,
      taskName: "Task must be at least 3 characters",
    });
  };

  const handleTaskNameChange = (e) => {
    const value = e.target.value;

    //Validation
    if (value.length < 3) {
      setFormValidation({
        ...formValidation,
        taskName: "Task must be at least 3 characters",
      });
    } else {
      setFormValidation({ ...formValidation, taskName: "" });
    }
    setTaskName(value);
  };

  const handleTaskDescriptionChange = (e) => {
    const value2 = e.target.value;

    setTaskDescription(value2);
  };

  let isFormValid = Object.keys(formValidation).every(
    (key) => formValidation[key] === ""
  );
  console.log("El formato es valido", isFormValid);

  return (
    <Box padding="0rem 0rem 2rem 0rem">
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack
          p="1rem 2rem 0rem 2rem"
          borderRadius={"6px"}
          color={"grey"}
          w={["100%"]}
        >
          <FormControl>
            <FormLabel color="#C95D40" letterSpacing={"1.3px"}>
              Task
            </FormLabel>
            <Input
              type="text"
              value={taskName}
              onChange={handleTaskNameChange}
              color={color}
              bg={bg}
            />
          </FormControl>
          {formValidation.taskName && (
            <div className="error">{formValidation.taskName}</div>
          )}

          <FormControl>
            <FormLabel color="#C95D40" letterSpacing={"1.3px"}>
              Description
            </FormLabel>
            <Input
              type="text"
              placeholder="Description (is not required)"
              value={taskDescription}
              onChange={handleTaskDescriptionChange}
              color={color}
              bg={bg}
            />
          </FormControl>

          <Stack spacing={4} align="center">
            <Button
              color="black"
              colorScheme="orange"
              variant="solid"
              isDisabled={!isFormValid}
              onClick={onSubmitForm}
            >
              Add
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
}
