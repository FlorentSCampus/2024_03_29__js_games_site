<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= "" ?></title>

    <link rel="stylesheet" href="scss/style.css" />
    <script type="module" src="js/script.mjs"></script>
</head>

<body>
    <?php require_once "header.tpl.php"; ?>
    <main>
        <?php require_once $paths[$uri]; ?>
    </main>
    <?php require_once "footer.tpl.php"; ?>
</body>

</html>