import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
export const ProfileContext = createContext();

function ProfileProvider({ children }) {
  // guardar no myProfile um objeto com todas as infos filtradas
  const [myProfile, setMyfprofile] = useState(null);
  // const [myEmail, setEmail] = useState("");
  const router = useRouter();
  /* useEffect(() => {
    // Aqui fazer o filtro pra pegar todos os dados do back end
    // fetch --> buscaria os dados no back end que bate com o email do front
    // router.push
    router.push("/Dashboard");
  }, [myProfile]); */

  return (
    <ProfileContext.Provider value={[myProfile, setMyfprofile]}>
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileProvider;
