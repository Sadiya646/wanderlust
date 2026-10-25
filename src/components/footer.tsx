import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const linkColumns = [
  {
    title: "Quick Links",
    links: ["Home", "Destinations", "My Bookings", "My Profile"],
  },
  {
    title: "Support",
    links: ["Help Center", "Terms of Service", "Privacy Policy"],
  },
];

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const socialLinks = [
  { label: "X", Icon: XIcon },
  { label: "LinkedIn", Icon: LinkedInIcon },
  { label: "Instagram", Icon: InstagramIcon },
];

export function Footer() {
  return (
    <footer className="bg-zinc-950 px-4 pt-14 pb-8 text-zinc-300 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Image
          src="/images/Wanderlast-1.png"
          alt="Wanderlast"
          width={542}
          height={80}
          className="h-10 w-auto md:h-12"
        />
        <p className="mt-3 text-sm text-zinc-400">
          Your gateway to extraordinary travel experiences around the world.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-teal-500/90 uppercase">
              Newsletter
            </h3>
            <p className="mt-3 text-xs text-zinc-400">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <form className="mt-4 flex h-10 w-full max-w-xs bg-zinc-800">
              <input
                type="email"
                placeholder="Enter email"
                aria-label="Email address"
                className="flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-zinc-500"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex w-10 items-center justify-center bg-zinc-700 text-white hover:bg-teal-500"
              >
                <ArrowUpRight className="size-4" />
              </button>
            </form>
          </div>

          {linkColumns.map((column) => (
            <nav key={column.title}>
              <h3 className="text-xs font-semibold tracking-wider text-teal-500/90 uppercase">
                {column.title}
              </h3>
              <ul className="mt-3 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-zinc-400 hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="text-xs font-semibold tracking-wider text-teal-500/90 uppercase">
              Contact Us
            </h3>
            <ul className="mt-3 space-y-2.5 text-sm text-zinc-400">
              <li>
                <a href="tel:7989011522" className="hover:text-white">
                  798 901 1522
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@wanderland.com"
                  className="hover:text-white"
                >
                  info@wanderland.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800 pt-6">
          <p className="text-xs text-zinc-500">
            &copy; 2025 Wanderlast. All rights reserved.
          </p>
          <div className="flex gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="text-zinc-400 hover:text-white"
              >
                <social.Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
