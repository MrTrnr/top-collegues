import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
import { ListeColleguesComponentComponent } from './liste-collegues-component/liste-collegues-component.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ScorePipe } from './pipes/score.pipe';
import { NouveauCollegueTemplateFormComponent } from './nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NomPrenomValidatorDirective } from './validators/nom-prenom-validator.directive';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailCollegueComponent } from './detail-collegue/detail-collegue.component';

const routerConfig: Routes =[
  {
    path: 'formulaire', component:NouveauCollegueTemplateFormComponent
  },
  {
    path: 'accueil', component:AccueilComponent
  },
  {
    path:'', pathMatch:'full', redirectTo:'/accueil'
  },
  {
    path:'collegues/:id', component:DetailCollegueComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponentComponent,
    AccueilComponent,
    ScorePipe,
    NouveauCollegueTemplateFormComponent,
    NomPrenomValidatorDirective,
    MenuComponent,
    DetailCollegueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
