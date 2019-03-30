function getPilihanKomputer(){
    let comp = Math.random()

    if( comp < 0.34 ) return 'gajah'
    if (comp >= 0.34 && comp < 0.67)return 'orang'
    return 'semut'
}

function getHasil(comp, player){
    if( player == comp ) return 'SERI'
    if( player == 'gajah' ) return (comp == 'orang') ? 'MENANG' : 'KALAH'
    if( player == 'orang' ) return (comp == 'gajah') ? 'KALAH' : 'MENANG'
    if( player == 'semut' ) return (comp == 'gajah') ? 'MENANG' : 'KALAH'
}

function putar(){
    let imgComputer = document.querySelector('.img-computer')
    let gambar = ['gajah', 'semut', 'orang']
    let i = 0;
    let waktuMulai = new Date().getTime()
    setInterval(function(){
        if( new Date().getTime() - waktuMulai > 1000 ){
            clearInterval
            return
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png')
        if(i == gambar.length){
            i = 0;  
        }
    }, 100)
}


let pilihan = document.querySelectorAll('li img')
let player = 1
let computer = 1
let scorePlayer = document.querySelector('.score-player')
let scoreComputer = document.querySelector('.score-computer')
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        let pilihanComputer = getPilihanKomputer();
        let pilihanPlayer = pil.className;
        let hasil = getHasil(pilihanComputer, pilihanPlayer);
        putar()
        
        setTimeout(function(){     
            let imgComputer = document.querySelector('.img-computer')
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')
    
            let info = document.querySelector('.info');
            info.innerHTML = hasil;
            if(hasil == 'MENANG') return scorePlayer.innerHTML = player++
            if(hasil == 'KALAH') return scoreComputer.innerHTML = computer++
        }, 1000)
   })
})







// let pGajah = document.querySelector('.gajah')
// pGajah.addEventListener('click', function(){
//     let pilihanComputer = getPilihanKomputer();
//     let pilihanPlayer = pGajah.className;
//     let hasil = getHasil(pilihanComputer, pilihanPlayer);
    
//     let imgComputer = document.querySelector('.img-computer')
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

//     let info = document.querySelector('.info');
//     info.innerHTML = hasil;

// })

// let pOrang = document.querySelector('.orang')
// pOrang.addEventListener('click', function(){
//     let pilihanComputer = getPilihanKomputer();
//     let pilihanPlayer = pOrang.className;
//     let hasil = getHasil(pilihanComputer, pilihanPlayer);
    
//     let imgComputer = document.querySelector('.img-computer')
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

//     let info = document.querySelector('.info');
//     info.innerHTML = hasil;

// })

// let pSemut = document.querySelector('.semut')
// pSemut.addEventListener('click', function(){
//     let pilihanComputer = getPilihanKomputer();
//     let pilihanPlayer = pSemut.className;
//     let hasil = getHasil(pilihanComputer, pilihanPlayer);
    
//     let imgComputer = document.querySelector('.img-computer')
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

//     let info = document.querySelector('.info');
//     info.innerHTML = hasil;

// })
