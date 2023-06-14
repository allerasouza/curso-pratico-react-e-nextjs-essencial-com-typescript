// import Prismic from '@prismicio/client';
// export function getPrismicClient(req?: unknown) {
//   const prismic = Prismic.client(process.env.PRISMIC_ENDPOINT, {
//     req,
//     accessToken: process.env.PRISMIC_ACCESS_TOKEN,
//   });
//   return prismic;
// }

import * as prismic from '@prismicio/client';
export function getPrismicClient() {
  const repoNameOrEndpoint = process.env.PRISMIC_REPO_NAME;
  // const repoNameOrEndpoint = process.env.PRISMIC_ENDPOINT;
  const client = prismic.createClient(repoNameOrEndpoint!, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });
  return client;
}
