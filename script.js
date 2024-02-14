document.getElementById('yesBtn').addEventListener('click', function() {
    showImages(true); // Passando true para indicar que o botão "Sim" foi clicado
  });
  
  document.getElementById('noBtn').addEventListener('click', function() {
    showImages(false); // Passando false para indicar que o botão "Não" foi clicado
  });
  
  function showImages(clickedYes) {
    var imagesDiv = document.getElementById('images');
    imagesDiv.innerHTML = ''; // Limpar qualquer imagem anteriormente exibida
    imagesDiv.classList.remove('hidden');
    var images = [];
    
    if (clickedYes) {
      // Se o botão "Sim" foi clicado, exibir estas imagens
      images = [
        'image1_yes.jpg',
        'image2_yes.jpg',
        'image3_yes.jpg'
      ];
    } else {
      // Se o botão "Não" foi clicado, exibir estas imagens
      images = [
        'image1_no.jpg',
        'image2_no.jpg',
        'image3_no.jpg'
      ];
    }
  
    images.forEach(function(image) {
      var img = document.createElement('img');
      img.src = image;
      img.style.width = '200px';
      img.style.margin = '10px';
      imagesDiv.appendChild(img);
    });
  }
  