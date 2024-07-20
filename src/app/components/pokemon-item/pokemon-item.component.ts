import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon, PokemonResults } from '../../models/pokemon';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../core/services/pokemon.service';

@Component({
  selector: 'app-pokemon-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-item.component.html',
  styleUrl: './pokemon-item.component.css',
})
export class PokemonItemComponent implements OnChanges {
  
  constructor(private pokemonService: PokemonService){
  }
  ngOnChanges(): void {
    this.getInfo();
  }
  @Input() pokemonInfo!: Pokemon;
  pokemonID: string = '0';

  getInfo() {
    this.pokemonID = this.pokemonInfo.url.substring(34, this.pokemonInfo.url.length-1);
    this.pokemonService.getById(this.pokemonID);
  }
}
