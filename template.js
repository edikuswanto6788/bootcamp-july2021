function selectMenu(selector) {
    let menus = document.querySelectorAll(".menu")
    for (let index = 0; index < menus.length; index++) {
        const menu = menus[index];
        menu.classList.remove("selected")
    }

    document.querySelector(`[data-menu='${selector}']`).classList.add("selected")
    changeContent(selector)
}

const changeContent = selector => {
    let menus = document.querySelectorAll("[data-section-content]")
    menus.forEach(menu => menu.classList.remove("show"))

    // if (document.querySelector(`[data-section-content='${selector}']`)) 
    //     document.querySelector(`[data-section-content='${selector}']`).classList.add("show")

    document.querySelector(`[data-section-content='${selector}']`).classList.add("show")
    // if (selector === "user") showUser()
}

const addEvent = () => {
    document.addEventListener("click", e => {
        // console.log(e.target.getAttribute("data-submit"));
        if (e.target.getAttribute("data-menu")) {
            const dataMenu = e.target.getAttribute("data-menu")
            // selectMenu("[data-menu='" + dataMenu + "']")
            selectMenu(dataMenu)
        }

        if (e.target.getAttribute("data-submit")) saveData()
    })
}
// update user list
const updateUserList = () => {
    document.querySelector('tbody').innerHTML = ""
    for (let index = 0; index < users.length; index++) {
        const user = users[index]
        document.querySelector('tbody').innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td style="text-transform: capitalize;">${user.gender}</td>
        </tr>
        `
    }
}
//getdata from input
const readData = () => {

}



const users = []
console.log(users);
// save data
const saveData = () => {
    const nama = document.querySelector("[name='nama']").value
    const username = document.querySelector("[name='username']").value
    const gender = document.querySelector("[name='jk']:checked").value
    users.add({
        nama,
        username,
        password,
        gender,
    })

    users.push({
        nama,
        name: username,
        password,
        gender
    })
    console.log(users);
    document.querySelector('tbody').innerHTML = ""
    for (let index = 0; index < users.length; index++) {
        const user = users[index]
        document.querySelector('tbody').innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${user.nama}</td>
            <td style="text-transform: capitalize;">${user.gender}</td>
        </tr>
        `

    }

    const search = () => {
        let cariNama = users.find(user => user.address === "e")
        console.log(cariNama)
    }
    console.log();
    selectMenu("user")
    updateUserList()
}


const __init = () => {
    addEvent()
    selectMenu("user")
    updateUserList()
}
__init()