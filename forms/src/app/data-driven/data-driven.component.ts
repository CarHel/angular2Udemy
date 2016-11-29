import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators,FormArray,FormBuilder } from '@angular/forms';


@Component({
    selector: 'data-driven',
    templateUrl: 'data-driven.component.html',
  styles:[`
  input.ng-invalid.ng-dirty,input.ng-invalid.ng-touched{
    border: 1px solid red
  }
  `]
})
export class DataDrivenComponent {
  myForm:FormGroup;  
  genders=[
    'male',
    'female'
  ];
  constructor(private formBuilder:FormBuilder){
    //   this.myForm = new FormGroup({
    //     'userData': new FormGroup({

    //       'username': new FormControl('', Validators.required),
    //       'email': new FormControl('test@aestaed.com',[Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])
    //     }),
    //       'password': new FormControl('Max',Validators.required),
    //       'gender':new FormControl('male'),
    //       'hobbies': new FormArray([
    //         new FormControl('Cooking',Validators.required)
    //       ])
    // });
    this.myForm=formBuilder.group({

        'userData': formBuilder.group({

          'username': ['', Validators.required],
          'email': ['test@aestaed.com',[Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]]
        }),
          'password': ['Max',Validators.required],
          'gender':['male'],
          'hobbies': formBuilder.array([
            ['Cooking',Validators.required]
          ])
   
    });
  }

onAddHobby(){
  (<FormArray>this.myForm.get('hobbies')).push(new FormControl('',Validators.required));
}

    onSubmit(){
      
        console.log( this.myForm);
    }
}
