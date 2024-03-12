import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
<<<<<<< Updated upstream
import SpotifyLogin from "~/app/_components/get-profile";
import SpotifyMaps from "./_components/get-google-maps";  
=======
import Profile from "~/app/_components/get-profile";
import GoogleMapsComponent from "./_components/get-google-maps";
import { MapContainer } from "./_components/get-locations";
import { SearchMap } from "./_components/search-map";
>>>>>>> Stashed changes

export default async function Home() {
  noStore();
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
<<<<<<< Updated upstream
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
=======
        {/* <MapContainer/> */}
        <SearchMap/>
     
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-white">
            {hello ? hello.greeting : "Loading tRPC query..."}
          </p>
>>>>>>> Stashed changes

        <div className="flex flex-col items-center gap-2">
         
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl text-white">
              {session && <span>Logged in as {session.user?.name}</span>}
            </p>
            <Link
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
            >
              {session ? "Sign out" : "Sign in"}
            </Link>
          </div>
        </div>
<<<<<<< Updated upstream
        <SpotifyLogin/>
        <SpotifyMaps/>
      </div>
=======
        {/* <Profile/> */}
        <GoogleMapsComponent/>
        {/* <CrudShowcase /> */}

>>>>>>> Stashed changes
    </main>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
