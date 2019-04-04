function entrar() {
  let clave = document.getElementById('palabra').value
  console.log(clave)
  let tabla = document.getElementById('registros')
  axios.post('/api/registros/get', { clave })
    .then(res => {
      console.log(res)
      res.data.forEach(registro => {
        let fila = document.createElement('tr')
        fila.innerHTML = `<td>${registro.participacion}</td>
          <td>${registro.nombre}</td>
          <td>${registro.contacto}</td>
          <td>${registro.correo}</td>
          <td>${registro.zona}</td>
          <td>${registro.sede}</td>
          <td>${registro.actividad}</td>
          <td>${registro.duracion}</td>
          <td>${registro.ideales}</td>
          <td>${registro.ninxs}</td>
          <td>${registro.enlace}</td>
          <td>${registro.comision}</td>
          <td>${registro.actividades}</td>
          <td>${registro.autogestion}</td>
          <td>${registro.autogestival}</td>`
        tabla.appendChild(fila)
      })
    })
    .catch(err => console.log(err))
}
