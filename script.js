let stpbl1 = document.getElementById("stepbl1");
let stpbrdr1 = document.getElementById("stepbrdr1");

let stpbl2 = document.getElementById("stepbl2");
let stpbrdr2 = document.getElementById("stepbrdr2");

let stpbl3 = document.getElementById("stepbl3");
let stpbrdr3 = document.getElementById("stepbrdr3");

stpbl1.onmouseover = function() {
    stpbrdr1.style.borderBottom = "3px solid white"
}
stpbl1.onmouseout = function() {
    stpbrdr1.style.borderBottom = "3px solid black"
}

stpbl2.onmouseover = function() {
    stpbrdr2.style.borderBottom = "3px solid white"
}
stpbl2.onmouseout = function() {
    stpbrdr2.style.borderBottom = "3px solid black"
}

stpbl3.onmouseover = function() {
    stpbrdr3.style.borderBottom = "3px solid white"
}
stpbl3.onmouseout = function() {
    stpbrdr3.style.borderBottom = "3px solid black"
}

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const cardsWrapper = document.getElementById('cardsWrapper');
    const cards = document.querySelectorAll('.card');
    const notFoundMessage = document.getElementById('notFoundMessage');
    const showAllButton = document.querySelector('.all');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const searchTerm = searchInput.value.trim().toLowerCase(); 
        let found = false;
        
        cards.forEach(function(card) {
            const cardTitle = card.querySelector('.card-container p').textContent.trim().toLowerCase();

            if (cardTitle.includes(searchTerm)) {
                card.style.display = 'block';
                card.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                found = true; 
            } else {
                card.style.display = 'none'; 
            }
        });

        if (!found) {
            notFoundMessage.style.display = 'block';
            notFoundMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            notFoundMessage.style.display = 'none';
        }
    });

    showAllButton.addEventListener('click', function() {
        cards.forEach(function(card) {
            card.style.display = 'block'; 
        });
        notFoundMessage.style.display = 'none'; 
    });
});

$(document).ready(function() {
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function() {
          window.location.hash = hash;
        });
      }
    });
  });
  






  



