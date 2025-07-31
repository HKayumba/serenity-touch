import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function Footer() {
  return (
    <>
      <footer className="px-6 md:px-[100px] bg-[var(--primary)] text-white py-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div>
            <h3 className="pb-4">Serenity Touch</h3>
            <p>
              Your sanctuary for wellness, relaxation, and rejuvenation.
              Experience the harmony of mind, body, and spirit.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link
                href="/"
                className="bg-[var(--foreground)] rounded-full p-2"
              >
                <Facebook className="w-5 h-5 text-white" />
              </Link>

              <Link
                href="/"
                className="bg-[var(--foreground)] rounded-full p-2"
              >
                <Instagram className="w-5 h-5 text-white" />
              </Link>
              <Link
                href="/"
                className="bg-[var(--foreground)] rounded-full p-2"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <h4 className="mb-4 text-xl font-semibold">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/">Careers</Link>
                </li>
                <li>
                  <Link href="/">Press</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-xl">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/">FAQ</Link>
                </li>
                <li>
                  <Link href="/">Booking Policy</Link>
                </li>
                <li>
                  <Link href="/">Gift Cards</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="news-letter">
            <h1 className="mb-6 font-semibold text-xl">
              Subscribe to Our Newsletter
            </h1>
            <div className="flex items-center justify-center gap-1">
              <Input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-md border border-gray-300 placeholder:text-gray-400"
              />
              <Button className="bg-[var(--foreground)] text-white py-2 px-6 rounded-md hover:bg-white hover:text-[var(--primary)] transition-colors duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <Separator className="my-10" />
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 mb-10 gap-4">
          <div className="copy-right">
            <p>
              © {new Date().getFullYear()} Serenity Touch. All rights reserved.
            </p>
          </div>
          <div className="grid grid-cols-2">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
