
//Mendapatkan Element Tombol
const tombol = document.getElementById("tombolCek");

//Mendapatkan Elemen Output
let namaUser = document.getElementById("namaKu");
let uangUser = document.getElementById("uangKu");
let angkaUser = document.getElementById("angKu");
let angkaRobot = document.getElementById("angKom");
let status = document.getElementById("status");
let pendapatan = document.getElementById("penDapatan");

//Membuat Variabel hadiah
let hadiah;


//Memberi event pada tombol
tombol.addEventListener("click",function(){
	let angkaKom = Math.round(Math.random()* 100 + 1);
    let nama = document.getElementById("namaUser").value;
    let uang = document.getElementById("uang").value;
	let angka = document.getElementById("angkaTebakan").value;
    //Cek Inputan
    if (nama=="" || uang == "" || angka == "" ){
        alert("Isi data terlebih dahulu");
    }else{
        if (angka==angkaKom){
            hadiah = uang * 10;
            namaUser.innerHTML = nama;
            uangUser.innerHTML =  "Rp "+uang;
            angkaUser.innerHTML = angka;
            angkaRobot.innerHTML = angkaKom;
            status.style.color = "green";
            status.innerHTML = "Menang";
            pendapatan.innerHTML = "Rp "+hadiah;
        }else{
            let selisih = Math.max(angka,angkaKom) - Math.min(angka,angkaKom);
            let potong = selisih *uang/100;
            hadiah = uang - potong;
            namaUser.innerHTML = nama;
            uangUser.innerHTML =  "Rp "+uang;
            angkaUser.innerHTML = angka;
            angkaRobot.innerHTML = angkaKom;
            status.style.color = "red";
            status.innerHTML = "Kalah";
            pendapatan.innerHTML = "Rp "+hadiah;
        }
    }
});

//Mendapatkan elemen pertanyaan
const pertanyaan = document.getElementsByClassName("boxPertanyaan");
for(let i=0;i<pertanyaan.length;i++){
    //memberi event pada setiap pertanyaan ketika di klik
    pertanyaan[i].addEventListener("click",function(){
        this.classList.toggle('active');
    })
}


