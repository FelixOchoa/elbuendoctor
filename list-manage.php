<?php
include("sidebar-adm.php");
?>
<div id="wrapper" class="max-w-xl px-4 py-4 mx-auto">
    <div class="sm:grid sm:h-32 sm:grid-flow-row sm:gap-4 sm:grid-cols-3">
        <div id="jh-stats-negative" class="flex flex-col justify-center px-4 py-4 mt-4 bg-white border border-gray-300 rounded sm:mt-0">
            <div>
                <div>
                    <p class="flex items-center justify-end text-red-500 text-md">
                        <span class="font-bold">Nuevos Usuarios</span>

                    </p>
                </div>
                <p class="text-3xl font-semibold text-center text-gray-800" id="userRegister"></p>
                <p class="text-lg text-center text-gray-500">Usuarios Registrados</p>
            </div>
        </div>

        <div id="jh-stats-neutral" class="flex flex-col justify-center px-4 py-4 mt-4 bg-white border border-gray-300 rounded sm:mt-0">
            <div>
                <div>
                    <p class="flex items-center justify-center text-green-200 text-md">
                        <span class="font-bold">Total Pacientes</span>
                    </p>
                </div>
                <p class="text-3xl font-semibold text-center text-gray-800" id="total-pacientes"></p>
                <p class="text-lg text-center text-gray-500">Pacientes Registrados</p>
            </div>
        </div>

        <div id="jh-stats-negative" class="flex flex-col justify-center px-4 py-4 mt-4 bg-white border border-gray-300 rounded sm:mt-0">
            <div>
                <div>
                    <p class="flex items-center justify-end text-green-500 text-md">
                        <span class="font-bold">Total de médicos</span>
                    </p>
                </div>
                <p class="text-3xl font-semibold text-center text-gray-800" id="total-medicos"></p>
                <p class="text-lg text-center text-gray-500">Médicos Registrados</p>
            </div>
        </div>

        <div id="jh-stats-neutral" class="flex flex-col justify-center px-4 py-4 mt-4 bg-white border border-gray-300 rounded sm:mt-0">
            <div>
                <div>
                    <p class="flex items-center justify-end text-gray-700 text-md">
                        <span class="font-bold">Total enfermeros</span>
                    </p>
                </div>
                <p class="text-3xl font-semibold text-center text-gray-800" id="total-enfermeros"></p>
                <p class="text-lg text-center text-gray-500">Enfermeros Registrados</p>
            </div>
        </div>

        <div id="jh-stats-neutral" class="flex flex-col justify-center px-4 py-4 mt-4 bg-white border border-gray-300 rounded sm:mt-0">
            <div>
                <div>
                    <p class="flex items-center text-center text-blue-300 text-md">
                        <span class="font-bold">Total fisioterapeutas</span>
                    </p>
                </div>
                <p class="text-3xl font-semibold text-center text-gray-800" id="total-fisioterapeutas"></p>
                <p class="text-lg text-center text-gray-500">Fisioterapeutas Registrados</p>
            </div>
        </div>

        <div id="jh-stats-neutral" class="flex flex-col justify-center px-4 py-4 mt-4 bg-white border border-gray-300 rounded sm:mt-0">
            <div>
                <div>
                    <p class="flex items-center justify-center text-yellow-500 text-md">
                        <span class="font-bold">Total de Citas</span>
                    </p>
                </div>
                <p class="text-3xl font-semibold text-center text-gray-800" id="total-citas"></p>
                <p class="text-lg text-center text-gray-500">Citas registradas</p>
            </div>
        </div>
    </div>
</div>

<?php
include("footer.php");

?>
