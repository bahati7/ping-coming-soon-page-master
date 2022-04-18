var form=document.getElementById('idForm');
form.addEventListener('submit',email_validation);

function email_validation(e){
    e.preventDefault();

    var mailformat = /^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,3})+$/;
    var email_name = document.getElementById('email');
    var email_value = document.getElementById('email').value;
    var email_length = email_value.length;

    if(!email_value.match(mailformat) || email_length === 0){
    document.getElementById('email_err').innerHTML = 'Please provide a valid email adress.';
    email_name.focus();
    document.getElementById('email_err').style.color = "hsl(354, 100%, 66%)";
    email_name.style.border="1px solid hsl(354, 100%, 66%)" ;
    
}else{
    document.getElementById('email_err').innerHTML = 'Valid email format';
    document.getElementById('email_err').style.color = "#00AF33";
    email_name.style.border="1px solid gray" ;
}


    
}