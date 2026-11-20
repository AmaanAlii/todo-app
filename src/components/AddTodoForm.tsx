export default function AddTodoForm() {
  return (
    <form>
      <h2 className=" font-medium text-gray-600">Add a todo</h2>
      <input
        type="text"
        className="h-[45px] border border-black/[12%] rounded-md my-[9px] text-[14px] block w-full p-[16px]"
      />
      <button
        type="submit"
        className=" h-[45px] bg-cyan-800 w-full text-white 
      cursor-pointer rounded-md hover:bg-cyan-900"
      >
        Add to list
      </button>
    </form>
  );
}
