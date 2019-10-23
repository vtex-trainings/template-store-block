import { IOClients } from '@vtex/api'

import Giphy from './giphy'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get giphy() {
    return this.getOrSet('giphy', Giphy)
  }
}
