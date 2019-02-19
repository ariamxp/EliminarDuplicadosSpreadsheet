# EliminarDuplicadosSpreadsheet
Eliminar Duplicados Spreadsheet (Google Sheets)

Para correr la función deben hacer lo siguiente:

1) Crear un nuevo archivo de SpreadSheet o abrir uno existente.

2) Para un ejemplo se puede utilizar una tabla con sol disguiente formato:

Ejemplo de Tabla: 
Name	     City	      Age
Indiana	   Santiago	  31
Ariam	     Santiago	  31
Pedro	     Santiago	  30
Camila	   Santiago	  26
Ivan	     Santiago	  26
Angel	     Santiago	  31
Haka	     Santiago	   1
Camila	   Bogota	    13
Haka	     Santiago	   1
Indiana	   Valencia	  20
Camila	   Barcelona	13

3) Abrir en el menú "Herramientas" > "Editor de Secuencia de Comandos"

4) Copiar y Pegar la el codigo de la función

5) Cambiar el valor de la siguiente linea:

  var posEval = 0; 
  por 
  var posEval = Nro de Columna a Evaluar Duplicados; 
  
  Ejemplo:
  var posEval = 0; "0" Representa a la primera columna "Name"

6) Guardar el Script

7) Seleccionar la Función "eliminarDuplicates" y preonar "Ejecutar"

8) Los duplicados en el Spreadsheet se eliminaran
