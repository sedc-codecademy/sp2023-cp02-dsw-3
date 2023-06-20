console.log('conected')
const cartButton = document.querySelectorAll('.cartButton') 
const product = document.getElementsByClassName('product')[0]

cartButton.forEach(button => {
    button.addEventListener('click', (e) => {
        const elementSelected = []
        elementSelected.push(e.target.parentElement.innerText)
        console.log(elementSelected)
    })
    
});

product.addEventListener('click', (e) => {
    
    const srcOfPicture = e.srcElement

    console.log(srcOfPicture)

})


