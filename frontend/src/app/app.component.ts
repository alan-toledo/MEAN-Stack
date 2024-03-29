import { Component } from '@angular/core';
import { NavigationCancel,
        Event,
        NavigationEnd,
        NavigationError,
        NavigationStart,
        Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	constructor(private _router: Router) {
		this._router.events.subscribe((event: Event) => {
			this.navigationInterceptor(event);
		});
	}
	private navigationInterceptor(event: Event): void {
		if (event instanceof NavigationStart) {
		}
		if (event instanceof NavigationEnd) {
		}
		if (event instanceof NavigationCancel) {
		}
		if (event instanceof NavigationError) {
		}
	}
}
