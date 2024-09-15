document.getElementById('buttonText').addEventListener('click', function() {
    // Obtén el valor del input
    const inputText = document.getElementById('inputText').value;
    
    // Guarda el valor en localStorage
    localStorage.setItem('storedText', inputText);
    
    // Opcional: Limpia el input después de guardar
    document.getElementById('inputText').value = '';
});
