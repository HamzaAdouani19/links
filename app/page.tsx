import Image from "next/image";
import {
  FaInstagram,
  FaEnvelope ,
  FaLinkedin,
  FaBehance,
  FaGlobe,
} from "react-icons/fa";

const links = [
  {
    label: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/hamza_adouani/",
    iconClass: "icon-ig",
  },
  {
    label: "Email",
    icon: FaEnvelope ,
    href: "hamzaadouani1919@gmail.com",
    iconClass: "icon-wa",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/hamza-adouani/",
    iconClass: "icon-li",
  },
  {
    label: "Behance",
    icon: FaBehance,
    href: "https://www.behance.net/hamzaadouani",
    iconClass: "icon-be",
  },
  {
    label: "Portfolio Website",
    icon: FaGlobe,
    href: "https://portfolio-hamza-pied.vercel.app/",
    iconClass: "icon-site",
  },
];

export default function LinksPage() {
  return (
    <main className="links-page">
     
      {/* Avatar */}
      <div className="avatar-wrapper float">
        <Image src="/ha.png" alt="Hamza Adouani" fill className="avatar" />
      </div>

      {/* Identity */}
      <h1 className="links-name">Hamza Adouani</h1>
      <p className="links-role">Creative Designer &nbsp;•&nbsp; Developer</p>

      {/* Links */}
      <div className="links-stack">
        {links.map(({ label, icon: Icon, href, iconClass }, i) => (
          <a
            key={label}
            href={href}
            className="link-item"
            style={{ animationDelay: `${0.35 + i * 0.07}s` }}
          >
            <span className={`link-icon ${iconClass}`}>
              <Icon size={15} />
            </span>
            <span className="link-label">{label}</span>
            <span className="link-arrow" aria-hidden="true">›</span>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="links-footer">
        <div className="footer-line" />
        <span className="text-xs text-white/20 tracking-widest">Copyright © Hamza Adouani | All rights reserved</span>
      </div>
    </main>
  );
}