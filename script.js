const terminal = document.createElement("div");
terminal.classList.add("terminal");

const terminalBody = document.createElement("div");
terminalBody.id = "terminal-body";
terminal.appendChild(terminalBody);

const commandInputContainer = document.createElement("div");
commandInputContainer.id = "command-input-container";
terminal.appendChild(commandInputContainer);

const commandPrompt = document.createElement("span");
commandPrompt.id = "command-prompt";
commandPrompt.innerText = "~ ❯";
commandInputContainer.appendChild(commandPrompt);

const commandInput = document.createElement("input");
commandInput.type = "text";
commandInput.id = "command-input";
commandInput.autofocus = true;
commandInputContainer.appendChild(commandInput);

let terminalOpen = false;

function executeCommand(command) {
    command = command.trim().toLowerCase();

    const aliases = {
        "help": ["help", "h", "?"],
        "music": ["music"],
        "arch": ["arch", "archlinux", "arch linux", "arch-linux"],
        "rainbow": [ "lgbt", "lgbtq", "lgbtq+", "rainbow", "pride"],
        "trans": ["trans", "transgender"],
        "mlm": ["mlm", "gay"],
        "lesbian": ["lesbian", ],
        "bi": ["bi", "bisexual"],
        "pan": ["pan", "pansexual"],
        "enby": ["enby", "nonbinary", "non-binary", "nb"],
        "aromantic": ["aromantic", "aro"],
        "asexual": ["asexual", "ace"],
        "desktop": ["desktop"],
        "clear": ["clear"]
    };

    const matchedCommand = Object.keys(aliases).find(key => aliases[key].includes(command));

    switch (matchedCommand) {
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
        case "rainbow":
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
        case "aromantic":
            document.documentElement.style.setProperty('--background', 'linear-gradient(to bottom, #3DA542, #A7D379, #FFFFFF, #A9A9A9, #000000)');
            document.documentElement.style.setProperty('--text', '#000');
            break;
        case "asexual":
            document.documentElement.style.setProperty('--background', 'linear-gradient(to bottom, #000000, #A3A3A3, #FFFFFF, #800080)');
            document.documentElement.style.setProperty('--text', '#000');
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
        if (terminalOpen === false) {
            document.body.appendChild(terminal);
            terminalOpen = true;
        } else {
            document.querySelector(".terminal").remove();
            terminalOpen = false;
        }
    }
});

commandInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        const command = commandInput.value;
        terminalBody.innerHTML += `~ ❯ ${command}<br>`;
        executeCommand(command);
    }
});
