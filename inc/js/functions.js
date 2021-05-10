window.onload = function () {
    ListarPersonal();
    ListarPaciente();
    ListarPacienteDisponible();
    ListarPersonalDisponible();
    ListarPacientesAsignados();
    ListarCita();
}

$("#btn-add-adm").on('click', function (e) {
    e.preventDefault;
    AñadirTrabajador();
});

$("#btn-upd-adm-patient").on('click', function (e) {
    e.preventDefault;
    AñadirPaciente();
});

$("#btn-add-cts").on('click', function (e) {
    e.preventDefault;
    AñadirCita();
});

function AñadirTrabajador() {
    let Nombre = document.querySelector('#Nombre').value;
    let Apellido = document.querySelector('#Apellido').value;
    let Username = document.querySelector('#Username').value;
    let Password = document.querySelector('#Password').value;
    let Tipo_Usuario = document.querySelector('#Cargo option:checked').value;
    let Estado = document.querySelector('#Estado option:checked').value;
    let Trabajando = document.querySelector('#Trabajando option:checked').value;
    let Foto = document.querySelector('#Foto').value;

    $.ajax({
        method: "POST",
        url: "controls/control.php",
        data: {
            opcion: 'AñadirTrabajador',
            Nombre: Nombre,
            Apellido: Apellido,
            Username: Username,
            Password: Password,
            Tipo_Usuario: Tipo_Usuario,
            Estado: Estado,
            Trabajando: Trabajando,
            Foto: Foto,
        },
        success: resp => { resp === "true" ? AñadirUsuarioCorrecto() : AñadirUsuarioIncorrecto() }
    })
}

function AñadirPaciente() {
    let Nombre = document.querySelector('#Nombre').value;
    let Apellido = document.querySelector('#Apellido').value;
    let FechaNacimiento = document.querySelector('#FechaNacimiento').value;
    let Edad = document.querySelector('#Edad').value;
    let CiudadNacimiento = document.querySelector('#CiudadNacimiento').value;
    let Direccion = document.querySelector('#Direccion').value;
    let Barrio = document.querySelector('#Barrio').value;
    let Telefono = document.querySelector('#Telefono').value;
    let Estado = document.querySelector('#Estado option:checked').value;
    let Foto = document.querySelector('#Foto').value;

    $.ajax({
        method: "POST",
        url: "controls/control.php",
        data: {
            opcion: 'AñadirPaciente',
            Nombre: Nombre,
            Apellido: Apellido,
            FechaNacimiento: FechaNacimiento,
            Edad: Edad,
            CiudadNacimiento: CiudadNacimiento,
            Direccion: Direccion,
            Barrio: Barrio,
            Telefono: Telefono,
            Estado: Estado,
            Foto: Foto,
        },
        success: resp => { resp === "true" ? AñadirUsuarioCorrecto() : AñadirUsuarioIncorrecto() }
    })
}

function AñadirCita() {
    let cod_paciente = document.querySelector('#cod_paciente').value;
    let fecha_cita = document.querySelector('#fechaCita').value;
    let username = document.querySelector('#username').value;


    $.ajax({
        method: "POST",
        url: "controls/control.php",
        data: {
            opcion: 'AñadirCita',
            cod_paciente: cod_paciente,
            fecha_cita: fecha_cita,
            username: username,
        },
        success: resp => { resp === "true" ? AñadirCitaCorrecta() : AñadirCitaInorrecta() }
    })
}

let idioma =

{
    "sProcessing": "Procesando...",
    "sLengthMenu": "Mostrar _MENU_ registros",
    "sZeroRecords": "No se encontraron resultados",
    "sEmptyTable": "NingÃºn dato disponible en esta tabla",
    "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
    "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
    "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
    "sInfoPostFix": "",
    "sSearch": "Buscar:",
    "sUrl": "",
    "sInfoThousands": ",",
    "sLoadingRecords": "Cargando...",
    "oPaginate": {
        "sFirst": "Primero",
        "sLast": "Ultimo",
        "sNext": "Siguiente",
        "sPrevious": "Anterior"
    },
    "oAria": {
        "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
    },
    "buttons": {
        "copyTitle": 'Informacion copiada',
        "copyKeys": 'Use your keyboard or menu to select the copy command',
        "copySuccess": {
            "_": '%d filas copiadas al portapapeles',
            "1": '1 fila copiada al portapapeles'
        },

        "pageLength": {
            "_": "Mostrar %d filas",
            "-1": "Mostrar Todo"
        }
    }
};

