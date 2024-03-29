import DashboardBreadCrumbs from "@/components/DashboardBreadCrumbs";
import DashboardNavMobile from "@/components/DashboardNavMobile";
import SearchBar from "@/components/SearchBar";
import React from "react";
import { getPasswordsSearch } from "@/lib/fetchData";
import { searchPasswordType } from "@/lib/typeDefinitions";
import DashboardNavDesktop from "@/components/DashboardNavDesktop";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AddButton } from "@/components/AddButton";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const PASSWORDS: searchPasswordType[] = await getPasswordsSearch();

  return (
    <div className="flex w-full h-[calc(100vh-80px)] p-4">
      <DashboardNavDesktop />
      <Separator orientation="vertical" className="hidden md:block mx-2" />
      <div className="w-full md:w-[calc(100vw-250px)]">
        <DashboardBreadCrumbs />
        <div className="flex justify-center items-center">
          <SearchBar passwords={PASSWORDS} />
          <AddButton />
        </div>
        <div className="w-full h-[calc(100vh-270px)] lg:h-[calc(100vh-206px)]">
          {children}
        </div>
        <DashboardNavMobile />
      </div>
    </div>
  );
};

export default layout;
