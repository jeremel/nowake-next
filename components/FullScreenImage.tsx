import Image from "next/image";

export default function FullScreenImage() {
  return (
    <div className="h-full w-full">
      <Image
        src="/NoWake-5.png"
        alt="A seagull chilling in a No Wake zone"
        width={1750}
        height={1167}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
    </div>
  );
}
