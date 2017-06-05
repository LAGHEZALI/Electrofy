import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { PanierService } from './services/panier.service';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { HeaderComponent } from './components/header/header.component';
import { HomeSlideComponent } from './home/home-slide/home-slide.component';
import { ConnexionModalComponent } from './components/connexion-modal/connexion-modal.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { NosProduitsComponent } from './components/nos-produits/nos-produits.component';
import { PanierComponent } from './components/panier/panier.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeSlideComponent,
    ConnexionModalComponent,
    CategoriesComponent,
    HomeComponent,
    NosProduitsComponent,
    PanierComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'categories',
        component: CategoriesComponent
      },
      {
        path: 'produits',
        component: NosProduitsComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB1N3djR5Yja62HmBWn2rLoI71jMyF21cc'
    })
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
