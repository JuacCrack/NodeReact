import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM Contacts";

    db.query(q, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const q =
      "INSERT INTO Contacts (DEFAULT, `fullname`, `company`, `profile`, `image` , `email`, `birthdate`, `phonew` , `phonep` , `address`, `CityFK`) VALUES(?)";
  
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
      if (err) return res.json(err);
  
      return res.status(200).json("Contacto agregado con exito");
    });
  };
  
  export const updateUser = (req, res) => {
    const q =
      "UPDATE Contacts SET `fullname` = ?, `company` = ?, `profile` = ?, `image` = ?, `email` = ?, `birthdate` = ?, `phonew` = ?, `phonep` = ?, `address` = ?, `CityFK` = ? WHERE `ContactId` = ?";
  
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
      if (err) return res.json(err);
  
      return res.status(200).json("Actualizado con Exito");
    });
  };
  
  export const deleteUser = (req, res) => {
    const q = "DELETE FROM Contacts WHERE `ContactsId` = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Contacto eliminado con Exitoso");
    });
  };