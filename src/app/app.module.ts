import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherHeaderContainerComponent } from './weather/weather-header-container/weather-header-container.component';
import { WeatherCitiesContainerComponent } from './weather/weather-cities-container/weather-cities-container.component';
import { WeatherBodyContainerComponent } from './weather/weather-body-container/weather-body-container.component';
import { WeatherFooterContainerComponent } from './weather/weather-footer-container/weather-footer-container.component';
import { WeatherHamburgerWindowComponent } from './weather/weather-hamburger-window/weather-hamburger-window.component';

@NgModule({
  declarations: [AppComponent, WeatherComponent, WeatherHeaderContainerComponent, WeatherCitiesContainerComponent, WeatherBodyContainerComponent, WeatherFooterContainerComponent, WeatherHamburgerWindowComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
