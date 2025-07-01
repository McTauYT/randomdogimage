let btn=document.querySelector('button')
btn.addEventListener('click',()=>{
        getdog()
    }
)
function getdog()
{
    let result=fetch('https://dog.ceo/api/breeds/image/random')
    console.log('result is',result)
    result.then((responce)=>responce.json()).then((responce)=>{
        console.log(responce.url)
        let img=document.querySelector('img')
        img.src=responce.message
    }
)
}
