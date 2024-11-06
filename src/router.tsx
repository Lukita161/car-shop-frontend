import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
//import { LoginPage } from "./pages/Login/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lazy, Suspense } from "react";
import { HomePage } from "./pages/Public/HomePage";
import { PublicLayout } from "./layout/Public/PublicLayout";
import { CatalogPage } from "./pages/Public/CatalogPage";
import { DetailCarPage } from "./pages/Public/DetailCarPage";
import { BrandSearchCatalogPage } from "./pages/Public/BrandSearchCatalogPage";
import { ContactPage } from "./pages/Public/ContactPage";

const LoginPage = lazy(() => import("./pages/Private/Login/LoginPage"));
const PrivateRouter = lazy(() => import("./Router/PrivateRouter"));
const PrivateGuard = lazy(() => import("./guard/PrivateGuard"));

export const Router = () => {
  return (
    <BrowserRouter>

      <Routes >
        <Route  element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route
            path="/:carName/:carBrand/view/car/:carId"
            element={<DetailCarPage />}
            />
          <Route
            path="/catalog/filter/brand/:carBrand"
            element={<BrandSearchCatalogPage />}
            />
            <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>

      <Routes key={"Login"}>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Suspense fallback={<p>Cargando...</p>}>
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
