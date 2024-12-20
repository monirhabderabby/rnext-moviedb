import { Suspense } from "react";
import WatchlistContainer from "./_components/watchlist-container";

const Page = async () => {
  return (
    <div>
      <Suspense>
        <WatchlistContainer />
      </Suspense>
    </div>
  );
};

export default Page;
