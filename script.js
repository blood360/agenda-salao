const serviceSelect = document.getElementById("service");
const dateInput = document.getElementById("date");
const timeSelect = document.getElementById("time");
const bookBtn = document.getElementById("bookBtn");
const infoDiv = document.getElementById("info");
const emailInput = document.getElementById("email");

const professionals = {
    "Mão": "Profissional A",
    "Pé": "Profissional B",
    "Mão e Pé": "Profissional C",
    "Corte": "Profissional D",
    "Escova": "Profissional E",
    "Coloração": "Profissional F",
    "Relaxante": "Profissional G",
    "Modeladora": "Profissional H",
    "Noiva (Pacote Completo)": "Especialista Noivas",
    "Debutante (15 anos)": "Especialista Debutantes"
};

const prices = {
    "Mão": 20,
    "Pé": 20,
    "Mão e Pé": 30,
    "Corte": 25,
    "Escova": 30,
    "Coloração": 50,
    "Relaxante": 40,
    "Modeladora": 35,
    "Noiva (Pacote Completo)": 600,
    "Debutante (15 anos)": 500
};

function updateInfo() {
    const service = serviceSelect.value;
    const date = dateInput.value;
    const time = timeSelect.value;
    const email = emailInput.value;

    if (!service || !date || !time || !email) {
        infoDiv.textContent = "Por favor, preencha todos os campos.";
        bookBtn.disabled = true;
        return;
    }

    const professional = professionals[service];
    const price = prices[service];

    infoDiv.innerHTML = `
        <strong>Profissional:</strong> ${professional}<br>
        <strong>Valor:</strong> R$ ${price}
    `;

    bookBtn.disabled = false;
}

serviceSelect.addEventListener("change", updateInfo);
dateInput.addEventListener("change", updateInfo);
timeSelect.addEventListener("change", updateInfo);
emailInput.addEventListener("input", updateInfo);

bookBtn.addEventListener("click", () => {
    const service = serviceSelect.value;
    const date = dateInput.value;
    const time = timeSelect.value;
    const email = emailInput.value;
    const professional = professionals[service];
    const price = prices[service];

    const templateParams = {
        service,
        date,
        time,
        email,
        professional,
        price
    };

    emailjs.send("service_vf6v9g6", "btemplate_ftll0cb", templateParams)
        .then(() => {
            alert("Agendamento realizado com sucesso!");
        })
        .catch(error => {
            alert("Erro ao enviar o agendamento. Tente novamente.");
            console.error(error);
        });
});
