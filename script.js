navbar.onclick = function(event) {
      if (event.target.tagName != "A") return;

      if (event.ctrlKey || event.metaKey) {
        toggleSelect(event.target);
      } else {
        singleSelect(event.target);
      }

    }

    navbar.onmousedown = function() {
      return false;
    };

    function toggleSelect(a) {
      a.classList.toggle('navbar-active');
    }

    function singleSelect(a) {
      let selected = navbar.querySelectorAll('.navbar-active');
      for(let elem of selected) {
        elem.classList.remove('navbar-active');
      }
      a.classList.add('navbar-active');
    }
