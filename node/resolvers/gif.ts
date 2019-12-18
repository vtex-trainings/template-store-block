export const gif = async (
    _: any,
    { query }: { query: string },
    ctx: Context
) => {
  const { clients: { giphy }} = ctx
  
  console.log('HOLA AMIGOS', { query })
  return giphy.translateGif(query)
}