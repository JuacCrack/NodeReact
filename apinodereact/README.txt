El objetivo de este proyecto es intentar realizar una api con Node y un frontend de la misma con React. 
Cabe destacar que es mi primera vez desarrollando con estos 2 lenguajes, ademas el proyecto no funciona del todo pero es un borrador de un posible proyecto. 
El proyecto esta subdividido en 2 carpetas:

- Api
- Frontend

<Api> Se subdivide en 2 carpetas Controllers y Routes. En la carpeta controllers encontramos el archivo user.js. En este archivo encontramos toda la logica 
de nuestro proyecto, se realizan las consultas a la base de datos y se espera un json de devoluci�n. En la carpeta routes, establecemos las rutas correspondientes a 
cada funcion de user.js. Adem�s contamos con los archivos db.js (Establece la conexion a la base de datos), index.js (Establece el uso y configuraci�n de las bibliotecas y rutas),
package.json (Proporciona informaci�n sobre el proyecto).

<Frontend> Se subdivide en 2 carpetas Public y Src. En la carpeta Public encontramos el archivo index.html para la base de nuestro proyecto React.
En la carpeta src encontramos 2 carpetas m�s, components y styles. En la carpeta components encontramos el archivo Form.js en el que encontramos la utilizacion de Axios para la comunicaci�n
con la api y adem�s la utilizaci�n de componentes. En este encontramos 2 modelos de formulario uno es para agregar un contacto, y el otro es para editar el mismo. Adem�s encontramos
el archivo Grid.js, este archivo utiliza Axios para la comunicaci�n con la api, adem�s muestra una tabla con informaci�n de los contactos, El componente toma tres propiedades: "users", "setUsers" y "setOnEdit".
La propiedad "users" es una matriz de objetos de usuario que se muestran en la tabla, "setUsers" es una funci�n que actualiza la matriz de usuarios y "setOnEdit" es una funci�n que se utiliza para cambiar el 
modo de edici�n para un usuario determinado. El componente renderiza una tabla con encabezados de columna y filas de datos utilizando etiquetas HTML personalizadas definidas con styled-components.
Cada fila muestra la informaci�n del usuario y tiene botones para editar y eliminar. Los eventos onClick de los botones de editar y eliminar llaman a funciones que actualizan el estado 
del componente para realizar las operaciones correspondientes. Adem�s tenemos la carpeta Styles que contiene el archivo global.js, este archivo define un estilo CSS para implementar 
un estilo global a todo el proyecto. Adem�s contamos con el archivo App.js, este archivo es un componente principal de React, este contiene un estado que almacena una lista de usuarios (users)
y un objeto de edici�n (onEdit). useEffect se usa para llamar a la funci�n getUsers y actualizar el estado users cuando se monta el componente y se actualiza setUsers. En el m�todo render, 
el componente renderiza un t�tulo, un componente de formulario (Form) y un componente de cuadr�cula (Grid) que muestra la lista de usuarios. Adem�s, renderiza un ToastContainer de react-toastify que muestra los mensajes de error. 
Tambien contamos con el archivo index.js este es un archivo JavaScript que inicia una aplicaci�n React en un navegador web. La aplicaci�n se renderiza en un elemento con el id 'root' en el documento HTML.