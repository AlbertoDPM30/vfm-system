<?php class Router{

	static public function mdwRouter(){ ?>

        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="public/assets/css/style.css">
            <link rel="stylesheet" href="public/assets/css/output.css">
            <title>Document</title>
        </head>
        <body>
            
        <?php if (isset($_SESSION["iniciarSesion"]) && $_SESSION["iniciarSesion"] == "ok") : ?>

            <div class="container">

            <!-- HEADER -->
            <?php include "app/views/components/header.html"; ?>

            <!-- CONTENIDO -->
            <?php if (isset($_GET["ruta"])) {

                if (

                /* ADMINISTRACION */
                // USUARIOS               
                $_GET["ruta"] == "dashboard"                      ||                
                $_GET["ruta"] == "inicio"
                ) {

                include "app/views/" . $_GET["ruta"] . ".php";
                } else {

                include "app/views/404.php";
                }
            } else {

                include "app/views/inicio.php";
            }

            /*=============================================
            FOOTER
            =============================================*/

            include "app/views/footer.html"; ?>

            </div>

        <?php else : ?>

            <?php include "views/auth/login.html"; ?>

        <?php endif; ?>

        <script type="module" src="public/assets/js/auth.js"></script>

        </body>
        </html>
	<?php }	
}?>
