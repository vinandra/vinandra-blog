export function Footer() {
  return (
    <div className="bg-gray-50 border-t-2 border-gray-100 mt-20">
      <div className="container mx-auto px-5 py-28 flex flex-col lg:flex-row items-center">
        <h1 className="flex-1 text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
          Get in touch
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <a
            href="https://vinandra.vercel.app/"
            className="mx-3 bg-black hover:bg-transparent hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
          >
            Website
          </a>
          <a href="https://github.com/vinandra" className="mx-3 font-bold hover:underline">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
