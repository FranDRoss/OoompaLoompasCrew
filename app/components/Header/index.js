import React from 'react';

import Img from './Img';
import A from './A';
import NavBar from './NavBar';

function Header() {
  const title = "Oompa Loompa's Crew";
  return (
    <div>
      <NavBar>
        <A href="/">
          <Img
            src="https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png"
            alt="Oompa Loompa's - Logo"
          />
        </A>
        <h2>{title}</h2>
      </NavBar>
    </div>
  );
}

export default Header;
