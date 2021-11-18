class Termekek {
  constructor(elem, adat) {
    this.elem = elem;
    this.adat = adat;
    

    
  }
  setAdatok(ertekek) {
    this.nevelem.html(ertekek.nev);
    this.leiraselem.html(ertekek.leiras);
    this.kepelem.attr("src", ertekek.kep);
    this.arelem.html(ertekek.ar);
  }
 
}


class TermekGaleria extends Termekek{
  constructor(elem,adat){
    super(elem,adat);
    this.gomb = elem.children(".kosarba");
    this.nevelem = elem.children("h2");
    this.leiraselem = elem.children("p");
    this.arelem = elem.children("span");
    this.kepelem = elem.children("img");
    this.setAdatok(this.adat);
    
    this.gomb.on("click", () => {
      this.kosarbaTesz();
    });

  }
  kosarbaTesz() {
    let esemeny = new CustomEvent("termekValaszt", { detail: this.adat });
    window.dispatchEvent(esemeny);
   
  }
}
class TermekAdmin extends Termekek{
  constructor(elem,adat){
    super(elem,adat);
    this.gomb = elem.children(".kosarba");
    this.nevelem = elem.children(".nev");
    this.leiraselem = elem.children(".szoveg");
    this.arelem = elem.children(".ar");
    this.kepelem = elem.children(".kep");
    this.setAdatok(this.adat);
    
   this.gomb.on("click", () => {
      this.torles();
    });

  }
  torles() {
    let esemeny = new CustomEvent("torles", { detail: this.adat });
    window.dispatchEvent(esemeny);
   
  }
    
}
