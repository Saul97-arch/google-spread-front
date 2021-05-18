import { useEffect, useState } from "react";

const useInput = ({ type }) => {
  const [value, setValue] = useState("");
  const input = (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
      className="rounded-md p-1"
    />
  );
  return [value, input];
};

function FormInfo({ typeForm }) {
  const formHandler = (e) => e.preventDefault();

  const [name, nameInput] = useInput({ type: "text" });
  const [email, emailInput] = useInput({ type: "email" });
  const [password, passwordInput] = useInput({ type: "password" });

  const [apiRes, setApiRes] = useState("");

  const params = {
    param1: name,
    param2: email,
    param3: password,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(params),
  };

  const callAPI = () => {
    fetch("http://localhost:8000/insertData", options).then((res) => res.json());
  };

  /* useEffect(() => {
    callAPI();
  }, []);
 */

  return typeForm !== "Log in" ? (
    <form
      onSubmit={formHandler}
      className="flex flex-col items-center justify-center bg-gray-200 p-12 rounded-lg"
    >
      <label htmlFor="nome">Nome</label>
      {nameInput}

      <label htmlFor="nome">Email</label>
      {emailInput}

      <label htmlFor="Senha" className="mt-3">
        Senha
      </label>
      {passwordInput}
      <button onClick={callAPI} className="text-green-900 p-2 bg-yellow-500 mt-4 w-2/3 rounded-lg">
        {typeForm}
      </button>
    </form>
  ) : (
    <form
      onSubmit={formHandler}
      className="flex flex-col items-center justify-center bg-gray-200 p-12 rounded-lg"
    >
      <label htmlFor="nome">Email</label>
      {emailInput}

      <label htmlFor="Senha" className="mt-3">
        Senha
      </label>
      {passwordInput}
      <button className="text-green-900 p-2 bg-yellow-500 mt-4 w-2/3 rounded-lg">
        {typeForm}
      </button>
    </form>
  );
}

export default FormInfo;
