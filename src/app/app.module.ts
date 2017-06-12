import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

//  API
import { AgmCoreModule } from 'angular2-google-maps/core';

//  Services
import { PanierService } from './services/panier.service';
import { SignService } from './services/sign.service';

//  Components
import { HeaderComponent } from './components/header/header.component';
import { HomeSlideComponent } from './components/home/home-slide/home-slide.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { NosProduitsComponent } from './components/nos-produits/nos-produits.component';
import { PanierComponent } from './components/panier/panier.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignComponent } from './components/sign/sign.component';
import { AdminComponent } from './components/admin/admin.component';
import { Error404Component } from './components/error404/error404.component';

//  Routes

const appRoutes: Routes = [

  { path: ''          , component: HomeComponent        },
  { path: 'produits'  , component: NosProduitsComponent },
  { path: 'categories', component: CategoriesComponent  },
  { path: 'contact'   , component: ContactComponent     },
  { path: 'admin'     , component: AdminComponent       },
  { path: '**'        , component: Error404Component    }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeSlideComponent,
    CategoriesComponent,
    HomeComponent,
    NosProduitsComponent,
    PanierComponent,
    FooterComponent,
    ContactComponent,
    SignComponent,
    AdminComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot( appRoutes ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB1N3djR5Yja62HmBWn2rLoI71jMyF21cc'
    })
  ],
  providers: [
                PanierService,
                SignService
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
