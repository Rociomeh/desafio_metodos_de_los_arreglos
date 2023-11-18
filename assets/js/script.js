let tareas = [
    { id: 16, descripcion: "Hacer mercado", completado: false },
    { id: 60, descripcion: "Estudiar para la prueba", completado: false },
    { id: 24, descripcion: "Sacar a pasear a Tobyy", completado: false }
];
    
function actualizarLista() {
    let lista = document.getElementById('listaTareas').getElementsByTagName('tbody')[0]; // Es la tabla
    lista.innerHTML = ''; 
    tareas.forEach((tarea, indice) => {
        let fila = lista.insertRow(); // insertRow agrega una fila al final del arreglo por cada iteracion en la lista
        fila.innerHTML = `<td>${tarea.id}</td>
                            <td>${tarea.descripcion}</td>
                            <td><input type="checkbox" onclick="marcarCompletada(${indice})" ${tarea.completado ? 'checked' : ''}></td>
                            <td><button onclick="borrarTarea(${indice})">X</button></td>`;
});
    
document.getElementById('totalTareas').innerText = tareas.length;
document.getElementById('tareasCompletadas').innerText = tareas.filter(t => t.completado).length;
}
    
function agregarTarea() {
    let desc = document.getElementById('nuevaTarea').value ; // Quitamos espacios en blanco al principio y al final.
    let nuevaId = tareas.length + 1;
    tareas.push({ id: nuevaId, descripcion: desc, completado: false });
    actualizarLista(); 
    document.getElementById('nuevaTarea').value = '';
}
    
function borrarTarea(indice) {
    tareas.splice(indice, 1);
    actualizarLista();
}
    
function marcarCompletada(indice) {
    tareas[indice].completado = !tareas[indice].completado; // Cambia a el estado contrario 
    actualizarLista();
}

actualizarLista(); // Llamada inicial para cargar las tareas iniciales