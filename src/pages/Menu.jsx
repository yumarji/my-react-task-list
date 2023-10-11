import { Suspense, lazy } from "react";
import { Link, Route, Routes } from "react-router-dom";
import bannerimage from "../assets/Images/banner.png";
import {
  Box,
  Flex,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

const Home = lazy(() => import("./Home"));
const SobreNosotros = lazy(() => import("./SobreNosotros"));
const Tareas = lazy(() => import("./Tareas"));

export default function Menu() {
  return (
    <Box>
      <Box
        height="28vh"
        bg="grey"
        bgImage={bannerimage}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
      >
        <Flex
          direction={"column"}
          alignItems={"flex-star"}
          justifyContent={"center"}
          h={"100%"}
          padding="10px"
        >
          <Heading
            color="white"
            textTransform="uppercase"
            letterSpacing="5px"
            padding="4vh"
            size="2xl"
            alignItems={"center"}
          >
            Task List
          </Heading>
        </Flex>
      </Box>

      <Flex
        height="5vh"
        padding="4vh"
        w={"100%"}
        fontSize="2.5vh"
        color="#C95D40"
      >
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/SobreNosotros">About us</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/Tareas">Task List</Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>

      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Suspense fallback={<h5>Loading...</h5>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            exact
            path="/SobreNosotros"
            element={
              <Suspense fallback={<h5>Loading...</h5>}>
                <SobreNosotros />
              </Suspense>
            }
          />
          <Route
            exact
            path="/Tareas"
            element={
              <Suspense fallback={<h5>Loading...</h5>}>
                <Tareas />
              </Suspense>
            }
          />
          <Route path="*" element={"Error 404 - Page Not Found"} />
        </Routes>
      </div>
    </Box>
  );
}
