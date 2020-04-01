import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'page1', component: Page1Component ,canActivate: [AuthGuard] },
  { path: 'page2', component: Page2Component },
  { path: 'chart', component: BarChartComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'forms',
    children: [
      { path: '**', redirectTo:'template-forms',pathMatch:'full' },
      { path: 'template-form', component: TemplateFormComponent },
      { path: 'reactive-form', component: ReactiveFormComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
