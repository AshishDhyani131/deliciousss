import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/searched/${input}`);
    setInput("");
  }
  return (
    <FormStyle onSubmit={handleSubmit}>
      <FaSearch></FaSearch>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin: 0rem auto;
  position: relative;
  width: 100%;
  input {
    display: block;
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3.5rem;
    border: none;
    border-radius: 50rem;
    outline: none;
    width: 75%;
    margin: auto;
  }
  svg {
    position: absolute;
    top: 53%;
    left: 13%;
    transform: translate(100%, -50%);
    color: white;
    font-size: 20px;
  }
`;

export default Search;
