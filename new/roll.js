//Necessita do uso de jQuery

//Importando a classe DiceRoller
import { DiceRoller } from '../new/dice.js';

const diceRoller = new DiceRoller();

window.roll = () => {
    var d4 = document.getElementById('diceCode4').value;
    var d6 = document.getElementById('diceCode6').value;
    var d8 = document.getElementById('diceCode8').value;
    var d10 = document.getElementById('diceCode10').value;
    var d12 = document.getElementById('diceCode12').value;
    var d20 = document.getElementById('diceCode20').value;
    var d100 = document.getElementById('diceCode100').value;
    var value = "";

    //D4
    if(d4 > 0){
        if(value !== ""){
            value += "+"+d4+"d4";
        }
        else {
            value += d4+"d4";
        }
    }

    //D6
    if(d6 > 0){
        if(value !== ""){
            value += "+"+d6+"d6";
        }
        else {
            value += d6+"d6";
        }
    }

    //D8
    if(d8 > 0){
        if(value !== ""){
            value += "+"+d8+"d8";
        }
        else {
            value += d8+"d8";
        }
    }

    //D10
    if(d10 > 0){
        if(value !== ""){
            value += "+"+d10+"d10";
        }
        else {
            value += d10+"d10";
        }
    }

    //D12
    if(d12 > 0){
        if(value !== ""){
            value += "+"+d12+"d12";
        }
        else {
            value += d12+"d12";
        }
    }

    //D20
    if(d20 > 0){
        if(value !== ""){
            value += "+"+d20+"d20";
        }
        else {
            value += d20+"d20";
        }
    }

    //D100
    if(d100 > 0){
        if(value !== ""){
            value += "+"+d100+"d100";
        }
        else {
            value += d100+"d100";
        }
    }


    window.alert(value);

    if(value !== ""){
        window.teste = diceRoller.roll(value);
        //console.log(JSON.stringify(teste));
        //Tratando os dados Sever Side
        var notation = teste.notation;
        var diceTypes = notation.split("+");
        var myJSON = [];
        window.resCount = diceTypes.length;
        for(var i=0; i<resCount; i++){
            var res = teste.rolls[i].rolls;
            myJSON.push([diceTypes[i], res]);
        };
        var dices = $.post("diceLogger.php", {"res": JSON.stringify(myJSON)});
        dices.done(function( data ) {
            //Recebe o retorno do php por echo
            console.log( data );
        });
    }

/*
    //Acho que NAO ha necessidade
    //Tratando os dados Client Side
    window.results = teste.rolls[0].rolls;
    window.count = results.length;
    for(var i=0; i<count; i++){
        var rr = results[i];
        window.alert("For: "+rr);
    }*/
};

window.add = ( dice ) => {
    var inputArea = document.getElementById('diceCode'+dice);
    var x = parseInt(inputArea.value);
    x += 1;
    inputArea.value = x;
}

window.sub = ( dice ) => {
    var inputArea = document.getElementById('diceCode'+dice);
    var x = parseInt(inputArea.value);
    if(x > 0){
        x -= 1;
        inputArea.value = x;
    }
}
