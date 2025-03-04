import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { useEffect } from "react";
import { Link } from "react-router";
import styles from "../styles/Products.module.css"

export const ProductsPage = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Failed to load products.</p>;

  return (
    <> 
    <p className={style.title}>Explore Our Products</p>
     <div className={style.container}>
        {items.map((product) => (
        <div className={style.card}>
         <div key={product.id}>
           <img className={style.img} src={product.image} alt={product.title}/>
           <p className={style.productTitle}>{product.title}</p> 
           <p className={style.price}>{product.price} $</p>
          </div>
        </div>   
        ))}
    </div>
    <Link to="/">
     <button className={style.home}>
        Back to Home Page
    </button>  
    </Link>
    </>
  );
};