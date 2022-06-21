import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { POKEMONS } from "./mock-pokemons";
import { Pokemon } from "./pokemon";

@Injectable()
export class PokemonService {

    private pokemonsUrl = 'api/pokemons';
    PokemonUrl: string;

    constructor(private http: HttpClient) { }



    //HTTP
    //GET, post


    getPokemons(): Observable<Pokemon[]> {
        return this.http.get<Pokemon[]>(this.pokemonsUrl);
    }

    getPokemon(id: number): Observable<Pokemon> {

        // GET URL ==> api/pokemons/1
        var url = `${this.pokemonsUrl}/${id}`;
        return this.http.get<Pokemon>(url);

    }
    getPokemonTypes(): Array<string> {
        return [
            'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
            'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
        ];
    }

    updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-type': 'application/json' })
        }

        return this.http.put<Pokemon>(this.pokemonsUrl, pokemon, httpOptions);
    }
    deletePokemon(id:number ): Observable<Pokemon> {
        var url = `${this.pokemonsUrl}/${id}`;

        return this.http.delete<Pokemon>(this.pokemonsUrl + '/' + id);
    }
    searchPokemons(term: string) : Observable<Pokemon[]> {
        if(!term.trim()) 
            return of([]);

        return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`)
    }

}