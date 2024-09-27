const fs = require("fs").promises;

// 1. membaca file surat cinta naura
let loveLetter = fs.readFileSync("./index.txt", "utf-8")

// 2. proses print isi dari surat cinta
console.log(`ini baris 7 ${loveLetter}`)

// 3. membuat file baru untuk balas surat cinta
const loveFeedback = "Aku juga sayang nola!"
fs.writeFileSync("./balasan.txt", loveFeedback)

// fs.mkdir("COBA_BIKIN_FOLDER", () => {})

// menimpa isi konten dari index.txt
fs.writeFileSync("./index.txt", "Ketimpa ga cinta kita part 3?")


// Ini Async nya
// asynchronous file//write

async function bacaSuratCinta() {
    try {
        const bacaSuratCinta = await fs.readFile("./index.txt", "utf-8")
            .then((isiSuratCinta) => {console.log(`ini isi surat cinta ${bacaSuratCinta}`)})
    } catch (error) {
        console.log(error)
    }
}

bacaSuratCinta()

// promies
fs.readFile("./index.txt", "utf-8")
    .then((isiSuratCinta) => {
        loveLetter = isiSuratCinta
        console.log(`ini isi surat cinta dari promise ${isiSuratCinta}`)})
    .catch((error) => {
        console.log(error)})

console.log(`ini baris 21 ${loveLetter}`)