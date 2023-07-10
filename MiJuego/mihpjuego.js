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
let inputHarry = document.getElementById('Harry')
let inputHermioni = document.getElementById('Hermioni')
let inputDumbledore = document.getElementById('Dumbledore')
let inputVoldmort = document.getElementById('Voldemort')
let inputNeville = document.getElementById('Neville')
let inputJinny = document.getElementById('Jinny')
let spanMago = document.getElementById('mago')
let spanMagoEnemigo = document.getElementById('mago-enemigo')
let spanvidam = document.getElementById('vidas-mago')
let spanvidaene = document.getElementById('vidas-enemigo')
let bodyto = document.getElementById('ult-men') 
let conteinerreini = document.getElementById('imgreini')


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
	}
}

let Harry = new Mago ('Harry', 'https://media.revistavanityfair.es/photos/60e84a97bb9e71d46fd8d1f4/1:1/w_916,h_916,c_limit/39713.jpg', 5)

Mago.push(Harry)
console.log(Mago)

function iniciarjuego(){
    
	//sectionencan.style.display = 'none'
	//sectionrein.style.display = 'none'
	//sectionelien.style.display = 'none'	
	//sectionmamae.style.display = 'none'	
    //sectionmen.style.display = 'none'	
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
		spanMago.innerHTML = "Harry Potter"
		 seleccionar_mago_enemigo()
		 container.innerHTML = '<img id="foto_mago" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ljZvjZfupT4f2X8KphHdlw-KkVm98fQw8Q&usqp=CAU" width="250px" height="330px">'

	} else if (inputHermioni.checked){
		spanMago.innerHTML = "Hermioni"
		seleccionar_mago_enemigo()
		container.innerHTML = '<img id="foto_mago" src="https://static0.srcdn.com/wordpress/wp-content/uploads/2018/12/Hermione-Casting-Spell.jpg?q=50&fit=crop&w=738&dpr=1.5%201107w" width="250px" height="330px">'
	}else if (inputDumbledore.checked){
		spanMago.innerHTML = "Dumbledore"
		seleccionar_mago_enemigo()
		container.innerHTML = '<img id="foto_mago" src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/09/expelliarmus-harry-potter.jpg?itok=4Z_55qWw" width="250px" height="330px">'
	}else if (inputVoldmort.checked){
		spanMago.innerHTML = "Voldemort"
		seleccionar_mago_enemigo()
		container.innerHTML = '<img id="foto_mago" src="https://sm.ign.com/ign_latam/screenshot/default/avada_w3y8.jpg" width="250px" height="330px">'
	}else if (inputNeville.checked){
		spanMago.innerHTML = "Neville"
		seleccionar_mago_enemigo()
		container.innerHTML = '<img id="foto_mago" src="https://static.wikia.nocookie.net/esharrypotter/images/8/89/Neville_con_la_espada.jpg/revision/latest?cb=20120221192537" width="250px" height="330px">'
	}else if (inputJinny.checked){
		spanMago.innerHTML = "Jinny Wisley"
		seleccionar_mago_enemigo()
		container.innerHTML = '<img id="foto_mago" src="https://3.bp.blogspot.com/-Z0k7U3CJTt0/TrlGzPuRFUI/AAAAAAAAAFE/cfa39GedGV8/s1600/bonnie+1685.jpg" width="250px" height="330px">'
	}else{
		alert("Selecciona un mago de la lista")
		reiniciar()
	}
}

function seleccionar_mago_enemigo(){
	let mag = aleatorio(1, 6)
	let resultado = ""
	let container2 = document.getElementById('foto_magoenemigo')
		 if (mag == 1){
		   resultado = "Harry Potter"
		   spanMagoEnemigo.innerHTML = "Harry Potter"
		   container2.innerHTML = '<img id="foto_magoenemigo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ljZvjZfupT4f2X8KphHdlw-KkVm98fQw8Q&usqp=CAU" width="250px" height="330px">'
		} else if (mag == 2){
		   resultado = "Hermioni" 
		   spanMagoEnemigo.innerHTML = "Hermioni"
		   container2.innerHTML = '<img id="foto_magoenemigo" src="https://static0.srcdn.com/wordpress/wp-content/uploads/2018/12/Hermione-Casting-Spell.jpg?q=50&fit=crop&w=738&dpr=1.5%201107w" width="250px" height="330px">'
		} else if (mag == 3){
		   resultado = "Dumbledore"
		   spanMagoEnemigo.innerHTML = "Dumbledore"
		   container2.innerHTML = '<img id="foto_magoenemigo" src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/09/expelliarmus-harry-potter.jpg?itok=4Z_55qWw" width="250px" height="330px">'
		} else if (mag == 4){
			resultado = "Voldemort"
			spanMagoEnemigo.innerHTML = "Voldemort"
			container2.innerHTML = '<img id="foto_magoenemigo" src="https://sm.ign.com/ign_latam/screenshot/default/avada_w3y8.jpg" width="250px" height="330px">'
		 } else if (mag == 5){
			resultado = "Neville"
			spanMagoEnemigo.innerHTML = "Neville"
			container2.innerHTML = '<img id="foto_magoenemigo" src="https://static.wikia.nocookie.net/esharrypotter/images/8/89/Neville_con_la_espada.jpg/revision/latest?cb=20120221192537" width="250px" height="330px">'
		 } else if (mag == 6){
			resultado = "Jinny Wisley"
			spanMagoEnemigo.innerHTML = "Jinny Wisley"
			container2.innerHTML = '<img id="foto_magoenemigo" src="https://3.bp.blogspot.com/-Z0k7U3CJTt0/TrlGzPuRFUI/AAAAAAAAAFE/cfa39GedGV8/s1600/bonnie+1685.jpg" width="250px" height="330px">'
		 } else {
		   resultado = "No Valido" 
		}
	return resultado   
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

