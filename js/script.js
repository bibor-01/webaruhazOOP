$(function () {
  const szuloElem = $("section");
  const sablonElem = $(".termekek");
  const termekek = [];
  let fajlnev = "http://localhost:3000/termekek";
  let kosar = new Kosar();
  let ajax = new Ajax();
 beolvas(fajlnev, termekek);


  function beolvas(fajlnev, tomb) {
    $.ajax({
      url: fajlnev,
      type: "GET",
      success: function (result) {
        result.forEach((element) => {
          tomb.push(element);
        });
        tomb.forEach(function (adat) {
          let ujElem = sablonElem.clone().appendTo(szuloElem);
          const ujTermek = new TermekGaleria(ujElem, adat);
        });
        
      },
    });
    sablonElem.remove();
  }
  $(window).on("termekValaszt", (event) => {
    kosar.addKosar(event.detail);
  });

});
