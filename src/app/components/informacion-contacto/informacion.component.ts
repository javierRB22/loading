import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/mail.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  public myForm: FormGroup;
  public sendingForm: boolean = false;

  constructor(private fb: FormBuilder, private emailService: ContactService) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: [null, [Validators.required, Validators.min(1)]],
      cedula: [null, [Validators.required, Validators.min(1)]],
      lugar: ['', [Validators.required, Validators.minLength(6)]],
      comentario: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }

  isValidField(field: string): boolean | null {
    return this.myForm.controls[field].invalid && (this.myForm.controls[field].touched || this.myForm.controls[field].dirty);
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors;

    if (errors) {
      if (errors['required']) {
        return 'Este campo es requerido';
      } else if (errors['minlength']) {
        return `Mínimo ${errors['minlength'].requiredLength} caracteres.`;
      } else if (errors['email']) {
        return 'Debe ser un correo electrónico válido';
      }
    }

    return null;
  }

  onSave(): void {
    if (this.myForm.invalid) {
      this.showAlert('Por favor, llena todos los campos correctamente.', 'warning');
      return;
    }

    this.sendingForm = true;

    this.emailService.enviarCorreo(this.myForm.value).subscribe(
      (response: any) => {
        this.showAlert('Formulario enviado exitosamente', 'success');
        console.log('Formulario enviado exitosamente', response);
        this.myForm.reset({ telefono: null, cedula: null });
        this.sendingForm = false;
      },
      (error: any) => {
        console.error('Error al enviar el formulario', error);
        this.showAlert('Error al enviar el formulario', 'error');
        this.sendingForm = false;
      }
    );
  }

  private showAlert(message: string, type: 'success' | 'error' | 'warning'): void {
    Swal.fire({
      icon: type,
      title: message,
      showConfirmButton: false,
      timer: 1500
    });
  }
}
