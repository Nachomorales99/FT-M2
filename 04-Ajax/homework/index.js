// Motramos la lista de amigos
let index = 1;
let listo = null

$("#boton").click(function () {
    console.log("Funciono");
    
    if (!listo)
    $.get(`http://localhost:5000/amigos/`, function (data) {
        console.log(data);
        
        for (let i = 0; i < data.length; i++) {
        let amigo = document.createElement("li");
        amigo.textContent = data[i].name;
        amigo.id = index;

        $("#lista").append(amigo);
        index++;
    }
    
    let nuevoGif = document.getElementById("gif");
    nuevoGif.src = "https://media.tenor.com/GZbnUpTy_oUAAAAC/friends.gif";
    $("#gif").append(nuevoGif);

    listo = 1;
    });
});

// Buscar amigo
$("#search").click(function () {
    console.log("Busco");
    
    let idAmigo = document.getElementById("input").value;

    $.get(`http://localhost:5000/amigos/${idAmigo}`, function (data) { 

    let nombreAmigo = document.getElementById("amigo")

    nombreAmigo.innerText = `${data.name}`
    })

}); 

// Eliminar amigo 
$("#delete").click (function (){
    console.log("Borro")

    let idAmigo = document.getElementById("inputDelete").value;

    $(`#${idAmigo}`).remove(); 

    let nombreAmigo = document.getElementById("success")
    nombreAmigo.innerText = "Tu amigo fue elimado con exito"
    }); 
