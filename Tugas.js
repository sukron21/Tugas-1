let name = "Rahmat Furqon";//string
let age = 25;//number
let isMerried = false;//boolean
let email = "Rahmatfurqon0@gmail.com";//string
let address ={
    kelurahan : "Rawamangun",
    kecamatan : "Pulogadung",
    kota : "Jakarta Timur",
};//object
let hobbies = ["Membaca","Bermain game","Sport"];//array
console.log(`Nama saya adalah : ${name}`);
console.log(`Saya berumur : ${age}`);
//bolean
if (isMerried==true){
    console.log("Status saya Saya sudah menikah");
}else{
    console.log("Status saya Belum menikah");
}  
console.log(`Email saya adalah : ${email}`); 
console.log(`saya beralamat di kelurahan ${address.kelurahan},kecamatan ${address.kecamatan}, kota ${address.kota}`);
console.log(`Hoby saya adalah : ${hobbies}`);
console.log("-----------------------------")


//menentukan bilangan genap dan ganjil
const printGenapGanjil=5;
for (i=1;i<=printGenapGanjil;i++){
    if (i % 2==0)
    console.log(i + " merupakan bilangan genap")
    else
    console.log(i + " merupakan bilangan ganjil")
}
console.log("-----------------------------")
//membuat segitiga
const printSegitiga =5;
let a = '';
for(let i = 1; i <= printSegitiga; i++){
    for(let j = 0; j < i; j++)
        a += i;
    console.log(a);
    a = '';
}