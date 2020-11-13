import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select-language',
  template: `
    <div style="text-align: center;">
      <button mat-button (click)="cahngeLang('es')">
        <mat-icon svgIcon="icon-flag-es"></mat-icon>
      </button>
      <button mat-button (click)="cahngeLang('ru')">
        <mat-icon svgIcon="icon-flag-ru"></mat-icon>
      </button>
      <button mat-button (click)="cahngeLang('en')">
        <mat-icon svgIcon="icon-flag-gb"></mat-icon>
      </button>
    </div>
  `,
  styles: [
  ]
})
export class SelectLanguageComponent implements OnInit {

  constructor(private translate: TranslateService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    
    iconRegistry.addSvgIcon('icon-flag-es', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/flag/es.svg'));
    iconRegistry.addSvgIcon('icon-flag-ru', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/flag/ru.svg'));
    iconRegistry.addSvgIcon('icon-flag-gb', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/flag/gb.svg'));
  }

  ngOnInit(): void {
  }

  cahngeLang(lang) {
    this.translate.use(lang);
  }

}
