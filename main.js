const answerBgShow = document.querySelector(".answerBgShow");
const answerElement = document.querySelector("#answer");
const inputQuestion = document.querySelector("#inputQuestion");
const questionButton = document.querySelector("#questionButton");
const answers = [
  "Claro que você pode!",
  "Você pode, basta acreditar em sí para isso!",
  "Somente o vento e o tempo poderia lhe conceder este desejo tão almejado!",
  "Para você é um grande sim!",
  "Não há medo que lhe impeça de concluir seu objetivo atual, coloque dentro do seu coração que você pode, apenas foque nisso.",
  "Certifico que você possui uma aura com uma cor e brilho lindo, e nada e ninguem pode parar você.",
  "Não pense muito nisso, apenas faça muito do que você goste.",
  "O vento diz que não nesta vida..possivelmente você deve correr e se empenhar mais.",
  "Você não usou sua fé o suficiente para perguntar...",
  "Para não lhe garantir uma incerteza esperada, me disseram que é melhor não contar por agora..",
];

function makeAnswers() {
  if (inputQuestion.value == "") {
    alert(`Digite a sua pergunta, para ter seu futuro mostrado!`);
    return;
  }

  questionButton.setAttribute("disabled", true);

  const questions = "<div>" + inputQuestion.value + "</div>";

  // Gerar número aleatório
  const totalAnswers = answers.length;
  const randomNumbers = Math.floor(Math.random() * totalAnswers);
  console.log(answers[randomNumbers]);

  answerElement.innerHTML = questions + answers[randomNumbers];

  answerElement.style.opacity = 1;

  //   Sumir com o texto depois de 3s

  setTimeout(function () {
    answerElement.style.opacity = 0;
    questionButton.removeAttribute("disabled");
  }, 10000);
}