function ListarPersonal() {

    $("#ListaPersonal").DataTable({
        "paging": true,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": true,
        "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "Mostrar Todo"]],
        "language": idioma,
        "ajax": {
            "method": "POST",
            "data": { "opcion": "ListarPersonal" },
            "url": "controls/control.php",
            "dataSrc": "",
        },
        "columns": [
            {
                "data": "foto",
                "render": function (data) { return '<img src="' + data + '" height="50px" width="50px">'; }
            },
            { "data": "username" },
            { "data": "nombre" },
            { "data": "apellido" },
            { "data": "tipo_usuario" },
            { "data": "estado" },
            { "data": "trabajando" },
            {
                "data": "codigo",
                "render": function (data) {
                    return '<button onclick="editarPersonal(' + data + ')" id="btEditar" type="button" class="btn btn-edit btn-success btn-sm">Editar</button>'
                        + '<button onclick="eliminarPersonal(' + data + ')"  id="btEliminar" type="button" class="btn btn-danger btn-sm">Eliminar</button>'
                }
            }
        ]
    })

}

function ListarPersonalDisponible() {

    $("#ListarPersonalDisponible").DataTable({
        "paging": true,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": true,
        "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "Mostrar Todo"]],
        "language": idioma,
        "ajax": {
            "method": "POST",
            "data": { "opcion": "ListarPersonalDisponible" },
            "url": "controls/control.php",
            "dataSrc": "",
        },
        "columns": [
            {
                "data": "foto",
                "render": function (data) { return '<img src="' + data + '" height="50px" width="50px">'; }
            },
            { "data": "username" },
            { "data": "nombre" },
            { "data": "apellido" },
            { "data": "tipo_usuario" },
            { "data": "estado" },
            { "data": "trabajando" },
            {
                "data": "codigo",
                "render": function (data) {
                    return '<button onclick="editarPaciente(' + data + ')" id="btEditar" type="button" class="btn btn-edit btn-success btn-sm">Editar</button>'
                        + '<button onclick="eliminarPaciente(' + data + ')"  id="btEliminar" type="button" class="btn btn-danger btn-sm">Eliminar</button>'
                }
            }
        ]
    })

}

function ListarPacienteDisponible() {

    $("#ListarPacienteDisponible").DataTable({
        "paging": true,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": true,
        "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "Mostrar Todo"]],
        "language": idioma,
        "ajax": {
            "method": "POST",
            "data": { "opcion": "ListarPacienteDisponible" },
            "url": "controls/control.php",
            "dataSrc": "",
        },
        "columns": [
            {
                "data": "foto",
                "render": function (data) { return '<img src="' + data + '" height="50px" width="50px">'; }
            },
            { "data": "cod_paciente" },
            { "data": "nombre" },
            { "data": "apellido" },
            { "data": "fecha_nacimiento" },
            { "data": "edad" },
            { "data": "direccion" },
            { "data": "barrio" },
            { "data": "telefono" },
            { "data": "ciudad" },
            { "data": "estado" },
            {
                "data": "cod_paciente",
                "render": function (data) {
                    return '<button onclick="editarPaciente(' + data + ')" id="btEditar" type="button" class="btn btn-edit btn-success btn-sm">Editar</button>'
                        + '<button onclick="eliminarPaciente(' + data + ')"  id="btEliminar" type="button" class="btn btn-danger btn-sm">Eliminar</button>'
                }
            }
        ]
    })

}

function ListarPacientesAsignados() {

    let usern = document.querySelector('.un_doctor');
    let username = usern.id.valueOf();

    $("#ListarPacientesAsignados").DataTable({
        "paging": true,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": true,
        "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "Mostrar Todo"]],
        "language": idioma,
        "ajax": {
            "method": "POST",
            "data": { "opcion": "ListarPacientesAsignados", "username": username },
            "url": "controls/control.php",
            "dataSrc": "",
        },
        "columns": [
            {
                "data": "foto",
                "render": function (data) { return '<img src="' + data + '" height="50px" width="50px">'; }
            },
            { "data": "cod_paciente" },
            { "data": "nombre" },
            { "data": "apellido" },
            { "data": "fecha_nacimiento" },
            { "data": "edad" },
            { "data": "direccion" },
            { "data": "barrio" },
            { "data": "telefono" },
            { "data": "ciudad" },
            { "data": "estado" },

        ]
    })

}

function ListarCita() {
    let usern = document.querySelector('.un_doctor');
    let username = usern.id.valueOf();

    $("#ListarCitas").DataTable({
        "paging": true,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": true,
        "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "Mostrar Todo"]],
        "language": idioma,
        "ajax": {
            "method": "POST",
            "data": { "opcion": "ListarCita", "username": username },
            "url": "controls/control.php",
            "dataSrc": "",
        },
        "columns": [
            { "data": "estado_cita", },
            { "data": "cod_paciente" },
            { "data": "fecha_cita" },
            { "data": "observacion" },
            {
                "data": "cod_paciente",
                "render": function (data) { return '<button onclick="editarCita(' + data + ')" id="btEditar" type="button" class="btn btn-edit btn-success btn-sm">Editar</button>'; }
            }
        ]
    })

}

