import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private httpClient: HttpClient) {

    this.carregarPokemons();
  }
  async carregarPokemons() {
    const requisicao = await this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon/ditto').toPromise;

    const pokemons = requisicao.results;
    console.log(requisicao);
  }
}
