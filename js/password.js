function checkPasswordLength(){
    var password = el.value;
    if (password.length < 8){
        elMsg.className = 'warning';
        elMsg.textContent = 'Not an ideal password yet.'
    } else {
        el.Msg.textContent = '';
    }
}

function checkPasswordUppercase(){
    var password = el.value;
    if (password.contains < 8){
        elMsg.className = 'warning';
        elMsg.textContent = 'Not an ideal password yet.'
    } else {
        el.Msg.textContent = '';
    }
}


function tipUsername() {
    elMsg.className = 'tip';
    elMsg.innerHTML = 'Your password should contain at least 8 characters, including: *one lowercase letter; *One uppercase letter; *One digit; *One special character.';    
}