import HeaderLogo from "./HeaderLogo";
import TodoCounter from "./TodoCounter";

function Header() {
  return (
    <header className="flex justify-between items-center px-[28px] col-[1/3] row-[1/2] bg-sky-300 rounded-md border-b border-black/[0.08] ">
      <HeaderLogo />
      <TodoCounter />
    </header>
  );
}

export default Header;
