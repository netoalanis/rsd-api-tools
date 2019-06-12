Schemas

	Empleados(noempleado,nombre, apellido)
	Herramientas (clave,nombre, fechacompra,asignada)
	Aasignaciones (id,empleado,herramienta,fecha)

API Definicion

	GET /empleados
		[{
		    "noempleado": "00001",
		    "nombre": "Ernesto",
		    "apellido": "Alanis"
		}]
	GET /empleados/{noempleado}
		{
		    "noempleado": "00001",
		    "nombre": "Ernesto",
		    "apellido": "Alanis"
		}
	POST /empleados
		Body
		{
		    "noempleado": "00001",
		    "nombre": "Ernesto",
		    "apellido": "Alanis"
		}
	PUT /empleados/{noempleado}
		body
		{
		    "noempleado": "00001",
		    "nombre": "Ernesto",
		    "apellido": "Alanis"
		}
	DELETE /empleados/{noempleado}
		{
		    "noempleado": "00001",
		    "nombre": "Ernesto",
		    "apellido": "Alanis"
		}
	
	GET /herramientas
		[{
		    "clave": "00001",
		    "nombre": "Taladro",
		    "fechacompra": "2019/01/15",
		    "asignada": "N"
		}]
	GET /herramientas/{clave}
		{
		    "clave": "00001",
		    "nombre": "Taladro",
		    "fechacompra": "2019/01/15",
		    "asignada": "N"
		}
	POST /herramientas
		Body
		 {
		    "clave": "00001",
		    "nombre": "Taladro",
		    "fechacompra": "2019/01/15",
		    "asignada": "N"
		 }
	PUT /herramientas/{clave}
		Body
		 {
		    "clave": "00001",
		    "nombre": "Taladro",
		    "fechacompra": "2019/01/15",
		    "asignada": "N"
		  }
	DELETE /herramientas/{clave}
		 {
		    "clave": "00001",
		    "nombre": "Taladro",
		    "fechacompra": "2019/01/15",
		    "asignada": "N"
		  }
	
	GET /asignaciones/
		[{
		    "id": 1,
		    "empleado": "00001",
		    "herramienta": "00001",
		    "fecha": "2019/03/15"
		}]
	GET /asignaciones/emp/{empleado}
		[{
		    "id": 1,
		    "empleado": "00001",
		    "herramienta": "00001",
		    "fecha": "2019/03/15"
		}]
	GET /asignaciones/her/{herramienta}
		[{
		    "id": 1,
		    "empleado": "00001",
		    "herramienta": "00001",
		    "fecha": "2019/03/15"
		}]
	POST /asignaciones
		Body
		{
		    "id": 1,
		    "empleado": "00001",
		    "herramienta": "00001",
		    "fecha": "2019/03/15"
		}
	PUT /asignaciones/{id}
		Body
		{
		    "id": 1,
		    "empleado": "00001",
		    "herramienta": "00001",
		    "fecha": "2019/03/15"
		}
	DELETE /asignaciones/{id}
		{
		    "id": 1,
		    "empleado": "00001",
		    "herramienta": "00001",
		    "fecha": "2019/03/15"
		}
