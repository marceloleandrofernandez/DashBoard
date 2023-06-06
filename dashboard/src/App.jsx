//import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/home";
import { Table } from "./components/sensorTable/sensorTable";
import { Form } from "./components/sensorForm/sensorForm";
export function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/table" Component={Table} />
        <Route path="/form" Component={Form} />
      </Routes>
    </>
  );
}
