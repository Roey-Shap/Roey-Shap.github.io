class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
              
        <div class="navbar navbar_container">
            <div style="max-width: 10%">
                <a href="index.html" class="navbar_home">Home</a>
            </div>
            <div class="navbar_link_container">
                <p><a class="reg_link navbar_link" href="game_dev.html">Game Dev</a></p>
                <p><a class="reg_link navbar_link" href="resume.html">Resume</a></p>
                <p><a class="reg_link navbar_link" href="writing.html">Writing</a></p>
                <p><form action="contact.html" class="dropdown">
                    <button type="submit" value="" class="dropbtn">
                        <a href="contact.html" class="reg_link">
                            Contact
                        </a>
                        <div class="dropdown-content">
                            <a class="navbar_link" href="#">Link 1</a>
                            <a class="navbar_link" href="#">Link 2</a>
                            <a class="navbar_link" href="#">Link 3</a>
                        </div>
                    </input>                                 
                </form></p>
                <!--
                <p><a class="reg_link navbar_link" href="#email_form">Contact</a></p>
                
                <p><a class="reg_link navbar_link" href="#personal_projects">Personal Projects</a></p>
                <p><a class="reg_link navbar_link" href="#hobbies">Hobbies</a></p>
                <p style="padding: 40px;"><a class="reg_link navbar_link" href="#contact">Contact</a></p>
                -->
            </div>
        </div>

    `;
    }
}

customElements.define('navbar-comp', Navbar);