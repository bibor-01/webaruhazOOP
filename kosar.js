class Kosar {
  constructor() {
    this.elem = $(".kosartartalma");
  }
  kosarTomb = [];
/**
 * Termék hozzáadása a kosárhoz
 * @param {
 * } termek  hozzá adandó termék
 */
  addKosar(termek) {
    this.kosarTomb.push(termek);
    this.kosarKiir();
  }
  /**
   * elem törlése a kosárból
   * @param {
   * } index - törlendő elem kosárbeli sorszáma
   */
  elemTorol(index) {
    this.kosarTomb.splice(index, 1);
    this.kosarKiir();
  }
/**
 * kosár tartalmának megjelenítése a html elemben
 */
  kosarKiir() {
    console.log("Kosar tartalma");
    this.elem.empty();
    for (let index = 0; index < this.kosarTomb.length; index++) {
      let nev = this.kosarTomb[index].nev;
      let ar = this.kosarTomb[index].ar;
      this.elem.append('<div class="nev">' +nev +ar +'<button class="x" id="' +index + '">X</button></div>');
      //gomb esemény
      this.gomb = $("#" + index);
      this.gomb.on("click", () => {
        this.elemTorol(index);
      });
    }
    console.log(this.kosarTomb);
  }
}
