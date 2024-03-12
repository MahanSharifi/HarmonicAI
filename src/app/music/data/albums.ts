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
      name: "Taylor's Version",
      artist: "Taylor Swift",
      locationName: "Waterloo E7 Grind",
      playlistID: "37i9dQZF1DX5KpP2LN299J",
      position: {
        lng: 43.4730,
        lat: -80.5395,
      },
      cover: "https://images.unsplash.com/photo-1522120691812-dcdfb625f397?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Jim Grind (PAC)",
      artist: "Harmonic.AI",
      locationName: "Jim Grind (PAC)",
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
      cover: "https://images.unsplash.com/photo-1583743220494-3da91330c2fd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]
  
  export const madeForYouAlbums: Album[] = [
    {
      name: "Thinking Components",
      artist: "Lena Logic",
      locationName: "Listened at home @ ~1am",
      playlistID: "6dQz1ZnwnluFiUhBOMrJQC",
      position: {
        lat: 43.4729,
        lng: -80.5420,
      },
      cover: "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80",
    },
    {
      name: "Functional Fury",
      artist: "Beth Binary",
      locationName: "Listened at home @ ~1am",
      playlistID: "6dQz1ZnwnluFiUhBOMrJQC",
      position: {
        lat: 43.4729,
        lng: -80.5420,
      },
      cover: "https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80",
    },
    {
      name: "React Rendezvous",
      artist: "Ethan Byte",
      locationName: "Listened at home @ ~1am",
      playlistID: "6dQz1ZnwnluFiUhBOMrJQC",
      position: {
        lat: 43.4729,
        lng: -80.5420,
      },
      cover: "https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80",
    },
    {
      name: "Stateful Symphony",
      artist: "Beth Binary",
      locationName: "Listened at home @ ~1am",
      playlistID: "6dQz1ZnwnluFiUhBOMrJQC",
      position: {
        lat: 43.4729,
        lng: -80.5420,
      },
      cover: "https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80",
    },
    {
      name: "Call Me By Your Name (Original Motion Picture Soundtrack)",
      artist: "Various Artists",
      locationName: "Lazardis Hall",
      playlistID: "6dQz1ZnwnluFiUhBOMrJQC",
      position: {
        lat: 43.47526725476961,
        lng: -80.52951237627407,
      },
      cover: "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
    },
    {
      name: "Take Care (Deluxe)",
      artist: "Drake",
      locationName: "Listened at home @ ~1am",
      playlistID: "6dQz1ZnwnluFiUhBOMrJQC",
      position: {
        lat: 43.4729,
        lng: -80.5420,
      },
      cover: "/TakeCare.jpeg",
    },
  ]
