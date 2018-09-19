import { HeaderComponent } from "./components/header/header.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeSectionComponent } from "./components/home-section/home-section.component";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { NeedComponent } from './components/need/need.component';
import { ServiceComponent } from './components/service/service.component';
import { ImagesComponent } from './components/images/images.component';
import { DownloadComponent } from './components/download/download.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, HomeSectionComponent, MainPageComponent, NeedComponent, ServiceComponent, ImagesComponent, DownloadComponent, FooterComponent],
  exports: [MainPageComponent]
})
export class SharedModule {}
