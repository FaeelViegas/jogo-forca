let secretWordCategory;
let secretWordDrawn;
let attempt = 6;
let list = [];
const words = [
    { name: "ABACAXI", category: "FRUTAS" },
    { name: "BANANA", category: "FRUTAS" },
    { name: "CEREJA", category: "FRUTAS" },
    { name: "DAMASCO", category: "FRUTAS" },
    { name: "ESCARAMUJO", category: "FRUTAS" },
    { name: "FIGO", category: "FRUTAS" },
    { name: "GOIABA", category: "FRUTAS" },
    { name: "HIBISCO", category: "FRUTAS" },
    { name: "JACA", category: "FRUTAS" },
    { name: "KIWI", category: "FRUTAS" },
    { name: "LIMÃO", category: "FRUTAS" },
    { name: "MANGA", category: "FRUTAS" },
    { name: "NECTARINA", category: "FRUTAS" },
    { name: "PITANGA", category: "FRUTAS" },
    { name: "QUINCE", category: "FRUTAS" },
    { name: "ROMÃ", category: "FRUTAS" },
    { name: "SAPOTI", category: "FRUTAS" },
    { name: "TAMARINDO", category: "FRUTAS" },
    { name: "UMBU", category: "FRUTAS" },
    { name: "UVAS", category: "FRUTAS" },
    { name: "BRASIL", category: "PAISES" },
    { name: "ARGENTINA", category: "PAISES" },
    { name: "CHILE", category: "PAISES" },
    { name: "COLÔMBIA", category: "PAISES" },
    { name: "PERU", category: "PAISES" },
    { name: "VENEZUELA", category: "PAISES" },
    { name: "PARAGUAI", category: "PAISES" },
    { name: "URUGUAI", category: "PAISES" },
    { name: "BOLÍVIA", category: "PAISES" },
    { name: "EQUADOR", category: "PAISES" },
    { name: "CANADÁ", category: "PAISES" },
    { name: "MÉXICO", category: "PAISES" },
    { name: "CUBA", category: "PAISES" },
    { name: "FRANÇA", category: "PAISES" },
    { name: "ITÁLIA", category: "PAISES" },
    { name: "ESPANHA", category: "PAISES" },
    { name: "ALEMANHA", category: "PAISES" },
    { name: "PORTUGAL", category: "PAISES" },
    { name: "JAPÃO", category: "PAISES" },
    { name: "CHINA", category: "PAISES" },
    { name: "LEÃO", category: "ANIMAIS" },
    { name: "ELEFANTE", category: "ANIMAIS" },
    { name: "GIRAFA", category: "ANIMAIS" },
    { name: "TIGRE", category: "ANIMAIS" },
    { name: "URSO", category: "ANIMAIS" },
    { name: "COALA", category: "ANIMAIS" },
    { name: "GORILA", category: "ANIMAIS" },
    { name: "CAVALO", category: "ANIMAIS" },
    { name: "CACHORRO", category: "ANIMAIS" },
    { name: "GATO", category: "ANIMAIS" },
    { name: "CROCODILO", category: "ANIMAIS" },
    { name: "CANGURU", category: "ANIMAIS" },
    { name: "PINGUIM", category: "ANIMAIS" },
    { name: "ZEBRA", category: "ANIMAIS" },
    { name: "HIPOPÓTAMO", category: "ANIMAIS" },
    { name: "BALEIA", category: "ANIMAIS" },
    { name: "GOLFINHO", category: "ANIMAIS" },
    { name: "PANDA", category: "ANIMAIS" },
    { name: "RINOCERONTE", category: "ANIMAIS" },
    { name: "TARTARUGA", category: "ANIMAIS" },
    { name: "FRIENDS", category: "TV e CINEMA" },
    { name: "BREAKING BAD", category: "TV e CINEMA" },
    { name: "GAME OF THRONES", category: "TV e CINEMA" },
    { name: "STRANGER THINGS", category: "TV e CINEMA" },
    { name: "NARCOS", category: "TV e CINEMA" },
    { name: "THE WITCHER", category: "TV e CINEMA" },
    { name: "THE OFFICE", category: "TV e CINEMA" },
    { name: "LOST", category: "TV e CINEMA" },
    { name: "BLACK MIRROR", category: "TV e CINEMA" },
    { name: "VIKINGS", category: "TV e CINEMA" },
    { name: "THE BOYS", category: "TV e CINEMA" },
    { name: "LUCIFER", category: "TV e CINEMA" },
    { name: "SHERLOCK", category: "TV e CINEMA" },
    { name: "SUPERNATURAL", category: "TV e CINEMA" },
    { name: "O SENHOR DOS ANÉIS", category: "TV e CINEMA" },
    { name: "STAR WARS", category: "TV e CINEMA" },
    { name: "HARRY POTTER", category: "TV e CINEMA" },
    { name: "TITANIC", category: "TV e CINEMA" },
    { name: "O REI LEÃO", category: "TV e CINEMA" },
    { name: "JURASSIC PARK", category: "TV e CINEMA" },
    { name: "O EXTERMINADOR DO FUTURO", category: "TV e CINEMA" },
    { name: "CLUBE DA LUTA", category: "TV e CINEMA" },
    { name: "GLADIADOR", category: "TV e CINEMA" },
    { name: "MATRIX", category: "TV e CINEMA" },
    { name: "O ILUMINADO", category: "TV e CINEMA" },
    { name: "BLADE RUNNER", category: "TV e CINEMA" },
    { name: "CORINGA", category: "TV e CINEMA" },
    { name: "OS VINGADORES", category: "TV e CINEMA" },
    { name: "A BELA E A FERA", category: "TV e CINEMA" },
    { name: "PANICO", category: "TV e CINEMA" }
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

    console.log(secretWordDrawn);

    for (i = 0; i < secretWordDrawn.length; i++) {
        if (list[i] == undefined) {
            if (secretWordDrawn[i] == " ") {
                list[i] = " ";
                wordScreen.innerHTML = wordScreen.innerHTML + "<div class='lettersSpace'>" + list[i] + "</div>";
            } else {
                list[i] = "&nbsp;";
                wordScreen.innerHTML = wordScreen.innerHTML + "<div class='letters'>" + list[i] + "</div>";
            }
        } else {
            if (secretWordDrawn[i] == " ") {
                list[i] = " ";
                wordScreen.innerHTML = wordScreen.innerHTML + "<div class='lettersSpace'>" + list[i] + "</div>";
            } else {
                wordScreen.innerHTML = wordScreen.innerHTML + "<div class='letters'>" + list[i] + "</div>";
            }
        }
    }
}

