function handleMenu () {
    document.querySelector("#menu").classList.toggle("show")
    document.querySelector("#openMenu").classList.toggle("hiden")
}

const newDate = new Date();

// DOM Loaded
document.addEventListener('DOMContentLoaded', () => {

    // Handle open time
    if (
        ( 
            ( newDate.getDay() >= 1 && newDate.getDay() <= 5 )
            && ( newDate.getHours() >= 17 && newDate.getHours() <= 23 )
        )
        ||
        (
            ( newDate.getDay() === 0 || newDate.getDay() === 6 )
            && ( ( newDate.getHours() >= 18 && newDate.getMinutes() >= 30 ) && newDate.getHours() <= 23 )
        )

    ) {
        document.querySelector('#Card').classList.add('open')
    }

})