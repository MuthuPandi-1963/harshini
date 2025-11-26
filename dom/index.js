// console.log("hii");

// const ele = document.getElementById("root")
// console.log(ele);


// const h1Ele = document.createElement('h2')
// h1Ele.innerText = "<span>hii</span>"
// h1Ele.innerHTML = `<span style="color:blue">hii</span>`
// console.log(h1Ele);
// ele.append(h1Ele)


// function add(){
//     console.log(10+15);
    
// }
// const btn = document.querySelector('#btn')
// console.log(btn);

// let value = ""

// const inputEle = document.querySelector('input[name="username"]')
// console.log(inputEle);

// inputEle.addEventListener("change",(e)=>{
//    const val = e.target.value
//    if(val.length <8){
//     // alert('password length to short')
//     const warningMSg = document.getElementById('msg')
//     warningMSg.innerText = "password length to short"
//     warningMSg.setAttribute("style","color:red;font-size:10px")
//     console.log(warningMSg);

    
//    }

// })
// console.log(value);

// document.addEventListener("change",add)
// btn.addEventListener("click",add)

"https://chatgpt.com/share/692574a9-f0c8-800c-8452-b4d005bb8a5f"

// const ok = ["apple","orange","grapes","banana"]

// ok.forEach((val)=>{
//     const btn = document.createElement('p')
//     btn.innerText = val
//     ele.appendChild(btn)
// })

const formData =  {
    username : "",
    email : "",
    password : ""
}
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")

console.log(username,email,password);

const submitBtn = document.getElementById("btn")
console.log(submitBtn);


submitBtn.addEventListener("click",()=>{
    // console.log("ok",username.value);
    formData["username"] = username.value
    formData["email"] = email.value
    formData["password"] = password.value
    
    console.log(formData);
    
})

const formEle = document.getElementById("form-event")

formEle.addEventListener("submit",handleSubmit)
function handleSubmit(event){
    event.preventDefault()
    console.log(event);
    const data = new FormData(formEle)
    
    for(let [key,val] of data.entries()){
        console.log(val);
        formData[key] = val
    }
    console.log(formData);
    if(formData.email.length  < 8){
        const email = document.getElementsByClassName("error").item(1)
        email.innerHTML = "Email is too short"
    }
    
    
    
}