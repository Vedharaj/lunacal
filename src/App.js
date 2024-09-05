import Box1 from "./compounts/Box1";
import Box2 from "./compounts/Box2";
import Box3 from "./compounts/Box3";

function App() {
  return (
    <div className="App">
      <div className="md:h-screen bg-gradient-to-b from-[#373E44] to-[#191B1F] py-[6%] px-[4%] overflow-x-hidden sm:w-full">
        <div className="md:flex gap-10 h-[100%] text-white font-poppins">
          {/* left side container */}
          <Box1 /> 
          <div className="flex flex-col gap-5 md:w-1/2 md:mt-0 mt-10">
            <Box2 />
            <Box3 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;