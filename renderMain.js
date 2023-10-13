let arrayProductos = []


fetch("./products.json")

.then((response) => response.json())
    .then((data) => {
        productos = data;

        guardarProductosLS(productos);

    })

    .catch ((error) => {
        console.error("error al cargar el archivo JSON:" , error)
    });


        /*-----GUARDAR Y CARGAR JUEGOS-----*/


const guardarProductosLS = (productos)=> {

    localStorage.setItem("productos" , JSON.stringify(productos));

     
}


const cargarProductosLS = () => {

    return JSON.parse(localStorage.getItem("productos")) || [];

} 




const buscarProducto = (id) => {

    const productos = cargarProductosLS();
    
   return productos.find ((e => e.id === id)); 

    
}




const renderMain = () => {

    const productos = cargarProductosLS();

    let salida = "";
    
    for (prod of productos) {

        salida += ` 
       <section class="prodContainer">

       <a href="${prod.page}#${prod.id}">

        <h1 class="infoTitle"> ${prod.name} </h1>

        <div class="infoContainer">

    

         <img src="${prod.img}" > 


        <div class="info">
            <h2 class="name"> ${prod.subtitle}</h2>

            <h5>Quiero saber más... </h5> 
        </div>
        
        </div>
        </a> 
    </section>
                    `
    }

    document.getElementById("mainContainer").innerHTML = salida;

}







renderHeader(); 
renderBanner();
renderGalery();
renderMain();
renderFooter();






        
