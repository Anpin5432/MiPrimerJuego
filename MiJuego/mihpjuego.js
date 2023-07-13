let sectionencan = document.getElementById('elije-encantamiento')
let sectionrein = document.getElementById('Reinicia')
let sectionelien = document.getElementById('elien')
let sectionmamae = document.getElementById('mamae')
let sectionmen = document.getElementById('message')
let botonMago = document.getElementById('boton-mago')

let rein = document.getElementById('boton-reiniciar')
let sectionmago = document.getElementById('Elije-tu-mago')


let spanMago = document.getElementById('mago')
let spanMagoEnemigo = document.getElementById('mago-enemigo')
let spanvidam = document.getElementById('vidas-mago')
let spanvidaene = document.getElementById('vidas-enemigo')
let bodyto = document.getElementById('ult-men') 
let conteinerreini = document.getElementById('imgreini')
let opcionDeMago
let contenedordeMago = document.getElementById('contenedorMagos')
let contenedorAtaques = document.getElementById('contenedorAtaques')

const sectionVerMapa = document.getElementById('ver-mapa')

let magos = []
let inputHarry 
let inputHermioni 
let inputDumbledore 
let inputVoldmort
let inputNeville 
let inputJinny 
let imagenes = []
let magoJugador
let magoJugadorObjeto
let ataquesMago 
let esp
let pat
let red
let cru
let imp
let ava
let botones = []
let ataqueJugador = []
let ataquesMagoEnemigo = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let ganadas = 0
let perdidas = 0
let ataqueMago 
let ataqueEnemigo = []
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = '/Users/andrespineda/Documents/GitHub/MiPrimerJuego/MiJuego/mapa.jpg'

mapa.width = 680
mapa.height = 450



class Mago {
	constructor (nombre, foto, vidas, fotomapa, fotoMagoEnemigo){
		this.nombre = nombre
		this.foto = foto 
		this.vidas = vidas
		this.ataques = []
		this.ancho = 75
		this.alto = 75
		this.x = aleatorio(0, mapa.width - this.ancho)
		this.y = aleatorio(0, mapa.height - this.alto)
		this.mapaFoto = new Image()
		this.mapaFoto.src = fotomapa
		this.velocidadX = 0
		this.velocidadY = 0
		this.fotoEne = new Image()
		this.fotoEne.src = fotoMagoEnemigo

	}
    
	pintarMago(){
		lienzo.drawImage(
			this.mapaFoto,
			this.x,	
			this.y,
			this.ancho,
			this.alto
		  )
	}

}

let Harry = new Mago ('Harry', 'https://media.revistavanityfair.es/photos/60e84a97bb9e71d46fd8d1f4/1:1/w_916,h_916,c_limit/39713.jpg', 5, '/Users/andrespineda/Documents/GitHub/MiPrimerJuego/MiJuego/harryAminado.jpg')
let Hermioni = new Mago ('Hermioni', 'https://static.wikia.nocookie.net/warnerbros/images/f/f7/Hermione2.jpg/revision/latest/scale-to-width-down/373?cb=20221109054851&path-prefix=es', 5, '/Users/andrespineda/Documents/GitHub/MiPrimerJuego/MiJuego/hermioniAnimada.jpg')
let Dumbledore = new Mago ('Dumbledore', 'https://static.wikia.nocookie.net/wikihp/images/8/88/Dumbledore.jpg/revision/latest/scale-to-width-down/423?cb=20090911073332&path-prefix=es', 5, '/Users/andrespineda/Documents/GitHub/MiPrimerJuego/MiJuego/dumbledoreAnimado.jpg')
let Voldemort = new Mago ('Voldemort', 'https://www.clarin.com/img/2020/09/02/lord-voldemort-es-el-archi___1el72Rtky_1256x620__1.jpg', 5, '/Users/andrespineda/Documents/GitHub/MiPrimerJuego/MiJuego/voldemortAnimado.jpg')
let Neville = new Mago ('Neville', 'https://static.wikia.nocookie.net/esharrypotter/images/2/20/NevilleHBP.jpg/revision/latest/scale-to-width-down/226?cb=20150523213436', 5, '/Users/andrespineda/Documents/GitHub/MiPrimerJuego/MiJuego/nevilleAnimado.png')
let Jinny = new Mago ('Jinny', 'https://img.allvipp.com/www-promipool-de/image/upload/c_fill,g_faces,w_1200,h_900,q_auto:eco,f_webp/Bonnie_Wright_asi_se_ve_Ginny_Weasley_de_Harry_Potter_en_2020_1_200722_gh0h9z0jxx', 5, '/Users/andrespineda/Documents/GitHub/MiPrimerJuego/MiJuego/jinnyAnimada.png')

