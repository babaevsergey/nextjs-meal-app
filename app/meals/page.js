import Link from "next/link";

export default function Meals() {
  return (
    <main>
      <h1>Meals page</h1>
      <p>
        <Link href={"/meals/meal-1"}>Meal 1</Link>
      </p>
    </main>
  );
}
