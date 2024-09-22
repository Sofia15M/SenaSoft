import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  formulario!: FormGroup;
  pacientes: any[] = [];

  fechaMax: Date;

  tipoImagen: string[] = ['image/jpeg', 'image/png', 'image/jpg'];

  constructor(private fb: FormBuilder, private pacienteService: PacienteService) {
    this.iniciaFormulario();
    this.fechaNacimiento();
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    
    if (file) {
      if (this.tipoImagen.includes(file.type)) {
        // Si el archivo es válido
        console.log('Archivo válido:', file);
      } else {
        // Si el archivo no es válido
        alert('Solo se permiten archivos JPEG, PNG o JPG');
        event.target.value = ''; // Limpiar el campo de entrada
      }
    }
  }

  ngOnInit(): void {
   
  }

  fechaNacimiento(){
  // Asignamos la fecha máxima como el día de hoy
    this.fechaMax = new Date(); // Esto es la fecha de hoy.
  }

  

  // Validaciones formulario
  get tipoIdNoValido(){
    return this.formulario.get('tipoId')?.invalid && this.formulario.get('tipoId')?.touched;
  }
  get idNoValido(){
    return this.formulario.get('id')?.invalid && this.formulario.get('id')?.touched;
  }
  get primerNombreNoValido(){
    return this.formulario.get('primerNombre')?.invalid && this.formulario.get('primerNombre')?.touched;
  }
  get segundoNombreNoValido(){
    return this.formulario.get('segundoNombre')?.invalid && this.formulario.get('segundoNombre')?.touched;
  }
  get primerApellidoNoValido(){
    return this.formulario.get('primerApellido')?.invalid && this.formulario.get('primerApellido')?.touched;
  }
  get segundoApellidoNoValido(){
    return this.formulario.get('segundoApellido')?.invalid && this.formulario.get('segundoApellido')?.touched;
  }

  get correoElectronicoNoValido(){
    return this.formulario.get('correoElectronico')?.invalid && this.formulario.get('correoElectronico')?.touched;
  }
  get fechaNacimientoNoValido(){
    return this.formulario.get('fechaNacimiento')?.invalid && this.formulario.get('fechaNacimiento')?.touched;
  }
  get nacionalidadNoValido(){
    return this.formulario.get('nacionalidad')?.invalid && this.formulario.get('nacionalidad')?.touched;
  }
  get fotoNoValido(){
    return this.formulario.get('fotoPaciente')?.invalid && this.formulario.get('fotoPaciente')?.touched;
  }
  get direcccionNoValido(){
    return this.formulario.get('direccion')?.invalid && this.formulario.get('direccion')?.touched;
  }
  get estadoCivilNoValido(){
    return this.formulario.get('estadoCivil')?.invalid && this.formulario.get('estadoCivil')?.touched;
  }
  get departamentoNoValido(){
    return this.formulario.get('departamento')?.invalid && this.formulario.get('departamento')?.touched;
  }
  get ciudadNoValido(){
    return this.formulario.get('ciudad')?.invalid && this.formulario.get('ciudad')?.touched;
  }
  get telefonoContactoNoValido(){
    return this.formulario.get('telefonoContacto')?.invalid && this.formulario.get('telefonoContacto')?.touched;
  }
  get celularContactoNoValido(){
    return this.formulario.get('celularContacto')?.invalid && this.formulario.get('celularContacto')?.touched;
  }
  get generoNoValido(){
    return this.formulario.get('genero')?.invalid && this.formulario.get('genero')?.touched;
  }


  iniciaFormulario(): void {
    this.formulario = this.fb.group({
      tipoId: ['', Validators.required],
      id: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      primerNombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      segundoNombre: ['', [Validators.pattern('^[a-zA-Z]*$')]],
      primerApellido: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      segundoApellido: ['', [Validators.pattern('^[a-zA-Z]*$')]],
      fechaNacimiento: ['', Validators.required],
      genero: ['', Validators.required],
      estadoCivil: ['', Validators.required],
      departamento: ['', Validators.required],
      ciudad: ['', Validators.required],
      direccion: ['', Validators.required],

      telefonoContacto: ['', Validators.required],
      celularContacto: ['', Validators.required],


      correoElectronico: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
      nacionalidad: ['', Validators.required],
      fotoPaciente: [''],


      // relacionPaciente: ['', Validators.required],
      // grupoSanguineo: ['', Validators.required],
      // alergiasConocidas: ['', Validators.required],
      // telefono: ['', Validators.required],
      // celular: ['', Validators.required],
      // enfermedadesCronicas: ['', Validators.required],
      // nombreContacto: ['', Validators.required],
      // medicamentos: ['', Validators.required],
      // antecedentesQuirurgicos: ['', Validators.required],
      // historialMedicoFamiliar: ['', Validators.required],
      // fuma: ['', Validators.required],
      // consumeAlcohol: ['', Validators.required],
    });
  }

  consultar() {
console.log(this.formulario);
var array = this.formulario.value
array.fotoPaciente = btoa(this.formulario.value.fotoPaciente)
      this.pacienteService.crearPacientes(array).subscribe(
        (resp) => {
          this.pacientes.push(resp);
          this.formulario.reset
          console.log('Paciente creado:', resp);
        }
      );
      
      if (this.formulario.invalid){
        return Object.values(this.formulario.controls).forEach(control=>{
          control.markAllAsTouched();
        })
  }
}

limpiar(){
  this.formulario.reset();
}

}

// public agregarPaciente(){
//   this.pacienteService.agregarPacientes(this.pacienteForm.value).subscribe(res =>{
//     this.pacientes.push(res);
//     this.pacienteForm.reset
//   })
// }
