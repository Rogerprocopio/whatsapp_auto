const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message_create', async (message) => {
    if (message.body === '!argentina'){
        await message.reply(`
        Imagine-se vivendo essa experiência inesquecível, com tudo incluído:

        Passagens aéreas de ida e volta direto de Vitória
        ✅ 7 noites de hospedagem no aconchegante Hotel  🏨
        ✅ Café da manhã incluso, perfeito para começar o dia 🥐☕
        ✅ Transporte VIP aeroporto-hotel-aeroporto 🚍
        ✅ Passeios panorâmicos para você explorar o melhor da região! 📸

        Solicite o roteiro completo

        Oferta imperdível! 

        Entrada + restante no cartão. R$ 9.000
        ou à vista por  R$ 8.700
        Casal.R$ 16.000 

        Saída garantida:
        Dezembro de 24  e Abril de 25.

        Reserve já e garanta seu lugar 
        `);
    }

    if (message.body === '!dubai'){
        await message.reply(`
        🎉🌟 PROMOÇÃO DE ABERTURA - RETIRO DE CARNAVAL EM DUBAI! 🌟🎉

        A Vai Sim Turismo está animada para te levar para um carnaval inesquecível em Dubai! Aproveite 10% de desconto para os primeiros 10 que fecharem com a gente entre os dias 05 a 10 de Agosto e prepare-se para uma experiência única. 🌟✈️

        🗓️ Data do Retiro: 28 de Fevereiro a 04 de Março de 2025

        O pacote inclui:
        ✨ Aéreo Internacional – Conforto desde o seu embarque até Dubai!
        🏨 Hospedagem com Café da Manhã – Descanse em hotéis selecionados com o melhor café da manhã!
        🍽️ 2 Jantares e 1 Almoço em Abu Dhabi – Saboreie a culinária local em locais incríveis!
        🚙 Rally no Deserto – Uma aventura emocionante nas dunas do deserto!

        Explore os pontos turísticos mais icônicos:
        🌟 Burj Khalifa – O edifício mais alto do mundo!
        🏜️ Deserto de Dubai – Aventura emocionante com o famoso safari no deserto!
        🏰 Palácio de Sheik Zayed – Deslumbrante e majestoso em Abu Dhabi!
        🛥️ Dubai Marina – Desfrute de um passeio ao longo dessa incrível marina!

        Não perca a chance de viver um carnaval com uma combinação perfeita de luxo, aventura e cultura! Reserve já a sua vaga e garanta um desconto exclusivo. 🚀✨
        `);
    }

    if (message.body === '!chile'){
        await message.reply(`
        🔥EXCLUSIVO Chile Inverno

        🌨️ Sonha em curtir a Temporada de Inverno nas montanhas do Chile?  Este é o momento perfeito! ❄️

        Imagine-se vivendo essa experiência inesquecível, com tudo incluído:

        ✅ Passagens saindo de Vitória  Vitória X Santiago 🛫
        ✅ 7 noites de hospedagem no aconchegante 🏨 **
        ✅ Café da manhã incluso, perfeito para começar o dia 🥐☕
        ✅ Transporte VIP aeroporto-hotel-aeroporto 🚍
        ✅ Passeios panorâmicos para você explorar o melhor da região! 📸

        💥 Oferta imperdível!  Para casais 😍

        A partir de  R$14.950

        Entrada + boleto + cartão

        📅 Saída garantida: Julho de 2025!

        🌟 Reserve já e garanta seu lugar na neve! 🌟
        #chile  #Neve #ViagemDosSonhos #LetsGo #avaisimteleva
        `);
    }

    if (message.body === '!cruzeiro'){
        await message.reply(`
        🔥EXCLUSIVO Cruzeiro na Grécia

        🚢 Sonha em viver momentos extraordinários no país histórico da Grécia? Este é o momento perfeito! ⚓

        Imagine-se vivendo essa experiência inesquecível, com tudo incluído:

        ✅ Aéreo Internacional saindo de Guarulhos-SP ou Rio 🛫
        ✅ 5 dias e 4 noites no Navio Celestyal Discovery ⛴️
        ✅ Cabine dupla com pensão completa (café, almoço, jantar) 🍽️
        ✅ Bebidas nas refeições (vinho da casa, cerveja, chás, cafés) 🍷
        ✅ 2 dias em Atenas com hotel, café da manhã e city tour 🏛️
        ✅ Roteiro incrível: Lavrio, Mykonos, Kusadasi, Patmos, Rodes, Heraklion, Santorini 🌴

        💥 Oferta imperdível!

        A partir de R$21.000 parcelado em 10x
        ou R$18.000 à vista
        ou R$19.000 com entrada de 50% + cartão

        📅 Consulte as datas disponíveis!

        🌟 Reserve já e garanta sua viagem dos sonhos! 🌟
        #Cruzeiro #Grécia #ViagemDosSonhos #LetsGo #AVaiSimTeLeva
        `);
    }

    if (message.body === '!visto'){
        await message.reply(`
        🇺🇸✅ Conquiste seu visto de turismo com quem entende do assunto!

        Evite prejuízos e obtenha seu visto de turismo/negócios com a Vai Sim Turismo. Especialistas com 95% de assertividade em processos de solicitação de visto americano.

        🔹 Por que escolher a Vai Sim Turismo:
        • 95% de assertividade: Resultados comprovados e clientes satisfeitos.
        • 100% de Lisura e Veracidade: Preenchimento do DS-160 com total transparência.
        • Experiência e Dedicação: Assessoria a dezenas de clientes que hoje desfrutam de um visto válido por 10 anos para entrar e sair dos Estados Unidos para turismo ou negócios.

        🔸 Nossos serviços:
        Preenchimento e agendamento do DS-160 (visto americano de turismo).
        R$ 2.000 - Serviço de assessoria e agendamento. Incluso taxa do consulado.

        💳 Formas de Pagamento:
        Em até 6x no cartão.

        🌟 Não perca a chance de garantir seu visto com um profissional confiável. Entre em contato e agende sua solicitação hoje mesmo!
        `);
    }
});

client.initialize();