import {
  ExternalClient,
  InstanceOptions,
  IOContext
} from '@vtex/api'

export default class Giphy extends ExternalClient {
  private routes = {
    translate: (): string => 'translate',
  }
  constructor(
    context: IOContext,
    options ? : InstanceOptions) {
    super('https://api.giphy.com/v1/gifs/', context, options)
  }

  public async translateGif(query: string): Promise<any> {
    const { 
      data: {
        images: {
          original: {
            url,
          },
        },
      },
    } = await this.http.get(
      this.routes.translate(), 
      {
        headers: {
          'X-Vtex-Use-Https': true,
        },
        params: {
          api_key: 'dp2scGnUcDee5yLRI1qJMTRTAAJey9Tl',
          s: query,
        },
      }
    )

    return {url}
  }
}
