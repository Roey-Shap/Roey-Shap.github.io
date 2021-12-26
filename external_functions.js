

function validateEmailInput() {

}



function copyDiscordName() {
    let copyString = 'Shap#4869';
    navigator.clipboard.writeText(copyString);

    let tooltip = document.getElementById("tooltiptext");
    tooltip.innerHTML = "Copied!";

    /* Wanted to open the window, too, but I guess not. Seems like a bigger issue...
    https://forum.freecodecamp.org/t/i-want-to-open-a-new-tab-using-javascript-but-i-should-not-lose-my-focus-on-the-current-tab/252225/4

    let handle = window.open('https://discord.com/', '_blank');
    handle.blur();
    window.focus();
     */
}

function hoveringOverCopy() {
    let tooltip = document.getElementById("tooltiptext");
    tooltip.innerHTML = "Copy to clipboard";
}

/*
Requires asking user permission for what's ultimately a silly feature. Whatever

function checkDefaultText() {
    let clipboard_text = navigator.clipboard.readText();
    if (clipboard_text != 'Shap#4869') {
        let tooltip = document.getElementById("tooltiptext");
        tooltip.innerHTML = "Copy Shap#4869 to clipboard"
    }
}

 */


