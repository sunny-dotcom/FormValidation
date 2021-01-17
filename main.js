console.log("this is main.js")

let username = document.getElementById('username');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let address = document.getElementById('address')
let validname  = false;
let validemail = false;
let validphone = false;
let validaddress = false;




username.addEventListener('blur',function(){

    let regex = /^[a-zA-Z ]([0-9a-zA-Z ]){3,10}$/
    let str = username.value;
    let message = document.getElementById('message')
    

     if(regex.test(str)){
        console.log("this is matching")
        username.classList.remove('is-invalid')
        username.classList.add('is-valid')
        message.innerHTML = "Looks Good!"
        message.style.color = "green"
        validname = true;
    }
    
    
        

    
    else{
        username.classList.remove('is-valid')
        username.classList.add('is-invalid')
        message.innerHTML = "Username must be 2-10 characters long and contains only letters and numbers"
    }

})
email.addEventListener('blur',function(){

    let regex = /^([_\.\-0-9a-zA-Z]+)@([_\.\-0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let str = email.value;
    let emailmessage = document.getElementById('emailmessage')
    

     if(regex.test(str)){
        console.log("this is matching")
        email.classList.remove('is-invalid')
        email.classList.add('is-valid')
        emailmessage.innerHTML = "Looks Good!"
        emailmessage.style.color = "green"
        validemail = true;
    }
    
    
        

    
    else{
        console.log("not matching")
        email.classList.remove('is-valid')
        email.classList.add('is-invalid')
        emailmessage.innerHTML = "E-mail must be a valid mail"
    }

})
phone.addEventListener('blur',function(){

    let regex = /^([0-9]){10,12}$/
    let str = phone.value;
    let phonemessage = document.getElementById('phonemessage')
    

     if(regex.test(str)){
        console.log("this is matching")
        phone.classList.remove('is-invalid')
        phone.classList.add('is-valid')
        phonemessage.innerHTML = "Looks Good!"
        phonemessage.style.color = "green"
        validphone = true;
    }
    
    
        

    
    else{
        console.log("not matching")
        phone.classList.remove('is-valid')
        phone.classList.add('is-invalid')
        phonemessage.innerHTML = "your phone number should be 10 to12 digit long"
    }

})
address.addEventListener('blur',function(){

    let regex = /^([0-9a-zA-Z/-/._,! ]){10,100}$/
    let str = address.value;
    let addressmessage = document.getElementById('addressmessage')
    

     if(regex.test(str)){
        console.log("this is matching")
        address.classList.remove('is-invalid')
        address.classList.add('is-valid')
        addressmessage.innerHTML = "Looks Good!"
        addressmessage.style.color = "green"
        validaddress = true;
    }
    
    
        

    
    else{
        console.log("not matching")
        address.classList.remove('is-valid')
        address.classList.add('is-invalid')
        addressmessage.innerHTML = "your phone number should be 10 digit long"
    }

})


let btn = document.getElementById('submit');

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let toast = document.getElementById('toast')

    if(validname && validemail && validphone && validaddress){
        toast.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success!</strong> Your Travel Request has been successfully submitted
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
    }
    else{
        toast.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error!</strong> Your Travel Request has not been sent due to some errors
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
    }
})

