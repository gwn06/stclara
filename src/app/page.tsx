import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen flex-col justify-center items-center">
      <div className="mb-4">Home page</div>

      <Link className="text-primary font-medium underline" href="/protected">
        Counter
      </Link>
      <Link className="text-primary font-medium underline" href="/signup">
        Sign up
      </Link>
      <Link className="text-primary font-medium underline" href="/signin">
        Sign in
      </Link>
    </div>
  );
}
