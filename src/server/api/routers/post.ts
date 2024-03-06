import {
  createTRPCRouter,
  publicProcedure,
} from "app/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .query(() => {
      return {
        greeting: `Hello`,
      };
    }),

  
});
