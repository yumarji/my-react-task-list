import React from "react";
import htmllogo from "../assets/Images/Html.png";
import Csslogo from "../assets/Images/CSS.png";
import Jslogo from "../assets/Images/JS.png";
import Reactlogo from "../assets/Images/React.png";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Flex,
  Image,
  Stack,
} from "@chakra-ui/react";

export default function SobreNosotros() {
  return (
    <Flex fontSize="medium" alignItems={"center"} justifyContent={"center"}>
      <Card width="80%" padding="0vh 1.5vh 0vh 1.5vh">
        <CardHeader fontSize="5vh" color="#C95D40" fontWeight="bold">
          About us
        </CardHeader>
        <CardBody>
          <Text>
            Esta aplicación de lista de tareas fue desarrollada por Yulibery
            Martínez, estudiante de ADA School-Protalento.
          </Text>
          <Text>
            La aplicación te permitirá gestionar tu tiempo ingresando las tareas
            a realizar, podrás actualizarlas, cambiar su estado a completado,
            borrarlas y también editarlas, en caso de que desees hacer algún
            cambio en el nombre de la tarea o descripción. Así mismo, tendrás el
            control de las tareas pendientes para que las puedas administrar
            correctamente.
          </Text>
          <Stack direction="row" justifyContent="space-around" padding="5vh">
            <Text fontWeight="black">Tecnologías usadas en el aplicativo:</Text>
            <Image boxSize="10vh" src={htmllogo} />
            <Image boxSize="10vh" src={Csslogo} />
            <Image boxSize="10vh" src={Jslogo} />
            <Image boxSize="10vh" src={Reactlogo} />
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  );
}
