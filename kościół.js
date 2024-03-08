document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var enteredPassword = document.getElementById('kod_komunia_password').value;

        // Tutaj możesz sprawdzić hasło po stronie klienta,
        // ale bezpieczniej jest to robić po stronie serwera

        // Przykładowe sprawdzenie hasła po stronie klienta:
        if (enteredPassword === 'Antoniiiiiiii') {
            // Przekierowanie po wprowadzeniu poprawnego hasła
            window.location.href = 'Forum_bierzmowanie.html';
        } else {
            alert('Oho! Wirus Judasz zainfekował ten komputer, albo ktoś popełnił literówkę :) Trzeba wpisać 8 x "i".');
        }
    });
});
