function get_from()
{
    var name=document.getElementById('name').value;
    var password=document.getElementById('password').value;
    console.log("name=",name,"pasword=",password);
}


     setInterval(() => {
     var x = document.getElementById("bg");
    console.log(x.style.backgroundColor);
        if (x.style.backgroundColor == "aqua")
        {
             x.style.backgroundColor="red";
        }
        else
        {
            x.style.backgroundColor="aqua";
        }
        console.log("hello");
}, 1000);
 

   
        