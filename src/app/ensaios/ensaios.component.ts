import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-ensaios',
  templateUrl: './ensaios.component.html',
  styleUrls: ['./ensaios.component.scss']
})
export class EnsaiosComponent implements OnInit {
  opacity = 1;
  
  constructor(
    private scrollDispatcher: ScrollDispatcher,
    private zone: NgZone
  ) {

  }


  ngOnInit(): void {
    this.scrollDispatcher.scrolled().subscribe((event: any) => {
      const scroll = event.measureScrollOffset("top");
      let newOpacity = this.opacity;

      if (scroll > 0) {
        newOpacity = 0.75;
      } else {
        newOpacity = 1;
      }

      if (newOpacity !== this.opacity) {
        this.zone.run(() => {
          this.opacity = newOpacity;
        });
      }
    });
  }


  

}
