//Initializing the Vanilla DataTable
const dataTable = new DataTable("#playerTable");
class Player {
  constructor(...args) {
    this.obj = args[0];
  }
  setPlayer(...args) {
    this.obj = args[0];
  }
  getPlayer() {
    return this.obj;
  }
  insertRow() {
    let dataArr = Object.values(this.obj);
    dataTable.rows().add(dataArr);
  }
  removeAllRows() {
    let totalPage = dataTable.pages;
    let length = totalPage.length;
    for (let i = 1; i < length; i++) {
      let rowToRemove = dataTable.body.querySelector("tr");
      let rows = dataTable.body.querySelectorAll("tr");
      rows.forEach(x => {
        dataTable.rows().remove(rowToRemove.dataIndex);
      });
      dataTable.page(i);
      let dtRows = dataTable.body.querySelectorAll("tr");
      dtRows.forEach(x => {
        dataTable.rows().remove(rowToRemove.dataIndex);
      });
    }
  }
  displayPosition(){
    let positionHead = document.getElementById('position');
    positionHead.style.display = "inline-block";
}
}
export { Player, dataTable };
