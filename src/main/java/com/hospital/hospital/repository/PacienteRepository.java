package com.hospital.hospital.repository;

import com.hospital.hospital.module.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PacienteRepository extends JpaRepository<Paciente, Long> {

    // Consulta nativa SQL para obtener pacientes por ciudad

    @Query(value = "SELECT * FROM pacientes p WHERE p.ciudad = :ciudad", nativeQuery = true)
    List<Paciente> findPacientesByCiudad(@Param("ciudad") String ciudad);

    // @Query: Define la consulta SQL.
    // nativeQuery = true: Indica que estás utilizando SQL nativo.
    // ciudad: Es un parámetro en la consulta que se asocia al valor pasado en el metodo como @Param("ciudad").
}
