import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const formulario = {

}


@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css'
})
export class InformacionComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.minLength(6)]],
    telefono: [0,[Validators.required, Validators.min(0)]],
    cedula: [0,[Validators.required, Validators.min(0)]],
    lugar: ['', [Validators.required, Validators.minLength(6)]],
    comentario: ['', [Validators.required, Validators.minLength(6)]],
  })

  constructor ( private fb: FormBuilder){}


  ngOnInit(): void {
    // this.myForm.reset()
  }

  isValidField (field: string): boolean | null{
    return this.myForm.controls [field].errors && this.myForm.controls[field].touched;
  }

  getFieldError(field: string):string | null {

  if (!this.myForm.controls[field]) return  null;

  const errors = this.myForm.controls[field].errors || {};

  for (const key of Object.keys(errors)) {

    switch( key) {
      case 'required': return 'Este campo es requerido'
      case 'minlength': return `Mínimo ${ errors['minlength'].requiredLength} caracters.`;
    }

  }
  return null;

  }

  onSave(): void{

   if (this.myForm.invalid) {
    this.myForm.markAllAsTouched();
    return;
   }

    console.log(this.myForm.value);

    this.myForm.reset({telefono: 0, cedula: 0});
  }


}
