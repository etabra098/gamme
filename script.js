const draggables = document.querySelectorAll('.draggable');
const dropzones = document.querySelectorAll('.dropzone');
const result = document.getElementById('result');

draggables.forEach(item => {
  item.addEventListener('dragstart', e => {
    e.dataTransfer.setData('shape', item.dataset.shape);
  });
});

dropzones.forEach(zone => {
  zone.addEventListener('dragover', e => {
    e.preventDefault();
    zone.style.background = '#ccf';
  });

  zone.addEventListener('dragleave', () => {
    zone.style.background = '#f9f9f9';
  });

  zone.addEventListener('drop', e => {
    const draggedShape = e.dataTransfer.getData('shape');
    const targetShape = zone.dataset.shape;
    zone.style.background = '#f9f9f9';

    if (draggedShape === targetShape) {
      zone.innerHTML = document.querySelector(`[data-shape="${draggedShape}"]`).innerHTML;
      result.textContent = 'Great job!';
    } else {
      result.textContent = 'Try again!';
    }
  });
});
