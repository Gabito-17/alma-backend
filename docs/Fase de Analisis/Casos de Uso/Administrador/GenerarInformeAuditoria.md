## 👩‍💼 Administrador

### Caso de Uso: Generar Informe Auditoría
- **Actor principal:** Administrador
- **Resumen:** El administrador genera un informe de auditoría con las actividades relevantes realizadas por los usuarios del sistema.
- **Precondiciones:**
  - El administrador debe haber iniciado sesión.
  - Deben existir registros de auditoría.
- **Flujo principal:**
  1. El administrador accede al panel de administración.
  2. Selecciona la opción "Generar Informe Auditoría".
  3. El sistema solicita parámetros opcionales (fecha, usuario, tipo de evento).
  4. El administrador completa y confirma.
  5. El sistema genera el informe con los datos correspondientes.
  6. El sistema muestra el informe en pantalla y permite su descarga.
- **Flujos alternativos:**
  - 5a. No hay datos disponibles para los filtros seleccionados: el sistema muestra un mensaje informativo.
- **Postcondiciones:**
  - El informe de auditoría es generado y entregado al administrador.

---