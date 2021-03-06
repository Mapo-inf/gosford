import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlModule } from 'angular-owl-carousel';

// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ElementsModule } from './pages/elements/elements.module';
import { PagesModule } from './pages/others/pages.module';
import { HomeModule } from './pages/home/home.module';

// reducers
import { appReducers, metaReducers } from './core/reducers/app.reducer';
import { wishlistReducer } from './core/reducers/wishlist.reducer';
import { compareReducer } from './core/reducers/compare.reducer';
import { cartReducer } from './core/reducers/cart.reducer';

import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { BungalowComponent } from './bungalow/bungalow.component';
import { IntroComponent } from './pages/intro/intro.component';
import { ContactComponent } from './contact/contact.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ShopComponent } from './shop/shop.component';
import { CaravanComponent } from './caravan/caravan.component';
import {ShareModule} from 'ngx-sharebuttons';
import { AboutComponent } from './about/about.component';
import { ShepherdComponent } from './shepherd/shepherd.component';
import { OldfarmComponent } from './oldfarm/oldfarm.component';
import { SustainableComponent } from './sustainable/sustainable.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BungalowComponent,
    IntroComponent,
    ContactComponent,
    ShopComponent,
    CaravanComponent,
    AboutComponent,
    ShepherdComponent,
    OldfarmComponent,
    SustainableComponent,
  ],
  imports: [
    FormsModule,
    ShareModule,
    GoogleMapsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    OwlModule,
    ElementsModule,
    PagesModule,
    SharedModule,
    HomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      progressBar: false,
      enableHtml: true,
    }),
    StoreModule.forRoot(appReducers, { metaReducers }),
    StoreModule.forFeature('cart', cartReducer),
    StoreModule.forFeature('wishlist', wishlistReducer),
    StoreModule.forFeature('compare', compareReducer),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    StoreDevtoolsModule.instrument(),
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
