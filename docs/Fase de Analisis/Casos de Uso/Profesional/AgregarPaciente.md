### Caso de Uso: Agregar Paciente
- **Actor principal:** Profesional
- **Resumen:** El profesional se asocia un nuevo paciente registrado en el sistema.
- **Precondiciones:**
  - El profesional debe haber iniciado sesión.
- **Flujo principal:**
  1. El profesional accede al módulo de sus pacientes.
  2. Selecciona la opción "Agregar nuevo paciente".
  3. Selecciona el paciente que desea agregar.
  4. El sistema asocia el paciente al profesional.
- **Flujos alternativos:**
  - 4a. El paciente ya esta asociado: el sistema notifica al profesional.
- **Postcondiciones:**
  - El paciente queda asociado al profesional y puede ser atendido.