$(function () {
    const szuloElem = $("table");
    const sablonElem = $(".termekek");
    const termekek = [];
    let fajlnev = "http://localhost:3000/termekek";;
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
            new TermekAdmin(ujElem, adat);
          });
          
        },
      });
      sablonElem.remove();
    }
    $(window).on("torol", (event) => {
        
    });
  
  });