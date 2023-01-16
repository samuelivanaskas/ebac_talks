AOS.init();

const dataDoEvento = new Date("Dec 12, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMS = (1000 * 60 * 60 *24);
    const horasEmMs = (1000 * 60 * 60);
    const minutosEmMs = (1000 * 60);

    const diasAteEvento = Math.floor(distanciaAteEvento / diasEmMS);
    const horasAteEvento = Math.floor((distanciaAteEvento % diasEmMS) / horasEmMs);
    const minutosAteEvento = Math.floor((distanciaAteEvento % diasEmMS) / minutosEmMs);
    const segundosAteEvento = Math.floor((distanciaAteEvento % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if (distanciaAteEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = 'Evento espirado'
    }
},1000);