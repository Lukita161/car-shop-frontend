import { Route, Routes } from "react-router-dom";
import { AdminLayout } from "../layout/AdminLayout";
import { OwnerGuard } from "../guard/OwnerGuard";
import { lazy } from "react";

const AdminHomePage = lazy(()=> import('../pages/Admin/AdminHomePage'))
const CatalogPage = lazy(()=> import('../pages/Admin/CatalogPage'))
const CreateNewCarPage = lazy(()=> import('../pages/Admin/CreateNewCarPage'))
const EditCarPage = lazy(()=> import("../pages/Admin/EditCarPage"))
const ProfileLayout = lazy(()=> import('../layout/ProfileLayout'))
const ProfilePage = lazy(()=> import('../pages/Admin/ProfilePage'))
const ManageAdminsPage = lazy(()=> import('../pages/Admin/ManageAdminsPage'))

const PrivateRouter = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/admin/catalog" element={<CatalogPage />} />
        <Route path="/admin/createCar" element={<CreateNewCarPage />} />
        <Route path="/admin/editCar/:id" element={<EditCarPage />} />
        <Route element={<ProfileLayout />}>
          <Route path="/admin/profile" element={<ProfilePage />} />
          <Route element={<OwnerGuard />}>
          <Route path="/admin/manage-admins" element={<ManageAdminsPage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default PrivateRouter
