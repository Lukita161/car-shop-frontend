import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
//import { LoginPage } from "./pages/Login/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lazy, Suspense } from "react";
import { Loader } from "./components/Public/UI/Loader/Loader";

const PublicRouter = lazy(()=> import('./Router/PublicRouter'))
const LoginPage = lazy(() => import("./pages/Private/Login/LoginPage"));
const PrivateRouter = lazy(() => import("./Router/PrivateRouter"));
const PrivateGuard = lazy(() => import("./guard/PrivateGuard"));

export const Router = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <PublicRouter />
    </Suspense>

      <Routes key={"Login"}>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Suspense fallback={<Loader />}>
        <Routes key={"adminRoutes"}>
          <Route element={<PrivateGuard />}>
            <Route path="/private/*" element={<PrivateRouter />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer position="bottom-right" pauseOnHover={false} />
    </BrowserRouter>
  );
};
