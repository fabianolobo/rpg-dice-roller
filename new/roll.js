//Necessita do uso de jQuery

//Importando a classe DiceRoller
import { DiceRoller } from '../new/dice.js';

const diceRoller = new DiceRoller();

window.roll = () => {
    const value = document.getElementById('input').value;
    window.teste = diceRoller.roll(value);
    console.log(JSON.stringify(teste));








    //Tratando os dados Sever Side
    var notation = teste.notation;
    var diceTypes = notation.split("+");
    var myJSON = [];
    window.resCount = diceTypes.length;
    for(var i=0; i<resCount; i++){
        var res = teste.rolls[i].rolls;
        myJSON.push([diceTypes[i], res]);
        //window.alert(myJSON[i][0]);
        //window.alert(myJSON[i][1]);
    };
    var dices = $.post("diceLogger.php", {"res": JSON.stringify(myJSON)});
    dices.done(function( data ) {
        //window.alert( data );
        console.log( data );
    });











/*
    //Tratando os dados Client Side
    window.results = teste.rolls[0].rolls;
    window.count = results.length;
    for(var i=0; i<count; i++){
        var rr = results[i];
        window.alert("For: "+rr);
    }*/
};
