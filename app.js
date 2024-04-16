const p_rojo= document.getElementById("texto-rojo")
const i_rojo= document.getElementById("rojo")
p_rojo.innerText = i_rojo.value

i_rojo.addEventListener("change",(e)=>{
    p_rojo.innerText = e.target.value
    //p_rojo.innerText = i_rojo.value
    document.body.style.backgroundColor= `rgb(${i_rojo.value},${i_verde.value},${i_azul.value})`
})

const p_verde= document.getElementById("texto-verde")
const i_verde= document.getElementById("verde")

p_verde.innerText = i_verde.value


i_verde.addEventListener("change",(e)=>{
    p_verde.innerText = e.target.value
    //p_verde.innerText = i_verde.value
    document.body.style.backgroundColor= `rgb(${i_rojo.value},${i_verde.value},${i_azul.value})`
})


const p_azul= document.getElementById("texto-azul")
const i_azul= document.getElementById("azul")

p_azul.innerText = i_azul.value


i_azul.addEventListener("change",(e)=>{
    p_azul.innerText = e.target.value
    //p_azul.innerText = i_azul.value
    document.body.style.backgroundColor= `rgb(${i_rojo.value},${i_verde.value},${i_azul.value})`
})
