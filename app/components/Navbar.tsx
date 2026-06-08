import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="
      fixed top-0 z-50
      w-full
      border-b border-white/10
      bg-black/20
      backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <h1 className="text-4xl font-serif">HA</h1>

        <div className="hidden md:flex gap-8 uppercase text-sm">
          <Link href="/">Home</Link>
          <Link href="/">Portfolio</Link>
          <Link href="/">Trainings</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
        </div>

       
      </div>
    </nav>
  );
}