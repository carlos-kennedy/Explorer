// Quais são minhas variáveis?
// Quais são os meus tipos de dados de entrada?
// Quais são os meus tipos de dados de saída?
const answerElement = document.querySelector("#answer");
const inputQuestion = document.querySelector("#inputQuestion");
const questionButton = document.querySelector("#questionButton");
const answers = [
  "Para a sua pergunta e para você nesta vida, você pode sim!",
  "Você pode, basta acreditar em sí para isso!",
  "Somente o vento e o tempo poderia lhe conceder este desejo tão almejado!",
  "Para você é um grande sim!",
  "Não há medo que lhe empeça de concluir seu objetivo atual, desde que não haja tristeza em seu caminho!",
  "Certifico que você possui uma aura de cor e brilho lindo, e nada e ninguem pode para você.",
  "Não pense muito, faça muito.",
  "O vento diz que não nesta vida..possivelmente na outra, mas se quiser tentar nesta vida, você deve correr e se empenhar mais. ",
  "Você não usou sua fé o suficiente para perguntar...",
  "Para não lhe garantir uma certeza mal esperada, me disseram melhor não contar agora..",
];

console.log(randomNumbers);
// console.log(totalAnswer);

function makeAnswers() {
  if (inputQuestion.value == "") {
    alert(`Digite a sua pergunta, para ter seu futuro mostrado!`);
    return;
  }

  questionButton.setAttribute("disabled", true);

  const questions = "<div>" + inputQuestion.value + "</div>";

  // Gerar número aleatório apartir de agora
  const totalAnswers = answers.length;
  const randomNumbers = Math.floor(Math.random() * totalAnswers);
  console.log(answers[randomNumbers]);

  answerElement.innerHTML = questions + answers[randomNumbers];

  answerElement.style.opacity = 1;

  //   Sumir com o texto depois de 3s

  setTimeout(function () {
    answerElement.style.opacity = 0;
    questionButton.removeAttribute("disabled");
  }, 4500);
}
