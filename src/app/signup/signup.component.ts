import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
forminput!:FormGroup
  constructor(private fb:FormBuilder,private rout:Router) { }

  ngOnInit(): void {
    this.forminput=this.fb.group(
      {"nom":["",Validators.required],
    "email":["",[Validators.required,Validators.email]],
    "mdp":["",Validators.required]
    }
    )
  }
  onsubmit(){
    console.log("test okkk");
    console.log(this.forminput.valid)
    if(this.forminput.valid)
    this.rout.navigate(["/"]);
  }
}
