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
                    bienLogin();
                    setTimeout(function(){ window.location.href = "homepage-adm.php"; }, 1500);
                    
                }
                else{
                    bienLogin();
                    setTimeout(function(){ window.location.href = "homepage-per.php"; }, 1500);
                    
                }
            }
            else{
                errorLogin();
            }
        }
    }
    http.send(data);
})

function bienLogin() {
    Swal.fire(
        {
            title: 'Correcto: Iniciaste sesión correctamente!',
            padding: '1rem',
            showConfirmButton: false,
            toast: true,
            icon: 'success',
            grow: 'row',
            position: 'bottom',
            width: '55%',
        }
    );
}

function errorLogin() {
    Swal.fire(
        {
            title: 'Error: No se pudo iniciar sesión, intentalo nuevamente',
            padding: '1rem',
            showConfirmButton: false,
            toast: true,
            icon: 'error',
            grow: 'row',
            position: 'bottom',
            width: '55%',
        }
    );
}