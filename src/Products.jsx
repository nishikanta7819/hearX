import React, { useEffect, useState } from "react";
import Card from "./components/card/Card";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/products");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) {
    return (
      <p
        style={{ display: "flex", justifyContent: "center", fontSize: "25px" }}
      >
        🔃Loading products...
      </p>
    );
  }

  return (
    <div className="all-products">
      <p style={{ marginLeft: "40px", fontSize: "30px",fontWeight:"bold" }}>All Products</p>
      <p style={{ marginLeft: "40px",marginTop:"10px", fontSize: "12px" }}>showing all {products.length} products</p>
      <div
        style={{
          display: "flex",
          gap: "25px",
          flexWrap: "wrap",
          margin: "40px",
        }}
      >
        {products.length === 0 ? (
          <p
            style={{
              margin: "auto",
              fontSize: "25px",
              justifyContent: "center",
            }}
          >
            ❌No products found
          </p>
        ) : (
          products.map((product) => (
            <Card key={product._id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
