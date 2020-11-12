import { useRouter } from "next/router";

export default function GoBack() {
  const router = useRouter();

  return (
    <>
      <button className="goback" onClick={() => router.back()}>
        Go back
      </button>
    </>
  );
}
