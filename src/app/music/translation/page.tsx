'use client'

import { PlusCircledIcon } from "@radix-ui/react-icons"

import { Button } from "~/components/ui/button"

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


  // Hardcoded dropdown data
  const dropdownItems = [
    { id: 1, name: "English" },
    { id: 2, name: "Spanish" },
    { id: 3, name: "French" },
    { id: 4, name: "German" },
  ];
  export default function MusicPage() {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [recentlyPlayed, setRecentlyPlayed] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState('Languages');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showImages, setShowImages] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleDropdownItemClick = (itemName) => {
      setSelectedLanguage(itemName);
      setIsDropdownOpen(false);
    };
  
    const handleSearchClick = (e) => {
      e.preventDefault(); // Prevent form submission
      setShowImages(true);
    };
  
    return (
      <>
        <SpotifyLogin profile={profile} setProfile={setProfile} recentlyPlayed={recentlyPlayed} setRecentlyPlayed={setRecentlyPlayed} />
        <div className='hidden md:block'>
          <Menu />
          <div className='border-t'>
            <div className='bg-background'>
              <div className='grid lg:grid-cols-5'>
                <SidebarTranslation playlists={playlists} className='hidden lg:block' />
                <div className='col-span-3 lg:col-span-4 lg:border-l'>
                  <div className='h-full px-4 py-6 lg:px-8'>
                    <Tabs defaultValue='music' className='h-full space-y-6'>
                      <div className='space-between flex items-center'>
                        <div className='ml-auto mr-4'>
                          <Button>
                            <PlusCircledIcon className='mr-2 h-4 w-4' />
                            Add music
                          </Button>
                        </div>
                      </div>
                      <form className='max-w-lg mx-auto' onSubmit={handleSearchClick}>
                        <div className='flex'>
                          <div className='relative'>
                            <button id='dropdown-button' data-dropdown-toggle='dropdown' onClick={toggleDropdown} className='flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600' type='button'>
                              {selectedLanguage}
                              <svg className='w-2.5 h-2.5 ml-2.5' aria-hidden='true' fill='none' viewBox='0 0 10 6'>
                                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
                              </svg>
                            </button>
                            {isDropdownOpen && (
                              <div id='dropdown' className='z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'>
                              <ul className='py-2 text-sm text-gray-700 dark:text-gray-200' aria-labelledby='dropdown-button'>
                                {dropdownItems.map((item) => (
                                  <li key={item.id}>
                                    <button type='button' onClick={() => handleDropdownItemClick(item.name)} className='inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                                      {item.name}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                        <div className='relative w-full'>
                          <input type='search' id='search-dropdown' className='block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500' placeholder='Search Song' required />
                          <button type='submit' className='absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                            <svg className='w-4 h-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
                              <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z' />
                            </svg>
                            <span className='sr-only'>Search</span>
                          </button>
                        </div>
                      </div>
                    </form>
                    {/* Placeholder for images */}
                    {showImages && (
                      <div className='flex flex-wrap justify-center gap-8 mt-12'>
                      <div className='text-center'>
                        <a href='https://www.youtube.com/watch?v=dSRZ_1ncRhQ' target='_blank' rel='noopener noreferrer'>
                          <img src='/svag.jpeg' alt='Image 1' className='w-60 h-60 object-cover rounded-lg cursor-pointer' />
                        </a>
                        <div className='mt-2 text-lg font-medium text-green-500'>Original</div>
                      </div>
                      <div className='text-center'>
                        <a href='https://www.youtube.com/watch?v=dSRZ_1ncRhQ' target='_blank' rel='noopener noreferrer'>
                          <img src='/svag.jpeg' alt='Image 2' className='w-60 h-60 object-cover rounded-lg cursor-pointer' />
                        </a>
                        <div className='mt-2 text-lg font-medium text-green-500'>Translation: English</div>
                      </div>
                    </div>
                    )}
                    <TabsContent value='podcasts' className='h-full flex-col border-none p-0 data-[state=active]:flex'>
                      {/* Your content here */}
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

  
  
  
  
  