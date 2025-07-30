import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/Forms/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";
import React from "react";

function page() {
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 bg-[url('/images/contact.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10">
          <ContactHero />
        </div>
      </section>
      <section className="px-6 md:px-[100px] py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl font-bold text-[var(--primary)]">
              Get In Touch
            </h1>
            <p className="text-md text-gray-700 mt-4 mb-10">
              If you have any questions or inquiries, feel free to reach out to
              us.
            </p>
            <div className="grid grid-rows-3 gap-4">
              <div className="flex gap-3 items-center">
                <Phone
                  size={35}
                  className="bg-[var(--primary)] text-white p-2 rounded-full"
                />
                <div className="grid grid-cols-1">
                  <h4 className="font-semibold text-md text-[var(--primary)]">
                    Phone
                  </h4>
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Mail
                  size={35}
                  className="bg-[var(--primary)] text-white p-2 rounded-full"
                />
                <div className="grid grid-cols-1">
                  <h4 className="font-semibold text-md text-[var(--primary)]">
                    Email
                  </h4>
                  <span>info@serenity-touch.com</span>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <MapPin
                  size={35}
                  className="bg-[var(--primary)] text-white p-2 rounded-full"
                />
                <div className="grid grid-cols-1">
                  <h4 className="font-semibold text-md text-[var(--primary)]">
                    Address
                  </h4>
                  <span>123 Serenity St, Suite 100</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
