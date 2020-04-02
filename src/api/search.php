<?php

include("conexao.php");

$json = file_get_contents('php://input');
$obj = json_decode($json, true);



$funcionarios = [];


if($obj== ''){
    $sql1 = "SELECT * FROM funcionarios";
    $select = pg_query($db, $sql1);
}else{
    $buscar = $obj['buscar'];
    $parLike = '%'.$buscar.'%';

    $sql2 = "SELECT * FROM funcionarios WHERE pnome LIKE '$parLike' OR unome LIKE '$parLike' OR email LIKE '$parLike'";

    $select = pg_query($db, $sql2);
}

for($linha = 0; $resultado = pg_fetch_assoc($select); $linha++){
    $funcionarios[$linha]['id'] = $resultado['id'];
    $funcionarios[$linha]['pnome'] = $resultado['pnome'];
    $funcionarios[$linha]['unome'] = $resultado['unome'];
    $funcionarios[$linha]['email'] = $resultado['email'];
}

echo json_encode($funcionarios);

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");
header("Content-Type: application/json; charset=UTF-8");


?>