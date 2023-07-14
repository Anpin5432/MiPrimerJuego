const express = require("express")

const app = express()

class Jugador {

}

app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`

    const jugador = new Jugador(id)
    jugador.push(jugador)

    res.send("id")
})

app.listen(8080, () => {
    console.log("Servidor funcionando")
})

//Cada pagina web tiene su nombre de servidor y propio nombre de dominio, en el standard de la industria hay puertos por defecto, ejemplo la web tiene puerto 80 y cuando se trabaja con https 443 estos puertos no se ponen pero si se desea trabajar con cualquier otro puerto se debe especificar en la URI
//Los principales verbos de http son: GET y POST
// Get, permite solicitar un recurso
// Post, permite enviar datos 

