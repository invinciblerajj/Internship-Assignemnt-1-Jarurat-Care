document.addEventListener('DOMContentLoaded', () => {
    const numberElement = document.getElementById('number');
    const progressBar = document.getElementById('progress-bar');
    const addButton = document.getElementById('add');
    const subtractButton = document.getElementById('subtract');
    const undoButton = document.getElementById('undo');
    const redoButton = document.getElementById('redo');

    let num = 0;
    let history = [];
    let historyIndex = -1;

    function updateUI() {
        numberElement.textContent = num;
        const percentage = (num / 150) * 100;
        progressBar.style.width = `${percentage}%`;
    }

    function add() {
        if (num < 150) {
            history = history.slice(0, historyIndex + 1);
            history.push(num);
            historyIndex++;
            num++;
            updateUI();
        }
    }

    function subtract() {
        if (num > 0) {
            history = history.slice(0, historyIndex + 1);
            history.push(num);
            historyIndex++;
            num--;
            updateUI();
        }
    }

    function undo() {
        if (historyIndex >= 0) {
            num = history[historyIndex];
            historyIndex--;
            updateUI();
        }
    }

    function redo() {
        if (historyIndex < history.length - 1) {
            historyIndex++;
            num = history[historyIndex];
            updateUI();
        }
    }

    addButton.addEventListener('click', add);
    subtractButton.addEventListener('click', subtract);
    undoButton.addEventListener('click', undo);
    redoButton.addEventListener('click', redo);

    updateUI(); // Initialize UI
});
