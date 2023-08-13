import { redirect } from "react-router-dom";

export async function requireAuth(request) {
  const pathname = new URL(request.url).pathname;
  const isLoggedIn = true;

  if (!isLoggedIn) {
    const url = `/login?message=Youmustloginfirst.&redirectTo=${pathname}`;
    const response = new Response(null, {
      status: 302,
      headers: {
        Location: url,
      },
    });

    throw response;
  }

  return null;
}
