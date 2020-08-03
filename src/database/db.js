//importar a dependencia do sqlite3

const sqlite3 = require('sqlite3').verbose()

//criar objeto para operar o database

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//utilizar o objeto de banco para operaçoes

// db.serialize(() => {
//     //com comandos sql eu vou:

//     //1. criar uma tabela 
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address TEXT2,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     //2. inserir dados
//     const query= `
//     INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//     ) VALUES (?,?,?,?,?,?,?);`
    
//     const values = [
//         "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
//         "Colectoria",
//         "guilherme gemballa, jardim amaerica",
//         "nº260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Residuos Eletronicos, Lampadas"
//     ]

//     function afterInsertData(err){
//         if(err){
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }

//     db.run(query, values, afterInsertData)

// //      //3. consultar dados da tabela
// //     db.all("SELECT * FROM places", function(err, rows){
// //         if(err){
// //             return console.log(err)
// //         }

// //         console.log("Aqui estão seus registros.")
// //         console.log(rows)
// //     })


// //     //4. deletar um dado
// //     db.run(`DELETE FROM places WHERE id = ?`, [1], function(){
// //         if(err){
// //             return console.log(err)
// //         }

// //         console.log("Registro deletado com sucesso.")
// //     })
//  }) 