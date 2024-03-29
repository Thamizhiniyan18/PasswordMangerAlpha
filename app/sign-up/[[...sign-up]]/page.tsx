import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full h-[calc(100vh-80px)] flex justify-center items-center">
      <SignUp />
    </div>
  );
}
