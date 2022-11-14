import { CineComponent } from "./components/cine/cine.component";
import { HomeComponent } from "./components/home/home.component";
import { MusicaComponent } from "./components/musica/musica.component";
import { Error404Component } from "./components/error404/error404.component";

//MODULOS PARA ROUTING
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';

//ARRAY DE OBJETO Routes
const appRoutes : Routes = [
    {path: "" , component : HomeComponent},
    {path: "cine" , component : CineComponent},
    {path: "musica" , component : MusicaComponent},
    {path: "**" , component : Error404Component},
]

//EXPORTAR DOS ELEMENTOS PARA APP.MODULE.TS
export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

