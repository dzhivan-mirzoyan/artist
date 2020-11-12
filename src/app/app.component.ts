import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('icon-flag-es', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/flag/es.svg'));
    iconRegistry.addSvgIcon('icon-flag-ru', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/flag/ru.svg'));
    iconRegistry.addSvgIcon('icon-flag-gb', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/flag/gb.svg'));
  }
  title = 'artist';
  assetsImages = ['assets/img/1.jpg', 'assets/img/2.jpg', 'assets/img/3.jpg'];
}