let HarryEnemigo = new Mago ('Harry', 'https://media.revistavanityfair.es/photos/60e84a97bb9e71d46fd8d1f4/1:1/w_916,h_916,c_limit/39713.jpg', 5, '/Users/andrespineda/Documents/GitHub/MiPrimerJuego/MiJuego/harryAminado.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ljZvjZfupT4f2X8KphHdlw-KkVm98fQw8Q&usqp=CAU')
let HermioniEnemigo = new Mago ('Hermioni', 'https://static.wikia.nocookie.net/warnerbros/images/f/f7/Hermione2.jpg/revision/latest/scale-to-width-down/373?cb=20221109054851&path-prefix=es', 5, '/Users/andrespineda/Documents/GitHub/MiPrimerJuego/MiJuego/hermioniAnimada.jpg', 'https://static0.srcdn.com/wordpress/wp-content/uploads/2018/12/Hermione-Casting-Spell.jpg?q=50&fit=crop&w=738&dpr=1.5%201107w')
let DumbledoreEnemigo = new Mago ('Dumbledore', 'https://static.wikia.nocookie.net/wikihp/images/8/88/Dumbledore.jpg/revision/latest/scale-to-width-down/423?cb=20090911073332&path-prefix=es', 5, '/Users/andrespineda/Documents/GitHub/MiPrimerJuego/MiJuego/dumbledoreAnimado.jpg', 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/09/expelliarmus-harry-potter.jpg?itok=4Z_55qWw')
let VoldemortEnemigo = new Mago ('Voldemort', 'https://www.clarin.com/img/2020/09/02/lord-voldemort-es-el-archi___1el72Rtky_1256x620__1.jpg', 5, '/Users/andrespineda/Documents/GitHub/MiPrimerJuego/MiJuego/voldemortAnimado.jpg', 'https://sm.ign.com/ign_latam/screenshot/default/avada_w3y8.jpg')
let NevilleEnemigo = new Mago ('Neville', 'https://static.wikia.nocookie.net/esharrypotter/images/2/20/NevilleHBP.jpg/revision/latest/scale-to-width-down/226?cb=20150523213436', 5, '/Users/andrespineda/Documents/GitHub/MiPrimerJuego/MiJuego/nevilleAnimado.png', 'https://static.wikia.nocookie.net/esharrypotter/images/8/89/Neville_con_la_espada.jpg/revision/latest?cb=20120221192537')
let JinnyEnemigo = new Mago ('Jinny', 'https://img.allvipp.com/www-promipool-de/image/upload/c_fill,g_faces,w_1200,h_900,q_auto:eco,f_webp/Bonnie_Wright_asi_se_ve_Ginny_Weasley_de_Harry_Potter_en_2020_1_200722_gh0h9z0jxx', 5, '/Users/andrespineda/Documents/GitHub/MiPrimerJuego/MiJuego/jinnyAnimada.png', 'https://3.bp.blogspot.com/-Z0k7U3CJTt0/TrlGzPuRFUI/AAAAAAAAAFE/cfa39GedGV8/s1600/bonnie+1685.jpg')

magos.push(Harry, Hermioni, Dumbledore, Voldemort, Neville, Jinny)

Harry.ataques.push(
	{ nombre: 'Espeliarmus 🧹', id: 'boton-esp'},
	{ nombre: 'Espeliarmus 🧹', id: 'boton-esp'},
	{ nombre: 'Espectru Patronus 🐘', id: 'boton-pat'},
	{ nombre: 'Espectru Patronus 🐘', id: 'boton-pat'},
	{ nombre: 'Espectru Patronus 🐘', id: 'boton-pat'},
	{ nombre: 'Reducto 🤪', id: 'boton-red'},
	{ nombre: 'Crucio 💦', id: 'boton-cru'},
	{ nombre: 'Imperio ☘', id: 'boton-imp'},
    { nombre: 'Avada Kedavra 🔥', id: 'boton-ava'},
)

Hermioni.ataques.push(
	{ nombre: 'Espeliarmus 🧹', id: 'boton-esp'},
	{ nombre: 'Espectru Patronus 🐘', id: 'boton-pat'},
	{ nombre: 'Espectru Patronus 🐘', id: 'boton-pat'},
	{ nombre: 'Espectru Patronus 🐘', id: 'boton-pat'},
	{ nombre: 'Reducto 🤪', id: 'boton-red'},
	{ nombre: 'Crucio 💦', id: 'boton-cru'},
	{ nombre: 'Imperio ☘', id: 'boton-imp'},
	{ nombre: 'Imperio ☘', id: 'boton-imp'},
    { nombre: 'Avada Kedavra 🔥', id: 'boton-ava'},
)

Dumbledore.ataques.push(
	{ nombre: 'Espeliarmus 🧹', id: 'boton-esp'},
	{ nombre: 'Espeliarmus 🧹', id: 'boton-esp'},
	{ nombre: 'Espeliarmus 🧹', id: 'boton-esp'},
	{ nombre: 'Espectru Patronus 🐘', id: 'boton-pat'},
	{ nombre: 'Reducto 🤪', id: 'boton-red'},
	{ nombre: 'Reducto 🤪', id: 'boton-red'},
	{ nombre: 'Crucio 💦', id: 'boton-cru'},
	{ nombre: 'Imperio ☘', id: 'boton-imp'},
    { nombre: 'Avada Kedavra 🔥', id: 'boton-ava'},
)

Voldemort.ataques.push(
	{ nombre: 'Espeliarmus 🧹', id: 'boton-esp'},
	{ nombre: 'Espectru Patronus 🐘', id: 'boton-pat'},
	{ nombre: 'Reducto 🤪', id: 'boton-red'},
	{ nombre: 'Crucio 💦', id: 'boton-cru'},
	{ nombre: 'Imperio ☘', id: 'boton-imp'},
    { nombre: 'Avada Kedavra 🔥', id: 'boton-ava'},
	{ nombre: 'Avada Kedavra 🔥', id: 'boton-ava'},
	{ nombre: 'Avada Kedavra 🔥', id: 'boton-ava'},
	{ nombre: 'Avada Kedavra 🔥', id: 'boton-ava'},
)

Neville.ataques.push(
	{ nombre: 'Espeliarmus 🧹', id: 'boton-esp'},
	{ nombre: 'Espeliarmus 🧹', id: 'boton-esp'},
	{ nombre: 'Espeliarmus 🧹', id: 'boton-esp'},
	{ nombre: 'Espeliarmus 🧹', id: 'boton-esp'},
	{ nombre: 'Espectru Patronus 🐘', id: 'boton-pat'},
	{ nombre: 'Reducto 🤪', id: 'boton-red'},
	{ nombre: 'Crucio 💦', id: 'boton-cru'},
	{ nombre: 'Imperio ☘', id: 'boton-imp'},
    { nombre: 'Avada Kedavra 🔥', id: 'boton-ava'},
)

Jinny.ataques.push(
	{ nombre: 'Espeliarmus 🧹', id: 'boton-esp'},
	{ nombre: 'Espectru Patronus 🐘', id: 'boton-pat'},
	{ nombre: 'Reducto 🤪', id: 'boton-red'},
	{ nombre: 'Reducto 🤪', id: 'boton-red'},
	{ nombre: 'Reducto 🤪', id: 'boton-red'},
	{ nombre: 'Reducto 🤪', id: 'boton-red'},
	{ nombre: 'Crucio 💦', id: 'boton-cru'},
	{ nombre: 'Imperio ☘', id: 'boton-imp'},
    { nombre: 'Avada Kedavra 🔥', id: 'boton-ava'},
)

HarryEnemigo.ataques.push(
	{ nombre: 'Espeliarmus 🧹', id: 'boton-esp'},
	{ nombre: 'Espeliarmus 🧹', id: 'boton-esp'},
	{ nombre: 'Espectru Patronus 🐘', id: 'boton-pat'},
	{ nombre: 'Espectru Patronus 🐘', id: 'boton-pat'},
	{ nombre: 'Espectru Patronus 🐘', id: 'boton-pat'},
	{ nombre: 'Reducto 🤪', id: 'boton-red'},
	{ nombre: 'Crucio 💦', id: 'boton-cru'},
	{ nombre: 'Imperio ☘', id: 'boton-imp'},
    { nombre: 'Avada Kedavra 🔥', id: 'boton-ava'},
)

HermioniEnemigo.ataques.push(
	{ nombre: 'Espeliarmus 🧹', id: 'boton-esp'},
	{ nombre: 'Espectru Patronus 🐘', id: 'boton-pat'},
	{ nombre: 'Espectru Patronus 🐘', id: 'boton-pat'},
	{ nombre: 'Espectru Patronus 🐘', id: 'boton-pat'},
	{ nombre: 'Reducto 🤪', id: 'boton-red'},
	{ nombre: 'Crucio 💦', id: 'boton-cru'},
	{ nombre: 'Imperio ☘', id: 'boton-imp'},
	{ nombre: 'Imperio ☘', id: 'boton-imp'},
    { nombre: 'Avada Kedavra 🔥', id: 'boton-ava'},
)

DumbledoreEnemigo.ataques.push(
	{ nombre: 'Espeliarmus 🧹', id: 'boton-esp'},
	{ nombre: 'Espeliarmus 🧹', id: 'boton-esp'},
	{ nombre: 'Espeliarmus 🧹', id: 'boton-esp'},
	{ nombre: 'Espectru Patronus 🐘', id: 'boton-pat'},
	{ nombre: 'Reducto 🤪', id: 'boton-red'},
	{ nombre: 'Reducto 🤪', id: 'boton-red'},
	{ nombre: 'Crucio 💦', id: 'boton-cru'},
	{ nombre: 'Imperio ☘', id: 'boton-imp'},
    { nombre: 'Avada Kedavra 🔥', id: 'boton-ava'},
)

VoldemortEnemigo.ataques.push(
	{ nombre: 'Espeliarmus 🧹', id: 'boton-esp'},
	{ nombre: 'Espectru Patronus 🐘', id: 'boton-pat'},
	{ nombre: 'Reducto 🤪', id: 'boton-red'},
	{ nombre: 'Crucio 💦', id: 'boton-cru'},
	{ nombre: 'Imperio ☘', id: 'boton-imp'},
    { nombre: 'Avada Kedavra 🔥', id: 'boton-ava'},
	{ nombre: 'Avada Kedavra 🔥', id: 'boton-ava'},
	{ nombre: 'Avada Kedavra 🔥', id: 'boton-ava'},
	{ nombre: 'Avada Kedavra 🔥', id: 'boton-ava'},
)

NevilleEnemigo.ataques.push(
	{ nombre: 'Espeliarmus 🧹', id: 'boton-esp'},
	{ nombre: 'Espeliarmus 🧹', id: 'boton-esp'},
	{ nombre: 'Espeliarmus 🧹', id: 'boton-esp'},
	{ nombre: 'Espeliarmus 🧹', id: 'boton-esp'},
	{ nombre: 'Espectru Patronus 🐘', id: 'boton-pat'},
	{ nombre: 'Reducto 🤪', id: 'boton-red'},
	{ nombre: 'Crucio 💦', id: 'boton-cru'},
	{ nombre: 'Imperio ☘', id: 'boton-imp'},
    { nombre: 'Avada Kedavra 🔥', id: 'boton-ava'},
)

JinnyEnemigo.ataques.push(
	{ nombre: 'Espeliarmus 🧹', id: 'boton-esp'},
	{ nombre: 'Espectru Patronus 🐘', id: 'boton-pat'},
	{ nombre: 'Reducto 🤪', id: 'boton-red'},
	{ nombre: 'Reducto 🤪', id: 'boton-red'},
	{ nombre: 'Reducto 🤪', id: 'boton-red'},
	{ nombre: 'Reducto 🤪', id: 'boton-red'},
	{ nombre: 'Crucio 💦', id: 'boton-cru'},
	{ nombre: 'Imperio ☘', id: 'boton-imp'},
    { nombre: 'Avada Kedavra 🔥', id: 'boton-ava'},
)


var img1 = new Image ()
var img2 = new Image ()
var img3 = new Image () 
var img4 = new Image () 
var img5 = new Image () 
var img6 = new Image ()
img1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ljZvjZfupT4f2X8KphHdlw-KkVm98fQw8Q&usqp=CAU"
img2.src = "https://static0.srcdn.com/wordpress/wp-content/uploads/2018/12/Hermione-Casting-Spell.jpg?q=50&fit=crop&w=738&dpr=1.5%201107w" 
img3.src = "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/09/expelliarmus-harry-potter.jpg?itok=4Z_55qWw" 
img4.src = "https://sm.ign.com/ign_latam/screenshot/default/avada_w3y8.jpg" 
img5.src = "https://static.wikia.nocookie.net/esharrypotter/images/8/89/Neville_con_la_espada.jpg/revision/latest?cb=20120221192537"
img6.src = "https://3.bp.blogspot.com/-Z0k7U3CJTt0/TrlGzPuRFUI/AAAAAAAAAFE/cfa39GedGV8/s1600/bonnie+1685.jpg"

imagenes.push(img1, img2, img3, img4, img5, img6)

function iniciarjuego(){
    
	sectionencan.style.display = 'none'
	sectionrein.style.display = 'none'
	sectionelien.style.display = 'none'	
	sectionmamae.style.display = 'none'	
    sectionmen.style.display = 'none'	
	sectionVerMapa.style.display = 'none'
    magos.forEach((Mago) => {
	opcionDeMago = `
	<input type="radio" name="mago" id=${Mago.nombre}>
	<label id="hp" for=${Mago.nombre}><img src=${Mago.foto}></label> 
    `
	contenedordeMago.innerHTML += opcionDeMago
    
	inputHarry = document.getElementById('Harry')
	inputHermioni = document.getElementById('Hermioni')
	inputDumbledore = document.getElementById('Dumbledore')
    inputVoldmort = document.getElementById('Voldemort')
    inputNeville = document.getElementById('Neville')
    inputJinny = document.getElementById('Jinny')
	})

	botonMago.addEventListener('click', seleccionar_mago)
    
	rein.addEventListener('click', reiniciar)
}


function seleccionar_mago(){
  
  let container = document.getElementById('foto_mago')
  

  sectionmago.style.display = 'none'	
  //sectionencan.style.display = 'flex'
  //sectionelien.style.display = 'flex'
  //sectionmamae.style.display = 'flex'
 

  
  /*lienzo.fillRect(5,15,20,40)
  (coordenada x,coordenada y, ancho, altura)*/


	if (inputHarry.checked){
		spanMago.innerHTML = inputHarry.id
		magoJugador = inputHarry.id
		 container.innerHTML = '<img id="foto_mago" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ljZvjZfupT4f2X8KphHdlw-KkVm98fQw8Q&usqp=CAU" width="250px" height="330px">'

	} else if (inputHermioni.checked){
		spanMago.innerHTML = inputHermioni.id
		magoJugador = inputHermioni.id
		container.innerHTML = '<img id="foto_mago" src="https://static0.srcdn.com/wordpress/wp-content/uploads/2018/12/Hermione-Casting-Spell.jpg?q=50&fit=crop&w=738&dpr=1.5%201107w" width="250px" height="330px">'
	}else if (inputDumbledore.checked){
		spanMago.innerHTML = inputDumbledore.id
		magoJugador = inputDumbledore.id
		container.innerHTML = '<img id="foto_mago" src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/09/expelliarmus-harry-potter.jpg?itok=4Z_55qWw" width="250px" height="330px">'
	}else if (inputVoldmort.checked){
		spanMago.innerHTML = inputVoldmort.id
		magoJugador = inputVoldmort.id
		container.innerHTML = '<img id="foto_mago" src="https://sm.ign.com/ign_latam/screenshot/default/avada_w3y8.jpg" width="250px" height="330px">'
	}else if (inputNeville.checked){
		spanMago.innerHTML = inputNeville.id
		magoJugador = inputNeville.id
		container.innerHTML = '<img id="foto_mago" src="https://static.wikia.nocookie.net/esharrypotter/images/8/89/Neville_con_la_espada.jpg/revision/latest?cb=20120221192537" width="250px" height="330px">'
	}else if (inputJinny.checked){
		spanMago.innerHTML = inputJinny.id
		magoJugador = inputJinny.id
		container.innerHTML = '<img id="foto_mago" src="https://3.bp.blogspot.com/-Z0k7U3CJTt0/TrlGzPuRFUI/AAAAAAAAAFE/cfa39GedGV8/s1600/bonnie+1685.jpg" width="250px" height="330px">'
	}else{
		alert("Selecciona un mago de la lista")
		reiniciar()
	}
	extraerAtaques(magoJugador)
	sectionVerMapa.style.display = 'flex'
	iniciarMapa()
}

function extraerAtaques(magoJugador) {
	let ataques 
	for (let i=0; i < magos.length; i++){
		if (magoJugador === magos[i].nombre){
            ataques = magos[i].ataques
		}
	}
	mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
	ataques.forEach((ataque) => {
		ataquesMago = `
		<button id=${ataque.id} class="BAtaque">${ataque.nombre}</button>
		`
		contenedorAtaques.innerHTML += ataquesMago
	})
	esp = document.getElementById('boton-esp')
	pat = document.getElementById('boton-pat')
	red = document.getElementById('boton-red')
	cru = document.getElementById('boton-cru')
	imp = document.getElementById('boton-imp')
	ava = document.getElementById('boton-ava')
    botones = document.querySelectorAll('.BAtaque')
	console.log(botones)
    secuenciaAtaques()
}

function secuenciaAtaques(){
	botones.forEach((boton) =>{
		boton.addEventListener('click', (e) =>{
			if (e.target.textContent === 'Espeliarmus 🧹'){
				ataqueJugador.push('Espeliarmus')
				boton.style.background = '#112f58'
				boton.disabled = true
			} else if (e.target.textContent === 'Espectru Patronus 🐘' ){
				ataqueJugador.push('Espectru Patronus')
				boton.style.background = '#112f58'
				boton.disabled = true
			} else if (e.target.textContent === 'Reducto 🤪'){
				ataqueJugador.push('Reducto')
				boton.style.background = '#112f58'
				boton.disabled = true
			} else if (e.target.textContent === 'Crucio 💦'){
				ataqueJugador.push('Crucio')
				boton.style.background = '#112f58'
				boton.disabled = true
			} else if (e.target.textContent === 'Imperio ☘'){
				ataqueJugador.push('Imperio')
				boton.style.background = '#112f58'
				boton.disabled = true
			} else {
				ataqueJugador.push('Avada Kedavra')
				boton.style.background = '#112f58'
				boton.disabled = true
			}
			seleccionar_ataque_enemigo()
		})
	})
}

function seleccionar_mago_enemigo(enemigo){
	let mag = aleatorio(0, magos.length - 1)
	spanMagoEnemigo.innerHTML = enemigo.nombre 
	ataquesMagoEnemigo = enemigo.ataques
	console.log(enemigo.ataques, enemigo.fotoEne)
	let container2 = document.getElementById('foto_magoenemigo')
	container2.innerHTML = `
                  <img id="foto_magoenemigo" src=${enemigo.fotoEne.src} width="250px" height="330px">'
				  `
}


function seleccionar_ataque_enemigo(){
	let ata = aleatorio(0, ataquesMagoEnemigo.length - 1)
	
		 if (ata == 0 || ata == 1){
			ataqueEnemigo.push('Espeliarmus')
			numatacen = 3
		} else if (ata == 2){
			ataqueEnemigo.push('Espectru Patronus')
			numatacen = 1
		} else if (ata == 3 || ata == 7){
			ataqueEnemigo.push('Reducto')
			numatacen = 2
		} else if (ata == 4){
			ataqueEnemigo.push('Crucio')
			numatacen = 5
		 } else if (ata == 5 || ata == 8){
			ataqueEnemigo.push('Imperio')
			numatacen = 4
		 } else if (ata == 6){
			ataqueEnemigo.push('Avada Kedavra')
			numatacen = 6
		} 
	iniciarPelea()
   }

function iniciarPelea (){
	if (ataqueJugador.length === 5){
		combate()
	}
}   

function indexAmbosOponente(jugador, enemigo) {
	indexAtaqueJugador = ataqueJugador[jugador]
	indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate(){

	sectionmen.style.display = 'flex'
	sectionrein.style.display = 'flex'
	//sectionencan.style.display = 'none'
    sectionelien.style.display = 'none'
    //sectionmamae.style.display = 'none'

	for (let index = 0; index < ataqueJugador.length; index++){
		if(ataqueJugador[index] === ataqueEnemigo[index]){
			indexAmbosOponente(index, index)
			crearmensaje("EMPATE")
			spanvidam.innerHTML = ganadas
			spanvidaene.innerHTML = perdidas
		} else if (ataqueJugador[index] > ataqueEnemigo[index]){
			indexAmbosOponente(index, index)
			crearmensaje("Mago Gana")
			ganadas++
			spanvidam.innerHTML = ganadas
			spanvidaene.innerHTML = perdidas
		} else if (ataqueJugador[index] < ataqueEnemigo[index]){
			indexAmbosOponente(index, index)
			crearmensaje("Mago Enemigo Gana")
			perdidas++
			spanvidam.innerHTML = ganadas
			spanvidaene.innerHTML = perdidas
		}else{
			alert("Algo ocurre")
		}
		console.log(index)
	}
	ultima()
}	

function crearmensaje(ganador){
	
	//sectionmen.style.display = 'flex'
	let parrafo = document.createElement('p')
	//sectionelien.style.display = 'none'
	//sectionencan.style.display = 'flex'
	//bodyto.addEventListener('click', ultima)

	parrafo.innerHTML = 'Tu mago ataco con ' + indexAtaqueJugador + ' y el mago enemigo ataco con ' +indexAtaqueEnemigo+ ' ' +ganador
	sectionmen.appendChild(parrafo)
		
}

function ultima(){
	
    //sectionmamae.style.display = 'flex'
    //sectionmen.style.display = 'flex'
	
	if (ganadas > perdidas){
		    //bodyto.disabled = true
	        //sectionrein.style.display = 'flex'
			sectionencan.innerHTML =  '<img src="/Users/andrespineda/Documents/GitHub/MiPrimerJuego/MiJuego/ganaste.png" width="1200px" height="250px">'
	} else if (ganadas < perdidas){
		    //bodyto.disabled = true
	        //sectionrein.style.display = 'flex'	
			sectionencan.innerHTML =  '<img src="/Users/andrespineda/Documents/GitHub/MiPrimerJuego/MiJuego/perdiste.png" width="1200px" height="250px">'
		}else{
	    //sectionelien.style.display = 'flex'
	    //sectionencan.style.display = 'flex'
		sectionVerMapa.style.display = 'flex'
		iniciarMapa()
	}
}

function reiniciar(){
         location.reload() //Se utiliza para reiniciar una pagina 
}

function aleatorio(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function pintarCanvas() {
	magoJugadorObjeto.x = magoJugadorObjeto.x + magoJugadorObjeto.velocidadX
	magoJugadorObjeto.y = magoJugadorObjeto.y + magoJugadorObjeto.velocidadY
	lienzo.clearRect(0,0, mapa.width, mapa.height)
	//el parentesis de arriba limita el espacio en el que la funcion de limpiar se va a aplicar
	lienzo.drawImage(
		mapaBackground,
		0,
		0,
		mapa.width,
		mapa.height
	)
	magoJugadorObjeto.pintarMago()
	HarryEnemigo.pintarMago()
	VoldemortEnemigo.pintarMago()
	DumbledoreEnemigo.pintarMago()
	JinnyEnemigo.pintarMago()
	NevilleEnemigo.pintarMago()
	HermioniEnemigo.pintarMago()

	if(magoJugadorObjeto.velocidadX !== 0 || magoJugadorObjeto !== 0){
		revisarColision(VoldemortEnemigo)
		revisarColision(DumbledoreEnemigo)
		revisarColision(HarryEnemigo)
		revisarColision(JinnyEnemigo)
		revisarColision(NevilleEnemigo)
		revisarColision(HermioniEnemigo)

	}
}

function moverDerecha(){
	magoJugadorObjeto.velocidadX = 5
}

function moverIzquierda(){
	magoJugadorObjeto.velocidadX = -5
}

function moverArriba(){
	magoJugadorObjeto.velocidadY = - 5
}

function moverAbajo(){
	magoJugadorObjeto.velocidadY = 5
}

function detenerMovimiento(){
	magoJugadorObjeto.velocidadX = 0
	magoJugadorObjeto.velocidadY = 0
}

function sePresionaUnaTecla(event) {
	switch (event.key) {
		case 'ArrowUp':
			moverArriba()
			break
		case 'ArrowDown':
		     moverAbajo()
			 break	
		case 'ArrowLeft':
			moverIzquierda()
			break
		case 'ArrowRight':
		    moverDerecha()
			break
		default:
			break;
					
	}
}

function iniciarMapa() {

magoJugadorObjeto = obtenerObjetoMago(magoJugador)
intervalo = setInterval(pintarCanvas, 50)

  window.addEventListener('keydown', sePresionaUnaTecla)
  window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoMago(){
	for (let i=0; i < magos.length; i++){
		if (magoJugador === magos[i].nombre){
            return magos[i]
		}
	}
}

function revisarColision (enemigo){
	const arribaEnemigo = enemigo.y
	const abajoEnemigo = enemigo.y + enemigo.alto
	const derechaEnemigo = enemigo.x + enemigo.ancho
	const izquierdaEnemigo = enemigo.x

	const arribaMago = magoJugadorObjeto.y
	const abajoMago = magoJugadorObjeto.y + magoJugadorObjeto.alto
	const derechaMago = magoJugadorObjeto.x + magoJugadorObjeto.ancho
	const izquierdaMago = magoJugadorObjeto.x
	
	if(
		abajoMago < arribaEnemigo ||
		arribaMago > abajoEnemigo ||
		derechaMago < izquierdaEnemigo ||
		izquierdaMago > derechaEnemigo
	){
		return 
	}
    detenerMovimiento()
	clearInterval(intervalo)
	sectionencan.style.display = 'flex'
    sectionelien.style.display = 'flex'
    sectionmamae.style.display = 'flex'
	sectionVerMapa.style.display = 'none'
    seleccionar_mago_enemigo(enemigo)

	
}

window.addEventListener('load', iniciarjuego)

//utilizamos este evento para que la funcion invocada
//cargue solo cuando toda la ventana de html haya cargado

