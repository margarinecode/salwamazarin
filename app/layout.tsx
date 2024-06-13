"use client";
import "./globals.css";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menu = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Expertise",
      link: "#expertise",
    },
    {
      title: "Work",
      link: "#work",
    },
    {
      title: "Experience",
      link: "#experience",
    },
    {
      title: "Contact",
      link: "$contact",
    },
  ];
  const [menuHeader, setMenuHeader] = useState(menu);

  const hyperplexed = (text: string, index: number) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iterations = 0;
    const textAwal = menuHeader[index].title;
    const interval = setInterval(() => {
      const a = text
        .split("")
        .map((letter, index) => {
          const namaAwal = textAwal;
          if (index < iterations) {
            return namaAwal[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      const updatedMenu = [...menuHeader];
      updatedMenu[index] = { ...menuHeader[index], title: a };
      setMenuHeader(updatedMenu);
      if (iterations >= textAwal.length) clearInterval(interval);

      iterations += 1 / 3;
    }, 20);

    setMenuHeader(menuHeader);
  };
  return (
    <html lang="en">
      <body>
        <div className="flex gap-12 justify-center fixed w-full header">
          {menuHeader.map((x, index) => {
            return (
              <div className="relative h-fit" key={index}>
                <div
                  className="menu-item"
                  onMouseEnter={() => {
                    setMenuHeader(menu);
                    hyperplexed(x.title, index);
                  }}
                  onMouseLeave={() => {
                    setMenuHeader(menu);
                  }}
                >
                  <div className="menu-text w-fit text-left h-fit relative top-[35%]">
                    <p>.{x.title}()</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {children}
      </body>
    </html>
  );
}
