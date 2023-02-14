El objetivo de este proyecto es intentar realizar una api con Node y un frontend de la misma con React. 
Cabe destacar que es mi primera vez desarrollando con estos 2 lenguajes, ademas el proyecto no funciona del todo pero es un borrador de un posible proyecto. 
El proyecto esta subdividido en 2 carpetas:

- Api
- Frontend

<Api> Se subdivide en 2 carpetas Controllers y Routes. En la carpeta controllers encontramos el archivo user.js. En este archivo encontramos toda la logica 
de nuestro proyecto, se realizan las consultas a la base de datos y se espera un json de devolución. En la carpeta routes, establecemos las rutas correspondientes a 
cada funcion de user.js. Además contamos con los archivos db.js (Establece la conexion a la base de datos), index.js (Establece el uso y configuración de las bibliotecas y rutas),
package.json (Proporciona información sobre el proyecto).

<Frontend> Se subdivide en 2 carpetas Public y Src. En la carpeta Public encontramos el archivo index.html para la base de nuestro proyecto React.
En la carpeta src encontramos 2 carpetas más, components y styles. En la carpeta components encontramos el archivo Form.js en el que encontramos la utilizacion de Axios para la comunicación
con la api y además la utilización de componentes. En este encontramos 2 modelos de formulario uno es para agregar un contacto, y el otro es para editar el mismo. Además encontramos
el archivo Grid.js, este archivo utiliza Axios para la comunicación con la api, además muestra una tabla con información de los contactos, El componente toma tres propiedades: "users", "setUsers" y "setOnEdit".
La propiedad "users" es una matriz de objetos de usuario que se muestran en la tabla, "setUsers" es una función que actualiza la matriz de usuarios y "setOnEdit" es una función que se utiliza para cambiar el 
modo de edición para un usuario determinado. El componente renderiza una tabla con encabezados de columna y filas de datos utilizando etiquetas HTML personalizadas definidas con styled-components.
Cada fila muestra la información del usuario y tiene botones para editar y eliminar. Los eventos onClick de los botones de editar y eliminar llaman a funciones que actualizan el estado 
del componente para realizar las operaciones correspondientes. Además tenemos la carpeta Styles que contiene el archivo global.js, este archivo define un estilo CSS para implementar 
un estilo global a todo el proyecto. Además contamos con el archivo App.js, este archivo es un componente principal de React, este contiene un estado que almacena una lista de usuarios (users)
y un objeto de edición (onEdit). useEffect se usa para llamar a la función getUsers y actualizar el estado users cuando se monta el componente y se actualiza setUsers. En el método render, 
el componente renderiza un título, un componente de formulario (Form) y un componente de cuadrícula (Grid) que muestra la lista de usuarios. Además, renderiza un ToastContainer de react-toastify que muestra los mensajes de error. 
Tambien contamos con el archivo index.js este es un archivo JavaScript que inicia una aplicación React en un navegador web. La aplicación se renderiza en un elemento con el id 'root' en el documento HTML.