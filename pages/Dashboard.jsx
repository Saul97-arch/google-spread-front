import React from "react";
import { useEffect, useState, useContext } from "react";
import { ProfileContext } from "../contexts/Profile";
import Head from "next/head";

function Dashboard() {
  const [myProfile, setMyProfile] = useContext(ProfileContext);

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
            <button className="text-green-900 p-2 bg-yellow-500 mt-4 w-32 rounded-lg mr-5">
              Cadastrar produto
            </button>
            <button 
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
