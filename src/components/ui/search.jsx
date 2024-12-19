"use client";

import useDebounce from "@/hooks/useDebounce";
import { useRouter, useSearchParams } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const { replace, push } = useRouter();

  const doSearch = useDebounce((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
      replace(`/searchResult?${params.toString()}`);
    } else {
      params.delete("query");
      push("/");
    }
  }, 500);

  function handleSearch(term) {
    doSearch(term);
  }
  return (
    <input
      type="text"
      id="searchInput"
      placeholder="Search movies..."
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      defaultValue={searchParams.get("query")?.toString()}
      className="bg-black bg-opacity-50 text-white px-4 py-2 rounded border border-gray-600 focus:outline-none focus:border-white"
    />
  );
};

export default Search;
