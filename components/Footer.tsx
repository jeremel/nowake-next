import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary-navy w-full sticky z-0 bottom-0 left-0">
      <div className="md:mb-24 mb-8 pt-12">
        <Image
          className=""
          src="/NoWakeLogo-White.png"
          alt="No Wake Studio logo"
          width={1600}
          height={288}
        />
      </div>
      <div className="md:mx-6 mx-2 pb-12 flex sm:flex-wrap flex-nowrap md:flex-row flex-col sm:justify-between items-center md:gap-8 gap-4">
        <a
          href="#"
          className="text-primary-white font-serif sm:text-4xl text-3xl underline underline-offset-[6px] md:underline-offset-[12px] decoration-dotted md:decoration-wavy hover:decoration-solid"
        >
          hey@nowake.studio
        </a>
        <p className="text-primary-white font-serif sm:text-4xl text-3xl hover:text-primary-green transition-colors">
          Est. 2023 Jersey Pines
        </p>
      </div>
    </footer>
  );
}
