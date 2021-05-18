import { useEffect, useState } from "react";

import DataInput from "../components/DataInput"

export default function Cadastro() {
  const [apiRes, setApiRes] = useState("");

  /* const callAPI = () => {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => setApiRes(res));
  };

  useEffect(() => {
    callAPI();
  }, []);
 */
  return (
    <DataInput typeForm="Log in"></DataInput>
  );
}
