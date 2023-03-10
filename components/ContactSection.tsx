import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="bg-primary-white w-full md:h-screen h-full">
      <div className="h-full flex flex-wrap justify-between sm:gap-6 gap-0">
        <div className="sm:h-auto h-[50%] md:max-w-[40%] w-full md:place-self-center place-self-end md:pl-6 sm:block hidden">
          <figure className="h-full w-full">
            <Image
              src="/NoWake-4.png"
              alt="A seagull on a piling over the bay"
              width={525}
              height={700}
              className="object-contain object-center"
            />
          </figure>
        </div>

        <div className="sm:h-auto h-[50%] md:max-w-[55%] w-auto place-self-center md:pl-6 sm:px-8 px-6 pt-20 md:pt-0 pb-20 md:pb-0">
          <h2 className="text-primary-rust lg:text-5xl md:text-4xl text-4xl font-sans font-bold mb-4 tracking-wide cursor-default">
            Get in touch:
          </h2>
          <p className="text-primary-navy font-serif font-light lg:text-5xl md:text-4xl text-3xl tracking-wide cursor-default">
            Tell us about your project at{" "}
            <a
              href="mailto:hey@nowake.studio"
              className="text-primary-rust hover:underline decoration-dotted md:decoration-wavy hover:decoration-dotted underline-offset-[12px] sm:underline-offset-[6px]"
            >
              hey@nowake.studio
            </a>{" "}
            to get started.
          </p>
        </div>
      </div>
    </section>
  );
}
