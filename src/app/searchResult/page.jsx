import dynamic from "next/dynamic";
const SearchResultContaine = dynamic(() => import("./_components/container"), {
  ssr: false,
});

const Page = () => {
  return <SearchResultContaine />;
};

export default Page;
