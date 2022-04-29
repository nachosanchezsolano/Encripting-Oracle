
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
                    let  textDecrypt=document.getElementById("textImput").value;

                    ///// replace characters///////

         textDecrypt =  textDecrypt.replace(/ai/g,"a");
         textDecrypt =  textDecrypt.replace(/enter/g,"e");
         textDecrypt =  textDecrypt.replace(/imes/g,"i");
         textDecrypt =  textDecrypt.replace(/ober/g,"o");
         textDecrypt =  textDecrypt.replace(/ufat/g,"u");

        console.log(textDecrypt);

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