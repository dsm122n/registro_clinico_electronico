const url = 'bd/pacientes.json';
function calcularEdad (birthDate, otherDate) {
    fechaNacimiento = new Date(fechaNacimiento);
    fechaActual = new Date(fechaActual);

    var edad = (fechaActual.getFullYear() - fechaNacimiento.getFullYear());

    if (fechaActual.getMonth() < fechaNacimiento.getMonth() || 
        fechaActual.getMonth() == fechaNacimiento.getMonth() && fechaActual.getDate() < fechaNacimiento.getDate()) {
        edad--;
    }

    return edad;
}

let listaPacientes;
fetch(url)
.then((response) => response.json())
.then((data) => {
    listaPacientes = data;
    console.log(listaPacientes[0].nombre);

    // const lista_espera = document.getElementById('lista_espera')
    console.log(listaPacientes.length);

    let tabla = document.getElementById('lista_espera');
    for (let i = 0; i < listaPacientes.length; i++) {
        let fila = `<tr>
                        <td><a href="evolucion.html"> ${listaPacientes[i].nombre} ${listaPacientes[i].apellido}</a></td>
                        <td>${listaPacientes[i].sexo}</td>
                        <td>${listaPacientes[i].motivo_consulta}</td>
                    </tr>`;
        tabla.innerHTML += fila;
    }

    // listaPacientes.forEach(paciente => {
    //     // const edad = calcularEdad(paciente.fecha_nacimiento, Date.now());
    //     const row = document.createElement('tr');
    //     row.innerHTML = '
    //         <td>${paciente.nombre} ${paciente.apellido}</td> 
    //         <td>${paciente.sexo}</td> 
    //         <td>${paciente.motivo_consulta}</td>';
    // });
    // lista_espera.appendChild(row);

})    
.catch((error) => {
    console.error('Error fetching JSON:', error);
});    


