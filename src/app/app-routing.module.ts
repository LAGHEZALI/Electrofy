import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//  Components
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { NosProduitsComponent } from './components/nos-produits/nos-produits.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminComponent } from './components/admin/admin.component';
import { Error404Component } from './components/error404/error404.component';

const appRoutes: Routes = [

  { path: 'accueil'   , component: HomeComponent          },
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'produits'  , component: NosProduitsComponent   },
  { path: 'categories', component: CategoriesComponent    },
  { path: 'contact'   , component: ContactComponent       },
  { path: 'admin'     , component: AdminComponent         },
  { path: '**'        , component: Error404Component      }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}