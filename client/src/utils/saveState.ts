export default async function saveState(
  namesate: string,
  state: boolean[][],
  setAccesSave: React.Dispatch<
    React.SetStateAction<"pending" | "succes" | "failed" | "not">
  >,
  namechannel:string
) {
  setAccesSave("pending");
  try {
    const response = await fetch(
      `http://localhost:3005/create/saveState/${namesate}${new Date().toLocaleString()}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({"channel":namechannel,"matrix":state}),
      }
    );
    if (response.ok) {
      setAccesSave("succes");
    } else {
      setAccesSave("failed");
    }
  } catch (error) {
    setAccesSave("failed");
  }
}
