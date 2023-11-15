const terminal = document.querySelector(".terminal");
const terminalBody = document.getElementById("terminal-body");
const commandInput = document.getElementById("command-input");

terminal.style.display = "none";

function executeCommand(command) {
    command = command.trim().toLowerCase();
    switch (command) {
        case "help":
            terminalBody.innerHTML += "figure it out<br>";
            break;
        case "music":
            terminalBody.innerHTML += "Playing music...<br>";
            const audio = new Audio("./assets/music.mp3");
            audio.play();
            break;
        case "arch":
            terminalBody.innerHTML += "Arch Linux is the best distro because it's lightweight and highly customizable.<br>";
            break;
        case "gay":
            document.documentElement.style.setProperty('--background', 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)');
            break;
        case "ungay":
            document.documentElement.style.setProperty('--background', '');
            break;
        case "desktop":
            terminalBody.innerHTML += "<img src='./assets/desktop.png' alt='Desktop Screenshot' style='width: 100%; height: 100%;'><br>";
            break;
        case "clear":
            terminalBody.innerHTML = "";
            break;
        default:
            terminalBody.innerHTML += `Command not found: ${command}<br>`;
    }
    commandInput.value = "";
}


document.addEventListener("keyup", (e) => {
    if (e.key === "`") {
        if (terminal.style.display === "none") {
            terminal.style.display = "block";
            commandInput.focus();
        } else {
            document.querySelector(".terminal input").value = "";
            terminal.style.display = "none";
        }
    }
});

commandInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        const command = commandInput.value;
        terminalBody.innerHTML += `$ ${command}<br>`;
        executeCommand(command);
    }
});
