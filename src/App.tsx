import scarecrowUrl from "./assets/scarecrow.png";

const App = () => {
  return (
    <>
      <main className="flex flex-col px-6 py-5 mx-auto xl:px-20 xl:py-10 max-w-7xl">
        <h1 className="text-2xl font-bold font-inconsolata">404 NOT FOUND</h1>
        <section className="flex flex-col my-16 xl:flex-row xl:my-52 xl:space-x-52 space-y-[3.75rem]">
          <img
            src={scarecrowUrl}
            alt="scarecrow image"
            className="w-full max-h-80 object-contain xl:w-auto xl:max-w-[34rem] h-full"
          />
          <div className="flex flex-col space-y-16">
            <div className="space-y-8 flex-flex-col xl:space-y-9">
              <h2 className="xl:text-[4rem] leading-normal text-5xl font-bold">
                I have bad news for you
              </h2>
              <p className="text-lg leading-tight xl:text-2xl">
                The page you are looking for might be removed or is temporarily
                unavailable
              </p>
            </div>

            <button className="bg-[#313131] text-white px-11 py-6 self-start xl:self-auto">
              BACK TO HOMEPAGE
            </button>
          </div>
        </section>
      </main>

      <footer>
        <p className="font-medium text-center font-montserrat text-[#BDBDBD] mb-6">
          created by <span className="font-bold">farhaan-mukarram</span> -
          devChallenges.io
        </p>
      </footer>
    </>
  );
};

export default App;
