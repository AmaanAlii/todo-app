import DeleteButton from "./DeleteButton";

const initialTodos = ["Add your tasks", "Complete them", "Start working"];

export default function TodoList() {
  return (
    <ul className=" p-2">
      {initialTodos.map((todo, index) => (
        <li
          key={index}
          className=" flex justify-between w-full p-[15px] h-[50px] border-b border-black/[10%]"
        >
          <span>{todo}</span>
          <DeleteButton />
        </li>
      ))}
    </ul>
  );
}
