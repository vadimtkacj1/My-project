const feedback = document.querySelector('.feedback');
const feedbackButton = document.querySelector('.feedback-button');
const output = document.querySelector('.output');

feedbackButton.onclick = function () {
    feedback.style.opacity = '1';
    feedback.style.display = 'flex';
}

output.onclick = function () {
    feedback.style.opacity = '0';
    feedback.style.display = 'none';
}