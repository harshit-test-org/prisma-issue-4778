import { PrismaClient } from "@prisma/client";

async function problemQuery() {
  const client = new PrismaClient();
  return await client.elections.findMany({
    select: {
      locations: {
        select: {
          fips: true,
          name: true,
          district: true,
          state: true,
        },
      },
      results: {
        select: {
          votes: true,
          parties: true,
          candidates: {
            select: {
              name: true,
            },
          },
        },
      },
    },
    where: {
      year: 2016,
      offices: {
        name: "president",
      },
    },
  });
}

problemQuery();
