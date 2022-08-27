
console.log("Nomor 1________________________")
function identitas(nama,umur,email,isMerried){
    console.log("Halo "+nama);
    console.log("saya berumur "+umur)
    console.log("alamat email saya "+email)
    if (isMerried==true){
        console.log("Status saya Saya sudah menikah");
    }else{
        console.log("Status saya Belum menikah");
}}
identitas("Rahmat Furqon",25,"Rahmatfurqon0@gmail.com",false);

let address1 ={
    kelurahan : "Rawamangun",
    kecamatan : "Pulogadung",
    kota : "Jakarta Timur",
};
function alamat(address1){
    console.log(address1);
}
alamat(address1);
const myHobby = ["Membaca","Bermain game","Sport"];
function hobbies(myHobby){
    console.log(myHobby)
}
hobbies(myHobby);

console.log("Nomor 1 yang b-------------------------");
function printSegitiga(nilai){
    let a = '';
    for(let i = 1; i <= nilai; i++){
        for(let j = 0; j < i; j++)
            a += i;
        console.log(a);
        a = '';
    }
    }
    printSegitiga(5);

console.log("Nomor 1 yang c-------------------------");
function printGenapGanjil(nilai){
    for (i=1;i<=nilai;i++){
        if (i % 2==0)
        console.log(i + " merupakan bilangan genap")
        else
        console.log(i + " merupakan bilangan ganjil")
    }
    }
    printGenapGanjil(5);


console.log("Nomor 2_____________________");
console.log("Push adalah menambahkan satu atau lebih elemen ke akhir sebuah array.");
let minumanKesukaan=["Jus terong belanda","Jus Alpukat","Nu Milk Tea","C1000"];
let nambah= minumanKesukaan.push("Teh tarik");
console.log(minumanKesukaan);
console.log('------------------')
console.log("Pop adalah  menghapus elemen terakhir dari suatu array dan mengembalikan elemen yang dihapus.");
let minumanKesukaan2=["Jus terong belanda","Jus Alpukat","Nu Milk Tea","C1000"];
let dikurangi= minumanKesukaan2.pop();
console.log(minumanKesukaan2);
console.log('------------------')
console.log("Filter adalah Method yang digunakan untuk menyeleksi element berdasarkan kondisi yang telah di tentukan");
const bilangan = [1, 2, 3, 4, 5, 6, 7, 8];
let ganjil = bilangan.filter((num) => num % 2);
console.log(ganjil);
console.log('------------------')
console.log("Reduce digunakan untuk menggabungkan semua elemen array dan mengembalikan satu nilai ");
const sumbangan = [1000, 2000, 1000, 8000, 7500];
let total = sumbangan.reduce((total, sumbang) => {
  return total + sumbang;
});

console.log(total);

console.log("-----------------------");
console.log("nomor 3");
let data ={
    id : 1,
    name : "Rahmat Furqon",
    gender :"Male",
    height : " 168 cm",
    educational :[{
        periode : "2013-2016",
        school : "Kalam kudu high school",
        major : "-",}
    ],
    phone :{
        primari :"085886861739",
        secondary :"0082342343"
    }
}

let newEducation={
    periode:"2016-2020",
    school:"state university jakarta",
    major:"accountancy"
}
console.log("sebelum di destructuring");
let primari1=data.phone.primari;
let secondary1=data.phone.secondary;
console.log(`untuk nomor hp utama adalah ${primari1} dan untuk nomor cadangan adalah ${secondary1}`);
console.log("menggunakan destructuring");
let {primari,secondary}=data.phone
console.log(`untuk nomor hp utama adalah ${primari} dan untuk nomor cadangan adalah ${secondary}`);
console.log("menggabungkan ")
newData ={...data,...newEducation};
console.log(newData)


console.log("------------------------");
console.log("Nomor 4");
let harga = (jmlMakanan,harga)=>{
let bayar= jmlMakanan*harga;
let diskon=bayar*35/100;
    
    if (bayar>=60000 && diskon>50000 ){
        diskon=50000;
        console.log(`total harga adalah : ${bayar}`);
        console.log(`potongan :${diskon}`);
        console.log(`subTotal : ${bayar-diskon}`);
        
    } else if(bayar>=60000 && diskon <=50000){
        console.log(`total harga adalah : ${bayar}`);
        console.log(`potongan :${diskon}`);
        console.log(`subTotal : ${bayar-diskon}`);
        
    }
    else{
        console.log(`total harga adalah : ${bayar}`);
        console.log(`potongan : 0`);
        console.log(`subTotal : ${bayar}`);
    }
 }
harga(4,240000);



