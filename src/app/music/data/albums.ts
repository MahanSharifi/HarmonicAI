export interface Album {
    name: string
    artist: string
    playlistID: string
    position: {
        lng: number
        lat: number
    }
    cover: string
    locationName: string
  }
  
  export const listenNowAlbums: Album[] = [
    {
      name: "E7 Grind",
      artist: "Harmonic.AI",
      locationName: "Waterloo E7 Grind",
      playlistID: "1fVGCu_hQbmgkzocxNrvXQ",
      position: {
        lng: 43.4730,
        lat: -80.5395,
      },
      cover: "/Image.png",
    },
    {
      name: "Jim Grind (PAC)",
      artist: "Harmonic.AI",
      locationName: "PAC",
      playlistID: "06SaU2MyFcfyXvdkhtoNbw",
      position: {
        lng: 43.4723,
        lat: -80.5461,
      },
      cover: "https://images.unsplash.com/photo-1522120691812-dcdfb625f397?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Yellow Fever",
      artist: "Harmonic.AI",
      locationName: "MC Grind",
      playlistID: "3tnR5EPv6bTNzvvp3Hne6U",
      position: {
        lng: 43.4722,
        lat: -80.5439,
      },
      cover: "https://images.unsplash.com/photo-1570586790305-4f115cb439c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "DC Grind",
      artist: "Harmonic.AI",
      locationName: "DC Grind",
      playlistID: "6dQz1ZnwnluFiUhBOMrJQC",
      position: {
        lng: 43.4729,
        lat: -80.5420,
      },
      cover: "/DC.jpeg",
    },
  ]
  
  export const madeForYouAlbums: Album[] = [
    {
      name: "2000s Throwbacks",
      artist: "Various Artists",
      locationName: "Pearson Airport",
      playlistID: "SfwONl_DSBCW-h14iFqrig",
      position: {
        lng: 43.6773,
        lat: -80.5420,
      },
      cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmV3aW5kfGVufDB8fDB8fHww",
    },
    {
      name: "Larger Than Life",
      artist: "Brent Fiyaz",
      locationName: "Ontario Place Toronto",
      playlistID: "SClOGuJRQmuwcRsYK3RS3g",
      position: {
        lng: 43.6285,
        lat: -79.4153,
      },
      cover: "/brent.jpeg",
    },
    {
      name: "All I Do Is Win (feat. T-Pain, Ludacris, Snoop Dogg, & Rick Ross)",
      artist: "DJ Khaled",
      locationName: "Fallsview Casino Niagara",
      playlistID: "9249b3dd1e0e4b11",
      position: {
        lng: 43.08285,
        lat: -79.0806,
      },
      cover: "/djkhaled.jpeg",
    },
    {
      name: "1989 (Taylor's Version)",
      artist: "Taylor Swift",
      locationName: "Go Bus Station",
      playlistID: "ReOxSLJ-RIyQb31f4KZlWQ",
      position: {
        lng: 43.4556,
        lat: -80.4931,
      },
      cover: "/1989.jpeg",
    },
    {
      name: "Call Me By Your Name (Original Motion Picture Soundtrack)",
      artist: "Various Artists",
      locationName: "Lazardis Hall",
      playlistID: "Lczd1eC4SQCJIvbTwED1dg",
      position: {
        lng: 43.4752,
        lat: -80.5295,
      },
      cover: "/callmebyyourname.png",
    },
    {
      name: "Take Care (Deluxe)",
      artist: "Drake",
      locationName: "Listened at home @ ~1am",
      playlistID: "6dQz1ZnwnluFiUhBOMrJQC",
      position: {
        lng: 43.4729,
        lat: -80.5420,
      },
      cover: "/TakeCare.jpeg",
    },
  ]

