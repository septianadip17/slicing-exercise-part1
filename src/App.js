import Form from "./components/Form";

function App() {
  return (
    <div className="flex w-full h-screen border-4 border-red-500">
      <div className="w-full flex items-center justify-center lg:w-1/2 border-4 border-blue-500">
        <Form />
      </div>
      <div className="hidden lg:flex h-full bg-gray-200">
        <div>Hello</div>
      </div>
    </div>
  );
}

export default App;
