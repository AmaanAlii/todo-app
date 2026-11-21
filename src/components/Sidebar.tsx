import AddTodoForm from "./AddTodoForm";
import PrimaryButton from "./PrimaryButton";

export default function Sidebar() {
  return (
    <section
      className="w-full flex flex-col justify-between items-center 
    col-[2/3] row-[2/3] border-l border-black/[0.08] px-[25px] pt-[18px] pb-[28px]"
    >
      <AddTodoForm />
      <div className=" w-full space-y-4">
        <PrimaryButton buttonType="secondary">Log In</PrimaryButton>
        <PrimaryButton buttonType="secondary">Register</PrimaryButton>
      </div>
    </section>
  );
}