function ListarPaciente() {

    $("#ListaPaciente").DataTable({
        "paging": true,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": true,
        "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "Mostrar Todo"]],
        "language": idioma,
        "ajax": {
            "method": "POST",
            "data": { "opcion": "ListarPaciente" },
            "url": "controls/control.php",
            "dataSrc": "",
        },
        "columns": [
            {
                "data": "foto",
                "render": function (data) { return '<img src="' + data + '" height="50px" width="50px">'; }
            },
            { "data": "nombre" },
            { "data": "apellido" },
            { "data": "fecha_nacimiento" },
            { "data": "edad" },
            { "data": "direccion" },
            { "data": "barrio" },
            { "data": "telefono" },
            { "data": "ciudad" },
            { "data": "estado" },
            {
                "data": "cod_paciente",
                "render": function (data) {
                    return '<button onclick="editarPaciente(' + data + ')" id="btEditar" type="button" class="btn btn-edit btn-success btn-sm">Editar</button>'
                        + '<button onclick="eliminarPaciente(' + data + ')"  id="btEliminar" type="button" class="btn btn-danger btn-sm">Eliminar</button>'
                }
            }
        ]
    })

}

function eliminarPersonal(codigo) {
    $.ajax({
        type: "POST",
        url: "controls/control.php",
        data: {
            opcion: "EliminarPersonal",
            codigo: codigo,
        },
        success: resp => {
            resp === "true" ? (EliminarUsuarioCorrecto(),
                $("#ListaPersonal").DataTable().ajax.reload()) : EliminarUsuarioIncorrecto()
        }

    })
}

function eliminarPaciente(cod_paciente) {
    $.ajax({
        type: "POST",
        url: "controls/control.php",
        data: {
            opcion: "EliminarPaciente",
            cod_paciente: cod_paciente,
        },
        success: resp => {
            resp === "true" ? (EliminarUsuarioCorrecto(),
                $("#ListaPaciente").DataTable().ajax.reload()) : EliminarUsuarioIncorrecto()
        }

    })
}

function editarCita(cod_paciente) {

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "controls/control.php",
        data: {
            opcion: "BuscarCita",
            cod_paciente: cod_paciente,
        },
        success: function (resp) {

            const selectDivInit = document.querySelector("#probando");
            $('.form-horizontal').remove();
            $('#h2').remove();
            $('#btn-add-estcita').remove();
            $('#btn-del-estcita').remove();


            const h2Editar = document.createElement("h2");
            h2Editar.id = "h2"
            h2Editar.textContent = "Editar estado de cita"
            selectDivInit.appendChild(h2Editar);

            const contenido = document.createElement("div");
            contenido.className = "form-horizontal";
            selectDivInit.appendChild(contenido);

            const selectDivInitAll = document.querySelector(".form-horizontal");
            const register = document.createElement("div");
            register.className = "row register-form";
            selectDivInitAll.appendChild(register);

            const selectContenido = document.querySelector(".row.register-form");

            const divcolumna = document.createElement("div");
            divcolumna.className = "col-md-6";
            selectContenido.appendChild(divcolumna);

            const selectDivColumn = document.querySelector(".col-md-6");
            const divFormGroup = document.createElement("div");
            divFormGroup.className = "form-group";
            selectDivColumn.appendChild(divFormGroup);

            const selectDivFormGroup = document.querySelector(".form-group");
            const selectEstado = document.createElement("select");
            selectEstado.className = "form-control";
            selectEstado.id = "estado_cita";
            selectEstado.type = "text";
            selectDivFormGroup.appendChild(selectEstado);

            const SelectEstadoOp = document.querySelector("#estado_cita");
            const optionEstado = document.createElement("option");
            optionEstado.className = "hidden";
            optionEstado.textContent = "Estado de Cita"
            optionEstado.selected = true;
            optionEstado.disabled = true;
            SelectEstadoOp.appendChild(optionEstado);

            const optionEstadoAtendido = document.createElement("option");
            optionEstadoAtendido.textContent = "Atendido"
            SelectEstadoOp.appendChild(optionEstadoAtendido);
            const optionEstadoNoAtendido = document.createElement("option");
            optionEstadoNoAtendido.textContent = "No atendido"
            SelectEstadoOp.appendChild(optionEstadoNoAtendido);
            const optionEstadoAsignado = document.createElement("option");
            optionEstadoAsignado.textContent = "Asignado"
            SelectEstadoOp.appendChild(optionEstadoAsignado);
            const optionEstadoAnulado = document.createElement("option");
            optionEstadoAnulado.textContent = "Anulado"
            SelectEstadoOp.appendChild(optionEstadoAnulado);
            const optionEstadoEnServicio = document.createElement("option");
            optionEstadoEnServicio.textContent = "En servicio"
            SelectEstadoOp.appendChild(optionEstadoEnServicio);

            const divcolumnaB = document.createElement("div");
            divcolumnaB.className = "col-md-6 derecha";
            selectContenido.appendChild(divcolumnaB);

            const selectDivColumnB = document.querySelector(".col-md-6.derecha");
            const divFormGroupC = document.createElement("div");
            divFormGroupC.className = "form-group observacion";
            selectDivColumnB.appendChild(divFormGroupC);

            const selectDivFormGroupC = document.querySelector(".form-group.observacion");
            const inputObservacion = document.createElement("input");
            inputObservacion.className = "form-control";
            inputObservacion.id = "observacion";
            inputObservacion.type = "text";
            inputObservacion.placeholder = "Observación del Medico";
            inputObservacion.value = "";
            selectDivFormGroupC.appendChild(inputObservacion);

            const btnEditar = document.createElement("button");
            btnEditar.id = "btn-add-estcita";
            btnEditar.className = "btn btn-primary per";
            btnEditar.textContent = "Actualizar"
            btnEditar.type = "submit";
            selectDivInit.appendChild(btnEditar);

            const btnDelete = document.createElement("button");
            btnDelete.id = "btn-del-estcita";
            btnDelete.className = "btn btn-primary per";
            btnDelete.textContent = "X"
            btnDelete.type = "submit";
            selectDivInit.appendChild(btnDelete);

            if (resp[0]['estado_cita'] == null) {
                estado_cita.value = "Estado de Cita";
            }
            else if (resp[0]['observacion'] == null) {
                inputObservacion.value = "Observación del Medico";
            }
            else {
                inputObservacion.value = resp[0]['observacion'];
                estado_cita.value = resp[0]['estado_cita'].capitalize();
            }

            $('#probando').slideDown(500, 'swing');

            $("#btn-add-estcita").on('click', function (e) {
                if (estado_cita.value === "Estado de Cita") {
                    AñadirCitaInorrecta();
                } else if (inputObservacion.value === "Observación del Medico") {
                    AñadirCitaInorrecta();
                }
                else {
                    $.ajax({
                        method: "POST",
                        url: "controls/control.php",
                        data: {
                            opcion: 'EditarCita',
                            cod_paciente: cod_paciente,
                            estado_cita: estado_cita.value,
                            observacion: inputObservacion.value,
                        },
                        success: resp2 => {
                            if (resp2 === "true") {
                                AñadirCitaCorrecta();
                                $("#ListarCitas").DataTable().ajax.reload();
                                estado_cita.value = "Estado de Cita";
                                inputObservacion.value = "Observación del Medico";
                            } else {
                                AñadirCitaInorrecta();
                            }
                        }
                    })
                }
            });

            $("#btn-del-estcita").on('click', function (e) {
                $('#probando').slideUp(500, 'swing');
            });


        }
    })



}


