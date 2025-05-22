### Caso de Uso: Editar Especialidad
- **Actor principal:** Administrador
- **Resumen:** El administrador modifica los datos de una especialidad existente.
- **Precondiciones:**
  - El administrador debe haber iniciado sesión.
  - Debe existir al menos una especialidad registrada.
- **Flujo principal:**
  1. El administrador accede al listado de especialidades.
  2. Selecciona una especialidad para editar.
  3. El sistema muestra el formulario con los datos actuales.
  4. El administrador realiza los cambios necesarios.
  5. El sistema valida los datos modificados.
  6. El sistema guarda los cambios y notifica el éxito de la operación.
- **Flujos alternativos:**
  - 5a. Los datos ingresados no son válidos: el sistema muestra errores.
- **Postcondiciones:**
  - Los datos de la especialidad son actualizados correctamente.

---