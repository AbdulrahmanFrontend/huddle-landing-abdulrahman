import "./App.css";
import content from "./data/content";

function App() {
  return (
    <>
      <main
        className="bg-purple-700 w-screen min-h-screen flexbox p-10 relative after:absolute after:top-0 
      after:right-0 after:bottom-0 after:left-0 after:bg-black after:opacity-10"
      >
        <div className="w-full max-md:text-center">
          <div className="flexbox w-full gap-14 max-md:flex-col">
            <div className="min-w-80 relative-z">
              <img
                src={content.logo.src}
                alt={content.logo.alt}
                loading="lazy"
                className="w-1/3"
              />
              <img
                src={content.mockups.src}
                alt={content.mockups.alt}
                loading="lazy"
                className="mt-10 w-full"
              />
            </div>
            <div className="min-w-80 max-w-lg">
              <h1 className="text-white font-normal relative-z">
                {content.halfTitle1}
                <br />
                {content.halfTitle2}
              </h1>
              <p className="text-white my-6 font-normal">
                {content.description}
              </p>
              <a
                href="#"
                className="relative-z flexbox max-md:mx-auto transition font-normal text-center 
              w-1/4 h-7 rounded-4xl bg-white text-purple-700 public-link"
              >
                {content.cta}
              </a>
            </div>
          </div>
          <div className="flex gap-7 justify-end px-14 mt-20 max-md:justify-center">
            {content.socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  aria-label={link.name}
                  className="public-link relative-z"
                >
                  <IconComponent className="icon" />
                </a>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
