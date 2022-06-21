import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';

@Component({
    selector: 'detail-pokemon',
    templateUrl: './detail-pokemon.component.html',
})

export class DetailPokemonComponent implements OnInit, OnDestroy {
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _pokemonService: PokemonService) { }

    pokemon: Pokemon;
    private routeSub: Subscription;

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            let id = params['id'];

            // VS Typescript
            //maVariableTemporaire => operateur)
            // this.pokemon = this.pokemons.filter(x =>x.id ==id)[0];
            //this.pokemon = this.pokemons.find(x =>x.id ==id);
            this._pokemonService.getPokemon(id).subscribe(data => {
                this.pokemon = data;

            });
        });

    }
    goBack() {
        this.router.navigate(['/pokemons/All']);
    }
    goEdit(pokemon: Pokemon) {
        let link = ['pokemon/edit', pokemon.id];
        this.router.navigate(link);
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
    goDelete(pokemonId: number) {
        this._pokemonService.deletePokemon(pokemonId).subscribe(() => {
            this.goBack();
        })
    }
}