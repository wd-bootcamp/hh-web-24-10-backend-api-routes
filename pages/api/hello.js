const mySuperSecret = "1234";

const saveDatabasePW = "password123456";

export default function handler(request, response) {
  console.log("accessing hello route...");
  console.log(saveDatabasePW);

  response.json({ message: "Hello World" });
}
