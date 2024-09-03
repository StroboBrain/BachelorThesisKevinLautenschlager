document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.selectable');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('selected');
        });
    });
});