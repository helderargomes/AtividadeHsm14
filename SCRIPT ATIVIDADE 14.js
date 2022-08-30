db.getCollection("vendas").find({Empresa: "15/Empresa"})
db.getCollection("vendas").deleteOne({Empregado: "54/José Santos"})
db.getCollection("vendas").deleteOne({Regiao})
db.getCollection("vendas").updateOne({Pais: "Brasil"}, {$set: {CEP: "11111"}})