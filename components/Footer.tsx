import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary-navy w-full sticky z-0 bottom-0 left-0">
      <div className="mb-24 pt-12">
        <Image
          className=""
          src="/NoWakeLogo-OffWhite.png"
          alt="No Wake Studio logo"
          width={1600}
          height={288}
        />
      </div>
      <div className="mx-6 pb-12 flex flex-wrap justify-between">
        <p className="text-primary-off-white font-serif text-4xl">
          hey@nowake.studio
        </p>
        <p className="text-primary-off-white font-serif text-4xl">
          Est. 2023 Swamps of New Jersey
        </p>
      </div>
    </footer>
  );
}
