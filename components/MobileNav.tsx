"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathName = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src={"/icons/hamburger.svg"}
            width={30}
            height={30}
            className="cursor-pointer"
            alt="Hamburger Menu"
          />
        </SheetTrigger>
        <SheetContent className="border-none bg-white" side={"left"}>
          <Link
            href={"/"}
            className="mb-12 cursor-pointer flex items-center gap-1 px-4"
          >
            <Image src={"icons/logo.svg"} width={34} height={34} alt={"logo"} />
            <h1 className="text-26 font-ibm-plex-serif text-black-1 font-bold">
              Horizon
            </h1>
          </Link>

          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((link) => {
                  const isActive =
                    pathName === link.route ||
                    pathName.startsWith(`${link.route}/`);
                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bankGradient": isActive,
                        })}
                      >
                          <Image
                            src={link.imgURL}
                            width={20}
                            height={20}
                            alt={link.label}
                            className={cn({
                              "brightness-[3] invert-0": isActive,
                            })}
                          />
                        <p
                          className={cn("text-16 font-semibold text-black-1", {
                            "text-white": isActive,
                          })}
                        >
                          {link.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
