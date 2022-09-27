<?php

$suggestions = array("anna","spio","fred","mike","james");

foreach ($suggestions as $suggest) {
	if ($_GET['q'] == $suggest) {
     echo $suggest;
	}
}



?>