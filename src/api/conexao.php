<?php

$con = "host=localhost port=5433 dbname=empresa user=postgres password=1234";

$db = pg_connect($con);

if(!$db){
    pg_result_erro($db);
}


?>