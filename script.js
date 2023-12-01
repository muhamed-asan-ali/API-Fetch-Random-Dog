
const dogImagesDiv = document.getElementById('dogImg')



const changeIt = () =>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(json => {
    console.log(json.message)
    dogImagesDiv.innerHTML = `<img src='${json.message}' height= 300 width =300/>`
})
}