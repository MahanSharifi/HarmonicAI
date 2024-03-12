export interface Album {
    name: string
    artist: string
    playlistID: string
    latitude: number
    longitude: number
    cover: string
    location: string

  }
  
  export const listenNowAlbums: Album[] = [
    {
      name: "nadie sabe lo que va a pasar manana",
      artist: "Bad Bunny",
      location: "What Trevor listened to in Spain",
      playlistID: "1fVGCu_hQbmgkzocxNrvXQ",
      longitude:41.40600390718049,
      latitude: 2.1742486363687723,
      cover: "/badbunny.png",
    },
    {
      name: "Jim Grind",
      artist: "Harmonic.AI",
      location: "What your friends have been listening to at CIF",
      playlistID: "TBD",
      longitude: 43.475409326311556,
      latitude: -80.547856418603,
      cover:
        "https://images.unsplash.com/photo-1522120691812-dcdfb625f397?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Book Worm",
      artist: "Harmonic.AI",
      location: "Your UWaterloo MC Grind",
      playlistID: "TBD",
      longitude: 43.47228403315663,
      latitude: -80.54388888791887,
      cover:
        "https://images.unsplash.com/photo-1570586790305-4f115cb439c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Red Bridge",
      artist: "Harmonic.AI",
      location: "What Eden has been listening to in San Fransisco",
      playlistID: "TBD",
      longitude: 37.82050646298014,
      latitude: -122.47846052236056,
      cover:
        "https://images.unsplash.com/photo-1583743220494-3da91330c2fd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]
  
  export const madeForYouAlbums: Album[] = [
    {
      name: "2000s Throwbacks",
      artist: "Various Artists",
      location: "Pearson Airport",
      playlistID: "SfwONl_DSBCW-h14iFqrig",
      longitude: 43.677335259598735,
      latitude: -79.63341031859257,
      cover:
        "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmV3aW5kfGVufDB8fDB8fHww",
    },
    {
      name: "Larger Than Life",
      artist: "Brent Fiyaz",
      location: "Ontario Place Toronto",
      playlistID: "SClOGuJRQmuwcRsYK3RS3g",
      longitude: 43.628564124720825,
      latitude:  -79.41535772439777,
      cover:
        "/brent.jpeg",
    },
    {
      name: "All I Do Is Win (feat. T-Pain, Ludacris, Snoop Dogg, & Rick Ross)",
      artist: "DJ Khaled",
      location: "Fallsview Casino Niagara",
      playlistID: "9249b3dd1e0e4b11",
      longitude: 43.082857049244296,
      latitude: -79.08067878465785,
      cover:
        "/djkhaled.jpeg",
    },
    {
      name: "1989 (Taylor's Version)",
      artist: "Taylor Swift",
      location: "Go Bus Station",
      playlistID: "ReOxSLJ-RIyQb31f4KZlWQ",
      longitude: 43.45568009867227,
      latitude: -80.4931650548791,
      cover:
        "/1989.jpeg",
    },
    {
      name: "Call Me By Your Name (Original Motion Picture Soundtrack)",
      artist: "Various Artists",
      location: "Lazardis Hall",
      playlistID: "Lczd1eC4SQCJIvbTwED1dg",
      longitude: 43.47526725476961,
      latitude: -80.52951237627407,
      cover:
        "/callmebyyourname.png",
    },
    {
      name: "Take Care (Deluxe)",
      artist: "Drake",
      location: "Listened at home @ ~1am",
      playlistID: "mGxSu8OmRnSRf8quHRYGTg",
      longitude: 37.82050646298014,
      latitude: -122.47846052236056,
      cover:
        "/TakeCare.jpeg",
    },
  ]
  