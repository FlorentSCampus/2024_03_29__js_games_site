<?php
require_once "../route/web.php";

$uri = filter_input(INPUT_GET, 'page', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

require_once "../src/template/main.tpl.php";
