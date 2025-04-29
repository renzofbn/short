import Header from "@/components/header";
import "./globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-screen h-screen bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] font-base flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center flex-col">
        <h1 className="text-center text-4xl font-bold">
          Short it and share it with the world
        </h1>
        <p className="text-center text-lg">
          Get started with our URL shortener today, free and open source.
        </p>
        <Link href="/shorten" className="mt-6">
          <Button className="font-bold text-xl">Get Started</Button>
        </Link>
      </div>
    </section>
  );
}
