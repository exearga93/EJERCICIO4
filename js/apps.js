function updateClock() {
    const now = new Date();
    const nombreDia = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const nombreMes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    const dia = nombreDia[now.getDay()];
    const fecha = now.getDate();
    const mes = nombreMes[now.getMonth()];
    const year = now.getFullYear();
    const horas = now.getHours();
    const minutos = now.getMinutes();
    const segundos = now.getSeconds();
    
    const ampm = horas >= 12 ? 'PM' : 'AM';
    const hora12 = horas % 12 || 12;
    const minutero = minutos < 10 ? '0' + minutos : minutos;
    const segundero = segundos < 10 ? '0' + segundos : segundos;

    document.getElementById('date').innerText = `${dia} ${fecha} de ${mes} del ${year}`;
    document.getElementById('time').innerText = `${hora12}:${minutero}:${segundero} ${ampm}`;
}

setInterval(updateClock, 1000);  // Actualiza el reloj cada segundo
updateClock(); 
