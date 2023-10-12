/* ------- RENDER BANNER ------- */


const renderBanner = () => {


    salida = `
                <div class="bannerContainer">

                    <div class="banner">
                        <h2>Somos...</h2>
                            
                        <h1>SerHe & Co</h1>
                        <h3>BIENESTAR NATURAL</h3>
                            
                        
                    <div class="btnContainer">
                      <button><a href="https://wa.me/5492996240165"><i class="fa-brands fa-whatsapp icon"></i>Contactame</a></button>  

                    </div>
                            
                    </div>

                </div>
      
             `
        document.getElementById("banner").innerHTML = salida;
                                   
}