import Link from "next/link";
import Image from "next/image";

import MobileNav from "./MobileNav";

export default function Navbar() {
  const p = " p-4 cursor-pointer hover:underline hover:underline-offset-4 ";
  return (
    <div className=" z-2000 bg-gray-300 shadow-md ">
      <nav class="bg-gray-300 p-4 block md:hidden">
        <MobileNav />
      </nav>
      <nav className=" max-w-4xl  mx-auto hidden md:block">
        <div className="flex justify-between">
          <div className={` flex cursor-pointer ${p}`}>
            {" "}
            <Link className=" font-bold flex" href={"/"}>
              <Image src={"/faucet.png"} width={"30"} height={"30"} />
              <div className="ml-3">Edified Landscaping</div>{" "}
            </Link>
          </div>
          <div className=" font-bold flex">
            <Link href={"/"}>
              {" "}
              <div className={`${p}`}>Home</div>{" "}
            </Link>
            <Link href={"/about"}>
              <div className={`${p}`}>About</div>
            </Link>{" "}
            <div className={`${p}`}>services</div>
            <Link href={"/contact"}>
              <div className={`${p}`}>Contact</div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
