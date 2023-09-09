import {Component, EventEmitter, Output} from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {BehaviorSubject, filter, fromEvent, Observable, startWith, take, tap} from "rxjs";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Output()
  public toggleSideNav: EventEmitter<void> = new EventEmitter<void>();

  public isDarkTheme$: Observable<boolean>;
  public isMobileView$: Observable<boolean>;

  public display: boolean = false;
  private isMobileViewSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router,
    public themeService: ThemeService,
  ) {
    this.isMobileView$ = this.isMobileViewSubject.asObservable();
    fromEvent(window, 'resize')
      .pipe(
      )
      .subscribe(
        () => this.isMobileViewSubject.next(window.innerWidth < 540)
      )
    this.isDarkTheme$ = this.themeService.isDarkTheme$
      .pipe(
        startWith(false)
      );
    router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd)
      )
  }

  public get isProjectsView(): boolean {
    return this.router.url === '/projects'
  }

  public onToggleSideNav(): void {
    this.toggleSideNav.emit();
  }

  onThemeChange(): void {
    this.themeService.isDarkTheme$
      .pipe(
        take(1),
        tap(
          (isDarkTheme) => {
            console.log({isDarkTheme});
            this.themeService.toggleDarkTheme(!isDarkTheme);
          }
        )
      )
      .subscribe();
  }
}
