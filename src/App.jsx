import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { TopHeader } from "./components/TopHeader";
import { ChangeLang } from "./components/ChangeLang";
import { NotFoundPage } from './pages/NotFoundPage';
import ProductDetailsPage from "./pages/ProductDetailsPage";

export function App() {
  return (
    <div>
      <TopHeader />
      <ChangeLang />
      <Header />
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
      </Routes>
    </div>
  );
}