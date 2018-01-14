<?php
// список языков
$sites = array(
    "en" => "http://vikart.fi/en/",
    "fi" => "http://vikart.fi/fi/",
	"ru" => "http://vikart.fi/ru/",
);

// получаем язык
$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);

// проверяем язык
if (!in_array($lang, array_keys($sites))){
    $lang = 'fi';
}
// перенаправление на субдомен
header('Location: ' . $sites[$lang]);

?>
