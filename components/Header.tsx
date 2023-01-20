import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full h-full">
      <div className="h-full flex flex-wrap justify-between sm:gap-8 gap-0">
        <div className="pl-6 md:max-w-[55%] w-auto place-self-center md:pt-0 pt-20 md:pb-0 pb-20">
          <p className="text-primary-navy font-serif font-light lg:text-5xl md:text-4xl text-3xl tracking-wide">
            <span className="text-primary-rust">No Wake</span> is a creative
            digital studio based out of southern New Jersey that builds websites
            for design-minded companies who want their users to have great
            experiences.
          </p>
        </div>
        <div className="md:max-w-[40%] w-auto md:place-self-center place-self-end">
          <Image
            src="/header-bg.jpg"
            alt="No Wake Studio logo"
            width={740}
            height={493}
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>
      </div>
    </header>
  );
}
