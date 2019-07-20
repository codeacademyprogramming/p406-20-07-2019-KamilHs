function myFunc() {
    let dropdown = document.getElementById('dropdown');
    if (dropdown.classList.contains('d-none')) {
        dropdown.classList.remove('d-none')
    }
    else {
        dropdown.classList.add('d-none');
    }
}