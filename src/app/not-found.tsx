import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-screen h-screen bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] font-base flex flex-col">
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4">
        <div className="text-9xl font-black">404</div>

        <div className="mb-8 max-w-md transform rotate-1 rounded-lg border-4 border-black bg-amber-200 p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="mb-2 text-xl font-black">PAGE NOT FOUND</h2>
          <p className="text-sm font-medium">
            Oops! The page you&apos;re looking for has gone missing in the
            digital void.
          </p>
        </div>

        <Link href="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
