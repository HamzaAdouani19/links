import {
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaTiktok,
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
        <FaWhatsapp />
        WhatsApp
      </a>

      <a className="btn-glass">
        <FaYoutube />
        YouTube
      </a>

      <a className="btn-glass">
        <FaGlobe />
        Portfolio
      </a>

      <a className="btn-glass col-span-2">
        <FaTiktok />
        TikTok
      </a>
    </div>
  );
}