const Cta = () => {
  return (
    <div className="xs:px-5 sm:px-10 md:px-20 lg:px-40 xl:px-40 2xl:px-40 py-20">
      <div className="form-base">
        <form action="" className="relative">
          <h2 className="font-bold text-sky-900 xs:text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl mb-4 tracking-tighter">
            Have a <span className="text-sky-500">Project</span> in mind?
          </h2>
          <p className="text-lg text-sky-900 mb-16">
            Let us know when and how to contact you and we will reach out to
            you.
          </p>
          <p className="text-md text-sky-900 mb-2">Personal information</p>
          <div className="form-grid mb-10 border-4 border-sky-900/20 rounded-md p-5">
            <label htmlFor="" className="form-label">
              Name &nbsp;
              <input type="text" className="form-field" />
            </label>
            <label htmlFor="" className="form-label">
              Email &nbsp;
              <input type="email" className="form-field" />
            </label>
            <label htmlFor="" className="form-label">
              Phone &nbsp;
              <input type="email" className="form-field" />
            </label>
          </div>
          <div className="mb-10">
            <p className="text-md text-sky-900 mb-2">Choose your service</p>
            <div className="flex flex-wrap gap-x-16 gap-y-5 border-4 border-sky-900/20 rounded-md p-5">
              <label htmlFor="" className="form-label">
                Web Design & Development &nbsp;
                <input type="checkbox" className="form-box" name="" id="" />
              </label>
              <label htmlFor="" className="form-label">
                Digital Marketing &nbsp;
                <input type="checkbox" className="form-box" name="" id="" />
              </label>
              <label htmlFor="" className="form-label">
                App Development &nbsp;
                <input type="checkbox" className="form-box" name="" id="" />
              </label>
              <label htmlFor="" className="form-label">
                Graphic Design &nbsp;
                <input type="checkbox" className="form-box" name="" id="" />
              </label>
              <label htmlFor="" className="form-label">
                SEO & SMO &nbsp;
                <input type="checkbox" className="form-box" name="" id="" />
              </label>
              <label htmlFor="" className="form-label">
                UX UI Design &nbsp;
                <input type="checkbox" className="form-box" name="" id="" />
              </label>
            </div>
          </div>
          <div className="mb-20">
            <p className="text-md text-sky-900 mb-2">
              Preferred mode of communication
            </p>
            <div className="flex gap-16 border-4 border-sky-900/20 rounded-md p-5">
              <label htmlFor="" className="form-label">
                Email &nbsp;
                <input type="checkbox" className="form-box" name="" id="" />
              </label>
              <label htmlFor="" className="form-label">
                Text &nbsp;
                <input type="checkbox" className="form-box" name="" id="" />
              </label>
              <label htmlFor="" className="form-label">
                Call &nbsp;
                <input type="checkbox" className="form-box" name="" id="" />
              </label>
            </div>
          </div>
          <div className="flex xs:gap-5 sm:gap-10 md:gap-10 lg:gap-10 xl:gap-10 2xl:gap-10">
            <input
              type="submit"
              value="Submit"
              className="bg-sky-700 hover:bg-sky-500 duration-500 xs:text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg cursor-pointer px-5 py-2 text-slate-100 hover:text-slate-900 rounded-md"
            />
            <input
              type="reset"
              value="Clear"
              className="bg-slate-100 hover:bg-slate-600 xs:text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg cursor-pointer px-5 py-2 text-sky-900 hover:text-slate-100 duration-500 rounded-md"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Cta;
