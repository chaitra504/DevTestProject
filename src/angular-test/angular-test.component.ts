import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DirectiveCompositionDirective } from 'src/directive-composition.directive';
import { RedcolorDirective } from 'src/redcolor.directive';

@Component({
  selector: 'app-angular-test',
  templateUrl: './angular-test.component.html',
  styleUrls: ['./angular-test.component.css'],
  hostDirectives:[
    RedcolorDirective],
  
})
export class AngularTestComponent {
  text ='content page';
  contactForm!: FormGroup;
  contact = {name:'',email:'',mobile:''};
  submitted = false;
  color= "yellow";
  constructor()
  {
    this.createForm();
  }
  createForm():void
  {
    this.contactForm = new FormGroup({
  name: new FormControl(this.contact.name, [
    Validators.required,
    Validators.minLength(4)
  ]),
  email: new FormControl(this.contact.email),
  mobile: new FormControl(this.contact.mobile, Validators.required)
});
  }

  onSubmit():void{
    this.submitted=true;
  }
}