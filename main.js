function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;

    if (question1 == "Gniezno") {
        correct++;
    }
    if (question2 == "Rysy") {
        correct++;
    }
    if (question3 == "Hańcza") {
        correct++;
    }

    var messages = ["Świetnie!", "Jest ok.", "Spróbuj jeszcze raz"];

    var pictures = ["img/win.webp", "img/meh.webp", "img/lose.webp"];

    var range;

    if (correct < 1) {
        range = 2;
    }
    if (correct > 0 && correct < 3) {
        range = 1;
    }
    if (correct > 2) {
        range = 0;
    }

    document.getElementById('after_submit').style.visibility = 'visible';

    document.getElementById('number_correct').innerHTML = "Masz " + correct + " dobrze!";

    document.getElementById("message").innerHTML = messages[range];

    document.getElementById("picture").src = pictures[range];
}