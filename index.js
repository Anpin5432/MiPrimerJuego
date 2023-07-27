const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.static('public'))
app.use(cors())
app.use(express.json())

const jugadores = []

class Jugador {
     constructor(id){
        this.id = id
     }

     asignarMago(mago){
        this.mago = mago
     }

     actualizarPosicion(x,y){
        this.x = x
        this.y = y
     }

    asignarAtaques(ataques){
        this.ataques = ataques
    } 

}

class Mago {
    constructor(nombre){
        this.nombre = nombre
    }
}

app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`

    const jugador = new Jugador(id)
    jugadores.push(jugador)

    res.setHeader("Access-Control-Allow-Origin", "*")

    res.send(id)
})

app.post("/mago/:jugadorId", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const nombre = req.body.mago || ""
    const mago = new Mago(nombre)

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)
    
    if(jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarMago(mago)
    }
    console.log(jugadores)
    console.log(jugadorId)
    res.end()
})

app.post("/mago/:jugadorId/posicion", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0
    
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if(jugadorIndex >= 0){
        jugadores[jugadorIndex].actualizarPosicion(x,y)
    }

    const enemigos = jugadores.filter((jugador) => jugadorId !== jugador.id)

    res.send({
        enemigos
    })

})

app.post("/mago/:jugadorId/ataques", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const ataques = req.body.ataques || []

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)
    
    if(jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarAtaques(ataques)
    }
    res.end()
})

app.get("/mago/:jugadorId/ataques", (req, res) => {
       const jugadorId = req.params.jugadorId || ""
       const jugador = jugadores.find((jugador) => jugador.id === jugadorId)
       res.send({
        ataques: jugador.ataques || []
       })
})

app.listen(8081, () => {
    console.log("Servidor funcionando")
})

//Cada pagina web tiene su nombre de servidor y propio nombre de dominio, en el standard de la industria hay puertos por defecto, ejemplo la web tiene puerto 80 y cuando se trabaja con https 443 estos puertos no se ponen pero si se desea trabajar con cualquier otro puerto se debe especificar en la URI
//Los principales verbos de http son: GET y POST
// Get, permite solicitar un recurso
// Post, permite enviar datos 

