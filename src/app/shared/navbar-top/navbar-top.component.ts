import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss']
})
export class NavbarTopComponent implements OnInit {


  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true)
  }

  scroll = (): void => {

    let scrollHeigth;
 
    if(window.innerWidth < 350){
     scrollHeigth = 100;
     alert('LLL');

    }else if(window.innerWidth < 500 && window.innerWidth > 350){
     scrollHeigth = 150;
     alert('LLL');

    }else if(window.innerWidth < 700 && window.innerWidth > 500){
      alert('LLL');
     scrollHeigth = 350;
    }else if(window.innerWidth < 1000 && window.innerWidth > 700){
     scrollHeigth = 500;
    }else{
      scrollHeigth = 650;
    }

    // while(window.scrollY < 600) {
    //   document.body.style.setProperty('--navbar-scroll', "transparent");
    //   console.log('oi')
    //   if (window.screenY > scrollHeigth) {
    //     document.body.style.setProperty('--navbar-scroll', "black");
    //   }

    // }

    
    // if(window.scrollY <= 600){
    //   console.log('aqui');
    //    document.body.style.setProperty('--navbar-scroll', "black");
    //    document.body.style.setProperty('--navbar-scroll-text', "black");
    //   //  document.body.style.setProperty('--navbar-scroll-shadow', "0px 6px 12px -5px #000000");
    //  }

    //  if(window.scrollY >= scrollHeigth){
    //   // console.log('aqui', window.scrollY, scrollHeigth );
    //    document.body.style.setProperty('--navbar-scroll', "black");
    //    document.body.style.setProperty('--navbar-scroll-text', "black");
    //   //  document.body.style.setProperty('--navbar-scroll-shadow', "0px 6px 12px -5px #000000");
    //  }
    //  else if(window.scrollY < scrollHeigth ){
    //    document.body.style.setProperty('--navbar-scroll', "transparent");
    // //    document.body.style.setProperty('--navbar-scroll-text', "black");
    //    document.body.style.setProperty('--navbar-scroll-shadow', "none");
    //  }
   }

}
