import { Route, Routes } from "react-router-dom";
import { AdminLayout } from "../layout/Private/AdminLayout";
import { OwnerGuard } from "../guard/OwnerGuard";
import { lazy } from "react";

const AdminHomePage = lazy(()=> import('../pages/Private/Admin/AdminHomePage'))
const CatalogPage = lazy(()=> import('../pages/Private/Admin/CatalogPage'))
const CreateNewCarPage = lazy(()=> import('../pages/Private/Admin/CreateNewCarPage'))
const EditCarPage = lazy(()=> import("../pages/Private/Admin/EditCarPage"))
const ProfileLayout = lazy(()=> import('../layout/Private/ProfileLayout'))
const ProfilePage = lazy(()=> import('../pages/Private/Admin/ProfilePage'))
const ManageAdminsPage = lazy(()=> import('../pages/Private/Admin/ManageAdminsPage'))

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
