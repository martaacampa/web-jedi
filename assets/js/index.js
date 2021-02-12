const show_musica = () => {
    var x = document.getElementById("musica");
    var y = document.getElementById("estudis");
    var z = document.getElementById("fotos_container");
    if (x.style.display === "none" || x.style.display === "") {
      y.style.display = "none";
      z.style.display = "none";
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

const show_estudis = () => {
    var x = document.getElementById("estudis");
    var y = document.getElementById("musica");
    var z = document.getElementById("fotos_container");
    if (x.style.display === "none" || x.style.display === "") {
      y.style.display = "none";
      z.style.display = "none";
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

const show_fotos = () => {
  var x = document.getElementById("fotos_container");
  var y = document.getElementById("musica");
  var z = document.getElementById("estudis");
  if (x.style.display === "none" || x.style.display === "") {
    y.style.display = "none";
    z.style.display = "none";
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


$(window).on('load', function() {
    
    $('#b_estudis').on('click', function() {
        show_estudis();
    })
    $('#b_musica').on('click', function() {
        show_musica();
    })
    $('#b_fotos').on('click', function() {
        show_fotos();
  })
});
