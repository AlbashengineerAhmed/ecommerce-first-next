import Image from "next/image";
import "./page.css";
import hero from "public/hero.svg";
export default function Home() {
  return (
    <div className="home-container">
      <div className="home-col">
        <h1 className="home-title">Discover Amazing Deals</h1>
        <p className="home-description">
          Explore a wide range of products at unbeatable prices. Your shopping
          journey starts here!
        </p>
        <button className="home-button">Shop Now</button>
      </div>
      <div className="home-col">
        <Image src={hero} className="home-hero-image" alt="hero image" />
      </div>
    </div>
  );
}
