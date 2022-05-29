// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name : "Monica",
    gender : "female",
    age : 17,
    email : "monica@dingdong.com",
    favoriteColor : [...new Set(['yellow', 'pink', 'white', 'purple'])],
    isHavePet : true,
    education : [
        {name : "SD 01", city : "Jakarta", graduate : "2006"},
        {name : "SMP 02", city : "Jakarta", graduate : "2019"},
        {name : "SMA 3", city : "Tangerang"},
    ],
    favoriteRestaurant : [...new Set(
        [
            "bento",
            "sushi",
            "pancake",
            "eggy",
            "tempura",
            "bento",
            "eggy",
            "padang",
            "tteok",
            "sushi",
            "sushi"
        ]
    )]
}; 

const secondUser = {
    name : "Wendy",
    gender : "male",
    age : 23,
    email : "wendy@dingdong.com",
    favoriteColor : [...new Set(['blue', 'black', 'grey'])],
    isHavePet : false,
    education : [
        {name : "SD 02", city : "Jakarta", graduate : "2010"},
        {name : "SMP 03", city : "Bogor", graduate : "2013"},
        {name : "SMA 01", city : "Surabaya", graduate : "2016"},
    ],
    favoriteRestaurant : [...new Set(
        [
            "tempura",
            "bento",
            "sushi",
            "pancake",
            "padang",
            "katsu",
            "geprek",
            "pancake",
            "eggy"
        ]
    )]
}; 

colorOne = ['pink', 'pink', 'yellow', 'red', 'blue'];

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

//! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};