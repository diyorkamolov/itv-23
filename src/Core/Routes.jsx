import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Filmlar from "../Page/Filmlar";
import Multifilmlar from "../Page/Multifilmlar";
import Obunalar from "../Page/Obunalar";
import Seriallar from "../Page/Seriallar";
import FilmsById from "../Page/[id]";
import Saralanganlar from "../Page/Saralanganlar";

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/filmlar" element={<Filmlar />} />
      <Route path="/seriallar" element={<Seriallar />} />
      <Route path="/multifilmlar" element={<Multifilmlar />} />
      <Route path="/obunalar" element={<Obunalar />} />
      <Route path="/saralanganlar" element={<Saralanganlar />} />

      <Route path="/film/:id" element={<FilmsById />} />
    </Routes>
  );
};

export default RouterComponent;
