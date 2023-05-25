//your JS code here. If required.
    var container = document.querySelector('.container');
    
    for (var i = 0; i < 800; i++) {
      var square = document.createElement('div');
      square.classList.add('square');
      container.appendChild(square);
    }