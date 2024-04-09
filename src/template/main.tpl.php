<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="cache-control" content="no-cache">
    <title><?= "" ?></title>

    <link rel="stylesheet" href="scss/style.css" />
    <script type="text/javascript" src="js/script.js" defer></script>
    <script type="text/javascript" src="js/data.js" defer></script>
    <script type="text/javascript" src="js/form.js" defer></script>
    <script type="text/javascript" src="js/feed.js" defer></script>
    <script type="text/javascript" src="js/gallery.js" defer></script>
    <script type="text/javascript" src="js/game.js" defer></script>
    <script type="text/javascript" src="js/delete.js" defer></script>
    <script type="text/javascript" src="js/error.js" defer></script>
    <script type="text/javascript" src="js/menu.js" defer></script>
    <script type="text/javascript" src="js/carousel.js" defer></script>
</head>

<body>
    <?php require_once "header.tpl.php"; ?>
    <main>
        <?php require_once $paths[$uri]; ?>
    </main>
    <?php require_once "footer.tpl.php"; ?>
</body>

</html>