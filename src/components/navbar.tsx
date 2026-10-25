import Image from "next/image";
import { User } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "Destinations", href: "#", active: false },
  { label: "My Bookings", href: "#", active: false },
  { label: "Admin", href: "#", active: false },
];

const accountLinks = [
  { label: "Login", href: "#" },
  { label: "Sign Up", href: "#" },
];

export function Navbar() {
  return (
    <header className="border-b-2 border-teal-500 bg-white">
      <nav className="relative flex h-14 items-center justify-between px-4 md:px-8">
        <ul className="flex items-center gap-4 text-sm md:gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={
                  link.active
                    ? "font-medium text-teal-600 underline underline-offset-4"
                    : "text-zinc-800 hover:text-teal-600"
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="absolute left-1/2 hidden -translate-x-1/2 sm:block"
          aria-label="Wanderlast home"
        >
          <Image
            src="/images/Wanderlast.png"
            alt="Wanderlast"
            width={162}
            height={24}
            priority
            className="h-6 w-auto"
          />
        </a>

        <ul className="flex items-center gap-4 text-sm md:gap-6">
          <li>
            <a
              href="#"
              className="flex items-center gap-1.5 text-zinc-800 hover:text-teal-600"
            >
              <User className="size-4" />
              Profile
            </a>
          </li>
          {accountLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-zinc-800 hover:text-teal-600">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
