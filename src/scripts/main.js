function handleMenu () {
    document.querySelector("#menu").classList.toggle("show")
    document.querySelector("#openMenu").classList.toggle("hiden")
}

const newDate = new Date();

async function getCarte () {
    const data = await fetch('https://api.brchallenges.com/api/empire-burger/menu')
        .then((response) => { return response.json()})

    let carteItens = ""

    data.map( data => {
        carteItens +=
        `
        <div>
            <div class="burger-title">
                <span>${data.plate}</span>
                <div></div>
                <span>R$${parseFloat(data.price).toFixed(2)}</span>
            </div>
            <p>${data.ingredients}</p>
        </div>
        `
    })

    document.querySelector("#carte-itens").innerHTML = carteItens
}

// DOM Loaded
document.addEventListener('DOMContentLoaded', () => {

    getCarte()

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