function editarPaciente(cod_paciente) {

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "controls/control.php",
        data: {
            opcion: "BuscarPaciente",
            cod_paciente: cod_paciente,
        },
        success: function (resp) {

            const selectDivInit = document.querySelector("#probando");
            $('.form-horizontal').remove();
            $('#h2').remove();
            $('#btn-act-personal').remove();
            $('#btn-del-container').remove();


            const h2Editar = document.createElement("h2");
            h2Editar.id = "h2"
            h2Editar.textContent = "Editar Paciente"
            selectDivInit.appendChild(h2Editar);

            const contenido = document.createElement("div");
            contenido.className = "form-horizontal";
            selectDivInit.appendChild(contenido);

            const selectDivInitAll = document.querySelector(".form-horizontal");
            const register = document.createElement("div");
            register.className = "row register-form";
            selectDivInitAll.appendChild(register);

            const selectContenido = document.querySelector(".row.register-form");


            const divcolumna = document.createElement("div");
            divcolumna.className = "col-md-6";
            selectContenido.appendChild(divcolumna);

            const selectDivColumn = document.querySelector(".col-md-6");
            const divFormGroup = document.createElement("div");
            divFormGroup.className = "form-group";
            selectDivColumn.appendChild(divFormGroup);

            const selectDivFormGroup = document.querySelector(".form-group");
            const inputNombre = document.createElement("input");
            inputNombre.className = "form-control";
            inputNombre.id = "Nombre";
            inputNombre.type = "text";
            inputNombre.placeholder = "Nombre";
            inputNombre.value = "";
            selectDivFormGroup.appendChild(inputNombre);

            const divFormGroupA = document.createElement("div");
            divFormGroupA.className = "form-group apellido";
            selectDivColumn.appendChild(divFormGroupA);

            const selectDivFormGroupA = document.querySelector(".form-group.apellido");
            const inputApellido = document.createElement("input");
            inputApellido.className = "form-control";
            inputApellido.id = "Apellido";
            inputApellido.type = "text";
            inputApellido.placeholder = "Apellido";
            inputApellido.value = "";
            selectDivFormGroupA.appendChild(inputApellido);

            const divFormGroupB = document.createElement("div");
            divFormGroupB.className = "form-group foto";
            selectDivColumn.appendChild(divFormGroupB);

            const selectDivFormGroupB = document.querySelector(".form-group.foto");
            const inputFoto = document.createElement("input");
            inputFoto.className = "form-control";
            inputFoto.id = "FechaNacimiento";
            inputFoto.type = "text";
            inputFoto.placeholder = "Foto(URL)";
            inputFoto.value = "";
            selectDivFormGroupB.appendChild(inputFoto);

            const divFormGroupF = document.createElement("div");
            divFormGroupF.className = "form-group fechanacimiento";
            selectDivColumn.appendChild(divFormGroupF);

            const selectDivFormGroupF = document.querySelector(".form-group.fechanacimiento");
            const inputFechaNacimiento = document.createElement("input");
            inputFechaNacimiento.className = "form-control";
            inputFechaNacimiento.id = "FechaNacimiento";
            inputFechaNacimiento.type = "date";
            inputFechaNacimiento.min = "1900-01-01";
            selectDivFormGroupF.appendChild(inputFechaNacimiento);

            const divFormGroupG = document.createElement("div");
            divFormGroupG.className = "form-group edad";
            selectDivColumn.appendChild(divFormGroupG);

            const selectDivFormGroupG = document.querySelector(".form-group.edad");
            const inputEdad = document.createElement("input");
            inputEdad.className = "form-control";
            inputEdad.id = "Edad";
            inputEdad.type = "text";
            inputEdad.placeholder = "Edad";
            inputEdad.value = "";
            selectDivFormGroupG.appendChild(inputEdad);

            const divcolumnaB = document.createElement("div");
            divcolumnaB.className = "col-md-6 derecha";
            selectContenido.appendChild(divcolumnaB);

            const selectDivColumnB = document.querySelector(".col-md-6.derecha");
            const divFormGroupC = document.createElement("div");
            divFormGroupC.className = "form-group barrio";
            selectDivColumnB.appendChild(divFormGroupC);

            const selectDivFormGroupC = document.querySelector(".form-group.barrio");
            const inputBarrio = document.createElement("input");
            inputBarrio.className = "form-control";
            inputBarrio.id = "Barrio";
            inputBarrio.type = "text";
            inputBarrio.placeholder = "Barrio";
            inputBarrio.value = "";
            selectDivFormGroupC.appendChild(inputBarrio);

            const divFormGroupK = document.createElement("div");
            divFormGroupK.className = "form-group direccion";
            selectDivColumnB.appendChild(divFormGroupK);

            const selectDivFormGroupK = document.querySelector(".form-group.direccion");
            const inputDireccion = document.createElement("input");
            inputDireccion.className = "form-control";
            inputDireccion.id = "Direccion";
            inputDireccion.type = "text";
            inputDireccion.placeholder = "Direccion";
            inputDireccion.value = "";
            selectDivFormGroupK.appendChild(inputDireccion);

            const divFormGroupT = document.createElement("div");
            divFormGroupT.className = "form-group telefono";
            selectDivColumnB.appendChild(divFormGroupT);

            const selectDivFormGroupT = document.querySelector(".form-group.telefono");
            const inputTelefono = document.createElement("input");
            inputTelefono.className = "form-control";
            inputTelefono.id = "Telefono";
            inputTelefono.type = "text";
            inputTelefono.placeholder = "Telefono";
            inputTelefono.value = "";
            selectDivFormGroupT.appendChild(inputTelefono);

            const divFormGroupO = document.createElement("div");
            divFormGroupO.className = "form-group ciudad";
            selectDivColumnB.appendChild(divFormGroupO);

            const selectDivFormGroupO = document.querySelector(".form-group.ciudad");
            const inputCiudad = document.createElement("input");
            inputCiudad.className = "form-control";
            inputCiudad.id = "Ciudad";
            inputCiudad.type = "text";
            inputCiudad.placeholder = "Ciudad";
            inputCiudad.value = "";
            selectDivFormGroupO.appendChild(inputCiudad);

            const divFormGroupD = document.createElement("div");
            divFormGroupD.className = "form-group estado";
            selectDivColumnB.appendChild(divFormGroupD);

            const selectDivFormGroupD = document.querySelector(".form-group.estado");
            const selectEstado = document.createElement("select");
            selectEstado.className = "form-control";
            selectEstado.id = "Estado";
            selectEstado.type = "text";
            selectDivFormGroupD.appendChild(selectEstado);

            const SelectEstadoOp = document.querySelector("#Estado");
            const optionEstado = document.createElement("option");
            optionEstado.className = "hidden";
            optionEstado.textContent = "Estado"
            optionEstado.selected = true;
            optionEstado.disabled = true;
            SelectEstadoOp.appendChild(optionEstado);

            const optionEstadoActivo = document.createElement("option");
            optionEstadoActivo.textContent = "Activo"
            SelectEstadoOp.appendChild(optionEstadoActivo);
            const optionEstadoInactivo = document.createElement("option");
            optionEstadoInactivo.textContent = "Inactivo"
            SelectEstadoOp.appendChild(optionEstadoInactivo);

            const btnEditar = document.createElement("button");
            btnEditar.id = "btn-act-personal";
            btnEditar.className = "btn btn-primary adm";
            btnEditar.textContent = "Actualizar"
            btnEditar.type = "submit";
            selectDivInit.appendChild(btnEditar);

            const btnDelete = document.createElement("button");
            btnDelete.id = "btn-del-container";
            btnDelete.className = "btn btn-primary adm";
            btnDelete.textContent = "X"
            btnDelete.type = "submit";
            selectDivInit.appendChild(btnDelete);

            inputNombre.value = resp[0]["nombre"];
            inputApellido.value = resp[0]["apellido"];
            inputFoto.value = resp[0]["foto"];
            inputDireccion.value = resp[0]["direccion"];
            inputBarrio.value = resp[0]["barrio"];
            inputCiudad.value = resp[0]["ciudad"];
            inputEdad.value = resp[0]["edad"];
            inputFechaNacimiento.value = resp[0]["fecha_nacimiento"];
            inputTelefono.value = resp[0]["telefono"];
            Estado.value = resp[0]["estado"].capitalize();

            $('#probando').slideDown(500, 'swing');

            $("#btn-act-personal").on('click', function (e) {
                e.preventDefault;
                if (inputNombre.value === "") {
                    AñadirUsuarioIncorrecto();
                }
                else if (inputApellido.value === "") {
                    AñadirUsuarioIncorrecto();
                }
                else if (inputFoto.value === "") {
                    AñadirUsuarioIncorrecto();
                }
                else if (inputDireccion.value === "") {
                    AñadirUsuarioIncorrecto();
                }
                else if (inputBarrio.value === "") {
                    AñadirUsuarioIncorrecto();
                }
                else if (inputCiudad.value === "") {
                    AñadirUsuarioIncorrecto();
                }
                else if (inputEdad.value === "") {
                    AñadirUsuarioIncorrecto();
                }
                else if (inputFechaNacimiento.value === "") {
                    AñadirUsuarioIncorrecto();
                }
                else if (inputTelefono.value === "") {
                    AñadirUsuarioIncorrecto();
                }
                else if (Estado.value === "Estado") {
                    AñadirUsuarioIncorrecto();
                }
                else {
                    $.ajax({
                        method: "POST",
                        url: "controls/control.php",
                        data: {
                            opcion: 'ActualizarPaciente',
                            cod_paciente: cod_paciente,

                            Nombre: inputNombre.value,
                            Apellido: inputApellido.value,
                            Foto: inputFoto.value,
                            fecha_nacimiento: inputFechaNacimiento.value,
                            edad: inputEdad.value,
                            direccion: inputDireccion.value,
                            barrio: inputBarrio.value,
                            telefono: inputTelefono.value,
                            ciudad: inputCiudad.value,
                            Estado: Estado.value,
                        },
                        success: resp2 => {
                            if (resp2 === "true") {
                                AñadirUsuarioCorrecto();
                                $("#ListaPaciente").DataTable().ajax.reload();
                                inputNombre.value = "";
                                inputApellido.value = "";
                                inputFoto.value = "";
                                inputDireccion.value = "";
                                inputBarrio.value = "";
                                inputCiudad.value = "";
                                inputEdad.value = "";
                                inputFechaNacimiento.value = "";
                                inputTelefono.value = "";
                                Estado.value = "Estado";

                            } else {
                                AñadirUsuarioIncorrecto();
                            }
                        }
                    })
                }
            });

            $("#btn-del-container").on('click', function (e) {
                $('#probando').slideUp(500, 'swing');
            });


        }
    })



}


