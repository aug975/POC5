// este arquivo gera o componente ImgAnimal, que mostra uma imagem de animal (ate 3 diferentes de cada animal)
// para criar um componente mais eficiente, teria sido utilizado um fetch de APIs com imagens randomicas dos animais em questao
// no entanto, este POC nao implica componentes complexos, entao foi feita uma versao simples com imagens pre-escolhidas

"use client"
// funcao que gera o componente, recebendo como parametro o animal, e a versao da imagem
function ImgAnimal({ animal,number=1 }) {
  if(animal.toLowerCase() == 'cachorro') {
    if(number == '1'){
      return (
        <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"/>
      );
    }
    if(number == '2'){
      return (
        <img src="https://static.vecteezy.com/system/resources/thumbnails/005/857/332/small_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg"/>
      );
    }
    if(number == '3'){
      return (
        <img src="https://www.dogstrust.org.uk/images/800x600/assets/2022-08/labrador_puppy_harefield_dogstrust.jpg"/>
      );
    }
  }
  if(animal.toLowerCase() == 'gato') {
    if(number == '1'){
      return (
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimtZyskdR3y0AtCiHyEebU1o7mZQFOA6F0Q&s"/>
      );
    }
    if(number == '2'){
      return (
        <img src="https://static.vecteezy.com/system/resources/thumbnails/024/646/930/small_2x/ai-generated-stray-cat-in-danger-background-animal-background-photo.jpg"/>
      );
    }
    if(number == '3'){
      return (
        <img src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"/>
      );
    }
  }
  if(animal.toLowerCase() == 'raposa') {
    if(number == '1'){
      return (
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Vulpes_vulpes_ssp_fulvus.jpg"/>
      );
    }
    if(number == '2'){
      return (
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYu_-MCKOt3ceIRyArXWWIJAec29k3LhTUyg&s"/>
      );
    }
    if(number == '3'){
      return (
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu0feuPZ-_d9mII1ANy-xgQbu9MRWRuh_f7A&s"/>
      );
    }
  }
  
}

export default ImgAnimal;