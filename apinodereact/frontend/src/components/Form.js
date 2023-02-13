import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.fullname.value = onEdit.fullname;
      user.company.value = onEdit.company;
      user.profile.value = onEdit.profile;
      user.image.value = onEdit.image;
      user.email.value = onEdit.email;
      user.birthdate.value = onEdit.birthdate;
      user.phonew.value = onEdit.phonew;
      user.phonep.value = onEdit.phonep;
      user.address.value = onEdit.address;
      user.CityFK.value = onEdit.CityFK;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.fullname.value ||
      !user.company.value ||
      !user.profile.value ||
      !user.image.value ||
      !user.email.value ||
      !user.birthdate.value ||
      !user.phonew.value ||
      !user.phonep.value ||
      !user.address.value ||
      !user.CityFK.value 
    ) {
      return toast.warn("Please complete all fields!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          name: user.fullname.value,
          company: user.company.value,
          profile: user.profile.value,
          image: user.image.value,
          email: user.email.value,
          birthdate: user.birthdate.value,
          phonew: user.phonew.value,
          phonep: user.phonep.value,
          address: user.address.value,
          cityfk: user.CityFK.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
          name: user.fullname.value,
          company: user.company.value,
          profile: user.profile.value,
          image: user.image.value,
          email: user.email.value,
          birthdate: user.birthdate.value,
          phonew: user.phonew.value,
          phonep: user.phonep.value,
          address: user.address.value,
          cityfk: user.CityFK.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.fullname.value = "";
    user.company.value = "";
    user.profile.value = "";
    user.image.value = "";
    user.email.value = "";
    user.birthdate.value = "";
    user.phonew.value = "";
    user.phonep.value = "";
    user.address.value = "";
    user.CityFK.value = "";


    setOnEdit(null);
    getUsers();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Name</Label>
        <Input name="fullname" />
      </InputArea>
      <InputArea>
        <Label>Company</Label>
        <Input name="company" />
      </InputArea>
      <InputArea>
        <Label>Profile</Label>
        <Input name="profile" />
      </InputArea>
      <InputArea>
        <Label>Image</Label>
        <Input name="image" />
      </InputArea>
      <InputArea>
        <Label>E-mail</Label>
        <Input name="email" type="email" />
      </InputArea>
      <InputArea>
        <Label>Birthdate</Label>
        <Input name="birthdate" type="date" />
      </InputArea>
      <InputArea>
        <Label>PhoneW</Label>
        <Input name="phonew" />
      </InputArea>
      <InputArea>
        <Label>PhoneP</Label>
        <Input name="phonep" />
      </InputArea>
      <InputArea>
        <Label>Address</Label>
        <Input name="address"/>
      </InputArea>
      <InputArea>
        <Label>CityFK</Label>
        <Input name="CityFK"/>
      </InputArea>
 
      <Button type="submit">SAVE</Button>
    </FormContainer>
  );
};

export default Form;