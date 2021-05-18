import React from "react";
import FormInfo from "../components/FormInfo";
import Header from "../components/Header";
import Head from "next/head";
import styles from "../styles/Custom.module.css";
import Link from "next/link";

// Refatora pra ternário
function DataInput({ typeForm }) {
  if (typeForm === "Sign in") {
    return (
      <div className="h-screen">
        <Head>
          <title>Desafio Prepi</title>
        </Head>
        <main className="h-full w-full bg-green-700">
          <div className="flex flex-col items-center justify-center h-full">
            <FormInfo typeForm={typeForm}></FormInfo>
            <Link href="/">
              <a className="text-black mt-4">Não é cadastrado?</a>
            </Link>
          </div>
        </main>
        <footer className={styles.footer}></footer>
      </div>
    );
  } else {
    return (
      <div className="h-screen">
        <Head>
          <title>Desafio Prepi</title>
        </Head>
        <main className="h-full w-full bg-green-700">
          <div className="flex flex-col items-center justify-center h-full">
            <FormInfo typeForm={typeForm}></FormInfo>
            <Link href="/Signin">
              <a className="text-black mt-4">Vá para a tela de Cadastro</a>
            </Link>
          </div>
        </main>
        <footer className={styles.footer}></footer>
      </div>
    );
  }

  return;
}

export default DataInput;
