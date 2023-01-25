import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full md:h-screen h-full">
      <div className="h-full flex flex-wrap justify-between sm:gap-6 gap-0">
        <div className="sm:h-auto h-[50%] md:max-w-[55%] w-auto place-self-center md:pl-6 sm:px-8 px-6 pt-20 md:pt-0 pb-20 md:pb-0">
          <p className="text-primary-navy font-serif font-light lg:text-5xl md:text-4xl text-3xl tracking-wide cursor-default">
            <span className="text-primary-rust font-sans">No Wake</span> is a
            creative studio based out of southern New Jersey that designs &
            builds websites for forward thinking companies who want their users
            to have great experiences.
          </p>
        </div>
        <div className="sm:h-auto h-[50%] md:max-w-[40%] w-full md:place-self-center place-self-end md:pr-6">
          <figure className="h-full w-full">
            <Image
              src="/header-bg-cropped.jpg"
              alt="A picture of undisturbed New Jersey wetlands"
              priority
              width={525}
              height={700}
              // style={{
              //   objectFit: "contain",
              //   objectPosition: "center",
              // }}
              className="object-contain object-center"
            />
          </figure>
        </div>
      </div>
    </header>
  );
}
