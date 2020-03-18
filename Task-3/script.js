const forms = document.querySelectorAll('.editForm');
const editTable = document.querySelector('.editTable');

function editUser(){
    forms.forEach ((form) => {
    form.style.visibility = "visible";
    });
}

editTable.addEventListener('click', editUser);