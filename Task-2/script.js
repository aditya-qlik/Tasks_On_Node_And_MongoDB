function addUser() {
    window.location.href = '/admin';
};

function validator() {
    const age=documents.getElementById('#age').value;
    if(isNaN()){
        alert('Enter a Number');
    }
}
documents.getElementById('#age').addEventListener('blur',validator);