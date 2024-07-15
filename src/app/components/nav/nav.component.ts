import { Component } from '@angular/core';
import { PokemonListComponent } from "../../pages/pokemon-list/pokemon-list.component";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [PokemonListComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
