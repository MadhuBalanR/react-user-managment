import React from "react";
import './Header.css'

function Header()
{
    return(
        <>
       
    <header>
        <h1>Welcome to My Webpage</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="home">
            <h2>Home Section</h2>
            <p>This is the home section of the webpage.</p>
        </section>

        <section id="about">
            <h2>About Section</h2>
            <p>This section contains information about the webpage.</p>
        </section>

        <section id="contact">
            <h2>Contact Section</h2>
            <p>You can reach us at example@example.com.</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 My Simple Webpage</p>
    </footer>

        </>
    )
}
export default Header