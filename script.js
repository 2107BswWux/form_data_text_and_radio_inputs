console.log('script is linked');

const submit = document.querySelector("#submit");
const refresh = document.querySelector("#formData");

function refreshForm(){
    refresh.reset();
};

function formData(event){
    event.preventDefault();

    const userName = document.querySelector("#userName");
    // console.log(userName.value);
    
   const codeData = document.querySelector('input[name="code"]:checked').value;
    // we are accesing an input
    // then we are specifying what input to access and we do this by declearing the name
    // the we want to grab the value if selected so we do this by specifing checked
    // and then we grabbing the value of the input
    console.log(codeData);
    
    refreshForm();
};

submit.addEventListener("click",formData);