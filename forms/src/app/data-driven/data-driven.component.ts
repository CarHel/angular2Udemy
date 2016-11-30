import { Observable } from 'rxjs/Rx';
import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';


@Component({
  selector: 'data-driven',
  templateUrl: 'data-driven.component.html',
  styles: [`
  input.ng-invalid.ng-dirty,input.ng-invalid.ng-touched{
    border: 1px solid red
  }
  `]
})
export class DataDrivenComponent {
  myForm: FormGroup;
  genders = [
    'male',
    'female'
  ];
  constructor(private formBuilder: FormBuilder) {
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
    this.myForm = formBuilder.group({

      'userData': formBuilder.group({

        'username': ['', [Validators.required, , this.exampleValidator]],
        'email': ['test@aestaed.com', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]]
      }),
      'password': ['Max', [Validators.required],this.asyncExampleValidator],
      'gender': ['male'],
      'hobbies': formBuilder.array([
        ['Cooking', Validators.required]
      ])
    });

    this.myForm.statusChanges.subscribe((data:any)=>console.log(data));
  }

  onAddHobby() {
    (<FormArray>this.myForm.get('hobbies')).push(new FormControl('', Validators.required));
  }

  onSubmit() {
    console.log(this.myForm);
  }

  exampleValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Example') {
      return { example: true };
    }
    return null;
  }

  asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'test') {
            resolve({ 'invalid': true });
          }
          else {
            resolve(null);
          }
        }, 2000);
      }
    );
    return promise;
  }

  reset(){
    this.myForm.reset();
  }
}
