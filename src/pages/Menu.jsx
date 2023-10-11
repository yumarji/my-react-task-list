import { Suspense, lazy } from "react";
import { Link, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const SobreNosotros = lazy(() => import("./SobreNosotros"));
const Tareas = lazy(() => import("./Tareas"));

export default function Menu() {
  return (
    <div>
      <div className="container-menu">
        <h1 className="titleMenu">LISTA DE TAREAS</h1>
        <nav className="container-nav">
          <Link to="/">Home</Link>
          <Link to="/SobreNosotros">Sobre Nosotros</Link>
          <Link to="/Tareas">Lista de Tareas</Link>
        </nav>
      </div>
      <div className="error-404">
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
    </div>
  );
}
