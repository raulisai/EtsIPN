function GoHome(){

    document.getElementById("pagHome").className= "activa";
    document.getElementById("pagMetInsElim").classNmae= "apagar";
    document.getElementById("pagMetRep").className= "apagar";
    document.getElementById("pagMetBur").className="apagar";
    

}

function GoMetBur(){
document.getElementById("pagHome").className= "apagar";
document.getElementById("pagMetInsElim").className= "apagar";
document.getElementById("pagMetRep").className= "apagar";
document.getElementById("pagMetBur").className="activa";



} 
function GoMetInsElim(){


    document.getElementById("pagHome").className= "apagar";
    document.getElementById("pagMetInsElim").className="activa";
    document.getElementById("pagMetRep").className= "apagar";
    document.getElementById("pagMetBur").className="apagar";
    

}

function GoMetRep(){

    document.getElementById("pagHome").className= "apagar";
    document.getElementById("pagMetInsElim").className= "apagar";
    document.getElementById("pagMetRep").className= "activa";
    document.getElementById("pagMetBur").className="apagar";
    

}

function ResetDate(){


}

function AlmacenarDat(numform){
 var numeros= document.getElementById("numeros"+numform).value;
document.getElementById("MatrizAct"+numform).innerHTML= numeros;
var array1= numeros.split(',');
var array = Object.values(array1);


return array;

}


function MetodoBurbuja(matriz){

    var n= matriz.length;
    for(var i=0;i<n;i++){
        for(var j=0;j<n;j++){
     
             if(matriz[j]>matriz[j+1]){
              var aux=matriz[j];
              matriz[j]=matriz[j+1];
              matriz[j+1]=aux;
     
             }
     
             }
     
    
    }
}

function ClickMetodBur(){
let MatrizInvertida= new Array();
let matriz=AlmacenarDat(1);
MetodoBurbuja(matriz);
let n= matriz.length;

console.log(matriz);
for(var k=n-1;k>=0;k--){
MatrizInvertida.push(matriz[k]);

}

document.getElementById("MatrizOrdenada").innerHTML=matriz;
document.getElementById("MatrizInvertida").innerHTML=MatrizInvertida;
}
        
function IngresarMatriz2(){
    let matriz=AlmacenarDat(2);
    
}
function EliminarNum(){
    let matriz=AlmacenarDat(2);
    let NumAeliminar= document.getElementById("numeroElim").value;
    let n=matriz.length;
    for(let i=0;i<n;i++){

        if(matriz[i]==NumAeliminar){
          matriz.splice(0,i);    
        
            
        }
    
    }
    console.log(matriz.length);
    document.getElementById("MatrizAct2").innerHTML= matriz;
}