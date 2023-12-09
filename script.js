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
            document.documentElement.style.setProperty('--background', 'linear-gradient(to bottom, red, orange, yellow, green, blue, indigo, violet)');
            break;
        case "trans":
            document.documentElement.style.setProperty('--background', 'linear-gradient(to bottom, #5BCEFA, #F5A9B8, #FFFFFF, #F5A9B8, #5BCEFA)');
            document.documentElement.style.setProperty('--text', '#000000');
            break;
        case "mlm":
            document.documentElement.style.setProperty('--background', 'linear-gradient(to bottom, #078d70, #26ceaa, #99e8c2, #efefff, #7bade3, #5049cb, #3e1a78)');
            document.documentElement.style.setProperty('--text', '#000000');
            break;
        case "lesbian":
            document.documentElement.style.setProperty('--background', 'linear-gradient(to bottom, #D52D00, #EF7627, #FF9A56, #FFFFFF, #D162A4, #B55690, #A30262)');
            document.documentElement.style.setProperty('--text', '#000000');
            break;
        case "bi":
            document.documentElement.style.setProperty('--background', 'linear-gradient(to bottom, #D60270, #9B4F96, #0038A8)');
            break;
        case "pan":
            document.documentElement.style.setProperty('--background', 'linear-gradient(to bottom, #FF218C 0%, #FF218C 20%, #FFD800 50%, #FFD800 50%, #21B3FF 80%, #21B3FF 100%)');
            document.documentElement.style.setProperty('--text', '#000000');
            break;
        case "enby":
            document.documentElement.style.setProperty('--background', 'linear-gradient(to bottom, #FCF434 20%, #FFFFFF 40%, #9C59D1 60%, #2C2C2C 90%)');
            document.documentElement.style.setProperty('--text', '#000000');
            break;
        case "desktop":
            terminalBody.innerHTML += "<img src='./assets/desktop.png' alt='Desktop Screenshot' style='width: 100%; height: 100%;'><br>";
            break;
        case "clear":
            terminalBody.innerHTML = "";
            break;
        default:
            if (command.startsWith("un")) {
                document.documentElement.style.setProperty('--background', '');
                document.documentElement.style.setProperty('--text', '');
                break;
            }
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
