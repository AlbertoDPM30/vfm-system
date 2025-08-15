<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title ?? 'VFM System'; ?></title>

    <!-- CSS personalizado -->
    <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body class="bg-gray-100">
    <!-- Header (puedes incluirlo como partial si lo deseas) -->
    <header class="bg-blue-600 text-white p-4 shadow-lg">
        <nav class="container mx-auto flex justify-between items-center">
            <a href="/" class="text-2xl font-bold">Mi App MVC</a>
            <!-- Aquí podrías tener el menú, etc. -->
        </nav>
    </header>

    <main class="container mx-auto mt-8 p-4">
        <!-- El contenido de la página se cargará aquí vía JS -->
        <div id="app-content">
            <?php echo $content ?? ''; ?>
        </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white text-center p-4 mt-8">
        <p>&copy; <?php echo date('Y'); ?> ADPM. Todos los derechos reservados.</p>
    </footer>

    <!-- Scripts de JavaScript, incluyendo tu archivo principal -->
    <script type="module" src="/assets/js/main.js"></script>
    <script type="module" src="/assets/js/auth.js"></script>
</body>
</html>
