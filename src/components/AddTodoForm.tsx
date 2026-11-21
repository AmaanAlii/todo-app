import PrimaryButton from "./PrimaryButton";

export default function AddTodoForm() {
  return (
    <form className=" w-full">
      <h2 className=" font-medium text-gray-600">Add a todo</h2>
      <input
        type="text"
        className="h-[45px] border border-black/[12%] rounded-md my-[9px] text-[14px] block w-full p-[16px]"
      />
      <PrimaryButton>Add to list</PrimaryButton>
    </form>
  );
}
