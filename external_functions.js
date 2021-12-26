

function validateEmailInput() {
    let checks = [
        'subject',
        'content'
    ];
    for (let i = 0; i < checks.length; i++) {
        let c = checks[i];
        let t = document.getElementById(c).value;
        if (t == "") {
            alert("Please fill out the " + c + " field.");
            return;
        }
        checks[i] = t;
    }
    // All fields are filled with something:
    window.open('mailto:roeyshapiro15@gmail.com?subject=' + checks[0] + '&body=' + checks[1]);
}



function copyToClipboard(copyString, checkID) {
    navigator.clipboard.writeText(copyString);

    let tooltip = document.getElementById(checkID);
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




