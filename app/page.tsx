export default function App() {
  return <div>
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#e2d9c9] flex items-center justify-between px-6 md:px-12 py-4">
      <header className="flex flex-col items-center justify-self-start text-[#531015]">
        <h1 className="justify-self-start text-3xl font-bold ">lucknowi</h1>
        <p className="text-sm justify-center items-center">a taste of tradition</p>
      </header>
      <div className="flex items-center justify-center space-x-4 md:space-x-8 text-sm">
        <button className="text-black hover:text-[#531015] font-medium px-4 py-2 ">
          Our Food
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-[400ms] group-hover:w-full rounded-full" />
        </button>
        <button className="text-black hover:text-[#531015] font-medium px-4 py-2 ">
          Our Story
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-[400ms] group-hover:w-full rounded-full" />
        </button>
         <button className="text-black hover:text-[#531015] font-medium px-4 py-2 ">
          Visit Us
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-[400ms] group-hover:w-full rounded-full" />
        </button>
      </div>
      <button className="text-[#e2d9c9] bg-[#531015] hover:bg-[#cc454e] hover:text-[#f8f2e9] font-medium rounded-md px-4 py-2 text-sm ">
        Plan your Visit
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-[400ms] group-hover:w-full rounded-full" />
      </button>
    </div>
    <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center">
    </div>
  </div>;
}
