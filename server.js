const http = require("http")
const url = require("url")
const fs = require("fs")
const fsAync = require("fs").promises

const fileUtama = fs.readFileSync("./index.txt", "utf-8")
console.log(fileUtama)

// express = framework third party untuk memudahkn HTTP
const server = http.createServer((request, response) => {
    console.log(request.url)
    const pathUrl = request.url

    if (pathUrl === "/yogi") {
        response.end("Ini tugas punya yogi")
    } else if (pathUrl === "/budi") {
        response.end("Hellow ke tim 7")
    } else if (pathUrl === "/imam") {
        response.end("Hellow imam")
    } else {
        response.end("Ini gak ada ! Status code : 404")
    }   
})

server.listen(3000, '127.0.0.1', () => {
    console.log("Aplikasi jalan ini di port 3000")    
})

async function rewriteFromImam(filepath, content) {
    try {
        const rewriteContent = await fs.readFile(filepath.txt, content)
        console.log("sukses nulis ulang file")
        return;
    } catch (error) {
        console.log(error)
    }
}

rewriteFromImam("./index.txt", "utf-8")
console.log(fileUtama)