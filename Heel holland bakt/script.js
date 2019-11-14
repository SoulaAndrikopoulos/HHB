/*functie wordt aangemaakt, de elementen uit het HTML document worden door hun ID aangeroepen */
   function toggle_visibility(id) {
       var e = document.getElementById('filter');
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }

/*met if en else wordt er een "block" weergegeven of niks*/