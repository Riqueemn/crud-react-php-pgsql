<?php

include("conexao.php");

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$pnome = $obj['primeiroNome'];
$unome = $obj['ultimoNome'];
$email = $obj['email'];

if($pnome != '' && $unome != '' && $email != ''){
    pg_query($db, "INSERT INTO funcionarios (pnome, unome, email) VALUES ('$pnome', '$unome', '$email')");
}

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");

?>