import { PrismaClient } from "@prisma/client";
// import { bcrypt } from "bcrypt";

import { artistsData } from "./artistsData";

const prisma = new PrismaClient();

const run = async () => {
  await Promise.all(
    artistsData.map((artist) => {
      return prisma.artist.upsert({
        where: {
          name: artist.name,
        },
        update: {},
        create: {
          name: artist.name,
          thumbnail: artist.thumbnail,
          songs: {
            create: artist.songs.map((song) => {
              return {
                title: song.title,
                duration: song.duration,
                url: song.url,
                thumbnail: song.thumbnail,
              };
            }),
          },
          albums: {
            create: artist.albums.map((album) => {
              return {
                title: album.title,
                thumbnail: album.thumbnail,
              };
            }),
          },
        },
      });
    })
  );
};

run()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
