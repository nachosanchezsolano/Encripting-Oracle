function scryptFunction(){
    let textImput=document.getElementById("textImput").value;
    let textEncrypt= Array.from(textImput);

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
                                        console.log(textEncrypt)
}

function decryptFunction(){
    return alert(mensaje);



}