function editarPersonal(codigo) {
    // console.log(codigo)

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "controls/control.php",
        data: {
            opcion: "BuscarPersonal",
            codigo: codigo,
        },
        success: function (resp) {

            const selectDivInit = document.querySelector("#probando");
            $('.form-horizontal').remove();
            $('#h2').remove();
            $('#btn-act-personal').remove();
            $('#btn-del-container').remove();


            const h2Editar = document.createElement("h2");
            h2Editar.id = "h2"
            h2Editar.textContent = "Editar Personal"
            selectDivInit.appendChild(h2Editar);

            const contenido = document.createElement("div");
            contenido.className = "form-horizontal";
            selectDivInit.appendChild(contenido);

            const selectDivInitAll = document.querySelector(".form-horizontal");
            const register = document.createElement("div");
            register.className = "row register-form";
            selectDivInitAll.appendChild(register);

            const selectContenido = document.querySelector(".row.register-form");


            const divcolumna = document.createElement("div");
            divcolumna.className = "col-md-6";
            selectContenido.appendChild(divcolumna);

            const selectDivColumn = document.querySelector(".col-md-6");
            const divFormGroup = document.createElement("div");
            divFormGroup.className = "form-group";
            selectDivColumn.appendChild(divFormGroup);

            const selectDivFormGroup = document.querySelector(".form-group");
            const inputNombre = document.createElement("input");
            inputNombre.className = "form-control";
            inputNombre.id = "Nombre";
            inputNombre.type = "text";
            inputNombre.placeholder = "Nombre";
            inputNombre.value = "";
            selectDivFormGroup.appendChild(inputNombre);

            const divFormGroupA = document.createElement("div");
            divFormGroupA.className = "form-group apellido";
            selectDivColumn.appendChild(divFormGroupA);

            const selectDivFormGroupA = document.querySelector(".form-group.apellido");
            const inputApellido = document.createElement("input");
            inputApellido.className = "form-control";
            inputApellido.id = "Apellido";
            inputApellido.type = "text";
            inputApellido.placeholder = "Apellido";
            inputApellido.value = "";
            selectDivFormGroupA.appendChild(inputApellido);

            const divFormGroupB = document.createElement("div");
            divFormGroupB.className = "form-group contraseña";
            selectDivColumn.appendChild(divFormGroupB);

            const selectDivFormGroupB = document.querySelector(".form-group.contraseña");
            const inputFoto = document.createElement("input");
            inputFoto.className = "form-control";
            inputFoto.id = "Foto";
            inputFoto.type = "text";
            inputFoto.placeholder = "Foto(URL)";
            inputFoto.value = "";
            selectDivFormGroupB.appendChild(inputFoto);

            const divcolumnaB = document.createElement("div");
            divcolumnaB.className = "col-md-6 derecha";
            selectContenido.appendChild(divcolumnaB);

            const selectDivColumnB = document.querySelector(".col-md-6.derecha");
            const divFormGroupC = document.createElement("div");
            divFormGroupC.className = "form-group cargo";
            selectDivColumnB.appendChild(divFormGroupC);

            const selectDivFormGroupC = document.querySelector(".form-group.cargo");
            const selectCargo = document.createElement("select");
            selectCargo.className = "form-control";
            selectCargo.id = "Cargo";
            selectCargo.type = "text";
            selectDivFormGroupC.appendChild(selectCargo);

            const SelectCargoOp = document.querySelector("#Cargo");
            const optionCargo = document.createElement("option");
            optionCargo.className = "hidden";
            optionCargo.textContent = "Cargo"
            optionCargo.selected = true;
            optionCargo.disabled = true;
            SelectCargoOp.appendChild(optionCargo);

            const optionCargoEnfermero = document.createElement("option");
            optionCargoEnfermero.textContent = "Enfermero"
            SelectCargoOp.appendChild(optionCargoEnfermero);
            const optionCargoFisio = document.createElement("option");
            optionCargoFisio.textContent = "Fisioterapeuta"
            SelectCargoOp.appendChild(optionCargoFisio);
            const optionCargoMedico = document.createElement("option");
            optionCargoMedico.textContent = "Medico"
            SelectCargoOp.appendChild(optionCargoMedico);
            const optionCargoAdmin = document.createElement("option");
            optionCargoAdmin.textContent = "Administrador"
            SelectCargoOp.appendChild(optionCargoAdmin);

            const divFormGroupD = document.createElement("div");
            divFormGroupD.className = "form-group estado";
            selectDivColumnB.appendChild(divFormGroupD);

            const selectDivFormGroupD = document.querySelector(".form-group.estado");
            const selectEstado = document.createElement("select");
            selectEstado.className = "form-control";
            selectEstado.id = "Estado";
            selectEstado.type = "text";
            selectDivFormGroupD.appendChild(selectEstado);

            const SelectEstadoOp = document.querySelector("#Estado");
            const optionEstado = document.createElement("option");
            optionEstado.className = "hidden";
            optionEstado.textContent = "Estado"
            optionEstado.selected = true;
            optionEstado.disabled = true;
            SelectEstadoOp.appendChild(optionEstado);

            const optionEstadoActivo = document.createElement("option");
            optionEstadoActivo.textContent = "Activo"
            SelectEstadoOp.appendChild(optionEstadoActivo);
            const optionEstadoInactivo = document.createElement("option");
            optionEstadoInactivo.textContent = "Inactivo"
            SelectEstadoOp.appendChild(optionEstadoInactivo);

            const divFormGroupE = document.createElement("div");
            divFormGroupE.className = "form-group trabajando";
            selectDivColumnB.appendChild(divFormGroupE);

            const selectDivFormGroupE = document.querySelector(".form-group.trabajando");
            const selectTrabajando = document.createElement("select");
            selectTrabajando.className = "form-control";
            selectTrabajando.id = "Trabajando";
            selectTrabajando.type = "text";
            selectDivFormGroupE.appendChild(selectTrabajando);

            const SelectTrabajandoOp = document.querySelector("#Trabajando");
            const optionTrabajando = document.createElement("option");
            optionTrabajando.className = "hidden";
            optionTrabajando.textContent = "Trabajando"
            optionTrabajando.selected = true;
            optionTrabajando.disabled = true;
            SelectTrabajandoOp.appendChild(optionTrabajando);

            const optionTrabajandoEnServicio = document.createElement("option");
            optionTrabajandoEnServicio.textContent = "En servicio"
            SelectTrabajandoOp.appendChild(optionTrabajandoEnServicio);
            const optionTrabajandoLibre = document.createElement("option");
            optionTrabajandoLibre.textContent = "Libre"
            SelectTrabajandoOp.appendChild(optionTrabajandoLibre);

            const btnEditar = document.createElement("button");
            btnEditar.id = "btn-act-personal";
            btnEditar.className = "btn btn-primary adm";
            btnEditar.textContent = "Actualizar"
            btnEditar.type = "submit";
            selectDivInit.appendChild(btnEditar);

            const btnDelete = document.createElement("button");
            btnDelete.id = "btn-del-container";
            btnDelete.className = "btn btn-primary adm";
            btnDelete.textContent = "X"
            btnDelete.type = "submit";
            selectDivInit.appendChild(btnDelete);

            inputNombre.value = resp[0]["nombre"];
            inputApellido.value = resp[0]["apellido"];
            inputFoto.value = resp[0]["foto"];
            Cargo.value = resp[0]["tipo_usuario"].capitalize();
            Estado.value = resp[0]["estado"].capitalize();
            Trabajando.value = resp[0]["trabajando"].capitalize();

            $('#probando').slideDown(500, 'swing');

            $("#btn-act-personal").on('click', function (e) {
                e.preventDefault;
                if (inputNombre.value === "") {
                    AñadirUsuarioIncorrecto();
                }
                else if (inputApellido.value === "") {
                    AñadirUsuarioIncorrecto();
                }
                else if (inputFoto.value === "") {
                    AñadirUsuarioIncorrecto();
                }
                else if (Cargo.value === "Cargo") {
                    AñadirUsuarioIncorrecto();
                }
                else if (Estado.value === "Estado") {
                    AñadirUsuarioIncorrecto();
                }
                else if (Trabajando.value === "Trabajando") {
                    AñadirUsuarioIncorrecto();
                }
                else {
                    $.ajax({
                        method: "POST",
                        url: "controls/control.php",
                        data: {
                            opcion: 'ActualizarPersonal',
                            codigo: codigo,

                            Nombre: inputNombre.value,
                            Apellido: inputApellido.value,
                            Foto: inputFoto.value,
                            Tipo_Usuario: Cargo.value,
                            Estado: Estado.value,
                            Trabajando: Trabajando.value,
                        },
                        success: resp2 => {
                            if (resp2 === "true") {
                                AñadirUsuarioCorrecto();
                                $("#ListaPersonal").DataTable().ajax.reload();
                                Cargo.value = "Cargo";
                                Estado.value = "Estado";
                                Trabajando.value = "Trabajando";

                            } else {
                                AñadirUsuarioIncorrecto();
                            }
                        }
                    })
                }
            });

            $("#btn-del-container").on('click', function (e) {
                $('#probando').slideUp(500, 'swing');
            });


        }
    })



}

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function AñadirUsuarioCorrecto() {
    Swal.fire(
        {
            title: 'El usuario se ha registrado exitosamente, ¡gracias!',
            padding: '1rem',
            showConfirmButton: false,
            toast: true,
            icon: 'success',
            grow: 'row',
            position: 'bottom',
            width: '55%',
        }
    );
    Limpiar();
}

