import Form from "./components/Form";

function App() {
  return (
    <div className="flex w-full h-screen border-4 border-red-500">
      <div className="w-full flex items-center justify-center lg:w-1/2 border-4 border-blue-500">
        <Form />
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200 border-4 border-green-500">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce"></div>
        <div className="w-full absolute bottom-0 h-1/2 bg-white/10 backdrop-blur-lg border-4 border-yellow-500"></div>
      </div>
    </div>
  );
}

export default App;
