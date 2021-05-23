import React from "react";
import { useEffect, useState, useContext } from "react";
import { ProfileContext } from "../contexts/Profile";
import Head from "next/head";

function Dashboard() {
  const [myProfile, setMyProfile] = useContext(ProfileContext);

  const dataAtual = () => {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    const dataAtual = dia + "/" + mes + "/" + ano;

    return dataAtual;
  };

  const getCell = async (startRowIndex = 1, endRowIndex = 2) => {
    const cell = await fetch(
      `http://localhost:8000/getCell?startRowIndex=${startRowIndex}&endRowIndex=${endRowIndex}`,
      {
        method: "POST",
      }
    ).then((res) => res.json());

    return cell;
  };

  const getRowIndex = async () => {
    const sheet = await fetch("http://localhost:8000/getRows", {
      method: "GET",
    }).then((res) => res.json());
    // get index of the arr of user and insert the value in startRowIndex
    for (let i = 0; i < sheet.length; i++) {
      if (sheet[i].includes(myProfile.myEmail)) {
        return i;
      }
    }
  };

  const insertValue = (startColumnIndex, startRowIndex, cellVall) => {
    fetch(
      `http://localhost:8000/updateByParam?startColumnIndex=${startColumnIndex}&startRowIndex=${startRowIndex}&cellVall=${cellVall}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          startColumnIndex,
          startRowIndex,
        }),
      }
    )
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
  };

  const insertRegisterData = async () => {
    let startColumnIndex = 4;
    let startRowIndex = await getRowIndex();
    let dataDeCadastroPrimeiroProduto = dataAtual();

    const sheet = await fetch("http://localhost:8000/getRows", {
      method: "GET",
    }).then((res) => res.json());
    const cell = await getCell(startRowIndex, startRowIndex + 1);
    insertValue(startColumnIndex, startRowIndex, dataDeCadastroPrimeiroProduto);
    if (sheet[startRowIndex][4]) {
      return;
    }
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
              onClick={insertRegisterData}
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
