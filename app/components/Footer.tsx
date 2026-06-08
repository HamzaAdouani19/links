import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="absolute bottom-5 left-0 right-0 z-20">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center w-full max-w-4xl">
          <div className="flex-1 border-t border-white/20" />

          <span className="px-4 text-white/50">
            hamzaadouani.com
          </span>

          <div className="flex-1 border-t border-white/20" />
        </div>

        <div className="flex gap-5 text-xl text-white/60">
          <FaGithub />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
    </footer>
  );
}