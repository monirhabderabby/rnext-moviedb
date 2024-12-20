import { Suspense } from "react";
import SearchResultContaine from "./_components/container";

const Page = () => {
  return (
    <Suspense>
      <SearchResultContaine />
    </Suspense>
  );
};

export default Page;
