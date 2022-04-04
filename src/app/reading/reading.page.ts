import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.page.html',
  styleUrls: ['./reading.page.scss'],
})
export class ReadingPage implements OnInit {
  
  private user;
  constructor() { }

  ngOnInit() {
    if (sessionStorage.loggedIn == 'true') {
      this.user = JSON.parse(sessionStorage.userInfo); //pass the response to a variable 
      console.log(this.user)
      
      var ionTitleNav = document.getElementById("nameNav");
      ionTitleNav.innerHTML = " ";
      ionTitleNav.innerHTML = this.user.firstName +" "+ this.user.lastName
      
     

      
    } else {
      window.location.href = 'login';
    }
  }

}
