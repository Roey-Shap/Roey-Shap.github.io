class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
         


                 
         <div id="footer" class="reg_footer">
            <div class="reg_footer_contents">    
                         
                 <div class="tooltip">
                    <input class="reg_link footer_link" type="image" onclick="copyToClipboard('roeyshapiro15@gmail.com', 'tooltiptextEmail')" 
                        onmousein="hoveringOverCopy()" 
                        src="https://www.pinclipart.com/picdir/big/537-5373668_triangle-area-symbol-png-clipart-email-icon-png.png" 
                        alt="" 
                        style="height: 2.2rem;">
                        <div class="tooltiptext" id="tooltiptextEmail">Copy email to clipboard</div>
                    </input>
                 </div>
                
                
                 <a class="reg_link footer_link" target="_blank"; rel="noopener noreferrer" href="https://www.linkedin.com/in/roey-shapiro-404143166/">
                    <img src="https://www.pinclipart.com/picdir/big/60-607147_summit-interconnect-delivers-high-reliability-rigid-linkedin-clipart.png" alt="" style="height: 2.5rem;">
                </a>
                
                <div style="transform: scale(1)"><a class="reg_link footer_link" target="_blank"; rel="noopener noreferrer" href="https://github.com/Roey-Shap">
                    <span style="background-color: white; display: inline-flex; justify-content: center; border-radius: 12px;">
                    <img src="./images/github.png" alt="" style="height: 2.5rem;">
                    </span>
                </a></div>
                
                
                 <div style="transform: scale(1)"><a class="reg_link footer_link" target="_blank"; rel="noopener noreferrer" href="https://roey-shap.itch.io/">
                    <span style="background-color: white; display: inline-flex; justify-content: center; border-radius: 12px;">
                    <img src="https://www.pinclipart.com/picdir/big/555-5557851_itch-io-logo-clipart.png" alt="" style="height: 2.5rem;">
                    </span>
                </a></div>
                
                 <a class="reg_link footer_link" target="_blank"; rel="noopener noreferrer" href="https://www.youtube.com/channel/UCuC1wO6LqpdD7p_opPHgkpA" >
                    <img src="https://www.pinclipart.com/picdir/big/532-5329276_play-icon-white-youtube-logo-png-clipart.png" alt="" style="height: 2.2rem;">
                </a>
                
                <a stlye="" class="reg_link footer_link" target="_blank"; rel="noopener noreferrer" href="https://twitter.com/EonLongNap">
                    <img src="https://www.pinclipart.com/picdir/big/578-5789236_logo-twitter-png-blanc-white-twitter-logo-transparent.png" alt="" style="height: 2.2rem;">
                </a>

                <div class="tooltip">
                    <input class="reg_link footer_link" type="image" onclick="copyToClipboard('Shap#4869', 'tooltiptextDiscord')" onmousein="hoveringOverCopy()" src="./images/discord.png" alt="" style="height: 2.7rem;">
                        <div class="tooltiptext" id="tooltiptextDiscord">Copy Shap#4869 to clipboard</div>
                    </input>
                </div>
            </div>
        </div>
    `;
    }
}

customElements.define('footer-comp', Footer);