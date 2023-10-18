"use client";

import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

export const SearchInput = () => {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce(value);

  const searchParam = useSearchParams();

  const router = useRouter();
  const pathname = usePathname();
  const currentCategoryId = searchParam.get("categoryId");
  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          title: debounceValue,
          categoryId: currentCategoryId,
        },
      },
      {
        skipEmptyString: true,
        skipNull: true,
      }
    );
    router.push(url)
}, [debounceValue, currentCategoryId, router, pathname]);
  return (
    <div className="relative">
      <Search className="w-4 h-4 absolute top-3 left-3 text-slate-500" />
      <Input
      onChange={(e) => setValue(e.target.value)}
        className="w-full md:w=[300px] pl-9 rounded-full bg-slate-100 focus-visible:ring-slate-200"
        placeholder="Search for a course"
      />
    </div>
  );
};
