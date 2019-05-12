import { Component, OnInit, Renderer2, Inject, EventEmitter, Output } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AppConfigService } from 'src/app/shared/AppConfig.service';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    selectedLanguage="En";
    toggled: boolean = false;
    fileURL;
    @Output() toggleBtnClicked = new EventEmitter<boolean>();
    constructor(
        @Inject(DOCUMENT) private document: Document,
        private renderer: Renderer2,
        private appConfigService: AppConfigService
    ) { }
    ngOnInit() {
        this.fileURL = this.appConfigService.config['url'].toString() + this.appConfigService.config['fileURL'].toString();
    }
    sidebarToggle() {
        this.toggled = !this.toggled;
        if (this.document.body.classList.contains("sidebar-toggled")) {
            this.renderer.removeClass(this.document.body, "sidebar-toggled");
        } else {
            this.renderer.addClass(this.document.body, "sidebar-toggled");
        }
        console.log(this.toggled);
        this.toggleBtnClicked.emit(this.toggled);
    }
    getFileURL(){
        return this.fileURL;
    }
}