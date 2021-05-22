import React from "react";
import { useEffect, useState, useContext } from "react";
import { ProfileContext } from "../contexts/Profile";
import Head from "next/head";

function Dashboard() {
  const [myProfile, setMyProfile] = useContext(ProfileContext);
  const camposDashboard = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
    4: "E",
    5: "F",
  };
  // Esse vai pra dashboard
  let val1 = 4;
  let val2 = 2;
  let cellVall = "MUDADO DO FRONT!";
  const insertOnCell = () => {
    // OLHA RHIAN
    // http://localhost:8000/updateByParams?id=${val1}&id2=${val2}
    fetch(`http://localhost:8000/updateByParam?val1=${val1}&val2=${val2}&cellVall=${cellVall}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        val1,
        val2
      }),
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });

      console.log(myProfile);
  };
  // To pra descobrir ainda
  const addProduct = async () => {
    const response = await (
      await fetch("http://localhost:8000/update", { method: "PUT", body: 333 })
    ).json();

    // Peguei o array do usuário
    // Enviar o email do usuário pra filtrar no back
  };

  return (
    <div className="h-screen">
      <Head>
        <title>Desafio Prepi</title>
      </Head>
      <div className="h-full w-full bg-green-700">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="bg-gray-50 p-16 rounded-md">
            <p>
              {myProfile.myName} | {myProfile.myEmail} | {myProfile.firstSignIn}{" "}
              | {myProfile.firstProduct} | {myProfile.total}
            </p>
            <p>Bem vindo {myProfile.myName}!</p>
          </div>
          <div className="flex p-16">
            <button
              onClick={insertOnCell}
              className="text-green-900 p-2 bg-yellow-500 mt-4 w-32 rounded-lg"
            >
              Adicionar um produto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
