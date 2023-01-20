export default function TextBlock() {
  return (
    <section className="w-full bg-primary-white grid place-items-center sm:h-screen h-auto">
      <div className="bg-primary-off-white px-6 py-10 flex flex-wrap flex-col gap-4 lg:max-w-[65%] md:max-w-[70%] sm:max-w-[75%] max-w-full sm:h-auto">
        <h2 className="text-primary-rust lg:text-5xl md:text-4xl text-4xl font-sans font-bold mb-2 tracking-wide">
          Start your project today:
        </h2>
        <p className="text-primary-navy font-serif font-light lg:text-5xl md:text-4xl text-3xl tracking-wide">
          Tell us about your project so we can find out how to exceed your
          goals. Send us an email at{" "}
          <a
            href="mailto:jerlentz@gmail.com"
            className="text-primary-rust hover:underline hover:decoration-dotted hover:underline-offset-4"
          >
            hey@nowake.studio
          </a>{" "}
          to get started.
        </p>
      </div>
    </section>
  );
}
