### Caso de Uso: Quitar Rol
- **Actor principal:** Administrador
- **Resumen:** El administrador asigna un rol específico  a un usuario.
- **Precondiciones:**
  - El administrador debe haber iniciado sesión.
- **Flujo principal:**
  1. El administrador accede a la gestión de roles por usuario.
  2. Selecciona al usuario y el rol que desea agregarle.
  3. El sistema solicita confirmación.
  4. El administrador confirma la acción.
  5. El sistema agrega el rol del usuario y muestra una notificación de éxito.
- **Flujos alternativos:**
  - 4a. El administrador cancela la operación: el rol no se agrega.
- **Postcondiciones:**
  - El usuario tiene el rol especificado.

---