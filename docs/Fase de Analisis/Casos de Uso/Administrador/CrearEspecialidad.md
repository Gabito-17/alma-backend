### Caso de Uso: Crear Especialidad
- **Actor principal:** Administrador
- **Resumen:** El administrador agrega una nueva especialidad médica al sistema.
- **Precondiciones:**
  - El administrador debe haber iniciado sesión.
- **Flujo principal:**
  1. El administrador accede al módulo de configuración.
  2. Selecciona "Crear Especialidad".
  3. El sistema muestra un formulario de creación.
  4. El administrador ingresa el nombre y descripción de la nueva especialidad.
  5. El sistema valida y registra la especialidad.
  6. El sistema muestra un mensaje de confirmación.
- **Flujos alternativos:**
  - 5a. El nombre ya existe: el sistema muestra un mensaje de error.
- **Postcondiciones:**
  - La nueva especialidad queda registrada en el sistema.

---