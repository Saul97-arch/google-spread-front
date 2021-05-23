import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { ProfileContext } from "../contexts/Profile";

// Jogar pros hooks
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
  const router = useRouter();
  const [name, nameInput] = useInput({ type: "text" });
  const [email, emailInput] = useInput({ type: "email" });
  const [password, passwordInput] = useInput({ type: "password" });
  const [myProfile, setMyProfile] = useContext(ProfileContext);

  const dataAtual = () => {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    const dataAtual = dia + "/" + mes + "/" + ano;

    return dataAtual;
  };

  const params = {
    name: name,
    email: email,
    password: password,
    dateSignIn: dataAtual(),
  };

  const options = {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  const signIn = () => {
    // Refatorar o helper que o Rhian fez tá zoando o fluxo
    fetch("http://localhost:8000/insertData", options)
      .then((res) => {
        setMyProfile({
          myName: res.data[0],
          myEmail: res.data[1],
          firstSignIn: res.data[3],
          firstProduct: res.data[4],
          total: res.data[5],
        });
        console.log("THEN");
        router.push("/Dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const login = () => {
    fetch("http://localhost:8000/login", options)
      .then((res) => {
        //console.log(res.clone().json());
        return res.json();
      })
      .then((res) => {
        setMyProfile({
          myName: res.name,
          myEmail: res.email,
          firstSignIn: res.birthday,
          firstProduct: res.dateFirstProduct,
          total: res.productCount,
        });
        console.log("Data from backend:" , res);
        router.push("/Dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return typeForm !== "Log in" ? (
    <form
      action="/insertData"
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
      <button
        onClick={signIn}
        className="text-green-900 p-2 bg-yellow-500 mt-4 w-2/3 rounded-lg"
      >
        {typeForm}
      </button>
    </form>
  ) : (
    <form
      /* Provavelmente uma rota getData pra pegar infos do usuário */
      action="/login"
      onSubmit={formHandler}
      className="flex flex-col items-center justify-center bg-gray-200 p-12 rounded-lg"
    >
      <label htmlFor="nome">Email</label>
      {emailInput}

      <label htmlFor="Senha" className="mt-3">
        Senha
      </label>
      {passwordInput}
      <button
        className="text-green-900 p-2 bg-yellow-500 mt-4 w-2/3 rounded-lg"
        onClick={login}
      >
        {typeForm}
      </button>
    </form>
  );
}

export default FormInfo;
