import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private _pokemonService: PokemonService) { }

  pokemon: Pokemon = null;
  routeSub: Subscription;

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      let id = params['id'];
      this._pokemonService.getPokemon(id).subscribe(data => {
        this.pokemon = data;
      });
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}