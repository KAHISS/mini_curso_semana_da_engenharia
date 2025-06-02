const tabs = {
    logica: document.getElementById('content-logica'),
    pandas: document.getElementById('content-pandas'),
    matplotlib: document.getElementById('content-matplotlib'),
    projeto: document.getElementById('content-projeto')
};
const buttons = {
    logica: document.getElementById('tab-logica'),
    pandas: document.getElementById('tab-pandas'),
    matplotlib: document.getElementById('tab-matplotlib'),
    projeto: document.getElementById('tab-projeto')
};
const analyzeDataBtn = document.getElementById('analyze-data-btn');
const analysisOutputDiv = document.getElementById('analysis-output');
const analysisTextP = document.getElementById('analysis-text');
const analysisLoadingDiv = document.getElementById('analysis-loading');

let cementPriceChartInstance = null;
let degradationLevelChartInstance = null;
let matplotlibChartInstance = null;
let finalProjectChartInstance = null;

function showTab(tabName) {
    // Destroy all existing chart instances before switching tabs
    if (cementPriceChartInstance) {
        cementPriceChartInstance.destroy();
        cementPriceChartInstance = null;
    }
    if (degradationLevelChartInstance) {
        degradationLevelChartInstance.destroy();
        degradationLevelChartInstance = null;
    }
    if (matplotlibChartInstance) {
        matplotlibChartInstance.destroy();
        matplotlibChartInstance = null;
    }
    if (finalProjectChartInstance) {
        finalProjectChartInstance.destroy();
        finalProjectChartInstance = null;
    }

    Object.keys(tabs).forEach(key => {
        tabs[key].classList.add('hidden');
        buttons[key].classList.remove('active');
    });

    tabs[tabName].classList.remove('hidden');
    buttons[tabName].classList.add('active');

    // Render chart only for the active tab that requires it
    if (tabName === 'pandas') {
        renderCementPriceChart();
        renderDegradationLevelChart();
    } else if (tabName === 'matplotlib') {
        renderMatplotlibChart();
    } else if (tabName === 'projeto') {
        renderFinalProjectChart();
    }
}

function toggleDetails(card) {
    const details = card.querySelector('.details');
    if (details) {
        details.classList.toggle('hidden');
    }
}

function renderCementPriceChart() {
    const ctx = document.getElementById('cementPriceChart').getContext('2d');
    
    const data = {
        labels: ['Marca A', 'Marca B', 'Marca C'],
        datasets: [{
            label: 'Preço por Metro de Cimento (R$)',
            data: [25.50, 28.00, 23.75],
            backgroundColor: [
                'rgba(224, 122, 95, 0.6)',
                'rgba(129, 178, 154, 0.6)',
                'rgba(61, 64, 91, 0.6)'
            ],
            borderColor: [
                'rgba(224, 122, 95, 1)',
                'rgba(129, 178, 154, 1)',
                'rgba(61, 64, 91, 1)'
            ],
            borderWidth: 1.5,
            borderRadius: 5
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Comparação de Preço do Cimento por Marca',
                font: {
                    size: 18,
                    family: 'Inter'
                },
                color: '#3D405B'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Preço por Metro (R$)',
                    font: {
                        size: 14,
                        family: 'Inter'
                    }
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Marca',
                    font: {
                        size: 14,
                        family: 'Inter'
                    }
                }
            }
        }
    };

    cementPriceChartInstance = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
}

function renderDegradationLevelChart() {
    const ctx = document.getElementById('degradationLevelChart').getContext('2d');
    
    const data = {
        labels: ['Área A', 'Área B', 'Área C'],
        datasets: [{
            label: 'Nível de Degradação (0-10)',
            data: [7.2, 4.5, 8.9],
            backgroundColor: [
                'rgba(242, 163, 103, 0.6)',
                'rgba(168, 218, 220, 0.6)',
                'rgba(29, 53, 87, 0.6)'
            ],
            borderColor: [
                'rgba(242, 163, 103, 1)',
                'rgba(168, 218, 220, 1)',
                'rgba(29, 53, 87, 1)'
            ],
            borderWidth: 1.5,
            borderRadius: 5
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Nível de Degradação por Área',
                font: {
                    size: 18,
                    family: 'Inter'
                },
                color: '#3D405B'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 10,
                title: {
                    display: true,
                    text: 'Nível de Degradação',
                    font: {
                        size: 14,
                        family: 'Inter'
                    }
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Área',
                    font: {
                        size: 14,
                        family: 'Inter'
                    }
                }
            }
        }
    };

    degradationLevelChartInstance = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
}

