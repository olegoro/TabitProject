import {
  Component,
  OnDestroy,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherService } from 'src/app/weather/weather.service';
import { Weather } from '../weather';

@Component({
  selector: 'app-weather-hamburger-window',
  templateUrl: './weather-hamburger-window.component.html',
  styleUrls: ['./weather-hamburger-window.component.css'],
})
export class WeatherHamburgerWindowComponent implements OnInit, OnDestroy {
  weathers: Weather[] = [];
  toShowHamburgerValues = false;
  subscription: Subscription;
  @Output() cityClicked = new EventEmitter<Weather>();

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weathers = this.weatherService.weathers;

    this.subscription = this.weatherService.hamburgerValuesOpened.subscribe(
      (toShowWindow) => {
        this.toShowHamburgerValues = toShowWindow;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  closeHamburgerWindow(index: number) {
    this.toShowHamburgerValues = false;
    this.cityClicked.emit(this.weathers[index]);
  }
}
