//your JS code here. If required.
let formbutton = document.getElementById("btn")

function promiseApi(name,age){
    return new Promise((resolve,reject)=>{
         if(age > 18){
            setTimeout(()=>{
                resolve(
                    alert(`welcome, ${name}, You can Vote`)
                )
            },4000)
         }else{
            reject(
                 alert(`Oh Sorry, ${name}, You aren't old enough`)
             )
         }
    })
}

formbutton.addEventListener("click",(event)=>{
   event.preventDefault()
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    //validation
    if(name == "" && age == ""){
        alert("please fill all the fields")
    }else{
        promiseApi(name,age)
    }

})