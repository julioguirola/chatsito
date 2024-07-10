<?php
// Obtener el cuerpo (body) del request
$body = json_decode(file_get_contents('php://input'), true);

// Obtener el valor de la variable del cuerpo
$variable = $body['variable'];

// Escribir el valor de la variable en el archivo log.txt
$file = fopen('log.txt', 'a');

// Escribir el valor de la variable en el archivo
fwrite($file, $variable . PHP_EOL);

// Cerrar el archivo
fclose($file);