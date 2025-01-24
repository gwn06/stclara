import CounterApp from "../components/counter-app";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { signOutAction } from "../actions";

export default async function Protected() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/signin");
  }
  return (
    <div className="flex flex-col items-center h-screen mx-8 my-2">
      <div className="flex flex-row space-x-2 items-center justify-end w-full">
        <div>{data.user.email}</div>
        <form action={signOutAction}>
          <button
            type="submit"
            className="border rounded p-2 hover:bg-gray-100"
          >
            Sign out
          </button>
        </form>
      </div>
      <CounterApp />
    </div>
  );
}
