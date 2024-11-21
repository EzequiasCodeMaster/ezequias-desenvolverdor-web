function enableHorizontalScroll(containerId) {
  const container = document.getElementById(containerId);
  container.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
  });
  container.addEventListener('mouseleave', () => {
      isDown = false;
  });
  container.addEventListener('mouseup', () => {
      isDown = false;
  });
  container.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 3; // Ajuste da sensibilidade do movimento
      container.scrollLeft = scrollLeft - walk;
  });
}


// Ativa a rolagem horizontal para cada contêiner de categoria
enableHorizontalScroll('container-web');
enableHorizontalScroll('container-mobile');
enableHorizontalScroll('container-games');



//animação de rolagem

