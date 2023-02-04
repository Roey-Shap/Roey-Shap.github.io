
/*
Find how to jump straight to section of page from different page
add sublist to Game Development,
    remove sublist from Contact
*/

class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <!--
        Why doesn't any of this ever work >.<
        
        <script id="reloader_scaler" defer>
            // to ensure that nothing gets screwed up... by default 
            // https://stackoverflow.com/questions/21093570/force-page-zoom-at-100-with-js
            // document.body.style.zoom = 1.0;
            let scale = 'scale(1)';
            document.body.style.zoom = (window.innerWidth / window.outerWidth);
            document.body.style.webkitTransform =  scale;    // Chrome, Opera, Safari
            document.body.style.msTransform =   scale;       // IE 9
            document.body.style.transform = scale;           // General
        </script>
        -->
        <div class="navbar navbar_container">
            <div style="max-width: 10%">
                <a href="index.html" class="navbar_home">Home</a>
            </div>
            <div class="navbar_link_container">
                <div class="navbar_regular_links">            
                    <p><a class="reg_link navbar_link" href="game_dev.html">Game Dev</a></p>
                    <p><a class="reg_link navbar_link" href="resume.html">Resume</a></p>
                    <p><a class="reg_link navbar_link" href="writing.html">Writing</a></p>
                    <p><a class="reg_link navbar_link" href="contact.html" class="reg_link">Contact</a></p>
                </div>
                
                <div class="dropdown">
                  <button class="drop_button">Menu</button>
                  <div class="dropdown-content ">
                    <p><a class="reg_link navbar_link" href="game_dev.html">Game Dev</a></p>
                    <p><a class="reg_link navbar_link" href="resume.html">Resume</a></p>
                    <p><a class="reg_link navbar_link" href="writing.html">Writing</a></p>
                    <p><a class="reg_link navbar_link" href="contact.html" class="reg_link">Contact</a></p>
                  </div>
                </div>
                        <!--<form action="contact.html" class="dropdown">
                    <button type="submit" value="" class="dropbtn">
                        
                        <div class="dropdown-content">
                            <a class="navbar_link" href="#">Link 1</a>
                            <a class="navbar_link" href="#">Link 2</a>
                            <a class="navbar_link" href="#">Link 3</a>
                        </div>-->
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