const cards=[
  {
     name: 'perro',
     img : 'img/perro.png',
  },
  {
     name: 'gato',
     img : 'img/gato.png',
  },
  {
      name: 'pajarito',
      img: 'img/pajarito.png',
  },
  {
      name: 'pez',
      img: 'img/pez.png',
  },
  {
      name:'caballo',
      img: 'img/caballo.jpeg',
  },
  {
      name: 'cerdo',
      img: 'img/cerdo.jpeg',
  },
  {
      name:'leon',
      img: 'img/leon.png'
  },
  {
      name:'mono',
      img: 'img/mono.jpg'
  },
  {
      name:'elefante',
      img: 'img/elefante.png'
  },
 ]
 const game= document.getElementById('game')
 const grid = document.createElement('section')
 grid.setAttribute('class', 'grid')

 game.appendChild(grid)
 let gameGrid = cards.concat(cards)
 let count = 0;
 let firstGuess = ''
 let secondGuess = ''
 
 gameGrid.sort(() => 0.5 - Math.random())

 gameGrid.forEach(item => {
   
  //crea la carta
  const card = document.createElement('div')
  card.classList.add('card')
  card.dataset.name = item.name

  //crea el frente de la carta
  const front = document.createElement('div')
  front.classList.add('front')

  //crea la parte de atras
  const back = document.createElement('div')
  back.classList.add('back')
  back.style.backgroundImage = `url(${item.img})`

  // relaciona la carta a la grilla y el frente y la parte de atras a la carta
  grid.appendChild(card)
  card.appendChild(front)
  card.appendChild(back)
   
  })

  const match = () => {
    var selected = document.querySelectorAll('.selected')
    selected.forEach(card => {
      card.classList.add('match')
    })
  }
  grid.addEventListener('click', function(event) {
      let clicked = event.target
      if (clicked.nodeName === 'SECTION') {
        return
      }
    
      if (count<2){
          count++
          if (count === 1) {
            firstGuess = clicked.parentNode.dataset.name
            console.log(firstGuess)
            clicked.parentNode.classList.add('selected')
          } else {
            secondGuess = clicked.parentNode.dataset.name
            console.log(secondGuess)
            clicked.parentNode.classList.add('selected')
          }
         if (firstGuess !='' && secondGuess !=''){
             if(firstGuess==secondGuess){
                 clicked.parentNode.classList.add('selected')
                 match()
                 reset()
             } 
             else{
                reset()
             }
        }
    }
    

    })
    const reset = () => {
        firstGuess = ''
        secondGuess = ''
        count = 0
      
        var selected = document.querySelectorAll('.selected')
        selected.forEach(card => {
          card.classList.remove('selected')
        })
      }




   