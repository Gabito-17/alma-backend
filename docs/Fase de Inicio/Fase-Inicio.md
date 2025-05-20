
# 🟦 Fase de Inicio – Proyecto ALMA

> Esta fase tiene como objetivo establecer una **visión clara del sistema**, **identificar a los actores principales**, y elaborar los **primeros casos de uso de alto nivel** que guiarán el desarrollo iterativo.

---

### ✅ 1. Planteamiento del Problema

# Documento de Planteamiento del Problema – Sistema ALMA

## Descripción general

El Policonsultorio ALMA enfrenta actualmente una gestión desorganizada de sus operaciones, utilizando herramientas separadas para la administración de pacientes, turnos y registro de consultas. Esta falta de integración genera errores humanos, pérdida de información, baja eficiencia en la atención y dificultades en el seguimiento clínico de los pacientes.

Gran parte de la información, como informes, historias clínicas, turnos y consultas, se registra manualmente, lo que complica su organización y acceso. Esta situación dificulta la administración de las agendas de los profesionales, la coordinación efectiva de los turnos y el mantenimiento de historias clínicas accesibles de forma rápida y sencilla por parte del personal médico.

Estas limitaciones impactan directamente en la calidad del servicio brindado, afectando especialmente la experiencia del paciente, quien debe invertir más tiempo en la coordinación y asistencia a las consultas, con mayores probabilidades de demoras o errores en la atención.

## Problemas Identificados

- Falta de centralización de la información médica.
- Gestión manual y propensa a errores de turnos o faltas por parte de pacientes.
- Dificultad para acceder al historial clínico.
- No se realizan recordatorios o notificaciones de los turnos.
- Registro de consultas a mano alzada.

## Necesidad

Se necesita desarrollar un sistema web que unifique estos procesos, permitiendo un flujo de trabajo más ágil, seguro y accesible tanto para los profesionales como para el personal administrativo.

---

### ✅ 2. Documento de Requisitos (funcionales y no funcionales)

# Documento de Requisitos – Sistema ALMA

## Requisitos Funcionales (RF)

- RF01: El sistema debe permitir registrar y modificar datos de pacientes.
- RF02: El sistema debe permitir registrar y modificar datos de profesionales.
- RF03: El sistema debe permitir la asignación y gestión de turnos.
- FT04: El sistema debe incluir agenda personalizada por profesional.
- RF05: El sistema debe permitir la busqueda de turnos por profesional, fecha y especialidad.
- RF06: El sistema debe permitir el registro autónomo de usuarios, asignándoles el rol correspondiente con acceso limitado a funciones específicas.
- RF07: El sistema debe registrar consultas médicas y asociarlas al paciente.
- RF08: El sistema debe generar y visualizar el historial clínico.
- RF09: El sistema debe enviar recordatorios de turnos automáticamente.
- RF10: El sistema debe permitir a los administradores gestionar usuarios y roles.

## Requisitos No Funcionales (RNF)

- RNF01: El sistema será para plataformas webs.
- RNF02: El acceso a los datos debe estar protegido mediante autenticación.
- RNF03: Escalabilidad para incorporar nuevas funcionalidades.

---

### ✅ 3. Actores Identificados

| Actor                         | Descripción                                                                 |
|------------------------------|-----------------------------------------------------------------------------|
| **Secretaria**            | Administra turnos, pacientes, y realiza tareas administrativas.             |
| **Profesional**              | Consulta información del paciente, registra consultas y visualiza historial clínico. |
| **Paciente**                 | Recibe turnos, recordatorios, y accede a su historial (si está habilitado). |
| **Administrador del sistema**| Gestiona usuarios, roles, especialidades y configuración general.           |

---

### ✅ 4. Casos de Uso de Alto Nivel

| Caso de uso                            | Actor         | Descripción breve                                                                 |
|----------------------------------------|---------------|-----------------------------------------------------------------------------------|
| Gestionar pacientes                    | Secretaria | Alta, baja, modificación y búsqueda de pacientes.                                 |
| Gestionar profesionales                | Administrador | Administración de datos de los profesionales y sus especialidades.               |
| Gestion de turnos                         | Secretaria | Crear, modificar y eliminar turnos para pacientes con profesionales.                        |
| Registrar consulta                     | Profesional   | Registrar motivo, evolución, diagnóstico y tratamiento del paciente.              |
| Consultar historial clínico            | Profesional   | Acceder al historial clínico de un paciente.                                      |
| Acceder a sus turnos                  | Paciente      | Ver turnos asignados y/o cancelarlos.                 |
| Gestionar usuarios y permisos          | Administrador | Crear, editar o eliminar cuentas y roles del sistema.                             |
| Consultar Agenda          | Profesional | Acceder a su agenda de turnos.                             |
