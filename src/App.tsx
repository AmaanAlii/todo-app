function App() {
  return (
    <div className="font-sans bg-linear-to-r from-cyan-500 to-blue-500 min-h-screen flex justify-center items-center">
      <div className="relative">
        <h1
          className="text-[120px] font-bold text-black/10 uppercase 
        absolute left-1/2 -translate-x-1/2 -top-24 tracking-[0.2em]"
        >
          TodoApp
        </h1>
        <main
          className="relative w-[972px] h-[636px] bg-white rounded-[8px] 
        shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr]"
        >
          <header className="col-[1/3] row-[1/2] bg-sky-300 rounded-md border-b border-black/[0.08] "></header>
          <ul className=""></ul>
          <section className="col-2/3 row-2/3 border-l border-black/[0.08] "></section>
        </main>
        <footer
          className="flex justify-between w-[972px] items-center 
        text-[11px] opacity-30 mt-[12px]"
        >
          <small className="text-[11px]">&copy; 2050. Copyright by Amaan</small>
          <p>
            Version <b>1.5</b>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
