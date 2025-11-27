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

// const formData =  {
//     username : "",
//     email : "",
//     password : ""
// }
// const username = document.getElementById("username")
// const email = document.getElementById("email")
// const password = document.getElementById("password")

// console.log(username,email,password);

// const submitBtn = document.getElementById("btn")
// console.log(submitBtn);


// submitBtn.addEventListener("click",()=>{
//     // console.log("ok",username.value);
//     formData["username"] = username.value
//     formData["email"] = email.value
//     formData["password"] = password.value
    
//     console.log(formData);
    
// })

// const formEle = document.getElementById("form-event")

// formEle.addEventListener("submit",handleSubmit)
// function handleSubmit(event){
//     event.preventDefault()
//     console.log(event);
//     const data = new FormData(formEle)
    
//     for(let [key,val] of data.entries()){
//         console.log(val);
//         formData[key] = val
//     }
//     console.log(formData);
//     if(formData.email.length  < 8){
//         const email = document.getElementsByClassName("error").item(1)
//         email.innerHTML = "Email is too short"
//     }
// }

const fruits = [ "apple","orange","banana","grapes"]
const TodoEle = document.getElementById("todo")
console.log(TodoEle);
fruits.forEach((val,id)=>{
    // const P = document.createElement("p")
    // P.innerText = val;
    // TodoEle.append(P)

    const p = `<div id="fruits-${id}" class="fruits">
    <p>${val}</p>
    <button onclick="handleDelete(${id})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
</svg></button>
    </div>`
    TodoEle.innerHTML+=p
})
function handleDelete(id){
    const findEle = document.getElementById( `fruits-${id}`)
    console.log(findEle);
    TodoEle.removeChild(findEle)
}
const fruit = document.getElementById("fruit")

function handleAdd(){
    const length = TodoEle.childElementCount + 1
    console.log(length);
    if(fruit.value.length > 3){

        
        const p = `<div id="fruits-${length}" class="fruits">
        <p>${fruit.value}</p>
        <button onclick="handleDelete(${length})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
        </svg></button>
        </div>`
        TodoEle.innerHTML+=p
        }
        else{
            alert("enter something")
        }
}

// const fruits = ["apple", "orange", "banana", "grapes"];
// const TodoEle = document.getElementById("todo");

// fruits.forEach((val, id) => {
//     const div = document.createElement("div");
//     div.id = `fruits-${id}`;
//     div.className = "fruits";

//     div.innerHTML = `
//         <p>${val}</p>
//         <button class="delete-btn">Delete</button>
//     `;

//     TodoEle.appendChild(div);

//     // Add event listener
//     div.querySelector(".delete-btn").addEventListener("click", () => {
//         TodoEle.removeChild(div);
//     });
// });

// TodoEle.addEventListener("click", (e) => {
//     if (e.target.classList.contains("delete-btn")) {
//         const parent = e.target.closest(".fruits");
//         parent.remove();
//     }
// });
