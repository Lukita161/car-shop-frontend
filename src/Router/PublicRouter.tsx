import { Route, Routes } from "react-router-dom"
import { PublicLayout } from "../layout/Public/PublicLayout"
import { lazy } from "react"

const HomePage = lazy(()=> import('../pages/Public/HomePage'))
const CatalogPage = lazy(()=> import('../pages/Public/CatalogPage'))
const DetailCarPage = lazy(()=> import('../pages/Public/DetailCarPage'))
const BrandSearchCatalogPage = lazy(()=> import('../pages/Public/BrandSearchCatalogPage'))
const ContactPage = lazy(()=> import('../pages/Public/ContactPage'))

const PublicRouter = ()=> {
    return (
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
    )
}

export default PublicRouter