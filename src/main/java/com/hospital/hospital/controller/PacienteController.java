package com.hospital.hospital.controller;

import com.hospital.hospital.module.Paciente;
import com.hospital.hospital.service.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/pacientes")
public class PacienteController {

    @Autowired
    private PacienteService pacienteService;

    // Obtener pacientes por ciudad
    @GetMapping("/ciudad")
    public List<Paciente> getPacientesPorCiudad(@RequestParam String ciudad) {
        return pacienteService.findPacientesByCiudad(ciudad);
    }

    // Obtener todos los pacientes
    @GetMapping
    public List<Paciente> listarPacientes() {
        return pacienteService.listarPacientes();
    }

    // Obtener un paciente por ID
    @GetMapping("/{id}")
    public ResponseEntity<Paciente> obtenerPacientePorId(@PathVariable Long id) {
        Optional<Paciente> paciente = pacienteService.obtenerPacientePorId(id);
        return paciente.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Crear un nuevo paciente
    @PostMapping
    public Paciente crearPaciente(@RequestBody Paciente paciente) {
        return pacienteService.guardarPaciente(paciente);
    }

    // Actualizar un paciente existente
    @PutMapping("/{id}")
    public ResponseEntity<Paciente> actualizarPaciente(@PathVariable Long id, @RequestBody Paciente detallesPaciente) {
        Optional<Paciente> paciente = pacienteService.obtenerPacientePorId(id);

        if (paciente.isPresent()) {
            Paciente pacienteActualizado = paciente.get();
            pacienteActualizado.setTipoId(detallesPaciente.getTipoId());
            pacienteActualizado.setPrimerNombre(detallesPaciente.getPrimerNombre());
            pacienteActualizado.setSegundoNombre(detallesPaciente.getSegundoNombre());
            pacienteActualizado.setPrimerApellido(detallesPaciente.getPrimerApellido());
            pacienteActualizado.setSegundoApellido(detallesPaciente.getSegundoApellido());
            pacienteActualizado.setFechaNacimiento(detallesPaciente.getFechaNacimiento());
            pacienteActualizado.setGenero(detallesPaciente.getGenero());
            pacienteActualizado.setEstadoCivil(detallesPaciente.getEstadoCivil());
            pacienteActualizado.setDepartamento(detallesPaciente.getDepartamento());
            pacienteActualizado.setCiudad(detallesPaciente.getCiudad());
            pacienteActualizado.setDireccion(detallesPaciente.getDireccion());
            pacienteActualizado.setTelefonoContacto(detallesPaciente.getTelefonoContacto());
            pacienteActualizado.setCelularContacto(detallesPaciente.getCelularContacto());
            pacienteActualizado.setCorreoElectronico(detallesPaciente.getCorreoElectronico());
            pacienteActualizado.setNacionalidad(detallesPaciente.getNacionalidad());
            pacienteActualizado.setFotoPaciente(detallesPaciente.getFotoPaciente());

            Paciente pacienteGuardado = pacienteService.guardarPaciente(pacienteActualizado);
            return ResponseEntity.ok(pacienteGuardado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Eliminar un paciente
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarPaciente(@PathVariable Long id) {
        Optional<Paciente> paciente = pacienteService.obtenerPacientePorId(id);

        if (paciente.isPresent()) {
            pacienteService.eliminarPaciente(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
