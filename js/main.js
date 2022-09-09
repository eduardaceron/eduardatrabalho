console.log(document);

var formulario = document.querySelector('form')
var paragrafo = document.createElement('p')
paragrafo.style.textAlign='center'
paragrafo.style.fontSize='18px'
formulario.append(paragrafo)

formulario.addEventListener('submit', function(event){
    event.preventDefault()

    var dados = new FormData(formulario)
    var nome = dados.get('nome')
    var email = dados.get('email')
    var turma = dados.get('turma')
    var motivo = dados.get('motivo')
    var mensagem = dados.get('mensagem')

    console.log(nome, email, turma, motivo, mensagem);

    var templateParams={
        name:nome,
        email:email,
        motivo:motivo,
        mensagem:mensagem,
        turma:turma,
    };

    emailjs.send('service_3yrb97j', 'template_fhmagwh', templateParams)
    .then(function(response) {
        paragrafo.innerHTML= `${nome}, sua mensagem foi registrada`
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        paragrafo.innerHTML= `${erro}`
       console.log('FAILED...', error);
    });


    // emailjs.send('service_3yrb97j','template_fhmagwh', templateParams)
    // .then(function(response){
    //     console.log('SUCCESS', response.status, response.text);
    // },function (error){
    //     console.log('FAILED', error);
    // });
    
    formulario.reset();
    
})
