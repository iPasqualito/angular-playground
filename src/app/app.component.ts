import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-playground';
  form: FormGroup = new FormGroup({
    myInput: new FormControl(null, [Validators.required, Validators.email], []),
    naw: new FormGroup({
      name: new FormControl(),
      addresses: new FormArray([])
    }, [])
  });

  ngOnInit() {

    this.form.valueChanges.subscribe( formdata => {
      console.log(formdata);
    } );

  }

  submitForm(form){
    console.log(form.value);
  }

}
