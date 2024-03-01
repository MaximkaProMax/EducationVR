/*
//Когда пользователь кликает на кнопку, переключить между скрытием и показом выпадающего списка
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  
  
  // Закрыть выпадающий список, если пользователь кликает за его пределами
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  */
  

  function myFunction() {
    // Закрыть другой выпадающий список, если он открыт
    if (document.getElementById("myDropdown2").classList.contains('show')) {
        document.getElementById("myDropdown2").classList.remove('show');
    }
    // Переключить текущий выпадающий список
    document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
    // Закрыть другой выпадающий список, если он открыт
    if (document.getElementById("myDropdown").classList.contains('show')) {
        document.getElementById("myDropdown").classList.remove('show');
    }
    // Переключить текущий выпадающий список
    document.getElementById("myDropdown2").classList.toggle("show");
}

// Закрыть выпадающий список, если пользователь кликает за его пределами
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  
}