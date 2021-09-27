const selectedRow = null;

onformSubmit = (e) => {
    event.preventDefault();
    const formData = readformData();
    if (selectedRow === null) {
        insertData(formData);
    } else {
        updateData(formData);
    }
    resetForm(formData);
}
const readformData = () => {
    const formData = []

    formData["nama"] = document.querySelector("#nama").value;
    formData["username"] = document.querySelector("#username").value;
    formData["password"] = document.querySelector("#password").value;
    formData["alamat"] = document.querySelector("#alamat").value;
    formData["agama"] = document.querySelector("#agama").value;
    formData["rlaki"] = document.querySelector("#laki").value;
    formData["rcewe"] = document.querySelector("#cewe").value;
    formData["baca"] = document.querySelector("#baca").value;
    formData["mancing"] = document.querySelector("#mancing").value;
    formData["masak"] = document.querySelector("#masak").value;
    formData["travel"] = document.querySelector("#travel").value;
    formData["makan"] = document.querySelector("#makan").value;

    console.log(formData);
    return formData;

}
// DisplayList(list_element, rows, cuurent_page);

//insert Data
const insertData = data => {
    const table = document.getElementById("storelist").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow(table.length);
    const cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nama;
    const cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.username;

    //jenis kelamin
    const cell3 = newRow.insertCell(2);
    if (laki.checked) {
        cell3.innerHTML = data.rlaki;
    } else if (cewe.checked == true) {
        cell3.innerHTML = data.rcewe;
    } else {
        console.log("Data kosong");
    }
    const cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.agama;
    const cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.alamat;

    //hobi
    const cell6 = newRow.insertCell(5);
    if ((baca.checked)) {
        cell6.innerHTML = data.baca;
    } else if (mancing.checked) {
        cell6.innerHTML = data.mancing;
    } else if (masak.checked) {
        cell6.innerHTML = data.masak;
    } else if (travel.checked) {
        cell6.innerHTML = data.travel;
    } else if (makan.checked) {
        cell6.innerHTML = data.makan;
    } else {
        console.log("data kosong");
    }
    $('#storelist').DataTable();
}

//resert form
resetForm = () => {
    document.getElementById("nama").value = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("alamat").value = "";

    if (laki.unchecked == true) {
        document.getElementById("laki").value = "";
    } else if (cewe.unchecked == true) {
        document.getElementById("cewe").value = "";
    }

    if (baca.hecked) {
        document.getElementById("baca").value = "";
    } else if (masak.checked) {
        document.getElementById("masak").value = "";
    } else if (travel.checked) {
        document.getElementById("travel").value = "";
    } else if (makan.checked) {
        document.getElementById("makan").value = "";
    } else if (mancing.unchecked) {
        document.getElementById("mancing").value = "";
    }

}