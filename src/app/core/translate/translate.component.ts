import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-translate',
    templateUrl: './translate.component.html',
    styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {
    @Input() color = "#fff";
    selectedLanguage = "En";
    constructor(private translateService: TranslateService) { }

    ngOnInit() {
        if(this.translateService.currentLang)
        this.selectedLanguage = this.translateService.currentLang;
    }
    languageChanges(lang: string, $event): void {
        localStorage.setItem("language", lang);
        this.selectedLanguage = lang;
        this.translateService.use(lang);
        $event.preventDefault();
    }
}
