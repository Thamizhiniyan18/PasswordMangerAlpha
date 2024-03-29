"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "./ui/separator";
import Link from "next/link";
import clsx from "clsx";

export function AddButton() {
  const links = [
    // { icon: "dashboard", path: "/dashboard", separator: true },
    {
      name: "Login",
      icon: "password",
      path: "/dashboard/passwords/create",
      separator: true,
    },
    {
      name: "Recovery Key",
      icon: "key",
      path: "/dashboard/recoverykeys/create",
      separator: true,
    },
    {
      name: "Card",
      icon: "credit_card",
      path: "/dashboard/cards/create",
      separator: true,
    },
    {
      name: "Note",
      icon: "notes",
      path: "/dashboard/notes/create",
      separator: false,
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Link
          href="/dashboard/passwords/create"
          className="w-14 h-14 flex justify-center items-center rounded-full border border-primary ml-2"
        >
          <Button className="w-11 h-11 flex justify-center items-center rounded-full bg-primary">
            <span className="material-symbols-outlined text-5xl text-white">
              add
            </span>
          </Button>
        </Link>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="border-primary p-4">
        {links.map((link, index) => (
          <div key={`${link}_${index}`}>
            <DropdownMenuItem
              onClick={() => {}}
              className="flex justify-between items-center cursor-pointer"
            >
              <Link
                href={link.path}
                className="w-full h-full flex justify-start items-center"
              >
                <span
                  className={clsx(
                    "material-symbols-outlined text-primary mr-3 border border-primary w-10 h-10 rounded-full flex justify-center items-center"
                  )}
                >
                  {link.icon}
                </span>
                {link.name}
              </Link>
            </DropdownMenuItem>

            {link.separator && <Separator className="my-2" />}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
