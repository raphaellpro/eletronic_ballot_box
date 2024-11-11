    // Definição dos candidatos e seus respectivos números e fotos
    const candidates = {
        13: { name: "Kamala Harris", photo: "kamala.png" },
        22: { name: "Donald Trump", photo: "trump.png" }
    };

    let voteNumber = "";  // Armazena o número digitado pelo eleitor

    // Função para adicionar um número à entrada do voto
    function addNumber(num) {
        if (voteNumber.length < 2) {  // Limita a entrada a 2 dígitos
            voteNumber += num;
            document.getElementById("numInput").value = voteNumber;
            showCandidate();
        }
    }

    // Função para mostrar o candidato baseado no número digitado
    function showCandidate() {
        const candidateInfo = document.getElementById("candidateInfo");
        candidateInfo.innerHTML = "";
        if (candidates[voteNumber]) {
            // Se o número corresponde a um candidato, exibe o nome e a foto
            const candidate = candidates[voteNumber];
            candidateInfo.innerHTML = `<p>${candidate.name}</p><img src="${candidate.photo}" alt="${candidate.name}">`;
        } else {
            // Caso contrário, exibe a imagem inicial
            candidateInfo.innerHTML = `<img src="presidente.png" alt="Imagem inicial">`;
        }
    }

    // Função para corrigir o voto, limpando o número digitado
    function correct() {
        voteNumber = "";
        document.getElementById("numInput").value = "--";
        document.getElementById("candidateInfo").innerHTML = `<img src="presidente.png" alt="Imagem inicial">`;
    }

    // Função para registrar um voto em branco
    function voteBlank() {
        voteNumber = "BR";
        document.getElementById("numInput").value = "BR";
        document.getElementById("candidateInfo").innerHTML = "<p>Voto em Branco</p>";
    }

    // Função para confirmar o voto e salvá-lo
    function confirm() {
        if (voteNumber === "") {
            alert("Insira o número do candidato ou vote em branco.");
            return;
        }
        saveVote(voteNumber);
        correct();  // Limpa o campo após o voto ser computado
    }

    // Função para salvar o voto no Local Storage e exibir resultados
    function saveVote(vote) {
        let votes = JSON.parse(localStorage.getItem("votes")) || {};  // Obtém votos armazenados
        votes[vote] = (votes[vote] || 0) + 1;  // Incrementa o voto
        localStorage.setItem("votes", JSON.stringify(votes));  // Armazena de volta no Local Storage

        // Exibe resultados atualizados
        displayResults(votes);
    }

    // Função para exibir os resultados de votação a cada voto confirmado
    function displayResults(votes) {
        let results = "Resultados da Votação:\n";
        results += `Kamala Harris (13): ${votes[13] || 0} votos\n`;
        results += `Donald Trump (22): ${votes[22] || 0} votos\n`;
        results += `Votos em Branco: ${votes["BR"] || 0} votos\n`;
        alert(results);  // Mostra o resultado atualizado em um alerta
    }