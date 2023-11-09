import Image from "next/image";
import "./Footer.css";
import { social_media } from "./data";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="copy-right">
        ©2023 Ahmed Mohamed, All rights reserved.
      </div>
      <div className="social">
        {social_media.map((media) => (
          <Image
            key={media.id}
            src={`/images/icons/${media.name}.png`}
            width={25}
            height={25}
            className="icon"
            alt={media.name}
          />
        ))}
      </div>
    </div>
  );
}
