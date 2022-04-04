import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../service/user.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('username') username : ElementRef;
  @ViewChild('password') pass : ElementRef;
  constructor(
    private userService : UserService
  ) {}

  ngOnInit() {

    
  }

  login(){    
    console.log(this.username.nativeElement.value)
    console.log(this.pass.nativeElement.value)
    var loginParams = {
      email: this.username.nativeElement.value,
      password: this.pass.nativeElement.value
    };
    this.userService.login(loginParams)
    .then( (result) => {
      console.log(result)
      this.saveUser(result)
    } )
    .catch( (error) => {console.log(error); } )


  }

    
  saveUser(data){
    console.log(data);
    if(data.data){
      sessionStorage.loggedIn = true;
      sessionStorage.userInfo = JSON.stringify(data.data);

      window.location.href = ''
    }
    else{
      console.log("nel")
    }
    
    
  }
}
