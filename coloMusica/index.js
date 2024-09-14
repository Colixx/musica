// Función para mostrar la pantalla deseada
    function showScreen(screenId) {
      // Ocultar todas las pantallas
      document.querySelectorAll('.pantalla').forEach(screen => {
        screen.style.display = 'none';
      });
      
      // Mostrar la pantalla deseada
      document.getElementById(screenId).style.display = 'block';
    }
    document.addEventListener('DOMContentLoaded', () => {
      const songsList = document.getElementById('songs-list');
      const dropdownButton = document.querySelector('.dropdown-button');
      const dropdownContent = document.querySelector('.dropdown-content');
      const dropdownLinks = document.querySelectorAll('.dropdown-content a');
  
      const songs = {
          principiante: [
              { title: 'Canción 1', description: 'Descripción de la canción 1', img: 'imagen1.jpg' },
              { title: 'Canción 2', description: 'Descripción de la canción 2', img: 'imagen2.jpg' }
          ],
          intermedio: [
              { title: 'Canción 3', description: 'Descripción de la canción 3', img: 'imagen3.jpg' },
              { title: 'Canción 4', description: 'Descripción de la canción 4', img: 'imagen4.jpg' }
          ],
          avanzado: [
              { title: 'Canción 5', description: 'Descripción de la canción 5', img: 'imagen5.jpg' },
              { title: 'Canción 6', description: 'Descripción de la canción 6', img: 'imagen6.jpg' }
          ]
      };
  
      function loadSongs(level) {
          songsList.innerHTML = '';
          songs[level].forEach(song => {
              const songItem = document.createElement('div');
              songItem.className = 'song-item';
              songItem.innerHTML = `
                  <img src="${song.img}" alt="${song.title}">
                  <div class="song-info">
                      <h3 class="song-title">${song.title}</h3>
                      <p class="song-description">${song.description}</p>
                  </div>
              `;
              songsList.appendChild(songItem);
          });
      }
  
      dropdownButton.addEventListener('click', () => {
          dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
      });
  
      dropdownLinks.forEach(link => {
          link.addEventListener('click', (event) => {
              event.preventDefault();
              const level = link.getAttribute('data-level');
              dropdownButton.textContent = link.textContent;
              dropdownContent.style.display = 'none';
              loadSongs(level);
          });
      });
  
      // Load initial songs
      loadSongs('principiante');
  });
  