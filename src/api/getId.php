<?php

include('conexao.php');

$funcionario;
$id = $_GET['id'];

$sql = "SELECT * FROM funcionarios WHERE id='$id'";

$select = pg_query($db, $sql);
$funcionario = pg_fetch_assoc($select);

echo json_encode($funcionario);


header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");
header("Content-Type: application/json; charset=UTF-8");



?>