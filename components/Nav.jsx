import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  const p = " p-4 cursor-pointer hover:underline hover:underline-offset-4 ";
  return (
    <div className=" z-2000 bg-gray-300 shadow-md ">
      <nav className=" max-w-4xl  mx-auto">
        <div className="flex justify-between">
          <div className={` flex cursor-pointer ${p}`}>
            {" "}
            <Link className="flex" href={"/"}>
              <Image src={"/faucet.png"} width={"30"} height={"30"} />
              <div className="ml-3">Edifying Landscaping</div>{" "}
            </Link>
          </div>
          <div className="flex">
            <Link href={"/"}>
              {" "}
              <div className={`${p}`}>Home</div>{" "}
            </Link>
            <div className={`${p}`}>about</div>
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
