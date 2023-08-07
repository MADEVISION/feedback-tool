// Füge den folgenden JavaScript-Code vor das schließende body-Tag hinzu, um die Funktionalität zu implementieren:

  const boxes = document.querySelectorAll('.box');

  function handleBoxClick(event) {
    const selectedValue = parseInt(event.target.getAttribute('data-value'));

    boxes.forEach((box) => {
      const value = parseInt(box.getAttribute('data-value'));
      if (value <= selectedValue) {
        box.classList.add('selected');
      } else {
        box.classList.remove('selected');
      }
    });
  }

  boxes.forEach((box) => {
    box.addEventListener('click', handleBoxClick);
  });
