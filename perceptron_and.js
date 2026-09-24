// ========================================================================
// Ficheiro: perceptron_and.js
// Implementação completa do Perceptron simples para a porta lógica AND
// Algoritmo: Regra Delta (Descida do Gradiente)
// ========================================================================

// 1. Dados de entrada e saída esperada (tabela de verdade do AND)
const entradas = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1]
];
const saidas = [0, 0, 0, 1];

// 2. Inicializar pesos e bias com valores aleatórios entre 0 e 1
let pesos = [Math.random(), Math.random()]; // dois pesos (para x1 e x2)
let bias = Math.random();                  // um bias
const taxaAprendizado = 0.1;
const epocas = 20;

// Interface visual: o ficheiro pode ser incluído diretamente numa página HTML.
const painel = document.createElement("section");
painel.id = "painel";
painel.style.cssText = "font-family:Arial,sans-serif;max-width:720px;margin:24px auto;padding:20px;border-radius:12px;background:#f4f7fb;color:#172033;box-shadow:0 4px 14px #0002";
painel.innerHTML = `
  <h1>Perceptron — porta AND</h1>
  <p>Treino e validação do modelo</p>
  <div id="estado"></div>
    <h2>Gráfico das previsões</h2>
    <canvas id="grafico" width="680" height="260" style="width:100%;background:#fff;border-radius:8px"></canvas>
  <h2>Resultados</h2>
  <table style="width:100%;border-collapse:collapse;text-align:center">
    <thead><tr><th>Entrada</th><th>Esperada</th><th>Predita</th><th>Estado</th></tr></thead>
    <tbody id="resultados"></tbody>
  </table>`;
document.body.appendChild(painel);
const estadoVisual = painel.querySelector("#estado");
const resultadosVisuais = painel.querySelector("#resultados");
const grafico = painel.querySelector("#grafico");

function desenharGrafico() {
  const contexto = grafico.getContext("2d");
  const largura = grafico.width;
  const altura = grafico.height;
  const margem = 45;
  const barraLargura = 46;
  const espacamento = 110;
  const base = altura - margem;

  contexto.clearRect(0, 0, largura, altura);
  contexto.strokeStyle = "#64748b";
  contexto.beginPath();
  contexto.moveTo(margem, 20);
  contexto.lineTo(margem, base);
  contexto.lineTo(largura - 20, base);
  contexto.stroke();

  contexto.font = "14px Arial";
  contexto.fillStyle = "#172033";
  contexto.fillText("1", 25, 28);
  contexto.fillText("0", 25, base + 5);

  entradas.forEach((entrada, i) => {
    const predita = ativacao(dot(entrada, pesos) + bias);
    const x = margem + 35 + i * espacamento;
    const alturaBarra = predita * (base - 35);
    contexto.fillStyle = predita === saidas[i] ? "#42a86b" : "#dc5a5a";
    contexto.fillRect(x, base - alturaBarra, barraLargura, alturaBarra);
    contexto.fillStyle = "#172033";
    contexto.fillText(`[${entrada}]`, x - 5, base + 22);
    contexto.fillText(String(predita), x + 17, base - alturaBarra - 8);
  });
}

function atualizarVisual(entrada, esperada, predita) {
  const linha = document.createElement("tr");
  linha.innerHTML = `<td>[${entrada}]</td><td>${esperada}</td><td>${predita}</td><td>${esperada === predita ? "✅" : "❌"}</td>`;
  linha.style.background = esperada === predita ? "#e8f7ed" : "#fdeaea";
  linha.style.borderBottom = "1px solid #ccd3df";
  resultadosVisuais.appendChild(linha);
}

// 3. Função de ativação (degrau / step function)
function ativacao(soma) {
  return soma >= 0 ? 1 : 0;
}

// Função auxiliar para calcular o produto escalar (equivalente ao np.dot)
function dot(vetorA, vetorB) {
  return vetorA[0] * vetorB[0] + vetorA[1] * vetorB[1];
}

// 4. Treino da rede
for (let epoca = 0; epoca < epocas; epoca++) {
  let erroTotal = 0;

  entradas.forEach((entrada, i) => {
    // Cálculo da soma ponderada: soma = dot(entrada, pesos) + bias
    const soma = dot(entrada, pesos) + bias;
    const saidaPredita = ativacao(soma);
    const erro = saidas[i] - saidaPredita;

    // Atualização dos parâmetros pela Regra Delta
    pesos[0] += taxaAprendizado * erro * entrada[0];
    pesos[1] += taxaAprendizado * erro * entrada[1];
    bias += taxaAprendizado * erro;

    erroTotal += Math.abs(erro);
  });

  console.log(`Época ${epoca + 1}, Erro total: ${erroTotal}`);
  estadoVisual.textContent = `Época ${epoca + 1}/${epocas} — erro total: ${erroTotal}`;
}

// 5. Resultados finais e validação
console.log("\nPesos finais:", pesos);
console.log("Bias final:", bias);

console.log("\nTeste do Perceptron (porta AND):");
desenharGrafico();
entradas.forEach((entrada) => {
  const soma = dot(entrada, pesos) + bias;
  const predita = ativacao(soma);
  console.log(`Entrada: [${entrada}], Saída predita: ${predita}`);
  atualizarVisual(entrada, saidas[entradas.indexOf(entrada)], predita);
});