import { Route, Routes } from "react-router";
import { HomePage } from "../pages/HomePage";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { ProductsPage } from "../pages/ProductsPage";
import { TopHeader } from "../components/TopHeader";
import { ChangeLang } from "../components/ChangeLang";

export function App() {
  return (
    <div>
      <TopHeader />
      <ChangeLang />
      <Header />
      <Routes>
        <Route path="/products" element={<ProductsPage />}/>
        <Route path="/" element={<HomePage />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </div>
    
  );
}