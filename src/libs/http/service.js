import axios from 'axios';

export class HttpService {
  url = "https://pokeapi.co/api/v2/";

  async get(uri){
    return await axios.get(`${this.url}${uri}`);
  }
}
