import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";

function Footer() {
  return (
    <>
      <footer className="px-6 md:px-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <div>
            <h3 className="pb-4">Serenity Touch</h3>
            <p>
              Your sanctuary for wellness, relaxation, and rejuvenation.
              Experience the harmony of mind, body, and spirit.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="/" className="bg-amber-600 rounded-full p-2">
                <Facebook className="w-5 h-5 text-white" />
              </Link>

              <Link href="/" className="bg-amber-600 rounded-full p-2">
                <Instagram className="w-5 h-5 text-white" />
              </Link>
              <Link href="/" className="bg-amber-600 rounded-full p-2">
                <Linkedin className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div>
              <h4 className="mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/">Massage Therapy</Link>
                </li>
                <li>
                  <Link href="/">Massage Therapy</Link>
                </li>
                <li>
                  <Link href="/">Massage Therapy</Link>
                </li>
                <li>
                  <Link href="/">Massage Therapy</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">About Us</Link>
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
              <h4 className="mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/">Contact Us</Link>
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
        </div>
        <Separator className="my-10" />
        <div className="flex flex-row justify-between items-center mt-10 mb-10">
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
