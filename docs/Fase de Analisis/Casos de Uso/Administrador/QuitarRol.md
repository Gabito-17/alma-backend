### Caso de Uso: Quitar Rol
- **Actor principal:** Administrador
- **Resumen:** El administrador remueve un rol específico asignado a un usuario.
- **Precondiciones:**
  - El administrador debe haber iniciado sesión.
  - El usuario debe tener al menos un rol asignado.
- **Flujo principal:**
  1. El administrador accede a la gestión de roles por usuario.
  2. Selecciona al usuario y el rol que desea quitar.
  3. El sistema solicita confirmación.
  4. El administrador confirma la acción.
  5. El sistema quita el rol del usuario y muestra una notificación de éxito.
- **Flujos alternativos:**
  - 4a. El administrador cancela la operación: el rol no se elimina.
- **Postcondiciones:**
  - El usuario ya no tiene el rol especificado.

---