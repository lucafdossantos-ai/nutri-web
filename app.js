const banco = {

  // ================= ALIMENTOS =================
  "Arroz Branco":{cat:"Alimentos",kcal:130,carb:28,prot:2.7,fat:0.3},
  "Arroz Integral":{cat:"Alimentos",kcal:123,carb:26,prot:2.6,fat:1},
  "Arroz Parboilizado":{cat:"Alimentos",kcal:128,carb:27,prot:2.9,fat:0.4},
  "Arroz Japonês":{cat:"Alimentos",kcal:150,carb:33,prot:2.5,fat:0.4},
  "Feijão Carioca":{cat:"Alimentos",kcal:77,carb:14,prot:5,fat:0.5},
  "Feijão Preto":{cat:"Alimentos",kcal:76,carb:14,prot:4.8,fat:0.5},
  "Lentilha":{cat:"Alimentos",kcal:116,carb:20,prot:9,fat:0.4},
  "Grão-de-bico":{cat:"Alimentos",kcal:164,carb:27,prot:9,fat:2.6},
  "Quinoa":{cat:"Alimentos",kcal:120,carb:21,prot:4.4,fat:1.9},
  "Cuscuz":{cat:"Alimentos",kcal:112,carb:23,prot:3.8,fat:0.2},
  "Farinha de Mandioca":{cat:"Alimentos",kcal:365,carb:89,prot:1.6,fat:0.3},
  "Farinha de Milho":{cat:"Alimentos",kcal:365,carb:79,prot:8.1,fat:3.9},
  "Macarrão":{cat:"Alimentos",kcal:131,carb:25,prot:5,fat:1.1},
  "Macarrão Integral":{cat:"Alimentos",kcal:124,carb:26,prot:6,fat:1},
  "Lasanha":{cat:"Alimentos",kcal:135,carb:26,prot:5,fat:1.3},
  "Pão Francês":{cat:"Alimentos",kcal:265,carb:49,prot:9,fat:3.2},
  "Pão Integral":{cat:"Alimentos",kcal:247,carb:41,prot:13,fat:4.2},
  "Pão de Forma":{cat:"Alimentos",kcal:266,carb:50,prot:8.9,fat:3.3},
  "Tapioca":{cat:"Alimentos",kcal:330,carb:82,prot:0,fat:0},

  // ================= PROTEÍNAS =================
  "Peito de Frango":{cat:"Alimentos",kcal:165,carb:0,prot:31,fat:3.6},
  "Coxa de Frango":{cat:"Alimentos",kcal:209,carb:0,prot:26,fat:10.9},
  "Patinho":{cat:"Alimentos",kcal:219,carb:0,prot:27,fat:10},
  "Acém":{cat:"Alimentos",kcal:250,carb:0,prot:26,fat:15},
  "Alcatra":{cat:"Alimentos",kcal:240,carb:0,prot:26,fat:14},
  "Carne Moída":{cat:"Alimentos",kcal:250,carb:0,prot:26,fat:15},
  "Linguiça":{cat:"Alimentos",kcal:301,carb:2.2,prot:14,fat:26},
  "Salsicha":{cat:"Alimentos",kcal:301,carb:2.6,prot:12,fat:27},
  "Presunto":{cat:"Alimentos",kcal:145,carb:1.5,prot:21,fat:6},
  "Ovo":{cat:"Alimentos",kcal:155,carb:1.1,prot:13,fat:11},
  "Queijo Mussarela":{cat:"Alimentos",kcal:280,carb:3.1,prot:28,fat:17},
  "Queijo Branco":{cat:"Alimentos",kcal:264,carb:3,prot:17,fat:20},
  "Iogurte Natural":{cat:"Alimentos",kcal:59,carb:3.6,prot:10,fat:0.4},
  "Iogurte Grego":{cat:"Alimentos",kcal:97,carb:3.9,prot:9,fat:5},

  // ================= LEGUMES =================
  "Alface":{cat:"Alimentos",kcal:15,carb:2.9,prot:1.4,fat:0.2},
  "Tomate":{cat:"Alimentos",kcal:18,carb:3.9,prot:0.9,fat:0.2},
  "Cenoura":{cat:"Alimentos",kcal:41,carb:10,prot:0.9,fat:0.2},
  "Beterraba":{cat:"Alimentos",kcal:43,carb:10,prot:1.6,fat:0.2},
  "Abobrinha":{cat:"Alimentos",kcal:17,carb:3.1,prot:1.2,fat:0.3},
  "Berinjela":{cat:"Alimentos",kcal:25,carb:6,prot:1,fat:0.2},
  "Couve":{cat:"Alimentos",kcal:49,carb:9,prot:4.3,fat:0.9},
  "Espinafre":{cat:"Alimentos",kcal:23,carb:3.6,prot:2.9,fat:0.4},
  "Repolho":{cat:"Alimentos",kcal:25,carb:6,prot:1.3,fat:0.1},
  "Chuchu":{cat:"Alimentos",kcal:19,carb:4.5,prot:0.8,fat:0.1},

  // ================= FRUTAS =================
  "Banana":{cat:"Alimentos",kcal:89,carb:23,prot:1.1,fat:0.3},
  "Maçã":{cat:"Alimentos",kcal:52,carb:14,prot:0.3,fat:0.2},
  "Pera":{cat:"Alimentos",kcal:57,carb:15,prot:0.4,fat:0.1},
  "Uva":{cat:"Alimentos",kcal:69,carb:18,prot:0.7,fat:0.2},
  "Abacaxi":{cat:"Alimentos",kcal:50,carb:13,prot:0.5,fat:0.1},
  "Melancia":{cat:"Alimentos",kcal:30,carb:8,prot:0.6,fat:0.2},
  "Morango":{cat:"Alimentos",kcal:32,carb:7.7,prot:0.7,fat:0.3},
  "Kiwi":{cat:"Alimentos",kcal:61,carb:15,prot:1.1,fat:0.5},
  "Manga":{cat:"Alimentos",kcal:60,carb:15,prot:0.8,fat:0.4},
  "Mamão":{cat:"Alimentos",kcal:43,carb:11,prot:0.5,fat:0.3},

  // ================= BEBIDAS =================
  "Refrigerante":{cat:"Bebidas",kcal:42,carb:11,prot:0,fat:0},
  "Suco de Laranja":{cat:"Bebidas",kcal:45,carb:10,prot:0.7,fat:0.2},
  "Cerveja":{cat:"Bebidas",kcal:43,carb:3.6,prot:0.5,fat:0},
  "Vinho":{cat:"Bebidas",kcal:85,carb:2.6,prot:0.1,fat:0},

  // ================= BEBIDAS ZERO =================
  "Refrigerante Zero":{cat:"Bebidas Zero",kcal:0,carb:0,prot:0,fat:0},
  "Cerveja 0.0":{cat:"Bebidas Zero",kcal:14,carb:3,prot:0.2,fat:0},

  // ================= SUPLEMENTOS (MANTIDOS) =================
  "Whey Protein":{cat:"Suplementos",kcal:400,carb:8,prot:80,fat:6},
  "Whey Concentrado":{cat:"Suplementos",kcal:412,carb:10,prot:78,fat:7},
  "Whey Isolado":{cat:"Suplementos",kcal:360,carb:3,prot:85,fat:2},
  "Whey Hidrolisado":{cat:"Suplementos",kcal:350,carb:2,prot:88,fat:1},
  "Caseína":{cat:"Suplementos",kcal:360,carb:4,prot:80,fat:2},
  "Albumina":{cat:"Suplementos",kcal:370,carb:6,prot:82,fat:2},
  "BCAA":{cat:"Suplementos",kcal:240,carb:0,prot:60,fat:0},
  "Glutamina":{cat:"Suplementos",kcal:400,carb:0,prot:100,fat:0},
  "Creatina":{cat:"Suplementos",kcal:0,carb:0,prot:0,fat:0},
  "Pré-treino":{cat:"Suplementos",kcal:120,carb:20,prot:5,fat:1},
  "Pós-treino":{cat:"Suplementos",kcal:300,carb:50,prot:25,fat:2},
  "Hipercalórico":{cat:"Suplementos",kcal:380,carb:70,prot:20,fat:6},
  "Proteína Vegetal":{cat:"Suplementos",kcal:390,carb:12,prot:70,fat:6},
  "Multivitamínico":{cat:"Suplementos",kcal:0,carb:0,prot:0,fat:0},
  "Ômega 3":{cat:"Suplementos",kcal:900,carb:0,prot:0,fat:100},
  "Cafeína":{cat:"Suplementos",kcal:0,carb:0,prot:0,fat:0}
};

// ⚠️ O restante do código (login, TMB, gráfico circular, histórico, limpar dia, autocomplete)
// permanece EXATAMENTE IGUAL ao que você já está usando.
