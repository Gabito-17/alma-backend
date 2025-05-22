## 👩‍💼 Administrador

### Caso de Uso: Editar Usuario
- **Actor principal:** Administrador
- **Resumen:** El administrador puede modificar los datos personales o credenciales de un usuario del sistema.
- **Precondiciones:**
  - El administrador debe haber iniciado sesión.
  - Debe existir al menos un usuario registrado.
- **Flujo principal:**
  1. El administrador accede al módulo de gestión de usuarios.
  2. Selecciona al usuario que desea editar.
  3. El sistema muestra un formulario con los datos actuales del usuario.
  4. El administrador edita los campos necesarios.
  5. El sistema valida la información ingresada.
  6. El sistema guarda los cambios y notifica al administrador.
- **Flujos alternativos:**
  - 5a. Datos inválidos: el sistema muestra un mensaje de error.
- **Postcondiciones:**
  - El usuario queda actualizado con los nuevos datos.

---