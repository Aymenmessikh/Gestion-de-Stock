import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { InscriptionComponent } from './Auth/inscription/inscription.component';
import { RouterLink, RouterModule, RouterOutlet, Routes} from "@angular/router";
import { DashboardComponent } from './Page/dashboard/dashboard.component';
import { StatistiqueComponent } from './Page/statistique/statistique.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { ArticleComponent } from './Page/article/article.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NouvelArticleComponent } from './Page/nouvel-article/nouvel-article.component';
import { ListClientsComponent } from './Page/list-clients/list-clients.component';
import { ListFournisseureComponent } from './Page/list-fournisseure/list-fournisseure.component';
import { NouveuxClientComponent } from './Page/nouveux-client/nouveux-client.component';
import { NouveuxFournisseureComponent } from './Page/nouveux-fournisseure/nouveux-fournisseure.component';
import { CmndClientComponent } from './Page/cmnd-client/cmnd-client.component';
import { CmndFournisseureComponent } from './Page/cmnd-fournisseure/cmnd-fournisseure.component';
import { NvCmndClientComponent } from './Page/nv-cmnd-client/nv-cmnd-client.component';
import { NvCmndFournisseurComponent } from './Page/nv-cmnd-fournisseur/nv-cmnd-fournisseur.component';
import { CategorieComponent } from './Page/categorie/categorie.component';
import { NvCategorieComponent } from './Page/nv-categorie/nv-categorie.component';
import { ProfileComponent } from './Page/profile/profile.component';
import { authGuard } from './Guard/auth.guard';
import { CurrencyPipe } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxWebstorageModule } from 'ngx-webstorage';
import {provideToastr, ToastrModule } from 'ngx-toastr';
import { InterceptorService } from './Service/interceptor.service';
import { LigneCmndComponent } from './Page/ligne-cmnd/ligne-cmnd.component';
import { ChangePasswordComponent } from './Auth/change-password/change-password.component';
import { ModifierProfileComponent } from './Page/modifier-profile/modifier-profile.component';
import { ArtByCatComponent } from './Page/art-by-cat/art-by-cat.component';
import { roleGuard } from './Guard/role.guard';
import { AnalyseDonneeComponent } from './Page/analyse-donnee/analyse-donnee.component';
 const routes:Routes=[
   {path:'Inscription',component:InscriptionComponent},
   {path:'',component:LoginComponent},
   {path:'dash',component:DashboardComponent,children:
   [
     {path:'nvArticle',component:NouvelArticleComponent,canActivate:[authGuard]},
     {path:"listArticle",component:ArticleComponent,canActivate:[authGuard]},
     {path:'listClient',component: ListClientsComponent,canActivate:[authGuard]},
     {path:'Statistique',component:StatistiqueComponent,canActivate:[authGuard]},
     {path:'',component:StatistiqueComponent,canActivate:[authGuard]},
     {path: 'listFournisseure',component: ListFournisseureComponent,canActivate:[authGuard]},
     {path: "nvClient",component: NouveuxClientComponent,canActivate:[authGuard]},
     {path: 'nvFournisseure',component: NouveuxFournisseureComponent,canActivate:[authGuard]},
     {path:'cmndClient',component: CmndClientComponent,canActivate:[authGuard]},
    // {path: 'CmndFournisseure',component: CmndFournisseureComponent,canActivate:[authGuard]},
     {path: "nvCmndClient",component: NvCmndClientComponent,canActivate:[authGuard]},
    // {path: 'nvCmndFournisseure',component: NvCmndFournisseurComponent,canActivate:[authGuard]},
     {path: "categorie",component: CategorieComponent,canActivate:[authGuard]},
     {path: "nvCategorie",component: NvCategorieComponent,canActivate:[authGuard]},
     {path: "profile",component: ProfileComponent,canActivate:[authGuard]},
     {path: "ligne/:id",component: LigneCmndComponent,canActivate:[authGuard]},
     {path: "change",component:ChangePasswordComponent,canActivate:[authGuard]},
     {path: "modifierProfile",component:ModifierProfileComponent,canActivate:[authGuard]},
     {path: "articleByCategorie/:id",component:ArtByCatComponent,canActivate:[authGuard]},
     ]
   },
 ];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriptionComponent,
    DashboardComponent,
    StatistiqueComponent,
    MenuComponent,
    HeaderComponent,
    ArticleComponent,
    PaginationComponent,
    NouvelArticleComponent,
    ListClientsComponent,
    ListFournisseureComponent,
    NouveuxClientComponent,
    NouveuxFournisseureComponent,
    CmndClientComponent,
    CmndFournisseureComponent,
    NvCmndClientComponent,
    NvCmndFournisseurComponent,
    CategorieComponent,
    NvCategorieComponent,
    ProfileComponent,
    LigneCmndComponent,
    ChangePasswordComponent,
    ArtByCatComponent,
    AnalyseDonneeComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterLink,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    NgxWebstorageModule.forRoot(),

  ],
  providers: [provideAnimations(),
    provideToastr(),
    {
      provide:HTTP_INTERCEPTORS,
    useClass:InterceptorService,
    multi:true
    }, CurrencyPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
