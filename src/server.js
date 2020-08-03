const express = require("express")

const server = express()

//pegar o database
const db = require("./database/db")

//configurar pasta publica
server.use(express.static("public"))

//habilitar o uso do req.body
server.use(express.urlencoded({extended: true}))


//utilizando temple engine

const nunjucks = require("nunjucks")

nunjucks.configure("src/views", {
    express: server,
    noCache: true
})
//configurar caminhos da app
//pag inicial
server.get("/", (req, res) => {
    return res.render("index.html", { title: "Um titulo" })
})

server.get("/create-point", (req, res) => {
    //query trabalha com as urls
    //req.query

    return res.render("create-point.html")
   
})

server.post("/savepoint", (req,res) => {

    req.body
    const query= `
     INSERT INTO places (
         image,
         name,
         address,
         address2,
         state,
         city,
         items
     ) VALUES (?,?,?,?,?,?,?);`

const values = [
            req.body.image,
            req.body.name,
            req.body.address,
            req.body.address2,
            req.body.state,
            req.body.city,
            req.body.items

        ]
    
        function afterInsertData(err){
            if(err){
                console.log(err)
                return res.send("Erro no cadastro!!")
            }
    
            console.log("Cadastrado com sucesso")
            console.log(this)

            return res.render("create-point.html", {saved:true})
        }
    
})


server.get("/search", (req, res) => {

    const search = req.query.search

    if (search == ""){
        return res.render("search-results.html", {total: 0})
    }


    db.all(`SELECT * FROM places WHERE city LIKE= '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log(err)
        }
        const total = rows.length
        //mostrar a pagina html com os dados do banco
        return res.render("create-point.html", {places: rows, total: total})
    })
    return res.render("search-results.html")
})

//ligar o servidor
server.listen(3000)
