class Player {
  constructor(obj, tableId) {
    let { name, club, nationality, rating, wage } = obj;
    this.name = name;
    this.club = club;
    this.nationality = nationality;
    this.rating = Number(rating);
    this.wage = wage;
    this.tableBody = document
      .getElementById(tableId)
      .getElementsByTagName("tbody")[0];
    this.row = document.createElement("tr");
  }
  setPlayer(obj) {
    let { name, club, nationality, rating, wage } = obj;
    this.name = name;
    this.club = club;
    this.nationality = nationality;
    this.rating = Number(rating);
    this.wage = wage;
  }
  getPlayer() {
    let obj = {
      name: this.name,
      club: this.club,
      nationality: this.nationality,
      rating: this.rating,
      wage: this.wage
    };
    return obj;
  }
  insertCell(value) {
    let cell = document.createElement("td");
    cell.innerHTML = value;
    this.row.appendChild(cell);
  }
  insertRow() {
    this.insertCell(this.name);
    this.insertCell(this.club);
    this.insertCell(this.nationality);
    this.insertCell(this.rating);
    this.insertCell(this.wage);
    this.tableBody.appendChild(this.row);
  }
}
export { Player };
