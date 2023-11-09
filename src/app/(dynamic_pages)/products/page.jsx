import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./page.css";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export const metadata = {
  title: "Hexashop - Products",
  description:
    "Explore a wide range of products at unbeatable prices. Your one-stop e-commerce destination for shopping!",
};
export default async function Products() {
  const { products } = await getData();
  // console.log(products);
  return (
    <div className="products-main-container">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="product-item"
        >
          <div className="product-image-container">
            <Image
              className="Product-item-image"
              src={product.thumbnail}
              width={350}
              height={300}
              alt={product.title}
            />
            <div className="item-stock">
              <p className="product-stock">In Stock: {product.stock}</p>
            </div>
          </div>
          <div className="item-content">
            <div className="item-header">
              <h2 className="Product-title">{product.title}</h2>
              <p className="product-price">${product.price}</p>
            </div>
            <p className="product-desc">{product.description}</p>
            <div className="product-details">
              <div className="item-rating">
                <p className="product-rating">
                  Rating: {Math.floor(product.rating)} 🌟
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
