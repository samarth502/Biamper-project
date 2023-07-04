const Hero = () => {
  return (
    <div className="hero-base">
      <div className="hero-base-two">
        <h1 className="xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-semibold tracking-tighter">
          <span className="text-sky-500">Bimaper.</span> Making businesses{" "}
          <br /> better through technology.
        </h1>
        <p className="font-regular xs:text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg mb-6">
          State-of-the-art infrastructure, modern technology, well qualified and
          experienced human <br /> resources with high end software technology.
        </p>
        <button className="w-max bg-sky-500 hover:bg-sky-900 duration-500 text-slate-100 p-3 xs:text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg rounded-md">
          Browse services
        </button>
      </div>
    </div>
  );
};

export default Hero;
