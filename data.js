window.addEventListener('load', function() {
    // Recupera el valor de localStorage
    const storedText = localStorage.getItem('storedText');
    
    // Muestra el valor en el elemento con id="data"
    document.getElementById('data').textContent = storedText ? storedText : 'No hay datos disponibles.';
});
