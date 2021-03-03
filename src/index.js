const app = {
    init: function () {
     document.getElementById('sidebar-btn').addEventListener('click', app.toggle);
    },

    toggle:() => {
      let e = document .getElementById("sidebar");
      e.classList.toggle("visible");
  }
  };
  
  document.addEventListener("DOMContentLoaded", app.init);