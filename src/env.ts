// import { z } from 'zod'

// const envSchema = z.object({
//   NEXT_PUBLIC_API_BASE_URL: z.string().url(),
//   APP_URL: z.string().url(),
// })

// const parsedEnv = envSchema.safeParse(process.env)

// if (!parsedEnv.success) {
//   console.error(
//     'Invalid envieronment variables',
//     parsedEnv.error.flatten().fieldErrors,
//   )

//   throw new Error('Invalid environment variables')
// }

// export const env = parsedEnv.data

import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    APP_URL: z.string().url(),
  },

  client: {
    NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  },

  runtimeEnv: {
    APP_URL: process.env.APP_URL,
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
})
