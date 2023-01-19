import Image from "next/image";

export default function FullScreenImage({ data }: any) {
  return (
    <header className="h-full w-full">
      <Image
        className=""
        src={data}
        alt="No Wake Studio logo"
        width={2100}
        height={1400}
      />
    </header>
  );
}
