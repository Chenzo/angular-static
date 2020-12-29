import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { PageoneComponent } from './pageone/pageone.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';
import { ProductpageComponent } from './productpage/productpage.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'pageone', component: PageoneComponent},
  { path: 'pagetwo', component: PagetwoComponent},
  {
    path: 'product', 
    component: ProductpageComponent,
    /* children: [
      {
        path: ':productID',
        component: ProductpageComponent
      }
    ] */
  },
  {
    path: 'product/:productID', 
    component: ProductpageComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageoneComponent,
    PagetwoComponent,
    ProductpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
