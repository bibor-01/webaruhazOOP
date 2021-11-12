$(function () {
  const szuloElem = $("section");
  const sablonElem = $(".termekek");
  const termekek = [];
  let fajlnev = "termekek.json";
  let kosar = new Kosar();
  beolvas(fajlnev, termekek);


  function beolvas(fajlnev, tomb) {
    $.ajax({
      url: fajlnev,
      success: function (result) {
        result.forEach((element) => {
          tomb.push(element);
        });
        tomb.forEach(function (adat) {
          let ujElem = sablonElem.clone().appendTo(szuloElem);
          const ujTermek = new Termekek(ujElem, adat);
        });
      },
    });
    sablonElem.remove();
  }
  $(window).on("termekValaszt", (event) => {
    kosar.addKosar(event.detail);
  });

});
