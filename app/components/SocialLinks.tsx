import {
  FaInstagram,
  FaEnvelope ,
  FaGlobe
} from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-10">
      <a className="btn-glass">
        <FaInstagram />
        Instagram
      </a>

      <a className="btn-glass">
        <FaEnvelope  />
        Email 
      </a>

   

      <a className="btn-glass">
        <FaGlobe />
        Portfolio
      </a>

    </div>
  );
}