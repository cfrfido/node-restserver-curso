// ===============================
// Puerto
// ===============================
process.env.PORT = process.env.PORT || 3000;


// ===============================
// Entorno
// ===============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===============================
// Base de datos
// ===============================
let urlDB;

if ( process.env.NODE_ENV === 'dev' ) {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://cfrfido:kiGyTH4hbKsg18G2@cluster0.kbzrx.mongodb.net/cafe';
}

process.env.NODE_ENV = urlDB;