import { BlogComponent } from './components/paginas/blog/blog.component';
import { MasonComponent } from './components/paginas/mason/mason.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./components/paginas/about/about.component";
import { MainComponent } from "./components/paginas/main/main.component";


const routes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'main', component: MainComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'mason', component: MasonComponent},
    {path: '***', pathMatch: 'full', redirectTo: 'main'},
]

@NgModule({
 imports: [RouterModule.forRoot(routes, {useHash: true ,scrollPositionRestoration: 'enabled'})],
 exports: [RouterModule]
})

export class AppRoutingModule{

}