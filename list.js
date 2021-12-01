const leftblock = document.querySelector('.leftblock-menu');

for (let li of leftblock.querySelectorAll('li')) {
    let span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling); 
  }


  leftblock.onclick = function(event) {

    if (event.target.tagName != 'SPAN') {
      return;
    }

    let childrenContainer = event.target.parentNode.querySelector('ul');
    if (!childrenContainer) return
        if (childrenContainer.style.display === 'none') {
            for (let liTwo of leftblock.querySelectorAll('li ul')) {
                liTwo.style.display = 'none';
            }
            
            childrenContainer.style.display = 'flex';
        } else {
            childrenContainer.style.display = 'none';
        }

  }