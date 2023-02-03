// Mostrar amigo

let [boton] = $("#boton");
let [lista] = $("#lista");

let [search] = $("#search");

let [deleteBtn] = $("#delete");

let listaAmigos = (response) => {
    lista.innerHTML = "";
    response.forEach((amigo) => {
    let newLi = document.createElement("li");
    newLi.innerText = `${amigo.id} - ${amigo.name}`;
    lista.appendChild(newLi);
});

let nuevoGif = document.getElementById("gif");
nuevoGif.src = "https://media.tenor.com/GZbnUpTy_oUAAAAC/friends.gif";
$("#gif").append(nuevoGif);
};

let mostarAmigos = () => {
    $.get(`http://localhost:5000/amigos/`, listaAmigos);
};
// Buscar amigo

let buscarAmigo = () => {
    let [input] = $("#input");
    let id = input.value;
    input.value = "";

    $.get(`http://localhost:5000/amigos/${id}`, (response) => {
        let [amigo] = $("#amigo");
        amigo.innerText = response.name;
    })
}
// Eliminar amigo

let deleteAmigo = () => {
    let [inputDelete] = $("#inputDelete");
    let id = inputDelete.value;

    $.ajax({
        type: "DELETE",
        url: `http://localhost:5000/amigos/${id}`,
        success: (response) => {
        mostarAmigos(response)

        inputDelete.value = "";

        let nombreAmigo = document.getElementById("success");
        nombreAmigo.innerText = "Tu amigo fue elimado con exito";
    },
    });
}

boton.addEventListener("click", mostarAmigos);
search.addEventListener("click", buscarAmigo);
deleteBtn.addEventListener("click", deleteAmigo);