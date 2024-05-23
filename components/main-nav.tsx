"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex font-sm">
      <Link href="/UserProfile" className="mr-6 flex items-center space-x-3">
        <Avatar>
          <AvatarImage src="https://github.com/arnavaj23/photo/blob/main/Arnav.jpeg?raw=true" />
          <AvatarFallback>Pclub</AvatarFallback>
        </Avatar>
        <span className="text-white hidden font-extrabold  text-xl sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 font-semibold lg:gap-6">
        <Link
          href="/Coolers"
          className={cn(
            "transition-colors hover:text-foreground/80 font-2xl",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Items for Sale
        </Link>
        <Link
          href="Customer_Help"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/components")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Customer Support
        </Link>
      </nav>
    </div>
  );
}
