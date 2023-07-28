import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer
    
    ) {
    this.matIconRegistry.addSvgIcon("icon-instagram", this.domSanitizer
    .bypassSecurityTrustResourceUrl('assets/images/icons/icon-instagram-10.svg')); 

    this.matIconRegistry.addSvgIcon("icon-whatsapp", this.domSanitizer
    .bypassSecurityTrustResourceUrl('assets/images/icons/icon-whatsapp.svg')); 

    this.matIconRegistry.addSvgIcon("icon-gmail", this.domSanitizer
    .bypassSecurityTrustResourceUrl('assets/images/icons/icon-gmail.svg')); 

  }

}
