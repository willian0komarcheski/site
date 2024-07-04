// <a href="#" onclick="loadContent('sobre')" class="button">Saiba mais</a>
        // </section>
        // <section id="topics">
        //     <h2>Tópicos</h2>
        //     <ul>
        //         <li><a href="#" onclick="loadContent('servicos')">Nossos Serviços</a></li>
        //         <li><a href="#" onclick="loadContent('sobre')">Quem Somos</a></li>
        //         <li><a href="#footer">Entre em Contato</a></li>
        //     </ul>
        // </section>
function loadContent(page) {
    const content = document.getElementById('content');
    const headerTitle = document.getElementById('header-title');
    if (page === 'home') {
        headerTitle.innerText = 'ONG Educação para Deficiência Intelectual Severa';
        content.innerHTML = `
            <section id="introduction">
                <h1>Bem-vindo à nossa ONG</h1>
                <h2>Afece, há mais de 50 anos transformando vidas.</h2>
                <p>Afece, há mais de 50 anos transformando vidas.
                A instituição foi fundada em 1967 para prestar auxílio a pais que tivessem filhos com deficiência intelectual e não possuíssem os recursos financeiros e a instrução necessária para lidar com esse desafio, e hoje vai além. Através de nossos atendimentos transformamos vidas e damos as famílias melhores condições para viver e conviver com as limitações que a deficiência impõem.</p>
                
                <p>A entidade já inicia o seu legado na vanguarda com forte presença feminina, tendo como primeira presidente da instituição Ilka Marques Munhoz, e desenvolvendo um trabalho inédito no Paraná e região. Conquistou em 1975 a primeira sede da Afece, ano em que o Departamento de Educação Especial da SEED (Secretaria de Estado da Educação) propôs a instituição um novo programa escolar destinado a pessoas com deficiência intelectual. O desafio foi aceito, tornando-se então a partir de 1976 mantenedora da Escola São Francisco de Assis, com a missão de atender crianças, jovens e adultos com deficiência.</p>
                
                <p>Inicialmente, trabalhou com 32 alunos que vinham apresentando dificuldades para adaptar – se ao programa estudantil e mais tarde, em 1997, quando a escola inaugura sua sede própria, no bairro Hugo Lange, passa para 74 alunos, número que aumentaria gradualmente até atingir a capacidade máxima de 107 atendidos.</p>
                
                <p>O trabalho sério e responsável desenvolvido pela entidade, e a necessidade de ampliar o espaço para atender mais alunos, fez com que em 2011 a Afece mudasse de endereço, conquistando um lugar mais amplo e pensado para os deficientes.</p>
                
                <p>Hoje, situada no bairro do Tarumã, onde atende diariamente cerca de 225 cidadãos com deficiência, entre crianças, jovens e adultos tem novamente pela frente mais um desafio: ampliar ainda mais o número de atendimentos, já que atualmente existe uma fila de espera de mais de 100 pessoas de todo o estado.</p>

                <p> Temos como meta ampliar a capacidade de atendimento e manter a excelência no que fazemos: qualidade de educação, saúde e assistência social. ♥ </p>
                </section>
            <section id="images">
                <h2>Imagens</h2>
                <div class="image-grid">
                    <img src="imagem1.jpg" alt="Imagem 1">
                    <img src="imagem2.jpg" alt="Imagem 2">
                    <img src="imagem3.jpg" alt="Imagem 3">
                </div>
        `;
    } else if (page === 'sobre') {
        headerTitle.innerText = 'ONG Educação para Deficiência Intelectual Severa';
        content.innerHTML = `
            <section class="content">
                <h1>Quem Somos</h1>
                <p>Aqui você encontra informações sobre nossa ONG e nossa missão.</p>
            </section>
        `;
    } else if (page === 'servicos') {
        headerTitle.innerText = 'ONG Educação para Deficiência Intelectual Severa';
        content.innerHTML = `
            <section class="content">
                <h1>Nossos Serviços</h2>
                    <h2>Programas Educacionais</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit.</p>
                    <h2>Atividades de Inclusão</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit.</p>
                    <h2>Suporte Psicológico</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit.</p>
            </section>
        `;
    } else if (page === 'ajuda') {
        headerTitle.innerText = 'ONG Educação para Deficiência Intelectual Severa';
        content.innerHTML = `
            <section class="content">
                <h1>Como eu Posso Ajudar?</h2>
                <h2><a href="#" onclick="loadContent('ajuda-imposto')">Doar Imposto de Renda</a></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit.</p>
                <h2><a href="#" onclick="loadContent('ajuda-imposto')">Nota Fiscal</a></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit.</p>
                <h2><a href="#" onclick="loadContent('ajuda-imposto')">Doação em Dinheiro</a></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit.</p>
                <h2><a href="#" onclick="loadContent('ajuda-imposto')">Compra ou doação de Roupas no Bazar Solidario</a></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit.</p>
                <h2><a href="#" onclick="loadContent('ajuda-imposto')">voluntariado</a></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit.</p>
                <h2><a href="#" onclick="loadContent('ajuda-imposto')">apatrinhamento</a></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, justo vel interdum eleifend, mi eros aliquet nisi, sit amet consectetur dui sem nec velit.</p>
            </section>
        `;
    } else if (page === 'documentos') {
        headerTitle.innerText = 'ONG Educação para Deficiência Intelectual Severa';
        content.innerHTML = `
            <section class="content">
                <h1>Documentos Oficiais</h1>
                <p>Aqui você encontra todos os documentos oficiais da nossa ONG.</p>
            </section>
        `;
    }
}

// Carregar conteúdo inicial (home)
window.onload = function() {
    loadContent('home');
}
