import "./style.css"

const HomePartners = () => {
  const logos = [
    "https://seeklogo.com/images/D/davlat-test-markazi-logo-EA6FC73C7F-seeklogo.com.png",
    "https://w7.pngwing.com/pngs/396/541/png-transparent-university-of-plymouth-horizontal-logo-thumbnail.png",
    "https://toppng.com/uploads/preview/university-logo-design-1156335563731n8qyat0v.png",
    "https://download.logo.wine/logo/University_of_Cambridge/University_of_Cambridge-Logo.wine.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6H6MF1C7RboOw2nsngqVIThD8ttQZhTdxAQ&s",
    "https://uwm.edu/r2d2/wp-content/uploads/sites/438/2022/03/columbia-university-logo-noback.png",
  ];

  return (
    <div className="bg-slate-200">
      <div className="max-w-7xl mx-auto p-4 overflow-hidden pb-10">
        <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-5">
          Hamkorlar
        </h2>
        <div className="flex items-center justify-center">
          <section className="enable-animation">
            <div className="marquee">
              <ul className="marquee__content pl-0 shrink-0 flex justify-around min-w-full gap-[1rem]">
                {logos.map((item, index) => (
                  <div className=" marquee__item flex justify-center items-center" key={index}>
                    <img src={item} alt="" className="h-16 md:h-20 w-auto" />
                  </div>
                ))}
              </ul>

              <ul aria-hidden="true" className="marquee__content pl-0 shrink-0 flex justify-around min-w-full gap-[1rem]">
                {logos.map((item, index) => (
                  <div className=" marquee__item flex justify-center items-center" key={index}>
                    <img src={item} alt="" className="h-16 md:h-20 w-auto" />
                  </div>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePartners;
