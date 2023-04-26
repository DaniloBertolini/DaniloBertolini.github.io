/* const headerHoverIn = () => {
    const locais = document.querySelector(".header-center").children
    for (const local of locais) {
        local.addEventListener('mouseover', () => {
        })
    }
}

const headerHoverOut = () => {
    const locais = document.querySelector(".header-center").children
    for (const local of locais) {
        local.addEventListener('mouseout', () => {
        })
    }
}

headerHoverIn()
headerHoverOut() */

const secret = () => {
    const local = document.querySelector('.secret');
    local.addEventListener('click', () => {
        document.body.style.backgroundColor = 'red';
    })
}

secret();