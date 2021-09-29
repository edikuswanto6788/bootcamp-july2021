function selectMenu(selector) {
    let menus = document.querySelectorAll(".menu")
    for (let index = 0; index < menus.length; index++) {
        const menu = menus[index];
        menu.classList.remove("selected")
    }

    document.querySelector(`[data-menu='${selector}']`)?.classList.add("selected")
    changeContent(selector)
}
// selectMenu("register")

const changeContent = selector => {
    let menus = document.querySelectorAll("[data-section-content]")
    menus.forEach(menu => menu.classList.remove("show"))

    // if (document.querySelector(`[data-section-content='${selector}']`)) 
    //     document.querySelector(`[data-section-content='${selector}']`).classList.add("show")

    document.querySelector(`[data-section-content='${selector}']`)?.classList.add("show")
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
        if (e.target.getAttribute("login-submit")) login()
        if (e.target.getAttribute("update-submit")) saveData()
        if (e.target.getAttribute("delete-submit")) hapus()
    })
}
login = () =>{

    const user = document.querySelector("#user").value
    const pass = document.querySelector("#pass").value
    if ((user == "#username") && (pass == "#password")) {
        selectMenu("home")
    } else{
        selectMenu("home")
    }
}
// addEvent()

//fetch data
const fn2 = async () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
}
let dataUsers = []
let dataHobby = []
const showUser = async () => {
    dataUsers = await fn2()
    console.table(dataUsers) 

    const section = document.querySelector('table>tbody')
   document.querySelector('table>tbody')
    section.innerHTML = ""
    dataUsers.forEach(user => {
        section.innerHTML += `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.hobby}</td>
        <td>${user.address}</td>
        <td>${user.agama}</td>
        <td>
            <a style="cursor:pointer" type="button" data-menu="edit">Edit </a>
            <a style="cursor:pointer" type="button" delete-submit="form">Delete </a>
        </td>
        `     
    })
}

hapus = () => {
    dataUsers.pop(name,
        username,
        password,
        address,
        agama)
}
showUser()
const hobbies = []
// update user list
const updateUserList = () => {
    const htmlUsers = dataUsers.map((user, idx) => {
        return `
        <tr>
            <td>${idx + 1}</td>
            <td>${user.name}</td>
            <td style="text-transform: capitalize;">${user.gender}</td>
            <td style="text-transform: capitalize;">${hobbies.join(" & ")}</td>
            <td style="text-transform: capitalize;">${user.address}</td>
            <td style="text-transform: capitalize;">${user.agama}</td>
            <td>
            <a style="cursor:pointer" type="button" data-menu="edit">Edit </a>
            <a style="cursor:pointer" type="button" delete-submit="form">Delete </a>
            </td>
        </tr>
        `
  
    })
    
    document.querySelector('table>tbody').innerHTML = htmlUsers.join("")
}


// updateUserList()

// save data
const saveData = () => {
    const username = document.querySelector("[name='username']").value
    const password = document.querySelector("[name='password']").value
    const gender = document.querySelector("[name='gender']:checked")?.value
    const nama = document.querySelector("[name='nama']").value
    const agama = document.querySelector("[name='agama']").value
    const hobby1 = document.querySelector("[name='hobby1']");
    const hobby2 = document.querySelector("[name='hobby2']");
    const hobby3 = document.querySelector("[name='hobby3']");
    const hobby4 = document.querySelector("[name='hobby4']");
    const hobby5 = document.querySelector("[name='hobby5']");
    const address = document.querySelector("[name='address']").value
    if (hobby1.checked) 
        hobbies.push(hobby1.value)
    if (hobby2.checked) 
        hobbies.push(hobby2.value)
    
    dataUsers.push({
        nama,
        name: username,
        password,
        agama,
        gender,
        address
    })
    selectMenu("user")
    updateUserList()
    resetForm()
    console.log(dataUsers)
    console.log(hobbies);
}
const resetForm = () => {
     username = document.querySelector("[name='username']").value = ""
     password = document.querySelector("[name='password']").value = ""
 nama = document.querySelector("[name='nama']").value= ""
     agama = document.querySelector("[name='agama']").value= ""
     address = document.querySelector("[name='address']").value= ""
    if (hobby1.checked) 
        hobbies.push(hobby1.value = "")
    if (hobby2.unchecked) 
        hobbies.push(hobby2.value ="")
}

//pagenation
var itemsNumber = 5, $items, pages = 1, current = 1;
function makePages(){
	$items = $("ul.items li:visible");
	pages = Math.ceil($items.length / itemsNumber);
	$("#pages").empty();
	for(var p=1;p<=pages;p++){
		$("#pages").append($('<a href="#">'+p+'</a>'));
	}
	showPage(1);
}
function showPage(page){
	$items.hide().slice((page - 1) * itemsNumber, page * itemsNumber).show();
	current = page;
}
makePages();
$("div.ctrl-nav").on('click', 'a', function(){
	var action = $(this).text();
	if(action == 'Previous'){
		current--;
	}else if(action == 'Next'){
		current++;
	}else if(+action > 0){
		current = +action;
	}
	if(current <= 1){
		current = 1;
	}else if(current >= pages){
		current = pages;
	}
	showPage(current);
});
$('div.filter').on('click', 'a', function(){
	var selector = $(this).attr('href').replace("#",".");
	$("ul.items li").show().not(selector).hide();
	makePages();
});
//console.log(users);

const __init = () => {
    addEvent()
    selectMenu("register")
    updateUserList()
}
__init()





