import {
  json
} from 'co-body'

export async function handleGif(ctx: Context, next: () => Promise < any > ) {
  const body = await json(ctx.req)

  const {
    query,
  } = body

  ctx.set('cache-control', 'no-cache,no-store')
  const url = await ctx.clients.giphy.translateGif(query)

  ctx.status = 200
  ctx.body = {
    url,
  }

  await next()
}