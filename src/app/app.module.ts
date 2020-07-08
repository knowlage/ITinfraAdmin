import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { NewsComponent } from './pages/news/news.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginlayoutComponent } from './loginlayout/loginlayout.component';
import { DashboardlayoutComponent } from './dashboardlayout/dashboardlayout.component';
import { LoginComponent } from './pages/login/login.component';
import { NewsEditeComponent } from './pages/news-edite/news-edite.component';
import { NewsSearchPipe } from './pages/news/newsSearchPipe';
import { DownloadComponent } from './pages/download/download.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { FaqsEditeComponent } from './pages/faqs-edite/faqs-edite.component';
import { FaqsSearchPipe } from './pages/faqs/faqsSearchPipe';
import { UploadComponent } from './pages/upload/upload.component';
import { DownloadEditeComponent } from './pages/download-edite/download-edite.component';
import { downloadSearchPipe} from './pages/download/downloadSearchPip';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { CarouselEditeComponent } from './pages/carousel-edite/carousel-edite.component';
import { carouselSearchPipe } from './pages/carousel/carouselSearchPip';
import { ChartsModule } from 'ng2-charts';
import { ComputersComponent } from './pages/computers/computers/computers.component';
import { ComputersInfoComponent } from './pages/computers/computers-info/computers-info.component';
import { SoftwaresComponent } from './pages/softwares/softwares/softwares.component';
import { SoftwareInfoComponent } from './pages/softwares/software-info/software-info.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    NewsComponent,
    DashboardComponent,
    LoginlayoutComponent,
    DashboardlayoutComponent,
    LoginComponent,
    NewsEditeComponent,
    NewsSearchPipe,
    DownloadComponent,
    FaqsComponent,
    FaqsEditeComponent,
    FaqsSearchPipe,
    UploadComponent,
    DownloadEditeComponent,
    downloadSearchPipe,
    CarouselComponent,
    CarouselEditeComponent,
    carouselSearchPipe,
    ComputersComponent,
    ComputersInfoComponent,
    SoftwaresComponent,
    SoftwareInfoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    CKEditorModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
