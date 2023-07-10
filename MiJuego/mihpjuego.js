let sectionencan = document.getElementById('elije-encantamiento')
let sectionrein = document.getElementById('Reinicia')
let sectionelien = document.getElementById('elien')
let sectionmamae = document.getElementById('mamae')
let sectionmen = document.getElementById('message')
let botonMago = document.getElementById('boton-mago')
let esp = document.getElementById('boton-esp')
let pat = document.getElementById('boton-pat')
let red = document.getElementById('boton-red')
let cru = document.getElementById('boton-cru')
let imp = document.getElementById('boton-imp')
let ava = document.getElementById('boton-ava')
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

let magos = []
let inputHarry 
let inputHermioni 
let inputDumbledore 
let inputVoldmort
let inputNeville 
let inputJinny 
let imagenes = []
let magoJugador
let ataqueMago 
let ataqueEnemigo
let numatmag
let numatacen
let desmag = 5
let desene = 5

class Mago {
	constructor (nombre, foto, vidas){
		this.nombre = nombre
		this.foto = foto 
		this.vidas = vidas
		this.ataques = []
	}
}

let Harry = new Mago ('Harry', 'https://media.revistavanityfair.es/photos/60e84a97bb9e71d46fd8d1f4/1:1/w_916,h_916,c_limit/39713.jpg', 5)
let Hermioni = new Mago ('Hermioni', 'https://static.wikia.nocookie.net/warnerbros/images/f/f7/Hermione2.jpg/revision/latest/scale-to-width-down/373?cb=20221109054851&path-prefix=es', 5)
let Dumbledore = new Mago ('Dumbledore', 'https://static.wikia.nocookie.net/wikihp/images/8/88/Dumbledore.jpg/revision/latest/scale-to-width-down/423?cb=20090911073332&path-prefix=es', 5)
let Voldemort = new Mago ('Voldemort', 'https://www.clarin.com/img/2020/09/02/lord-voldemort-es-el-archi___1el72Rtky_1256x620__1.jpg', 5)
let Neville = new Mago ('Neville', 'https://static.wikia.nocookie.net/esharrypotter/images/2/20/NevilleHBP.jpg/revision/latest/scale-to-width-down/226?cb=20150523213436', 5)
let Jinny = new Mago ('Jinny', 'https://img.allvipp.com/www-promipool-de/image/upload/c_fill,g_faces,w_1200,h_900,q_auto:eco,f_webp/Bonnie_Wright_asi_se_ve_Ginny_Weasley_de_Harry_Potter_en_2020_1_200722_gh0h9z0jxx', 5)

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
    
	//sectionencan.style.display = 'none'
	//sectionrein.style.display = 'none'
	//sectionelien.style.display = 'none'	
	//sectionmamae.style.display = 'none'	
    //sectionmen.style.display = 'none'	
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
    esp.addEventListener('click', espeliarmus)
	pat.addEventListener('click', espectru)
	red.addEventListener('click', reducto)
	cru.addEventListener('click', crucio)
	imp.addEventListener('click', imperio)
	ava.addEventListener('click', avada)
	rein.addEventListener('click', reiniciar)
}
	//Esta funcion la usamos para poner el script en el head de HTML


function seleccionar_mago(){
  
  let container = document.getElementById('foto_mago')
  

  //sectionmago.style.display = 'none'	
  //sectionencan.style.display = 'flex'
  //sectionelien.style.display = 'flex'
  //sectionmamae.style.display = 'flex'

	if (inputHarry.checked){
		spanMago.innerHTML = inputHarry.id
		magoJugador = inputHarry.id
		 seleccionar_mago_enemigo()
		 container.innerHTML = '<img id="foto_mago" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ljZvjZfupT4f2X8KphHdlw-KkVm98fQw8Q&usqp=CAU" width="250px" height="330px">'

	} else if (inputHermioni.checked){
		spanMago.innerHTML = inputHermioni.id
		magoJugador = inputHermioni.id
		seleccionar_mago_enemigo()
		container.innerHTML = '<img id="foto_mago" src="https://static0.srcdn.com/wordpress/wp-content/uploads/2018/12/Hermione-Casting-Spell.jpg?q=50&fit=crop&w=738&dpr=1.5%201107w" width="250px" height="330px">'
	}else if (inputDumbledore.checked){
		spanMago.innerHTML = inputDumbledore.id
		magoJugador = inputDumbledore.id
		seleccionar_mago_enemigo()
		container.innerHTML = '<img id="foto_mago" src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/09/expelliarmus-harry-potter.jpg?itok=4Z_55qWw" width="250px" height="330px">'
	}else if (inputVoldmort.checked){
		spanMago.innerHTML = inputVoldmort.id
		magoJugador = inputVoldmort.id
		seleccionar_mago_enemigo()
		container.innerHTML = '<img id="foto_mago" src="https://sm.ign.com/ign_latam/screenshot/default/avada_w3y8.jpg" width="250px" height="330px">'
	}else if (inputNeville.checked){
		spanMago.innerHTML = inputNeville.id
		magoJugador = inputNeville.id
		seleccionar_mago_enemigo()
		container.innerHTML = '<img id="foto_mago" src="https://static.wikia.nocookie.net/esharrypotter/images/8/89/Neville_con_la_espada.jpg/revision/latest?cb=20120221192537" width="250px" height="330px">'
	}else if (inputJinny.checked){
		spanMago.innerHTML = inputJinny.id
		magoJugador = inputJinny.id
		seleccionar_mago_enemigo()
		container.innerHTML = '<img id="foto_mago" src="https://3.bp.blogspot.com/-Z0k7U3CJTt0/TrlGzPuRFUI/AAAAAAAAAFE/cfa39GedGV8/s1600/bonnie+1685.jpg" width="250px" height="330px">'
	}else{
		alert("Selecciona un mago de la lista")
		reiniciar()
	}
	extraerAtaques(magoJugador)
}

