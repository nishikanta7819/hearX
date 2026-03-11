import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import "../product-page.css";

const Neckbands = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((item) => item.category === "neckband");
        setProducts(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="products-page">
        <div className="products-page-title">
          <p>neckbands</p>
          <p style={{ marginTop: "10px", fontSize: "12px" }}>
            showing all {products.length} neckbands
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "25px",
          flexWrap: "wrap",
          margin: "40px",
        }}
      >
        {products.length === 0 ? (
          <p>No neckbands found</p>
        ) : (
          products.map((product) => (
            <Card key={product._id} product={product} />
          ))
        )}
      </div>
    </>
  );
};

export default Neckbands;
