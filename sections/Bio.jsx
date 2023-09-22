import Image from "next/image";

export default function Bio() {
  return (
    <div className="p-10 min-h-[80vh] flex justify-center">
      <div className="p-10 text-4xl my-auto max-w-xl">
        Hello, This is my business, more coming soon.
      </div>
      <div className="my-auto">
        <Image src={"/about.jpg"} height={300} width={"400"} />{" "}
      </div>
    </div>
  );
}
