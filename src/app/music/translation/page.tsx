'use client'
import { Metadata } from "next"
import Image from "next/image"
import { PlusCircledIcon } from "@radix-ui/react-icons"

import { Button } from "~/components/ui/button"
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area"
import { Separator } from "~/components/ui/separator"
import SpotifyMaps from "~/app/_components/get-google-maps";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/ui/tabs"

import { AlbumArtwork } from "../components/album-artwork"
import { Menu } from "../components/menu"
import { PodcastEmptyPlaceholder } from "../components/podcast-empty-placeholder"
import { SidebarTranslation } from "~/app/music/translation/components/sidebarTranslation"
import { listenNowAlbums, madeForYouAlbums } from "../data/albums"
import { playlists } from "../data/playlists"
import SpotifyLogin from "../../_components/get-profile"
import { useState } from "react"
import { UserProfile } from "../components/spotify-api"

// export const metadata: Metadata = {
//   title: "Music App",
//   description: "Example music app using the components.",
// }

export default function MusicPage() {

  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [recentlyPlayed, setRecentlyPlayed] = useState(null);

  return (
    <>
    <SpotifyLogin profile={profile} setProfile={setProfile} recentlyPlayed={recentlyPlayed} setRecentlyPlayed={setRecentlyPlayed}/>
      <div className="hidden md:block">
        <Menu />
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <SidebarTranslation playlists={playlists} className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                  <Tabs defaultValue="music" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      
                      <div className="ml-auto mr-4">
                        <Button>
                          <PlusCircledIcon className="mr-2 h-4 w-4" />
                          Add music
                        </Button>
                      </div>
                    </div>
                    

          
                    <TabsContent
                      value="podcasts"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <SpotifyMaps />
                      {/* <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            New Episodes
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Your favorite podcasts. Updated daily.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <PodcastEmptyPlaceholder /> */}
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
