function getLS() {
    if (!localStorage.getItem('name')) {
        return [];
    } else {
        return JSON.parse(localStorage.getItem('name'));
    }
};

var names = [];

var elForm = document.getElementById('getName');

var sampleButton = document.getElementById('noName');

toLs = function() {
    var str = JSON.stringify(names);
    localStorage.setItem('name', str);
};

elForm.addEventListener('click', function() {
    event.preventDefault();
    var nameStorage = '';
    var elNameInput = document.getElementById('nameInput').innerText;
    if (event.target.id === 'sign-in-button') {
        nameStorage = this.nameInput.value;
        names = getLS();
        names.push(nameStorage);
        toLs();
        window.location = './input/input.html';
    }
});

sampleButton.addEventListener('click', function() {
    event.preventDefault();
    if (event.target.id === 'sample') {
        nameStorage = 'Guest';
        names = getLS();
        names.push(nameStorage);
        toLs();
        window.location = './input/input.html';
    }
});