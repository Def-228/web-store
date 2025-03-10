import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { TopHeader } from "./components/TopHeader";
import { ChangeLang } from "./components/ChangeLang";
import { Header } from "./components/Header";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { NotFound } from "./pages/NotFoundPage";
import { Account } from "./pages/Account";

export function App() {
  return (
    <div>
      <TopHeader />
      <ChangeLang />
      <Header />
      <Routes>
        <Route path="/products" element={<ProductsPage />}/>
        <Route path="/" element={<HomePage />}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/sign-up" element={<SignUp /> } />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
    
  );
}