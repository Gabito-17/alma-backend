### Caso de Uso: Iniciar Sesión
- **Actor principal:** Usuario
- **Resumen:** El usuario accede al sistema introduciendo sus credenciales previamente registradas.
- **Precondiciones:**
  - El usuario debe estar registrado.
  - El sistema debe estar operando.
- **Flujo principal:**
  1. El usuario selecciona la opción "Iniciar Sesión".
  2. El sistema solicita email y contraseña.
  3. El usuario ingresa sus credenciales.
  4. El sistema valida la información.
  5. El sistema permite el acceso y redirige al panel correspondiente según su rol.
- **Flujos alternativos:**
  - 4a. Credenciales inválidas: el sistema notifica al usuario.
- **Postcondiciones:**
  - El usuario accede al sistema con su sesión iniciada.

---