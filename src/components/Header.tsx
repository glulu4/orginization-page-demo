"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {config} from "@/config";
import {cn} from "@/lib/utils";
import {Menu} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {FunctionComponent} from "react";
import DonateButton from "./DonateButton";
import {Link as ScrollLink} from 'react-scroll';
import clsx from "clsx";

interface MenuItem {
  name: string;
  href: string;
  openInNewTab?: boolean;
}

const menuItems: MenuItem[] = [
  {name: "About us", href: "#about"},
  {name: "Our Volunteers", href: "#volunteer"},
  {name: "Our Values", href: "#values"},
  {name: "Our Story", href: "#story"},
  {name:"How to Help", href: "#help"},
  // {name: "Our kids", href: "/kids"},
  // {name: "Support us", href: "/support"},
  // {name: "Contact us", href: "/contact"},
];

export const Navigation: FunctionComponent = () => {
  const pathname = usePathname();
  return (
    <nav className="flex-1 flex justify-end sm:justify-center items-center">


      <div className="hidden md:flex items-center">
        {menuItems.map((item) => (
          <div key={item.href} className="mx-4">
            <ScrollLink
              to={item.href.slice(1)} // e.g., "about" from "#about"
              smooth={true}
              duration={1000} // 1000ms = 1 second; adjust as needed
              className={cn(
                "hover:text-gray-900 text-gray-800 font-serif cursor-pointer",
                pathname === item.href && "font-semibold"
              )}
            >
              {item.name}
            </ScrollLink>
          </div>
        ))}
      </div>
      {/* <div className="hidden md:flex items-center">
        {menuItems.map((item) => (
          <div key={item.href} className="mx-4">
            <a 
              href={item.href}
              target={item.openInNewTab ? "_blank" : "_self"}
              className={cn(
                "hover:text-gray-900 text-gray-800 font-serif",
                pathname === item.href && "font-semibold"
              )}
            >
            
              {item.name}
            </a>
          </div>
        ))}
      </div> */}

      <div className="md:hidden flex items-center">
        <Sheet>
          <SheetTrigger>
            <Menu size="24" />
          </SheetTrigger>
          <SheetContent 
            className={clsx("bg-blue-900 text-white [&_[data-radix-sheet-close]]:text-white")}
          >
            <SheetHeader>
              <SheetDescription>
                {menuItems.map((item) => (
                  <ScrollLink
                    key={item.href}
                    to={item.href.slice(1)} // e.g., "about" from "#about"
                    smooth={true}
                    duration={1000} // 1000ms = 1 second; adjust as needed
                    className={cn(
                      "block py-2 cursor-pointer text-white font-serif font-medium text-xl",
                      pathname === item.href && "font-semibold "
                    )}
                  >
                    {item.name}
                  </ScrollLink>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      {/* <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu size="24" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.openInNewTab ? "_blank" : "_self"}
                    className={cn(
                      "block py-2",
                      pathname === item.href && "font-semibold font-serif"
                    )}
                  >
                  
                    {item.name}
                  </a>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div > */}

    </nav >
  );
};

export const Header: FunctionComponent = () => {
  return (
    <section className="fixed flex items-center justify-between py-4  bg-headerColor shadow-sm rounded-full sm:mx-auto max-w-6xl top-4 left-0 right-0 z-50 px-6 mx-6">
      <meta name="theme-color" content="#fff" />
      <Link href="/" className="flex items-center">
        <div className="relative h-12 w-12 mr-2">
          {/* Replace with your actual logo */}
          <Image
            src="/images/icon2.png"
            alt="Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>

      </Link>

      <Navigation />

          <div className="hidden md:flex items-center">
        <DonateButton />

          </div>
    </section>
  );
};