let formbutton = document.getElementById("btn");
function promiseApi1(name , age)
{
 return new Promise((resolve , reject) => {
    if(age > 18)
    {
        setTimeout(() => {
            resolve(
                alert(`welcome , ${name}, You can vote`)
                // console.log(`You can vote , ${name}`)
            )
        } , 4000)
    }
    else
    {
        alert(`Oh sorry ${name}. You aren't old enough.`)
    }
 })
}
formbutton.addEventListener("click" , (event) => {
    event.preventDefault();
    let nameinput = document.getElementById("name").value;
    let ageinput = document.getElementById("age").value;
    if (nameinput == "" && ageinput == "") {
        alert("It should not be empty")
    }
    else
    {
        promiseApi1(nameinput , ageinput);
    }
})