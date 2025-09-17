import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // redireciona para login por padrão
  { path: 'login', component: LoginComponent },
  { path: 'pesquisa', component: PesquisaComponent },
  { path: '**', redirectTo: '/login' } // rota fallback caso usuário digite algo errado
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
