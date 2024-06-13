"use client"
import { useEffect, useState } from "react";

export default function Home() {

  const [name, setName] = useState("Salwa Mazarin");

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iterations = 0;
    const interval = setInterval(() => {
      const a = name
        .split("")
        .map((letter, index) => {
          const namaAwal = "Salwa Mazarin"
          if(index < iterations){
            return namaAwal[index]
          }
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");

        setName(a)

        if(iterations >= 12) clearInterval(interval)

        iterations += 1 /3
    }, 30);
  },[]);
  return (
    <div className="pt-40 back">
      <div className="h-[100vh] pt-10 text-center">
        <p className="text-8xl name">{name}</p>
        <p className="text-2xl mt-4 stack">Frontend Engineer</p>
      </div>
    </div>
  );
}
