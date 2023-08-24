import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Layout/header/header.component';
import { HomeComponent } from './Pages/home/home.component';
import { SearchComponent } from './Components/Layout/search/search.component';
import { TagsComponent } from './Components/Layout/tags/tags.component';
import { CartPageComponent } from './Pages/cart-page/cart-page.component';
import { TitleComponent } from './Components/title/title.component';
import { NotFoundComponent } from './Components/Layout/not-found/not-found.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
