import { useState, useEffect } from "react";

const ProductDetailsPage = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    useEffect(() => {
        if (products.length > 0) {
            setSelectedProduct(products[0]);
        }
    }, [products]);

    return (
        <div style={{ padding: "20px", marginTop: "150px" }}>
            {selectedProduct && (
                <div style={{ border: "1px solid #ddd", padding: "15px" }}>
                    <img src={selectedProduct.image} alt={selectedProduct.title} style={{ width: "280px", display: "block", margin: "0 auto" }} />
                    <h2>{selectedProduct.title}</h2>
                    <p>${selectedProduct.price}</p>
                    <p>{selectedProduct.description}</p>
                </div>
            )}
            <div style={{ marginTop: "20px" }}>
                <h3>Similar products</h3>
                <div style={{ display: "flex", overflowX: "auto" }}>
                    {products.map((product) => (
                        <div
                            key={product.id}
                            style={{ border: "1px solid #ccc", padding: "8px", margin: "0 10px", cursor: "pointer", textAlign: "center", minWidth: "150px" }}
                            onClick={() => setSelectedProduct(product)}
                        >
                            <img src={product.image} alt={product.title} style={{ width: "80px", marginBottom: "5px" }} />
                            <p style={{ fontSize: "0.9em" }}>{product.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;