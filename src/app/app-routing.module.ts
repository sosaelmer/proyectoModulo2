import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { DemoComponent } from './components/demo/demo.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TemplateComponent } from './components/template/template.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
  {
    path: 'home',
  component: HomeComponent
  },
  {
    path: 'products',
  component: ProductsComponent
  },
  {
    path: 'contact',
  component: ContactComponent
  },
  {
  path: 'demo',
  component: DemoComponent
  },
 ]
},
{
  path: "**",
  component: PageNotFoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
