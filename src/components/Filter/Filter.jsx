import React from 'react';
import { Title, Label, Input } from '../App/App.styled';

const Filter = ({ filter, handleInputChange }) => (
  <div>
    <Title>Contacts</Title>
    <Label htmlFor="findInput">Find contacts by name:</Label>
    <Input
      type="text"
      id="findInput"
      name="find"
      value={filter}
      onChange={handleInputChange}
    />
  </div>
);

export default Filter;