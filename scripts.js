document.addEventListener('DOMContentLoaded', function() {
    // Typing effect
    const titleElement = document.getElementById('typing-title');
    const phrases = ["IMPRESSÃO 3D", "MODELAÇÃO 3D"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 120;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            titleElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            titleElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 150;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, typingSpeed);
        }
    }
    setTimeout(type, 1000);

    // Lightbox functionality
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('modal-image');
    const captionText = document.querySelector('.modal-caption');
    const closeBtn = document.querySelector('.close-modal');

    document.querySelectorAll('[data-lightbox]').forEach(item => {
        item.addEventListener('click', function(e) {
            if (e.target.tagName !== 'A') {
                modal.style.display = 'block';
                modalImg.src = this.querySelector('img').src;
                captionText.innerHTML = this.querySelector('h3').innerHTML;
            }
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('modal-image');
    const closeBtn = document.querySelector('.close-modal');

    // Abre o modal ao clicar em qualquer item com data-lightbox
    document.querySelectorAll('[data-lightbox]').forEach(item => {
        item.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.querySelector('img').src;
        });
    });

    // Fecha o modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Fecha ao clicar fora da imagem
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Fecha com a tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});