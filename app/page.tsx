"use client"

import { useState } from "react";
import { generate } from "./lib/actions";
import Loading from "./loading";

export default function Home() {

  const [data, setData] = useState<string | undefined>();

  return (
    <main className="flex flex-col items-center gap-5 m-20 max-w-screen-sm">
      <h1>Gerador de Personagem</h1>
      <p>Gere peronagens para jogar Escolinha Improvável</p>
      <form className="flex flex-col gap-3 w-full" action={(formData: FormData) => {
        setData(undefined)
        generate(formData).then((data) => setData(data))
      }}>
        <legend>Escolha o tipo do personagem:</legend>
        <label className="flex justify-between cursor-pointer">Obejto
          <input type="radio" name="tipo" id="objeto" value="objeto" />
        </label>
        <label className="flex justify-between cursor-pointer">Celebridade
          <input type="radio" name="tipo" id="celebridade" value="celebridade" />
        </label>
        <label className="flex justify-between cursor-pointer">Profissional
          <input type="radio" name="tipo" id="profissional" value="profissão" />
        </label>
        <input className="bg-blue-500 font-bold p-3 rounded-lg cursor-pointer" type="submit" value="Gerar" />
        <Loading />
      </form>
      {data && (
        <>
          {data?.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </>
      )}
    </main>
  );
}
