let candidateNumber;
let branco = false;
let block = false;
let blockall = false;

btnarea.addEventListener('click',(e)=>{
    if(blockall){
        return
    }
    if(block){
        return;
    }
    const number = e.toElement.innerText;
    if(Number(number)){
        addNumber(number);
        checkNumerMissing();
    }
})

function addNumber(number){
    returnAddPosition().innerText = number;
}

function returnAddPosition(){
    if(n1.innerText == ''){
        console.log('ta vazio');
        return n1;
    }else{
        return n2;
    }
}

function checkNumerMissing(){
    if(n2.innerText != ''){
        blockAndSaveNumber();
        compĺeteInfos()
        return;
    }
}

function blockAndSaveNumber(){
    candidateNumber = n1.innerText + n2.innerText;
    block = true;
    console.log(candidateNumber)
}


function compĺeteInfos(){
    const candidate = findCanditate(candidateNumber);
    if(candidate != undefined){
        candidatonome.innerText = candidate.name;
        candidatopartido.innerText = candidate.party;
        candidatoimg.src = candidate.image;
    }else{
        candidatonome.innerText = "Candidato Inexistente";
    }
}


btncorrige.addEventListener('click', e=>{
    if(blockall){
        return
    }
    if(branco){
        nomelabel.innerText = 'Nome:';
        partidolabel.innerText = 'Partido:';
        numeros.style.display = 'flex'
        brancolabel.style.display = 'none';
        branco = false;

    }else{
        n1.innerText = '';
        n2.innerText = '';
        candidatonome.innerText = '';
        candidatopartido.innerText = '';
        candidatoimg.src = imgDefault;
        block = false;
    }
})

btnbranco.addEventListener('click', e=>{
    if(blockall){
        return
    }
    nomelabel.innerText = '';
    partidolabel.innerText = '';
    numeros.style.display = 'none';
    n1.innerText = '';
    n2.innerText = '';
    candidatopartido.innerText = '';
    candidatonome.innerText = '';
    candidatoimg.src = imgDefault;
    brancolabel.style.display = 'block';
    branco = true;
})


btnconfirma.addEventListener('click', ()=>{
    if(blockall){
        return
    }
    if(n1.innerText === ''){
        alert('Digite Um Numero de  Um Candidato')
        return;
    }
    left.style.display = 'none';
    right.style.display = 'none';
    fim.style.display = 'block';
    blockall = true;
})