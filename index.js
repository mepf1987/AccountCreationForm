function validateForm(){
    let name =document.getElementById("name").value;
    let email =document.getElementById("email").value;
    let password =document.getElementById("password").value;
    let confirmPassword =document.getElementById("confirmPassword").value;
    let validEmail=isNotEmpty("email",email);
    let validName=isNotEmpty("name",name);
    let validPassword=isNotEmpty("password",password);
    let passwordIsConfirmed=isNotEmpty("confirmPassword",confirmPassword);
    let everyThingIsCorrect=false;

    
    if(validEmail && validName && validPassword && passwordIsConfirmed){
        validEmail=isValidEmail("email",email);
        validName=isValidName("name",name);
        validPassword=isValidPassword("password",password);
        passwordIsConfirmed=checkPassword("confirmPassword",confirmPassword,password);

        if(validEmail && validName && validPassword && passwordIsConfirmed){
            everyThingIsCorrect=true;
        }

    }
   
    everyThingIsCorrect?alert('Registro exitoso'):alert('Revise sus datos de registro');

    return everyThingIsCorrect;

}

function thereIsAnError (tag,errorTag,message){
    document.getElementById(errorTag).style.display='inline';
    document.getElementById(tag).style.borderWidth='2px';
    document.getElementById(tag).style.borderColor='rgb(224, 85, 85)';
    document.getElementById(errorTag).innerHTML=message;
    document.getElementById(tag).className="error-icon";
}

function thereIsNotAnError (tag,errorTag){
    document.getElementById(errorTag).style.display='none';
    document.getElementById(tag).style.borderWidth='2px';
    document.getElementById(tag).style.borderColor='green';
    document.getElementById(tag).className="success-icon";
}

function isNotEmpty(tag,value){
    errorTag="error-"+tag;
    if(value === ""){
        thereIsAnError (tag,errorTag,"Rellene este campo")  
        return false 
    }else{
        thereIsNotAnError (tag,errorTag)
        return true
    }
    
}

function isValidName(tag,value){
    
    errorTag="error-"+tag;
    if (! (/^[A-Za-z\s]+$/.test(value))){
        thereIsAnError (tag,errorTag,"El nombre deber ser tipo texto")    
        return false 
    }else{
        thereIsNotAnError (tag,errorTag)
        return true
    }

}

function isValidEmail(tag,value){

    errorTag="error-"+tag;
    if (! (/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,20})+$/.test(value))){
        thereIsAnError (tag,errorTag,"La dirección de email " + value + " NO es correcta.")    
        return false 
    }else{
        thereIsNotAnError (tag,errorTag)
        return true
    }
    
}

function isValidPassword(tag,value){

    errorTag="error-"+tag;
    if (value.length > 8){
        thereIsAnError (tag,errorTag,"No debe de tener más de 8 caracteres")    
        return false 
    }else{
        thereIsNotAnError (tag,errorTag)
        return true
    }
    
}

function checkPassword(tag,value,confirmValue){
    errorTag="error-"+tag;
    if (value !== confirmValue){
        thereIsAnError (tag,errorTag,"Las contraseñas no coinciden")    
        return false 
    }else{
        thereIsNotAnError (tag,errorTag)
        return true
    }
    
}