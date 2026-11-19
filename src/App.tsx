import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="font-sans bg-linear-to-r from-cyan-500 to-blue-500 min-h-screen flex justify-center items-center">
      <div className="relative">
        <BackgroundHeading />
        <main
          className="relative w-[972px] h-[636px] bg-white rounded-[8px] 
        shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr]"
        >
          <Header />
          <TodoList />
          <Sidebar />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
