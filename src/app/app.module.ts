import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavigationComponent } from './navigation/navigation/navigation.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { HomeComponent } from './view/home/home.component';
import { AlbumsService } from './services/albums.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ThumbnailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AlbumsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
