import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { CatalogComponent } from './components/catalog/catalog.component';

const appRoutes: Routes = [
  { path: '', component: CatalogComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
