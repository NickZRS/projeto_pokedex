import { Component, OnInit } from '@angular/core';
import { Pokedex } from '../pokedex';
import {PokedexService} from './../pokedex.service'

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  constructor(private pokedexService: PokedexService){}

  ngOnInit(): void {
    this.loadPokemon();
  }
  id = 1;
  decrease(){
    if(this.id == 1){
      this.id = 1010;
    }else{
      this.id--
    } 
    this.loadPokemon();
  }
  increase(){
    if(this.id == 1010){
      this.id = 1;
    }else{
      this.id++
    }
    this.loadPokemon();
  }
  loadPokemon(){
    this.pokedexService.getPokemon(this.id).subscribe({
      next : pokedex => this.pokedex = pokedex

    }
    );
  }
  
  
  
  imagemPokemon(){
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+ this.id +".png";
  }
  
  
  pokedex : Pokedex = {} as Pokedex;

  
}
