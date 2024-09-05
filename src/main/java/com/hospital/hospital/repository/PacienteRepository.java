package com.hospital.hospital.repository;

import com.hospital.hospital.module.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PacienteRepository extends JpaRepository <Paciente, Long> {
}