function renderMatplotlibChart() {
    const ctx = document.getElementById('matplotlibChart').getContext('2d');
    
    const data = {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
            label: 'Vendas Mensais',
            data: [120, 150, 130, 180, 200, 170],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
            borderWidth: 2
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    font: {
                        family: 'Inter'
                    }
                }
            },
            title: {
                display: true,
                text: 'Vendas ao Longo do Tempo (Simulado)',
                font: {
                    size: 18,
                    family: 'Inter'
                },
                color: '#3D405B'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Vendas',
                    font: {
                        size: 14,
                        family: 'Inter'
                    }
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Mês',
                    font: {
                        size: 14,
                        family: 'Inter'
                    }
                }
            }
        }
    };

    matplotlibChartInstance = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
}

function renderFinalProjectChart() {
    const ctx = document.getElementById('finalProjectChart').getContext('2d');

    const data = {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [
            {
                label: 'Residencial (GWh)',
                data: [100, 110, 105, 120, 115, 130],
                borderColor: 'rgba(224, 122, 95, 1)',
                backgroundColor: 'rgba(224, 122, 95, 0.2)',
                fill: false,
                tension: 0.1,
                borderWidth: 2
            },
            {
                label: 'Industrial (GWh)',
                data: [80, 85, 90, 88, 92, 95],
                borderColor: 'rgba(129, 178, 154, 1)',
                backgroundColor: 'rgba(129, 178, 154, 0.2)',
                fill: false,
                tension: 0.1,
                borderWidth: 2
            },
            {
                label: 'Comercial (GWh)',
                data: [60, 65, 62, 70, 68, 75],
                borderColor: 'rgba(61, 64, 91, 1)',
                backgroundColor: 'rgba(61, 64, 91, 0.2)',
                fill: false,
                tension: 0.1,
                borderWidth: 2
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    font: {
                        family: 'Inter'
                    }
                }
            },
            title: {
                display: true,
                text: 'Consumo de Energia Mensal por Setor (GWh)',
                font: {
                    size: 18,
                    family: 'Inter'
                },
                color: '#3D405B'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Consumo (GWh)',
                    font: {
                        size: 14,
                        family: 'Inter'
                    }
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Mês',
                    font: {
                        size: 14,
                        family: 'Inter'
                    }
                }
            }
        }
    };

    finalProjectChartInstance = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
}

// Gemini API Integration
analyzeDataBtn.addEventListener('click', async () => {
    analysisOutputDiv.classList.remove('hidden');
    analysisTextP.classList.add('hidden');
    analysisLoadingDiv.classList.remove('hidden');

    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];
    const residentialData = [100, 110, 105, 120, 115, 130];
    const industrialData = [80, 85, 90, 88, 92, 95];
    const commercialData = [60, 65, 62, 70, 68, 75];

    const totalData = months.map((_, i) => 
        residentialData[i] + industrialData[i] + commercialData[i]
    );

    let prompt = `Analise os seguintes dados de consumo de energia (em GWh) por setor ao longo dos meses e forneça uma breve interpretação das tendências observadas para cada setor e para o consumo total, destacando picos e quedas.
Dados:
Meses: ${months.join(', ')}
Consumo Residencial: ${residentialData.join(', ')}
Consumo Industrial: ${industrialData.join(', ')}
Consumo Comercial: ${commercialData.join(', ')}
Consumo Total: ${totalData.join(', ')}`;

    let chatHistory = [];
    chatHistory.push({ role: "user", parts: [{ text: prompt }] });

    const payload = { contents: chatHistory };
    const apiKey = ""; 
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        const result = await response.json();

        if (result.candidates && result.candidates.length > 0 &&
            result.candidates[0].content && result.candidates[0].content.parts &&
            result.candidates[0].content.parts.length > 0) {
            const text = result.candidates[0].content.parts[0].text;
            analysisTextP.innerText = text;
        } else {
            analysisTextP.innerText = 'Não foi possível gerar a análise. Tente novamente.';
        }
    } catch (error) {
        console.error('Erro ao chamar a API Gemini:', error);
        analysisTextP.innerText = 'Ocorreu um erro ao conectar com a IA. Por favor, tente novamente mais tarde.';
    } finally {
        analysisLoadingDiv.classList.add('hidden');
        analysisTextP.classList.remove('hidden');
    }
});

// Initialize the first tab on load
document.addEventListener('DOMContentLoaded', () => {
    showTab('logica');
});