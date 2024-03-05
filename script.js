document.addEventListener('DOMContentLoaded', function() {
    animateText('text');
  });
  
  function animateText(elementId) {
    const textElement = document.getElementById(elementId);
    const textContent = textElement.innerHTML;
    textElement.innerHTML = '';
  
    for (let i = 0; i < textContent.length; i++) {
      setTimeout(function() {
        textElement.innerHTML += textContent.charAt(i);
      }, i * 100); // Przerwa między pojawianiem się liter (możesz dostosować czas według potrzeb)
    }
  }
  