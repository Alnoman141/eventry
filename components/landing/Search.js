'use client';

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import useDebounce from "@/app/hooks/useDebounce";

export default function Search() {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = (keyword) => {
        const params = new URLSearchParams(searchParams);

        if (keyword) {
            params.set("query", keyword);
        } else {
            params.delete("query");
        }

        replace(`${pathname}?${params.toString()}`);
    }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md"
        onChange={(e) => handleSearch(e.target.value)}
        value={searchParams.get("query")?.toString() || ''}
      />
    </div>
  )
}
