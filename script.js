document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.audience-card');
    const detailsBox = document.getElementById('audience-details');

    const audienceTexts = {
        'prefeituras': `
            <h4>🏛️ PREFEITURAS</h4>
            <p>O Programa Pulsar apoia as prefeituras a cuidarem de quem cuida da cidade.</p>
            <p>Promovemos a saúde emocional dos servidores, o que resulta na redução de afastamentos e na melhoria contínua do ambiente de trabalho em secretarias e repartições públicas.</p>
            <p>Nossa metodologia inclui diagnóstico inicial, vivências em grupo e palestras que fortalecem o engajamento, a empatia e o senso de pertencimento dos colaboradores.</p>
        `,
        'hospitais': `
            <h4>🏥 HOSPITAIS E CLÍNICAS</h4>
            <p>Em ambientes de alta demanda emocional, como hospitais, clínicas e unidades de saúde, o Pulsar atua no **equilíbrio e na vitalidade** das equipes. Cuidar de quem cuida é essencial!</p>
            <p>As práticas propostas aliviam o estresse crônico, fortalecem o vínculo entre colegas e resgatam a leveza necessária para que o atendimento ao paciente aconteça com mais **presença e humanidade**.</p>
        `,
        'escolas': `
            <h4>🏫 ESCOLAS</h4>
            <p>Nas escolas, o Pulsar promove o equilíbrio emocional entre educadores, gestores e equipes de apoio.</p>
            <p>Em um cenário de tantas mudanças e pressões, o cuidado com o educador é o ponto de partida para uma educação mais **saudável e criativa**. As vivências ajudam na gestão das emoções, melhoria da comunicação e harmonia entre os profissionais.</p>
        `,
        'empresas': `
            <h4>🏢 EMPRESAS PRIVADAS</h4>
            <p>O Pulsar é o investimento que retorna em **produtividade sustentável**.</p>
            <p>Atuamos na gestão emocional das equipes, reduzindo conflitos e elevando o nível de engajamento e foco. Um time equilibrado trabalha com mais leveza, cooperação e, consequentemente, melhores resultados.</p>
            <p>O programa é adaptado à cultura e às necessidades de cada empresa, após o diagnóstico inicial e reuniões estratégicas com o RH e lideranças.</p>
        `,
        'sociais': `
            <h4>🧠 INSTITUIÇÕES SOCIAIS / ORGANIZAÇÕES DO TERCEIRO SETOR</h4>
            <p>O Pulsar também atua em espaços que vivem o cuidado coletivo — ONGs, associações e grupos sociais.</p>
            <p>As vivências são essenciais para fortalecer vínculos, resgatar o propósito e **renovar a energia** das equipes que dedicam sua vida ao bem comum, prevenindo a exaustão.</p>
        `
    };

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const target = card.getAttribute('data-target');

            // 1. Remove a classe 'active' de todos os cards
            cards.forEach(c => c.classList.remove('active'));

            // 2. Adiciona a classe 'active' ao card clicado
            card.classList.add('active');

            // 3. Atualiza o conteúdo da caixa de detalhes
            detailsBox.innerHTML = audienceTexts[target];
        });
    });
});
