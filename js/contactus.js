function Err(Id , isi) {
    document.getElementById(Id).innerText = isi;
}

function isValidEmail(email) {
    email = email.toLowerCase()
    let flag = false;
    if(email.endsWith(".com")) flag = true;
    else if(email.endsWith(".ac.id")) flag= true;
    
    if(flag == true){
        for(let i=0; i<email.length;i++){
            if(email[i]=='@'){
                return flag;
            }
        }
        flag = false;
    }
    return flag;
}

function isValidPhone(phone) {
    
    if(phone.substring(4,5) =='-' && phone.substring(9,10)== '-'){
        phone = phone.replace('-','').replace('-','');
    }
    let isNumb = true;
    for(let i=0; i<phone.length;i++){
        if (phone[0] != '0'){
            isNumb = false;
            break;
        }
        if(phone[i] < '0'|| phone[i] > '9') {
            isNumb = false;
            break;
        }
    }
    if(!isNumb) return false;
    else return true;
}

function isValidServices(service){
    let flag = false
    for(let i = 0;i<service.length ;i++){
        if (service[i].checked) {
            flag = true;
            break;
        }
    }
    return flag;
}

function Validate() {
    let username = document.getElementById("name").value;    
    let email = document.getElementById("email").value;    
    let userphone = document.getElementById("phone").value;    
    let service = document.getElementsByName("services");    
    let message = document.getElementById("message").value;
    let agree = document.getElementById("tnc").checked;

    Err("errname","");
    Err("erremail","");
    Err("errphone","");
    Err("errservice","");
    Err("errmessage","");

    if(username == "") Err("errname","Your Name must be filled!" );
    else if(username.length < 4) Err("errname","Your name must be at least 4 character" );
    else if(email == "") Err("erremail", "Email must be filled!");
    else if(!isValidEmail(email)) Err("erremail", "Invalid Email address");
    else if(userphone =="") Err("errphone","Your Phone must be filled!" );
    else if(!isValidPhone(userphone)) Err("errphone", "Invalid phone number");
    else if(userphone.length != 12) Err("errphone",  "Phone number MUST be 12 digits!");
    else if(!isValidServices(service)) Err("errservice", "Please select service!");
    
    else if(message == "") Err("errmessage","Message must be filled!");
    else if(message.length <50) Err("errmessage","Message MUST be at least 50 character" );

    else if(!agree) alert("Please Agree To Term and Condition");
    else {
        if(confirm("Are you sure with the form?")){
            alert("Submit Success!")
        }
    }
}