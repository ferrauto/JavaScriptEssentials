const   usrName = document.getElementById("name"),
        age = document.getElementById("age"),
        email = document.getElementById("email"),
        job = document.getElementById("job"),
        designation = document.getElementById("designation"),
        product = document.getElementById("prodtype"),
        feedback = document.getElementById("feedText"),
        submitBtn = document.getElementById("subBtn"),
        userName = document.getElementById("userName"),
        userAge = document.getElementById("userAge"),
        userMail = document.getElementById("userMail"),
        userJob = document.getElementById("userJob"),
        userDesignation = document.getElementById("userDesignation"),
        userProduct = document.getElementById("userProduct"),
        userFeedBack = document.getElementById("userFeedback"),
        userInfo = document.getElementById("userInfo");

function sendFeddback()
{
    if (usrName.value == "") {
        usrName.focus();
        return;
    } else if(age.value == ""){
        age.focus();
        return;
    } else if(email.value == ""){
        email.focus();
        return;
    } else if(job.value == ""){
        job.focus();
        return;
    } else if(designation.value == ""){
        designation.focus();
        return;
    } else if(product.value == ""){
        product.focus();
        return;
    } else if(feedback.value == ""){
        feedback.focus();
        return;
    }
    alert("Thank you for your valuable feedback!");
    addFeedback();
}
function addFeedback()
{
    // Adds the feedback to the screen
    userName.innerHTML = usrName.value;
    userAge.innerHTML = age.value;
    userMail.innerHTML = email.value;
    userJob.innerHTML = job.value;
    userDesignation.innerHTML = designation.value;
    userProduct.innerHTML = product.value;
    userFeedBack.innerHTML = feedback.value;

    // Displays feedback
    userInfo.style.display = "block";
}
submitBtn.onclick = sendFeddback;

document.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        sendFeddback();
    }
});