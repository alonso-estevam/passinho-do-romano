
var select = document.querySelector('#selection');
var cifraDeCesar = document.querySelector('#cifraDeCesar');

select.addEventListener('change', function () {
    if (select.value == 1) {
        key.style.display = 'flex'
    } else if (select.value == 2) {
        key.style.display = 'none'
    }
});


