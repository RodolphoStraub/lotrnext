import React from "react";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="navbar">
        <ul>
          <li>
            <Link className="logo" href="/">
              <img className="logo" src="../home.png"/>
            </Link>
          </li>
          <li>
            <Link className="logo" href="/personagens">
            <img className="logo" src="../Personagens.png"/>
            </Link>
          </li>
          <li>
            <Link className="logo" href="/locais">
            <img className="logo" src="../locais.png"/>
            </Link>
          </li>
          <li>
            <Link className="logo" href="/itens">
            <img className="logo" src="../itens.png"/>
            </Link>
          </li>
        </ul>
    </div>
  );
};

export default Navbar;
