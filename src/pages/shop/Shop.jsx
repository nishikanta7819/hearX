import React from "react";
import Products from "../../Products";
import Hero from "../../components/hero/Hero";
import Categorycards from "../../components/categorycards/Categorycards";

const Shop = () => {
  const categories = [
    {
      topText: "Enjoy",
      bottomText: "with",
      productName: "Headphones",
      bgColor: "#000",
      textColor: "#fff",
    },
    {
      topText: "Listen",
      bottomText: "with",
      productName: "Earbuds",
      bgColor: "#4d5fff",
      textColor: "#fff",
    },
    {
      topText: "Feel",
      bottomText: "the Bass",
      productName: "Speakers",
      bgColor: "#4eaf4c",
      textColor: "#fff",
    },
    {
      topText: "Play",
      bottomText: "with",
      productName: "Neckbands",
      bgColor: "#f321f0f1",
      textColor: "#fff",
    },
    {
      topText: "Upgrade",
      bottomText: "your",
      productName: "Earphones",
      bgColor: "#FFC107",
      textColor: "#000",
    },
  ];

  return (
    <div>
      <Hero />
      <div className="category-container">
        {categories.map((item, index) => (
          <Categorycards key={index} {...item} />
        ))}
      </div>
      <Products />
    </div>
  );
};

export default Shop;