function AñadirCitaCorrecta() {
    Swal.fire(
        {
            title: 'La cita se ha registrado exitosamente, ¡gracias!',
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

function AñadirCitaInorrecta() {
    Swal.fire(
        {
            title: 'Error: Existe un error que no permite añadir la cita, intentalo nuevamente.',
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

function EliminarUsuarioCorrecto() {
    Swal.fire(
        {
            title: 'El usuario se ha eliminado exitosamente, ¡gracias!',
            padding: '1rem',
            showConfirmButton: false,
            toast: true,
            icon: 'success',
            grow: 'row',
            position: 'bottom',
            width: '55%',
        }
    );
    Limpiar();
}

function EliminarUsuarioIncorrecto() {
    Swal.fire(
        {
            title: 'Error: Existe un error que no permite eliminar el usuario, intentalo nuevamente.',
            padding: '1rem',
            showConfirmButton: false,
            toast: true,
            icon: 'error',
            grow: 'row',
            position: 'bottom',
            width: '55%',
        }
    );
    Limpiar();
}

function AñadirUsuarioIncorrecto() {
    Swal.fire(
        {
            title: 'Error: Existe un error que no permite añadir el usuario, intentalo nuevamente.',
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

function Limpiar() {
    $('#Nombre').val("");
    $('#Apellido').val("");
    $('#Username').val("");
    $('#Password').val("");
    $('#Cargo option:checked').val("Cargo");
    $('#Estado option:checked').val("Estado");
    $('#Trabajando option:checked').val("Trabajando");
    $('#Foto').val("");
}