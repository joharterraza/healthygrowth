import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  

  private user;
  private imc;
  private status
  constructor() { }

  ngOnInit() {
    if (sessionStorage.loggedIn == 'true') {
      this.user = JSON.parse(sessionStorage.userInfo); //pass the response to a variable 
      console.log(this.user)
      
      var ionTitleNav = document.getElementById("nameNav");
      ionTitleNav.innerHTML = " ";
      ionTitleNav.innerHTML = this.user.firstName +" "+ this.user.lastName
      
      this.imc = (this.user.weight / (Math.pow(this.user.height/100, 2))).toFixed(2);

      this.status = this.setHealthLevel(this.imc);
    } else {
      window.location.href = 'login';
    }
  }

  setHealthLevel(imc){
    var healthObject = {
      class : "",
      message : ""
    }

    if(imc < 18.5) {
      healthObject.class = "under"
      healthObject.message = "Under weight"
    }
    else if(imc > 18.4 && imc < 25) {
      healthObject.class = "over"
      healthObject.message = "Normal"
    }
    else if(imc >= 25 && imc < 30) {
      healthObject.class = "normal"
      healthObject.message = "Over weight"
    }
    else if(imc > 30) {
      healthObject.class = "obesity"
      healthObject.message = "Obesity"
    } 

    return healthObject
  }

  



}
