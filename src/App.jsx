import { Toaster } from "react-hot-toast"
import Quiz from "./components/Quiz"


function App() {

  return (
    <div className="w-full h-screen bg-yellow-200">
      <Toaster />
      <div
        className="app max-w-2xl mx-auto flex flex-col justify-center items-center gap-8"
      >
        <h1 className="text-7xl text-black font-bold mt-12">* Quiz App</h1>
        <Quiz />
      </div>
    </div>
  )
}

export default App