function extraerAtaques(magoJugador) {
	let ataques 
	for (let i=0; i < magos.length; i++){
		if (magoJugador === magos[i].nombre){
            ataques = magos[i].ataques
		}
	}
	console.log(ataques)
}

function seleccionar_mago_enemigo(){
	let mag = aleatorio(0, magos.length - 1)
	spanMagoEnemigo.innerHTML = magos[mag].nombre 
	let container2 = document.getElementById('foto_magoenemigo')
	container2.innerHTML = `
                  <img id="foto_magoenemigo" src=${imagenes[mag].src} width="250px" height="330px">'
				  `
}



function espeliarmus(){
	ataqueMago = "Espeliarmus"
	numatmag = 3
	seleccionar_ataque_enemigo()
}
function espectru(){
	ataqueMago = "Espectru Patronus"
	numatmag = 1
	seleccionar_ataque_enemigo()
}
function reducto(){
	ataqueMago = "Reducto"
	numatmag = 2
	seleccionar_ataque_enemigo()
}
function crucio(){
	ataqueMago = "Crucio"
	numatmag = 5
	seleccionar_ataque_enemigo()
}
function imperio(){
	ataqueMago = "Imperio"
	numatmag = 4
	seleccionar_ataque_enemigo()

}
function avada(){
	ataqueMago = "Avada Kedavra"
	numatmag = 6
	seleccionar_ataque_enemigo()
}

function seleccionar_ataque_enemigo(){
	let ata = aleatorio(1, 6)
	
		 if (ata == 1){
			ataqueEnemigo = "Espeliarmus"
			numatacen = 3
		} else if (ata == 2){
			ataqueEnemigo = "Espectru Patronus"
			numatacen = 1
		} else if (ata == 3){
			ataqueEnemigo = "Reducto"
			numatacen = 2
		} else if (ata == 4){
			ataqueEnemigo = "Crucio"
			numatacen = 5
		 } else if (ata == 5){
			ataqueEnemigo = "Imperio"
			numatacen = 4
		 } else if (ata == 6){
			ataqueEnemigo = "Avada Kedavra"
			numatacen = 6
		} 
   
	combate()
	
   }


function combate(){
	let container = document.getElementById('foto_mago')
    let container2 = document.getElementById('foto_magoenemigo')
	if ((desene > -1) && (desmag > -1)){
		if (desene < 1){
	        sectionrein.style.display = 'block'
			
			esp.disabled = true 
			pat.disabled = true 
			red.disabled = true 
			cru.disabled = true 
			imp.disabled = true 
			ava.disabled = true 
			spanvidaene.innerHTML = desene
			alert("Usted Gana el Combate")
		} else if (desmag < 1){
	        sectionrein.style.display = 'block'
			esp.disabled = true 
			pat.disabled = true 
			red.disabled = true 
			cru.disabled = true 
			imp.disabled = true 
			ava.disabled = true 
			spanvidam.innerHTML = desmag
			alert("Enemigo Gana el Combate")
		}else{
			
		   if (numatmag == numatacen){
			crearmensaje("Emapate")
	        container.style.display = 'none'
			container2.style.display = 'none'
		 } else if (numatmag > numatacen){
				crearmensaje("Usted Gana")
				desene = desene - 1
			    spanvidaene.innerHTML = desene	
		} else{
				crearmensaje("Usted Pierde")   
				desmag = desmag - 1
				spanvidam.innerHTML = desmag
				
			}
		}
   } 
}	

function crearmensaje(ganador){
	
	//sectionmen.style.display = 'flex'
	let parrafo = document.createElement('p')
	//sectionelien.style.display = 'none'
	//sectionencan.style.display = 'flex'
	//bodyto.addEventListener('click', ultima)

	parrafo.innerHTML = 'Tu mago ataco con ' + ataqueMago + ' y el mago enemigo ataco con ' +ataqueEnemigo+ ' ' +ganador
	sectionmen.appendChild(parrafo)
		
}

function ultima(){
	
    //sectionmamae.style.display = 'flex'
    //sectionmen.style.display = 'flex'
	
	if (desene < 1){
		    //bodyto.disabled = true
	        //sectionrein.style.display = 'flex'
			conteinerreini.innerHTML =  '<img src="/Users/andrespineda/Documents/GitHub/MiPrimerJuego/MiJuego/ganaste.png" width="1200px" height="250px">'	
	} else if (desmag < 1){
		    //bodyto.disabled = true
	        //sectionrein.style.display = 'flex'	
			conteinerreini.innerHTML =  '<img src="/Users/andrespineda/Documents/GitHub/MiPrimerJuego/MiJuego/perdiste.png" width="1200px" height="250px">'
		}else{
	    //sectionelien.style.display = 'flex'
	    //sectionencan.style.display = 'flex'
	}
}

function reiniciar(){
         location.reload() //Se utiliza para reiniciar una pagina 
}

function aleatorio(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarjuego)

//utilizamos este evento para que la funcion invocada
//cargue solo cuando toda la ventana de html haya cargado