function verifyLetter(letter) {
    document.getElementById("key-" + letter).disabled = true;
    if (attempt > 0) {
        styleLetter("key-" + letter, false);
        compareList(letter);
        assembleWord();
    }
}

function styleLetter(key, con) {
    if (con == false) {
        document.getElementById(key).style.background = "#C71585";
        document.getElementById(key).style.color = "#ffffff";
    } else {
        document.getElementById(key).style.background = "#30A5A5";
        document.getElementById(key).style.color = "#ffffff";
    }

}

function compareList(letter) {
    let win = true;
    const normalizedSecretWord = secretWordDrawn.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    const normalizedLetter = letter.normalize('NFD').replace(/[\u0300-\u036f']/g, "");

    const position = normalizedSecretWord.indexOf(normalizedLetter);
    if (position < 0) {
        attempt--;
        loadImage();
        if (attempt == 0) {
            openModal("OPS!", "Você perdeu 🥹... A palavra secreta era <br>" + secretWordDrawn);
        }
    } else {
        styleLetter("key-" + letter, true);
        for (let i = 0; i < secretWordDrawn.length; i++) {
            if (normalizedSecretWord[i] === normalizedLetter) {
                list[i] = secretWordDrawn[i];
            }
        }
    }

    for (let i = 0; i < secretWordDrawn.length; i++) {
        if (secretWordDrawn[i] !== list[i]) {
            win = false;
        }
    }

    if (win) {
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