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
let ageChartInstance = null;
let matplotlibChartInstance = null;
let finalProjectChartInstance = null;

function showTab(tabName) {
    // Destroy all existing chart instances before switching tabs
    if (ageChartInstance) {
        ageChartInstance.destroy();
        ageChartInstance = null;
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
        renderAgeChart();
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

function renderAgeChart() {
    const ctx = document.getElementById('ageChart').getContext('2d');
    
    const data = {
        labels: ['Alice', 'Bob', 'Charlie'],
        datasets: [{
            label: 'Idade dos Participantes',
            data: [25, 30, 35],
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
                text: 'Comparação de Idades',
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
                    text: 'Idade',
                    font: {
                        size: 14,
                        family: 'Inter'
                    }
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Nome',
                    font: {
                        size: 14,
                        family: 'Inter'
                    }
                }
            }
        }
    };

    ageChartInstance = new Chart(ctx, {
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

// Initialize the first tab on load
document.addEventListener('DOMContentLoaded', () => {
    showTab('logica');
});