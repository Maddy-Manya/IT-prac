var pinfo = document.querySelector('.pet-info')
var pname = document.querySelector('#first')
var age = document.querySelector('#second')
var weight = document.querySelector('#third')
var type = document.querySelector('#fourth')
var fav = document.querySelector('#fifth')
const onSubmitHandler = e => {
    e.preventDefault();

    var petObject = {
        name: pname.value,
        age: age.value,
        weight: weight.value,
        type: type.value,
        fav: fav.value
    };
    // Log Pet object and JSON equivalent to the console
    console.log('Pet Object:', petObject);
    console.log('JSON:', JSON.stringify(petObject));
};

pinfo.addEventListener("submit", onSubmitHandler);