import { jokes } from "@/lib/data";

export default function handler(request, response) {
  response.json(jokes); // TODO: database query soon!
}
