### Caso de Uso: Baja Usuario
- **Actor principal:** Administrador
- **Resumen:** El administrador puede dar de baja a un usuario, dejándolo inactivo en el sistema.
- **Precondiciones:**
  - El administrador debe haber iniciado sesión.
  - Debe existir al menos un usuario registrado.
- **Flujo principal:**
  1. El administrador accede al módulo de gestión de usuarios.
  2. Selecciona al usuario que desea dar de baja.
  3. El sistema muestra una advertencia de confirmación.
  4. El administrador confirma la baja.
  5. El sistema marca al usuario como inactivo.
  6. El sistema muestra un mensaje de éxito.
- **Flujos alternativos:**
  - 4a. El administrador cancela la acción: no se realiza ninguna modificación.
- **Postcondiciones:**
  - El usuario queda deshabilitado en el sistema.

---