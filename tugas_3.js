const biodata ={
 name : "Rahmat Furqon",//string,
 age : 25,//number,
hobbies : ["Membaca","Bermain game","Sport"],//array
 isMerried : false,//boolean

schoolList : [{
    nameSchool : "Man 1 Payakumbuh",
    yearin : "2012",
    yearOut :"2015",
    major : "-",},
    {
    nameSchool  :"UPN Veteran Jakarta",
    yearin:"2015",
    yearOut :"2019",
    major   :"Teknik Informatika",
    },

],//array
skill : [{
    skillName : "Javascript",
    level : "Beginner",
},
    {
    skillName : "HTML & Css",
    level : "Beginner",  
    },

],
}
console.log(`nama saya adalah ${biodata.name}`);
console.log(`saya berumur ${biodata.age}`)
console.log(`saya mempunya hoby : ${biodata.hobbies}`)
isMerried=biodata.isMerried;
if (isMerried==true){
    console.log("sudah menikah")
}else{
    console.log("belum menikah")
}
console.log(`Pendidikan terakhir saya adalah ${biodata.schoolList[1].nameSchool} tahun masuk saya ${biodata.schoolList[1].yearin} tahun saya selesai ${biodata.schoolList[1].yearOut} dengan jurusan ${biodata.schoolList[1].major}   `)
console.log(`Skill saya ${biodata.skill[0].skillName} dan ${biodata.skill[1].skillName} dengan level ${biodata.skill[1].level} `)
console.log(``)


console.log(biodata)

console.log("nomor 2 --------------");
function mencariRata2(BahasaIndonesia,BahasaInggris,Matematika,Ipa){
    console.log(`Masukkan nilai Bahasa indonesia : ${BahasaIndonesia}`);
    console.log(`Masukkan nilai Bahasa indonesia : ${BahasaInggris}`);
    console.log(`Masukkan nilai Bahasa indonesia : ${Matematika}`);
    console.log(`Masukkan nilai Bahasa indonesia : ${Ipa}`);
    let rata2=(BahasaIndonesia+BahasaInggris+Matematika+Ipa)/4;
    console.log(`rata-rata nilai adalah : ${rata2}`)
    
    if (rata2>=90 && rata2<=100){
      console.log(`Grade = A`)
    } else if(rata2>=80 && rata2<=100){
      console.log(`Grade = B`)  
    }else if(rata2>=70 && rata2<=100){
      console.log(`Grade = c`)  
    }else if(rata2>=60 && rata2<=100){
      console.log(`Grade = d`)  
    }else if(rata2>=0 && rata2<60){
      console.log(`Grade = e`)  
    }else{
      console.log("tidak ada grade dikarenakan rata-rata nilai yang di masukan melebihi 100 atau kurang dari 100, mohon masukan nilai dibawah 100");
    }
    }
    mencariRata2(120,100,300,200);
console.log("nomor 3------------------")
function printSegitiga(b){
    if(b.toFixed){
        let a = '';
      for(let i = b; i >= 1; i--){
          for(let j = 1; j <= i; j++)
              a += j;
          console.log(a);
          a = '';}
      }else{
        console.log("yang anda masukan bukan number mohon di ubah kembali")
      }
      }
printSegitiga(5);


console.log("nomor 4----------")
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  }
  let data2 = {...data,name: "Rahmat Furqon",email:"rahmatfurqon0@gmail.comh",Hobby:["Sport","Membaca","Main Game"]};
  console.log(data2);
  let street1=data.address.street;
  let city1=data.address.city;
  console.log(`untuk nama jalan adalah ${street1} dan untuk city adalah ${city1}`);
  console.log("menggunakan destructuring");
  let {street,city}=data.address;
  console.log(`untuk nama jalan adalah ${street1} dan untuk city adalah ${city1}`);
