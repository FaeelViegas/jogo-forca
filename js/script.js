let secretWordCategory;
let secretWordDrawn;
let attempt = 6;
let list = [];
const words = [
    { name: "BRASIL", category: "PAISES" },
    { name: "ARGENTINA", category: "PAISES" },
    { name: "ALEMANHA", category: "PAISES" },
    { name: "FRANÇA", category: "PAISES" },
    { name: "JAPÃO", category: "PAISES" },
    { name: "CANADÁ", category: "PAISES" },
    { name: "AUSTRÁLIA", category: "PAISES" },
    { name: "CHINA", category: "PAISES" },
    { name: "ITÁLIA", category: "PAISES" },
    { name: "PIZZA", category: "COMIDA" },
    { name: "HAMBURGER", category: "COMIDA" },
    { name: "LASANHA", category: "COMIDA" },
    { name: "TACO", category: "COMIDA" },
    { name: "SUSHI", category: "COMIDA" },
    { name: "PASTEL", category: "COMIDA" },
    { name: "COXINHA", category: "COMIDA" },
    { name: "BRIGADEIRO", category: "COMIDA" },
    { name: "FEIJOADA", category: "COMIDA" },
    { name: "CHURRASCO", category: "COMIDA" },
    { name: "CACHORRO", category: "ANIMAL" },
    { name: "GATO", category: "ANIMAL" },
    { name: "ELEFANTE", category: "ANIMAL" },
    { name: "GIRAFA", category: "ANIMAL" },
    { name: "LEÃO", category: "ANIMAL" },
    { name: "TIGRE", category: "ANIMAL" },
    { name: "PÁSSARO", category: "ANIMAL" },
    { name: "PEIXE", category: "ANIMAL" },
    { name: "RATO", category: "ANIMAL" },
    { name: "COELHO", category: "ANIMAL" },
    { name: "TITANIC", category: "FILME" },
    { name: "AVATAR", category: "FILME" },
    { name: "INCEPTION", category: "FILME" },
    { name: "INTERSTELLAR", category: "FILME" },
    { name: "GLADIADOR", category: "FILME" },
    { name: "MATRIX", category: "FILME" },
    { name: "CORINGA", category: "FILME" },
    { name: "BATMAN", category: "FILME" },
    { name: "VINGADORES", category: "FILME" },
    { name: "SUPERMAN", category: "FILME" },
    { name: "TUBARÃO", category: "FILME" },
    { name: "ESPANHA", category: "PAISES" },
    { name: "PORTUGAL", category: "PAISES" },
    { name: "RÚSSIA", category: "PAISES" },
    { name: "ÍNDIA", category: "PAISES" },
    { name: "MÉXICO", category: "PAISES" },
    { name: "EGITO", category: "PAISES" },
    { name: "SUÍÇA", category: "PAISES" },
    { name: "MACARRÃO", category: "COMIDA" },
    { name: "SORVETE", category: "COMIDA" },
    { name: "BOLO", category: "COMIDA" },
    { name: "SALADA", category: "COMIDA" },
    { name: "CHOCOLATE", category: "COMIDA" },
    { name: "PÃO", category: "COMIDA" },
    { name: "BISCOITO", category: "COMIDA" },
    { name: "TORTA", category: "COMIDA" },
    { name: "FRUTAS", category: "COMIDA" },
    { name: "CAVALO", category: "ANIMAL" },
    { name: "VACA", category: "ANIMAL" },
    { name: "OVELHA", category: "ANIMAL" },
    { name: "CABRA", category: "ANIMAL" },
    { name: "PANDA", category: "ANIMAL" },
    { name: "LOBO", category: "ANIMAL" },
    { name: "RAPOSA", category: "ANIMAL" },
    { name: "URSO", category: "ANIMAL" },
    { name: "MACACO", category: "ANIMAL" },
    { name: "CROCODILO", category: "ANIMAL" },
    { name: "THOR", category: "FILME" },
    { name: "MAÇÃ", category: "FRUTA" },
    { name: "BANANA", category: "FRUTA" },
    { name: "LARANJA", category: "FRUTA" },
    { name: "MORANGO", category: "FRUTA" },
    { name: "ABACAXI", category: "FRUTA" },
    { name: "MANGA", category: "FRUTA" },
    { name: "UVA", category: "FRUTA" },
    { name: "PÊSSEGO", category: "FRUTA" },
    { name: "MELANCIA", category: "FRUTA" },
    { name: "KIWI", category: "FRUTA" },
    { name: "PERA", category: "FRUTA" },
    { name: "CEREJA", category: "FRUTA" },
    { name: "FRAMBOESA", category: "FRUTA" },
    { name: "MELÃO", category: "FRUTA" },
    { name: "COCO", category: "FRUTA" }
];

createSecretWord();
function createSecretWord() {
    const indexWord = parseInt(Math.random() * words.length);

    secretWordDrawn = words[indexWord].name;
    secretWordCategory = words[indexWord].category;
}
assembleWord();
function assembleWord() {
    const category = document.getElementById("category");
    category.innerHTML = secretWordCategory;

    const wordScreen = document.getElementById("secret-word");
    wordScreen.innerHTML = "";

    for (i = 0; i < secretWordDrawn.length; i++) {
        if (list[i] == undefined) {
            list[i] = "&nbsp;";
            wordScreen.innerHTML = wordScreen.innerHTML + "<div class='letters'>" + list[i] + "</div>";
        } else {
            wordScreen.innerHTML = wordScreen.innerHTML + "<div class='letters'>" + list[i] + "</div>";
        }
    }
}

function verifyLetter(letter) {
    document.getElementById("key-" + letter).disabled = true;
    if (attempt > 0) {
        styleLetter("key-" + letter);
        compareList(letter);
        assembleWord();
    }
}

function styleLetter(key) {
    document.getElementById(key).style.background = "#30A5A5";
    document.getElementById(key).style.color = "#ffffff";
}

function compareList(letter) {
    let win = true;
    const position = secretWordDrawn.indexOf(letter);
    if (position < 0) {
        attempt--;
        loadImage();
        if (attempt == 0) {
            openModal("OPS!", "Você perdeu 🥹... A palavra secreta era <br>" + secretWordDrawn);
        }
    } else {
        for (i = 0; i < secretWordDrawn.length; i++) {
            if (secretWordDrawn[i] == letter) {
                list[i] = letter;
            }
        }
    }
    for (i = 0; i < secretWordDrawn.length; i++) {
        if (secretWordDrawn[i] != list[i]) {
            win = false;
        }
    }

    if (win == true) {
        openModal("PARABÉNS!", "Você acertou...🤗");
        attempt = 0;
    }
}

function loadImage() {
    switch (attempt) {
        case 5:
            document.getElementById("image").style.background = "url('./assets/forca01.png')";
            break;
        case 4:
            document.getElementById("image").style.background = "url('./assets/forca02.png')";
            break;
        case 3:
            document.getElementById("image").style.background = "url('./assets/forca03.png')";
            break;
        case 2:
            document.getElementById("image").style.background = "url('./assets/forca04.png')";
            break;
        case 1:
            document.getElementById("image").style.background = "url('./assets/forca05.png')";
            break;
        case 0:
            document.getElementById("image").style.background = "url('./assets/forca06.png')";
            break;
        default:
            document.getElementById("image").style.background = "url('./assets/forca.png')";
            break;
    }
}

function openModal(title, message) {
    let modalTitle = document.getElementById("modalLongTitle");
    modalTitle.innerText = title;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = message;
    $("#pri-modal").modal({
        show: true
    });
}

function restartGame() {
    location.reload();
}