import { Routes } from '@angular/router';
import { HomeComponent } from './home/component/home.component';
import { UsersComponent } from './users/componentes/users.component';
import { RepositoriesComponent } from './repositories/componentes/repositories.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'repositories', component: RepositoriesComponent },

];
