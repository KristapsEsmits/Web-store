import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {ThemeService} from "../../services/theme.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public isDarkTheme$: Observable<boolean>;

  constructor(public themeService: ThemeService) {
    this.isDarkTheme$ = this.themeService.isDarkTheme$;
  }
}

