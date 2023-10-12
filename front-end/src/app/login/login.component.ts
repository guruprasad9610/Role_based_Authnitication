import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{
  email: string = "";
  password: string = "";

  isLogin: boolean = false;
  errorMessage: string = "";

  constructor(private router: Router ,private http: HttpClient) { }

  login()
  {
    console.log(this.email);
    console.log(this.password);

    let bodyData =
    {
      "email": this.email,
      "password": this.password,
    };

    this.http.post('http://localhost:9002/user/login',bodyData).subscribe((resultData: any) =>
    {
      console.log(resultData);
    
      if(resultData.status)
      {
        this.router.navigateByUrl('/home');
      }
      else
      {
        alert("Invalid Email or Password");
        console.log("Invalid Details");
      }
    });
  }
}