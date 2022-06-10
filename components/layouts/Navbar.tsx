import React from 'react';
import classes from './Navbar.module.css'
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>codermomoo</div>
      <nav>
          <ul>
              <li>
                  <Link href="/">All meetup</Link>
              </li>
              <li>
                  <Link href="/new-meetup">Add a meetup</Link>
              </li>
          </ul>
      </nav>
    </header>
  )
}

export default Navbar
