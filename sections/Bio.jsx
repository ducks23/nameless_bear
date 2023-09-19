import Image from "next/image";

export default function Bio() {
  return (
    <div className="p-10 min-h-[80vh] flex justify-center">
      <div className="p-4 text-4xl my-auto max-w-xl">
        Hello, my name is nameless bear and I believe everything the government
        tells me.{" "}
      </div>
      <div className="my-auto">
        <Image src={"/911pepe.jpeg"} height={300} width={"400"} />{" "}
      </div>
    </div>
  );
}
