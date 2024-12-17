import useSWR from "swr";
import Link from "next/link";

const unsavePassword = "password123456";

export default function HomePage() {
  const { data, isLoading } = useSWR("/api/jokes");

  const { data: myData } = useSWR("/api/hello");
  console.log(unsavePassword);
  console.log(myData);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <h1>{myData?.message}</h1>
      <ul>
        {data.map((joke) => (
          <li key={joke.id}>
            <Link href={`/${joke.id}`}>{joke.joke}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
