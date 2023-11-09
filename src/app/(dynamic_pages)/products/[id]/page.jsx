import React from "react";
import "./page.css";
import Image from "next/image";

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export async function generateMetadata({ params }) {
  const product = await getData(params.id);
  return {
    title: product.title,
    description:
      "Explore a wide range of products at unbeatable prices. Your one-stop e-commerce destination for shopping!",
  };
}

export default async function Product({ params }) {
  const product = await getData(params.id);
  return (
    <div className="productDetails-container">
      <header className="productDetails-header">
        <div className="productDetails-info">
          <h2 className="productDetails-title">{product.title}</h2>
          <p className="productDetails-desc">{product.description}</p>
        </div>
        <div className="productDetails-imageContainer">
          <Image
            className="productDetails-image"
            src={product.thumbnail}
            alt="productDetails image"
            fill={true}
          />
          <span className="author">{product.category}</span>
        </div>
      </header>
      <div className="productDetails-content">
        <div className="gallery">
          {product.images.map((image) => (
            <Image
              key={product.id}
              className="gallery-image"
              src={image}
              alt="productDetails image"
              width={100}
              height={100}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
