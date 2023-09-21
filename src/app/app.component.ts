import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'AngularMaterial';
  userForm:FormGroup;

  constructor(private formBuilder:FormBuilder){

    this.userForm=this.formBuilder.group({
      userName:['',Validators.required],
      email:['',Validators.required]
    });
  }

    ngOnInit(): void {
      
    }
    checkLogin(){

      alert("test")
    }
}
