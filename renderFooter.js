/* ------ RENDER FOOTER ------ */


const renderFooter = () => {

    
    const salida = `
                        <div class="footerLogo">
                        <h3>SerHe & Co</h3>
                        <h4>BIENESTAR NATURAL</h4>
                        </div>

                        <a href="https://wa.me/5492996240165">

                        <div class="footerContact">
                        <h1> Contactános </h1>
                        <h3>  <i class="fa-brands fa-whatsapp icon"></i> 299 624-0165</h3>
                        <h3>  <i class="fa-regular fa-envelope"></i> Ecoserhe@hotmail.com </h3> 
                        </div>
                        </a>
                        

                        
                        <h1 class="web"> Seguinos en nuestras redes</h1>
                        
                        <div class="footerWebs">
                        <i class="fa-brands fa-square-twitter"></i>
                        <a href="https://www.facebook.com/eco.serhe.y.co?mibextid=ZbWKwL"><i class="fa-brands fa-square-facebook"></i></a>
                        <a href="https://instagram.com/eco.serhe.y.co?igshid=MzRlODBiNWFlZA=="><i class="fa-brands fa-instagram"></i> </a>
                        </div> 

                        <h4 class="registered">Todos los derechos reservados <i class="fa-regular fa-registered"></i></h4>
                               
                                 `

             document.getElementById("footer").innerHTML = salida;
}