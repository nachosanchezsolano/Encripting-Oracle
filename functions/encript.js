



    /////encrypting Function///////
function scryptFunction(){

    /////// declared variables ///////
    
                //text variables//
    let textImput=document.getElementById("textImput").value;
    let textEncrypt= Array.from(textImput);
                //img variables//

                if 
                let imgHide = document.getElementById("dontFoundMassageImg").style;



    ///// replace characters///////
    for(let i=0; i<=textEncrypt.length; i++){
                switch (textEncrypt[i]) {
                                    case "a" : textEncrypt[i] = "ai";
                                                    break;
                                    case "e" : textEncrypt[i] = "enter";
                                                    break;
                                    case "i" : textEncrypt[i] = "imes";
                                                    break;
                                    case "o": textEncrypt[i] = "ober";
                                                    break;
                                    case "u": textEncrypt[i] = "ufat";
                                                    break;
                                    default : break;
                                    }
}

textEncrypt = textEncrypt.toString();
let re = /,/gi;
textEncrypt = textEncrypt.replace(re,"");

console.log(textEncrypt);

/////import de text exctypted into de document//////
imgHide.display = "none"

document.getElementById("textoptput").innerHTML = textEncrypt


}




    ///////// decrypting funtion//////
function decryptFunction(){
    return alert(mensaje);



}