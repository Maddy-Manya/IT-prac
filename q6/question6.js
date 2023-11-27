function submission() {
    var pname = document.getElementById('first').value;
    var age = document.getElementById('second').value;
    var weight = document.getElementById('third').value;
    var type = document.getElementById('fourth').value;
    var fav = document.getElementById('fourth').value;

    var petObject = {
        name: pname,
        age: age,
        weight: weight,
        type: type,
        fav: fav
    };
    // Log Pet object and JSON equivalent to the console
    console.log('Pet Object:', petObject);
    console.log('JSON:', JSON.stringify(petObject));
}