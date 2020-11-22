import { useRouter } from "next/router";

export default function GoBack(): JSX.Element {
  const router = useRouter();

  return (
    <>
      <button className="goback" onClick={() => router.back()}>
        Go back
      </button>
    </>
  );
}
