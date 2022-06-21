import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNoteFoundComponent } from './page-not-found.component';


const appRoutes: Routes = [
    
    { path: '', redirectTo: 'pokemon/All', pathMatch: 'full' }, // localhost redirigé sur une adresse URL complète
    { path:'**',component: PageNoteFoundComponent}
];

@NgModule({

    imports: [
        RouterModule.forRoot(appRoutes)
    ],

    exports: [
        RouterModule
    ]

})
export class AppRoutingModule {

}