import { Route, Routes } from "react-router";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";
import { Wishlist } from "./pages/Wishlist";

export function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="products" element={<Products />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>  
  )
}