const terminalInput = document.getElementById("terminal-input");
const terminalOutput = document.getElementById("terminal-output");

const commands = {
  help: `Available commands:
- about
- projects
- contact
- clear`,

  about: `Hey there! I am Hannah Alex, a final year B.Tech CSE student at PES University, India.
An aspiring developer, passionate about coding.
`,

  projects: `GitHub Projects:
- 🎭 Emostream: https://github.com/HannahAlex004/Emostream
- 📊 Application Monitoring Dashboard: https://github.com/HannahAlex004/Application-Monitoring-Dashboard
- 🎵 Album Finder: https://github.com/HannahAlex004/Album_Finder
- 🎮 Tic Tac Toe Game: https://github.com/HannahAlex004/Tic-Tac-Toe
As part of my first open-source contribution, I dockerized Apache Airavata microservices to improve portability and ease of deployment.
Repo: https://github.com/HannahAlex004/airavata-docker`,

  contact: `Email: hannah@example.com
GitHub: https://github.com/HannahAlex004
LinkedIn: https://linkedin.com/in/hannahalex`,

  clear: "__clear__"
};

terminalInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const input = terminalInput.value.trim();
    terminalInput.value = "";

    if (input === "") return;

    terminalOutput.innerHTML += `\nhannah@desktop:~$ ${input}`;

    if (commands[input]) {
      if (commands[input] === "__clear__") {
        terminalOutput.innerHTML = "";
      } else {
        terminalOutput.innerHTML += `\n${commands[input]}`;
      }
    } else {
      terminalOutput.innerHTML += `\nCommand not found: ${input}`;
    }

    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
});
