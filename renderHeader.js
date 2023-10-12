/* --------- RENDER HEADER ------------ */





const renderHeader = () => {
    

    salida = `
                <a href="./index.html"> <h1 id="logo">SerHe & Co.</h1> </a> 

                <nav>

                    <a href="./index.html">Inicio</a>
                    <a href="./productos.html">Productos</a>
                    <a href="#">Info</a>
                    <a href="#footer">Contacto</a>

                </nav>
             `

        document.getElementById("header").innerHTML = salida;
                        
}