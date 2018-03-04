[
	{
		"id": 1,
		"fecha": "2018/03/03",
		"doctor": {
			"id": 1,
			"nombre": "Jorge",
			"apellidoPaterno": "Gutierrez",
			"apellidoMaterno": "Tarzo"
		},
		"paciente": {
			"id": 1,
			"nombre": "Juan",
			"apellidoPaterno": "Perez",
			"apellidoMaterno": "Lopez",
			"genero": "Masculino",
			"fechaNacimiento": "1990/10/15"
		},
		"verificaciones": [
			{
				"id": 1,
				"rango": 24,
				"prescripcion": 1,
				"verificacion":{
				    "id": 1,
				    "nombre": "Glucosa",
				    "tipo": "Numero"
				}
			}
		],
		"monitorizaciones": [
			{
			    "id": 1,
			    "fecha": "2018/03/03 12:00",
			    "valor": "110",
			    "prescripcion": 1,
			    "verificacion":{
			        "id": 1,
			        "nombre": "Glucosa",
			        "tipo": "Numero"
			    }
			}
		],
		"posologias": [
		    {
		        "medicamento": {
		            "id": 7445,
		            "nombre": "AMINOSTERIL N-HEPA",
		        },
		        "prescripcion": 1,
		        "id": 1,
		        "dosis": 10,
		        "detalles": [
		        	{
		                "id": 6,
		                "nombre": "g",
		                "tipo": "unidad"
		            },
		            {
		                "id": 3,
		                "nombre": "Inyectable SC",
		                "tipo": "presentacion"
		            },
		            {
		                "id": 8,
		                "nombre": "8",
		                "tipo": "frecuencia"
		            },
		            {
		                "id": 2,
		                "nombre": "Intravenosa",
		                "tipo": "via"
		            },
		            {
		                "id": 1,
		                "nombre": "120",
		                "tipo": "duracion"
		            }
		        ],
		        "tomas": [
		        	{
		                "id": 5,
		                "fecha": "2018/03/03 13:00",
		                "estatus": false
		            },
		            {
		                "id": 4,
		                "fecha": "2018/03/03 08:30",
		                "estatus": true
		            },
		            {
		                "id": 3,
		                "fecha": "2018/03/03 04:30",
		                "estatus": false
		            },
		            {
		                "id": 2,
		                "fecha": "2018/03/03 00:00",
		                "estatus": true
		            }
		        ]
		    },
		    {
		        "medicamento": {
		            "id": 7444,
		            "nombre": "KETOFAR",
		        },
		        "prescripcion": 1,
		        "id": 2,
		        "dosis": 50,
		        "detalles": [
		        	{
                        "id": 6,
                        "nombre": "g",
                        "tipo": "unidad"
                    },
                    {
                        "id": 3,
                        "nombre": "Inyectable SC",
                        "tipo": "presentacion"
                    },
                    {
                        "id": 8,
                        "nombre": "8",
                        "tipo": "frecuencia"
                    },
                    {
                        "id": 2,
                        "nombre": "Intravenosa",
                        "tipo": "via"
                    },
                    {
                        "id": 1,
                        "nombre": "120",
                        "tipo": "duracion"
                    }
		        ],
		        "tomas": [
		        	{
		                "id": 9,
		                "fecha": "2018/03/03 13:00",
		                "estatus": false
		            },
		            {
		                "id": 8,
		                "fecha": "2018/03/03 08:30",
		                "estatus": true
		            },
		            {
		                "id": 7,
		                "fecha": "2018/03/03 04:30",
		                "estatus": true
		            },
		            {
		                "id": 6,
		                "fecha": "2018/03/03 00:00",
		                "estatus": true
		            }
		        ]
		    }
		],
		"recomendacion": "recomendacion general",
	}
]