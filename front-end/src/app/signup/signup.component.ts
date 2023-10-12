import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent
{
  firstname: string = "";
  lastname: string = "";
  email: string = "";
  password: string = "";

  constructor(private http: HttpClient) { }

  register()
  {
    let bodyData =
    {
      "firstname": this.firstname,
      "lastname": this.lastname,
      "email": this.email,
      "password": this.password,
    };

    this.http.post('http://localhost:9002/user/create',bodyData).subscribe((resultData: any) =>
    {
      console.log(resultData);
    alert("Admin Registration Successful");
    });
  }

  save()
  {
    this.register();
  }
}
