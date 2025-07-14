const terminalInput = document.getElementById("terminal-input");
const terminalOutput = document.getElementById("terminal-output");

const commands = {
  help: `Available commands:
- about
- experience
- projects
- quote
- contact
- clear`,

  about: `Hey there! I am Hannah Alex, a final year B.Tech CSE student at PES University, India.
An aspiring developer, passionate about coding.
`,
experience: `Experience:
- 👩‍🏫 Teaching Assistant – Data Structures and Advanced Data Analytics
  PES University | June 2024 – Present
  • Conduct lab sessions and resolve student queries
  • Evaluate coding assignments and exams

- 🧪 Research Intern – CCNCS Lab, PESU
  • Worked on secure systems and network research

- 🐳 Open Source Learning – Apache Airavata
  • Explored and Dockerized Airavata microservices locally
  • Understood microservice deployment workflows
  • Published custom Docker 
  Repo: https://github.com/HannahAlex004/airavata-docker`,

  projects: `GitHub Projects:
- 🎭 Emostream: https://github.com/HannahAlex004/Emostream
- 📊 Application Monitoring Dashboard: https://github.com/HannahAlex004/Application-Monitoring-Dashboard
- 🎵 Album Finder: https://github.com/HannahAlex004/Album_Finder
- 🎮 Tic Tac Toe Game: https://github.com/HannahAlex004/Tic-Tac-Toe
As part of my first open-source contribution, I dockerized Apache Airavata microservices to improve portability and ease of deployment.
Repo: https://github.com/HannahAlex004/airavata-docker`,

contact: `Email: hannah@example.com
GitHub: https://github.com/HannahAlex004
LinkedIn: https://www.linkedin.com/in/hannah-alex-9203482b0/
LeetCode: https://leetcode.com/u/AlexHannah/`
,
quote: [
  `"Talk is cheap. Show me the code." – Linus Torvalds`,
  `"Code never lies, comments sometimes do." – Ron Jeffries`,
  `"Programs must be written for people to read." – Harold Abelson`,
  `"First, solve the problem. Then, write the code." – John Johnson`,
  `"Good code is its own best documentation." – Steve McConnell`
],


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
  } else if (input === "quote") {
    const quotes = commands.quote;
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    terminalOutput.innerHTML += `\n${random}`;
  } else {
    terminalOutput.innerHTML += `\n${commands[input]}`;
  }
}


    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
});
