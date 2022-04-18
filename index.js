console.log("gbd");

document.getElementById('submit').onclick = function (event) {
    const FullName = document.getElementById('FullName');
    const age = document.getElementById('age');
    console.log("age element", age);

    console.log("Fullname.value", FullName.value);
    console.log("you are in function");
    if(FullName.value.length > 0 )
    {
        let count = 0 ;
        for(i in FullName.value)
        {
            if(FullName.value[i] === ' ')
            {
                count += 1 ;
            }
            else
            {
                console.log("you are ok");
            }
        }
        if(count >= 1)
        {
            console.log("name its ok ");
        }
        else
        {
            console.log("name not ok");
        }
    }

    console.log("the age is " + age.value);
    if (21 <= age.value || age.value <= 28)
    {
        console.log(" tha age its ok ");
    }
    else
    {
        console.log("the age is not ok");
    }


    const valid_data = true;
    if(valid_data) {
        console.log("you pass");
        return true;
    }
    else {
        console.log("you fail");
        return false;
    }


}





