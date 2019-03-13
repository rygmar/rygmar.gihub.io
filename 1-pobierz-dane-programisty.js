let div = document.createElement("div");
function pobierzDane() {


    $.ajax({
        url: "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
        dataType: 'json',
        success: function (resultJSON) {
            console.log(resultJSON);
            
            div.innerHTML = "Dane programisty: " +resultJSON.imie+" "+resultJSON.nazwisko+ " "+resultJSON.zawod+" "+resultJSON.firma;
        },
        onerror: function (msg) {
            console.log(msg);
        }
    });
};


let button = $("#btn");

function klik() {
    console.log("dziala");

}

button.click(function () {
    pobierzDane();
    document.body.appendChild(div);
});

