
    /////encrypting Function///////
function scryptFunction(){

            /////// declared variables ///////
            
                        //text variables//
               let textImput=document.getElementById("textImput").value;
                let textEncrypt= Array.from(textImput);

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
            
            /////import the text exctypted into de document//////
 importTheText(textEncrypt);

}

    ///////// decrypting funtion//////
function decryptFunction(){

                    //text variables//

                    let textImput=document.getElementById("textImput").value;
                    let textDecrypt= Array.from(textImput);
    
                    ///// replace characters///////
                    for(let i=0; i<=textDecrypt.length; i++)
                    {
                        if (textDecrypt[i]=="a" && textDecrypt[i+1]=="i")
                        {
                             textDecrypt.splice(i+1,1);
                        }
                        if(textDecrypt[i]=="e" && textDecrypt[i+1]=="n" && textDecrypt[i+2]=="t" && textDecrypt[i+3]=="e" && textDecrypt[i+4]=="r")
                        {
                            textDecrypt.splice(i+1,4);
                        }
                        if(textDecrypt[i]=="i" && textDecrypt[i+1]=="m" && textDecrypt[i+2]=="e" && textDecrypt[i+3]=="s")
                        {
                            textDecrypt.splice(i+1,3);
                        }
                        if(textDecrypt[i]=="o" && textDecrypt[i+1]=="b" && textDecrypt[i+2]=="e" && textDecrypt[i+3]=="r")
                        {
                            textDecrypt.splice(i+1,3);
                        }
                        if(textDecrypt[i]=="u" && textDecrypt[i+1]=="f" && textDecrypt[i+2]=="a" && textDecrypt[i+3]=="t")
                        {
                            textDecrypt.splice(i+1,3);
                        }

                        
                    }                       
    
                textDecrypt = textDecrypt.toString();
                let re = /,/gi;
                textDecrypt = textDecrypt.replace(re,"");

            /////import the text decrypted into the document//////

importTheText(textDecrypt);

}


/////import the text exctypted into the document Funtion//////
function importTheText(text){

    let imgAsk

    if (imgAsk == false ){

        let imgHide = document.getElementById("dontFoundMassageImg").style;

        imgHide.display = "none";

        imgAsk==true;

        }

        document.getElementById("textoutput").innerHTML = text;
}

////Copy de textoutput////

function copyString(){
    var StringToCopyElement = document.getElementById('textoutput').innerText;
    
    navigator.clipboard.writeText(StringToCopyElement);

}