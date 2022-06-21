import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPokemonComponent } from "./edit-pokemon/edit-pokemon.component";
import { DetailPokemonComponent } from './detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon.component';
import { AuthGuardService } from '../auth-guard.service';

//const appRoutes: Routes = [
// { path: 'pokemons', component: ListPokemonComponent },
// { path: 'pokemon/edit/:id', component: EditPokemonComponent },
// { path: 'pokemon/:id', component: DetailPokemonComponent },
//];
const pokemonRoutes: Routes = [
    {
        path: 'pokemon',
        canActivate: [AuthGuardService],
        children: [
            { path: 'All', component: ListPokemonComponent },
            { path: 'edit/:id', component: EditPokemonComponent },
            { path: ':id', component: DetailPokemonComponent }
        ]
    }
]


@NgModule({
    imports: [
        RouterModule.forChild(pokemonRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PokemonRoutingModule {

}