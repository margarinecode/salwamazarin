import type { Metadata } from "next";
// import { Inter, Nunito } from "next/font/google";
import "./globals.css";

// const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menu = [
    {
      title: "Home",
      link: "/",
      number: "01",
    },
    {
      title: "Expertise",
      link: "#expertise",
      number: "02",
    },
    {
      title: "Work",
      link: "#work",
      number: "03",
    },
    {
      title: "Experience",
      link: "#experience",
      number: "04",
    },
    {
      title: "Contact",
      link: "$contact",
      number: "05",
    },
  ];
  return (
    <html lang="en">
      <body>
        <div className="flex gap-12 justify-center">
          {menu.map((x) => {
            return (
              <div className="relative" key={x.number}>
                <div className="menu-item">
                  <div className="menu-text">
                    <p>{x.number}</p>
                    <p>{x.title}</p>
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
