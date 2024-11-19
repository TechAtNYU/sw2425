

export default function Home() {
  return (
    /// Center a header file inside a div
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 w-full">
    <div className="flex justify-center items-center h-screen bg-black">\
    <div className="absolute inset-0 bg-blue-500 z-0"></div>
      <div 
        className="z-[1] fixed top-10 left-10 select-none pointer-events-none"
        style={{color: '#1A1A1A', fontSize: 560.88, fontFamily: 'Low Def TRIAL', fontWeight: '400', wordWrap: 'break-word'}}>Startup
      </div>
      <header className="max-w-[40vw] z-[5000]">
        <h1 className="text-8xl text-white font-bold ">StartupWeek</h1>
        <div className="flex  text-gray-200">
          <p className="flex-grow basis-2/3">NYU’s largest tech-fest events. [More copy?]</p>
          <p className="flex-grow basis-1/3">March 3 - 10, 2025</p>
        </div>
      </header>
    </div>
    </main>
  );
}
