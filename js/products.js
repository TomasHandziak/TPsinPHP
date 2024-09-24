function searchProducts() {
    const input = document.getElementById('searchBar').value.toLowerCase();
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        const title = product.querySelector('h2').textContent.toLowerCase();
        if (title.includes(input)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
}

function filterProducts() {
    const category = document.getElementById('filterCategory').value;
    const products = document.querySelectorAll('.card');

    products.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
}

document.getElementById('toggleView').addEventListener('click', function() {
    var container = document.getElementById('productContainer');
    var cards = document.querySelectorAll('.card');
    var icon = document.getElementById('btnIcon');

    if (container.classList.contains('table-view')) {
        container.classList.remove('table-view');
        container.classList.add('list-view');
        console.log(icon);      
        icon.classList.remove('fa-list');
        icon.classList.add('fa-table');

        cards.forEach(function(card) {
            if (card.classList.contains('product-card')) {
                card.classList.remove('product-card');
                card.classList.add('product-card-list');
            }
        });
        
    } else {
        container.classList.remove('list-view');
        container.classList.add('table-view'); 
        icon.classList.remove('fa-table');
        icon.classList.add('fa-list');

        cards.forEach(function(card) {
            if (card.classList.contains('product-card-list')) {
                card.classList.remove('product-card-list');
                card.classList.add('product-card');
            }
        });
    }
});

document.querySelector(".dropbtn").addEventListener("click", function() {
    var dropdown = document.querySelector(".dropdown-content");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  });
  
  // Para cerrar el menú si el usuario hace clic fuera de él
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display === "block") {
          openDropdown.style.display = "none";
        }
      }
    }
  };