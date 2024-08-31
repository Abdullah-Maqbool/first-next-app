// http://localhost:3000/api/users

export async function GET(request) {
  //Handle GET request for /api/users

  const user = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "John Smith" },
  ];

  return new Response(JSON.stringify(user));
}
