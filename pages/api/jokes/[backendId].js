import { jokes } from "@/lib/data";

export default function handler(request, response) {
  console.log("accessing route with id:", request.query.backendId);

  const joke = jokes.find((joke) => joke.id === request.query.backendId);

  if (joke === undefined) {
    response.status(404).json({ status: "not found" });
    return;
  }

  response.json(joke);
}
