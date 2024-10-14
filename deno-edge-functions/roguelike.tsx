/* export APIs to the Bodhi ecology, including the follow APIs:
- read bodhi text assets
- read bodhi pic assets
- read bodhi assets sliced
- read bodhi spaces
- using bodhi as a auth? That may be c00l.
*/
// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.
import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import { oakCors } from 'https://deno.land/x/cors/mod.ts';

// // for ether
// import { ethers } from "https://cdn.skypack.dev/ethers@5.6.8";

// import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
// import { render } from "@deno/gfm";
// import { gql } from "https://deno.land/x/graphql_tag@0.0.1/mod.ts";
// import { print } from "https://deno.land/x/graphql_deno@v15.0.0/mod.ts";

console.log('Hello from Roguelike!');

const router = new Router();

router.get('/', async (context) => {
  context.response.body = { result: 'Hello World!' };
});

const app = new Application();

// Configure CORS to only allow requests from https://roguelike.rootmud.xyz
const corsOptions = {
  origin: 'https://roguelike.rootmud.xyz',
};

app.use(oakCors(corsOptions)); // Enable CORS with specific options
app.use(router.routes());

console.info('CORS-enabled web server listening on port 8000');
await app.listen({ port: 8000 });
