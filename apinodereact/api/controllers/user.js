import { db } from "../db.js"; //IMPORTAMOS LA BASE DE DATOS

export const getUsers = (_, res) => {
    const q = "SELECT * FROM Contacts"; // QUERY PARA TRAER TODA LA TABLA Contacts

    db.query(q, (err, data) => {
        if(err) return res.json(err); //SI LA QUERY TIENE ALGUN ERROR DEVUELVE UN JS CON ERROR 

        return res.status(200).json(data); //SI LA QUERY FUNCIONA DEVUELVE UN JSON CON LA INFORMACION SOLICITADA 
    });
};

export const addUser = (req, res) => {
    const q =
        "INSERT INTO Contacts (DEFAULT, `fullname`, `company`, `profile`, `image` , `email`, `birthdate`, `phonew` , `phonep` , `address`, `CityFK`) VALUES(?)";
        // QUERY PARA INSERTAR LOS SIGUIENTES DATOS EN LA TABLA CONTACTOS
    const values = [
      req.body.fullname,
      req.body.company,
      req.body.profile,
      req.body.image,
      req.body.email,
      req.body.birthdate,
      req.body.phonew,
      req.body.phonep,
      req.body.address,
      req.body.CityFK,
    ];
  
    db.query(q, [values], (err) => {
        if (err) return res.json(err); //SI LA QUERY TIENE ALGUN ERROR DEVUELVE UN JS CON ERROR 
  
        return res.status(200).json("Contacto agregado con exito"); //SI LA QUERY FUNCIONA DEVUELVE UN JSON CON LA INFORMACION SOLICITADA 

    });
  };
  
  export const updateUser = (req, res) => {
    const q =
      "UPDATE Contacts SET `fullname` = ?, `company` = ?, `profile` = ?, `image` = ?, `email` = ?, `birthdate` = ?, `phonew` = ?, `phonep` = ?, `address` = ?, `CityFK` = ? WHERE `ContactId` = ?";
      // QUERY PARA REALIZAR UN UPDATE A LAS DIFERENTES COLUMNAS EN BASE A UNA ID
    const values = [
        req.body.fullname,
        req.body.company,
        req.body.profile,
        req.body.image,
        req.body.email,
        req.body.birthdate,
        req.body.phonew,
        req.body.phonep,
        req.body.address,
        req.body.CityFK,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err); //SI LA QUERY TIENE ALGUN ERROR DEVUELVE UN JS CON ERROR 
  
        return res.status(200).json("Actualizado con Exito"); //SI LA QUERY FUNCIONA DEVUELVE UN JSON CON LA INFORMACION SOLICITADA 

    });
  };
  
  export const deleteUser = (req, res) => {
    const q = "DELETE FROM Contacts WHERE `ContactsId` = ?";
  
    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err); //SI LA QUERY TIENE ALGUN ERROR DEVUELVE UN JS CON ERROR 
  
        return res.status(200).json("Contacto eliminado con Exitoso"); //SI LA QUERY FUNCIONA DEVUELVE UN JSON CON LA INFORMACION SOLICITADA 

    });
  };