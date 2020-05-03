<?php
    $dices = $_POST["res"];
    $a = json_decode($dices);
    $aCount = count($a);
    $z = [];
    for($i=0; $i<$aCount; $i++){
        $type = explode("d", $a[$i][0]);
        if($type[0]>1){
            for($g=0; $g<$type[0]; $g++){
                array_push($z, [$type[1], $a[$i][1][$g]->value]);
            }
        }
        else {
            array_push($z, [$type[1], $a[$i][1][0]->value]);
        }
    }
    echo var_dump($z);
?>
