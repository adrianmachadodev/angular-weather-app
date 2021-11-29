import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () =>
      import('@modules/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'weather',
    loadChildren: () =>
      import('@modules/weather/weather.module').then((m) => m.WeatherModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('@modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**', //TODO 404 cuando no existe la ruta
    redirectTo: '/weather',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
