package com.hospital.hospital.module;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "contactos_emergencia")
public class ContactosEmergencia {
    @Id
    private long id_contacto;

    @Column(name = "nombre_completo", nullable = false)
    private String nombreCompleto;

    @Column(name = "parentesco", nullable = false)
    private String parentesco;

    @Column(name = "telefono", nullable = false)
    private String telefono;

    @Column(name = "id", nullable = false)
    private int id;

    public long getId_contacto() {
        return id_contacto;
    }

    public void setId_contacto(long id_contacto) {
        this.id_contacto = id_contacto;
    }

    public String getNombreCompleto() {
        return nombreCompleto;
    }

    public void setNombreCompleto(String nombreCompleto) {
        this.nombreCompleto = nombreCompleto;
    }

    public String getParentesco() {
        return parentesco;
    }

    public void setParentesco(String parentesco) {
        this.parentesco = parentesco;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
