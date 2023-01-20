import Image from "next/image";

export default function FullScreenImage() {
  return (
    <div className="h-full w-full">
      <Image
        src="/bird-bay.jpg"
        alt="A seagull chilling in a No Wake zone"
        width={2100}
        height={1400}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
    </div>
  );
}
