import Image from "next/image";
import Hero from "../../sections/Hero";
import Info from "../../sections/Info";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Hero /> <Info />
    </main>
  );
}
