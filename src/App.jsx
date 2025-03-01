import { Route, Routes } from "react-router";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { ProductsPage } from "./pages/ProductsPage";

export function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/products" element={<ProductsPage />}/>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>  
  )
}