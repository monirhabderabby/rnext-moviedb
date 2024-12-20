import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center gap-y-3">
      <Loader2 className="animate-spin opacity-60" />
      <span>Please wait...</span>
    </div>
  );
};

export default Loading;
