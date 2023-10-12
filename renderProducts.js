/* ----------RENDER PAGINA PRODUCTOS----------- */


const cargarProductosLS = () => {

    return JSON.parse(localStorage.getItem("productos")) || [];

} 


const renderProducts = () => {

    const productos = cargarProductosLS();

    let salida = "";
    
    for (prod of productos) {

        salida += ` 
        <section class="listProdContainer" id="${prod.id}">

        <h1 class="listTitle" > ${prod.name} </h1>

        <div class="listInfoContainer">


             <img src="${prod.img}" > 

             <h2 class="name"> ${prod.subtitle}</h2>

        </div>

        <div class="listInfo">
        
            <h3>${prod.info}</h3>

        
        
        </div>

    </section>
                    `
    }

    document.getElementById("productsContainer").innerHTML = salida;

}


renderHeader();
renderBanner();
renderProducts();
renderFooter();





