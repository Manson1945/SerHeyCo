
const arrayProductos = [

    {name:"Piel dorada",
     subtitle:"Zanahoria y aceite de Ricino",
     info:"Pieles secas o maduras. Hidrata, revitaliza y equilibra el tono de la piel.Fuente de vitaminas y minerales.Antioxidantes, antienvejecimiento y antimanchas.Piel más tersa, equilibrada y luminosa.Contiene aceites esenciales de mandarina y neroli .Pieles secas o maduras. Hidrata, revitaliza y equilibra el tono de la piel. Fuente de vitaminas y minerales.Antioxidantes, antienvejecimiento y antimanchas.Piel más tersa, equilibrada y luminosa.Contiene aceites esenciales de mandarina y neroli.",
     id: 1,
     price: 2600,
     img:"./ASSETS/PICS/rotoNaranja.jpg"},
     

    
    {name: "Marmolado",
     subtitle: "Café, manteca de cacao y karité",
     info:"Pieles asfixiadas, deshidratadas tendientes a la celulitis. Hidrata, oxigena y protege los tejidos de la dermis.Combate la celulitis y aportar firmeza a la piel.Exfoliante natural, potente antioxidante.                                                       Piel más firme, luminosa, libre de celulitis.Contiene aceites esenciales de jazmín y mandarina.",      
     id: 2,
     price: 2000,
     img:"./ASSETS/PICS/rotoMarmolado.jpg",
     page: "./PAGES/marmolado.html"},

     

    {name: "Ángel",
     subtitle:"Avena y miel ",
     info:"Todo tipo de piel - Mixtas - Sensibles. Nutre, hidrata, repara y protege la piel.antioxidante, antiséptico.Tonificante y revitalizante.Piel resplandeciente e hidratada.Contiene aceites esenciales de lavanda y geranio.",
     id: 3,
     price: 2200,
     img:"./ASSETS/PICS/rotoBlanco.jpg"},


    {name:"Noche",
     subtitle:"Carbón activado, manteca de Karité y aceite de Jojoba",
     info:"Nutre, hidrata, purifica y oxigena la piel.Función adsorbente de toxinas.Renueva y protege las células. Piel más limpia, radiante y libre de impurezas.Contiene aceites esenciales de tea tree y geranio.",
     id: 4,
     price: 2600,
     img: "./ASSETS/PICS/rotoNegro.jpg"},


      {name:"Acondicionador con sándalo",
       subtitle: "Manteca de cacao y queratina",
       info:"Nutritivo. Regenera y fortalece la cutícula capilar. Ayuda al crecimiento. Deja el cabello con mucho brillo, muy suave y libre de friz.",
       id: 5,
       price: 2300,
       img: "./ASSETS/PICS/Acondicionador.jpg"},


      {name:"Acondicionador con chocolate",
       subtitle: "Manteca de Karité y pantenol",
       info:"Nutritivo. Regenera y fortalece la cutícula capilar. Ayuda al crecimiento. Deja el cabello con mucho brillo, muy suave y libre de friz.",
       id: 6,
       price: 2700,
       img:"./ASSETS/PICS/acondicionadorMarron.jpg"},


      {name:"Shampoo & Acondicionador 2 en 1",
       subtitle:"Queratina y vitamina E",
       info:"Nutritivo. Regenera y fortalece la cutícula capilar. Ayuda al crecimiento. Deja el cabello con mucho brillo, muy suave y libre de frizz.",
       id: 7,
       price: 2800,
       img:"./ASSETS/PICS/Champu.jpg"},
]


/* ---------RENDER MAIN------------ */





const renderHeader = () => {
    const header = document.getElementById("header");

    header.innerHTML += `
                        <a href="./index.html"> <h1 id="logo">SerHe & Co.</h1> </a> 

                        <nav>

                            <a href="">Inicio</a>
                            <a href="">Productos</a>
                            <a href="">Info</a>
                            <a href="">Contacto</a>

                        </nav>
                        `
                        
}




 const renderBanner = () => {

    const banner = document.getElementById("banner")

    banner.innerHTML += `
                        <div class="banner__info">

                        <h2>Somos...</h2>
                        <h1 class="name">SerHe & Co</h1>
                        <h3>BIENESTAR NATURAL</h3>
    
                        <button><i class="fa-brands fa-whatsapp icon"></i>Contactame</button>

                        <h4>Naturaleza en cada jabón</h4>

                        </div>      
                        `

                                   
}





 const renderGalery = () => {

    const galery = document.getElementById("galery")  
    
    arrayProductos.forEach ((prod) => {


        galery.innerHTML += `
                            <div class="pics">
                                <img class="galeryImg" src="${prod.img}">
                            </div>     `       
    })
                    
}


const renderProductos = () => {

    const main = document.getElementById("infoContainer")

    arrayProductos.forEach ((prod) => {

        main.innerHTML +=  `
        <section class="info">

        <h1> ${prod.name} </h1>

      <img class="prodPic" onclick="buscarProducto(${prod.id})" src="${prod.img}" > 

        

        <h2 class="name"> ${prod.subtitle}</h2>

        <p class="info"> ${prod.info}</p>

        </section>`
    })


}


 const renderFooter = () => {

    const footer = document.getElementById("footer")

    footer.innerHTML += `
                        <div class="footerLogo">
                        <h3>SerHe & Co</h3>
                        <h4>BIENESTAR NATURAL</h4>
                        </div>

                        <div class="footerLinks">
                        <a href="">Inicio</a>
                        <a href="">Productos</a>
                        <a href="">Info</a>
                        <a href="">Contacto</a>
                        </div>

                        <div class="footerContact">
                        <h4>Contactame</h4>
                        <h5><i class="fa-brands fa-whatsapp icon"></i>299 624 0165</h5>
                        <h5><i class="fa-brands fa-square-facebook"></i>eco.SerHe.y.Co</h5>
                        <h5><i class="fa-brands fa-instagram"></i>@eco.serhe.y.co</h5>
                        </div>        
                                 `
}



renderHeader(); 
renderBanner();
renderGalery();
renderProductos();
renderFooter();




const buscarProducto = (id) => {

    const producto = arrayProductos.find ((e => e.id === id))

    /* console.log(producto); */

    producto


}
