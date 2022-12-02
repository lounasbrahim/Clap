const libraryLinks = {
  heading: "Library",
  links: [
    {
      text: "Trending",
      svgIcon: "fire",
      route: "/trending",
    },
    {
      text: "Most Liked",
      svgIcon: "heart",
      route: "/most-liked",
    },
    {
      text: "Around You",
      svgIcon: "globe",
      route: "/around-you",
    },
  ],
};

const exploreLinks = {
  heading: "Explore",
  links: [
    {
      text: "Playlist",
      svgIcon: "playlist",
      route: "/playlist",
    },
    {
      text: "Songs",
      svgIcon: "song",
      route: "/songs",
    },
    {
      text: "Artists",
      svgIcon: "artist",
      route: "/artists",
    },
  ],
};

const playlistLinks = {
  heading: "",
  links: [
    {
      text: "Create Playlist",
      svgIcon: "playlist",
      route: "/playlists",
    },
  ],
};

export { libraryLinks, exploreLinks, playlistLinks };
