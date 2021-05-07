const form = document.querySelector('#login');

form.addEventListener('submit', function(e){
    e.preventDefault();

    let http = new XMLHttpRequest();
    let url = 'controls/action.php';
    let data = new FormData(form);

    http.open('POST', url, true);
    http.onreadystatechange = function(){
        if(http.readyState == 4 && http.status == 200){
            let resp = eval("(" + http.responseText + ")");
            if(resp['response'] == 'bien'){
                if(resp['cargo'] == 'administrador'){
                    window.location.href = "homepage-adm.php";
                }
                else{
                    window.location.href = "homepage-per.php";
                }
            }
            else{
                console.log("mal");
            }
        }
    }
    http.send(data);
})