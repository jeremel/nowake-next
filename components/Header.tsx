export default function Header() {
  return (
    <header className="h-screen w-full p-8">
      <div className="">
        <h1 className="text-primary-navy font-sans font-bold text-8xl">
          No Wake Studio
        </h1>
      </div>
      <div className="pt-24 max-w-[85%]">
        <p className="text-primary-navy font-serif font-light text-5xl">
          Based out of southern New Jersey,{" "}
          <span className="text-primary-rust">No Wake Studio</span> builds
          creative online experiences for design-minded companies who want their
          users to have a great online experience.
        </p>
      </div>
      <div className="mt-12 max-w-[85%]">
        <h2 className="text-primary-rust text-5xl font-sans font-bold mb-4">
          Start your project today:
        </h2>
        <p className="text-primary-navy font-serif font-light text-5xl">
          Tell us about your project and we&apos;ll find out how we can exceed
          your goals
        </p>
      </div>
    </header>
  );
}
