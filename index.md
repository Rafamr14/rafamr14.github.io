<!DOCTYPE html>
<html lang="es">
        
<head>
    <title>NAS Web</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style2.css"/>
    <link rel="shortcut icon" href="favicon.ico">
</head>
<header>
    <ul>  
        <li><a href="index.html">Inicio</a></li>
        <li><a href="Pages/Azur.html">Azur Lane</a> </li>
        <li><a href="Pages/Genshin.html">Genshin Impact</a></li>
        <li><a href="Pages/Honkai.html">Honkai Impact</a></li>
        <li><a href="Pages/Fgo.html">Fate/Grand Order</a></li>
        <li><a href="Pages/Magireco.html">Magia Record</a></li>
    </ul>
</header>
<body>
    <div class="flex-container">
        <div class="inline">
            <article id="position">
                <div class="left" width="50px">
                    <form action="upload.php" method="POST" enctype="multipart/form-data">
                        <h2>Subir archivo</h2>
                        <input type="file" name="file">
                        <p class="center"><input type="submit" value="Subir archivo"></p>
                    </form>
                </div>   
            </article> 
        </div>
        <div class="inline">    
            <section class="container">
                <article>
                    <h2>Prueba de header</h2>
                    <img src="img/Akane SSR.png" width="800px" />
                    <p>Prueba de párrafo</p>
                </article>
                <article>        
                    <h2>Prueba de header</h2>
                    <img src="img/DormAkane.png" width="800px" />
                    <p>Prueba de párrafo</p>
                </article>    
                <article>
                    <h2>Prueba de header</h2>
                    <img src="img/Honkai.png" width="800px" />
                    <p>Prueba de párrafo</p>
                </article>   
                <article> 
                    <h2>Prueba de header</h2>
                    <img src="img/Story PV.jpg" width="800px" />
                    <p>Prueba de párrafo</p>
                </article>
            </section>
        </div> 
    </div>   
</body>
<br>
<p class="pie">
    Página sin animo de lucro hecha para uso personal
</p>
</html>