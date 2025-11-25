console.log("hii");

const ele = document.getElementById("root")
console.log(ele);


const h1Ele = document.createElement('h2')
h1Ele.innerText = "<span>hii</span>"
h1Ele.innerHTML = `<span style="color:blue">hii</span>`
console.log(h1Ele);
ele.append(h1Ele)


function add(){
    console.log(10+15);
    
}
const btn = document.querySelector('#btn')
console.log(btn);

let value = ""

const inputEle = document.querySelector('input[name="username"]')
console.log(inputEle);

inputEle.addEventListener("change",(e)=>{
   const val = e.target.value
   if(val.length <8){
    // alert('password length to short')
    const warningMSg = document.getElementById('msg')
    warningMSg.innerText = "password length to short"
    warningMSg.setAttribute("style","color:red;font-size:10px")
    console.log(warningMSg);

    
   }

})
console.log(value);

// document.addEventListener("change",add)
// btn.addEventListener("click",add)

"https://chatgpt.com/share/692574a9-f0c8-800c-8452-b4d005bb8a5f"

const ok = ["apple","orange","grapes","banana"]

ok.forEach((val)=>{
    const btn = document.createElement('p')
    btn.innerText = val
    ele.appendChild(btn)
})