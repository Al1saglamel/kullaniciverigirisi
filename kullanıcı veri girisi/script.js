document.querySelector("#isimForm").addEventListener("submit", function (e) 
{
    

    const ad = document.querySelector("#ad").value;
    const Soyad = document.querySelector("#Soyad").value;
    const yas = document.querySelector("#yas").value;
    const meslek = document.querySelector("#meslek").value;


   
    const isimlerim = new İsimler(ad, Soyad, yas, meslek);
    const ui = new UI();

    
    if (ad == "" || Soyad == "" || yas == "" || meslek == "") {
        ui.uyarilar("Boş alan Bırakmayınız !", "hata");
    } else {

        
        ui.isimEkle(isimlerim);

        
        ui.uyarilar("Ekleme Başarılı !", "onay");

        
        ui.formTemizle();
    }
    e.preventDefault();
});


function İsimler(ad, Soyad, yas, meslek) {
    this.ad = ad;
    this.Soyad = Soyad;
    this.yas = yas;
    this.meslek = meslek;
}

 
function UI() { }


UI.prototype.isimEkle = function (isimlerim) {
 
    const list = document.querySelector(".isimListesi");

   
    const uller = document.createElement("ul");
    uller.innerHTML = `<li>${isimlerim.ad}</li>
 <li>${isimlerim.Soyad}</li><li>${isimlerim.yas}</li>
 <li>${isimlerim.meslek}</li>
 <button class="sil">X</button>
 <button class="edit" onclick=editUserDetails('${isimlerim.ad}','${isimlerim.Soyad}','${isimlerim.yas}','${isimlerim.meslek}')>Edit</button>`;

    list.appendChild(uller);
}


UI.prototype.formTemizle = function () {
    document.querySelector("#ad").value = "";
    document.querySelector("#Soyad").value = "";
    document.querySelector("#yas").value = "";
    document.querySelector("#meslek").value = "";
}


 
UI.prototype.uyarilar = function (mesaj, classIsmi) {

    
    const div = document.createElement("div");
    div.className = `uyari ${classIsmi}`;
    const text = document.createTextNode(mesaj);
    div.appendChild(text);
    
    const form = document.querySelector("#isimForm")
    document.body.insertBefore(div, form);

   
    setTimeout(() => {
        document.querySelector(".uyari").remove();
    }, 3000);
}

UI.prototype.isimListesiSil = function (hedef) {
    if (hedef.className == "sil") {
        hedef.parentElement.remove();
    }
}

function editUserDetails(ad, Soyad, yas, meslek){8
     document.getElementById('ad').value = ad;
      document.getElementById('Soyad').value = Soyad;
       document.getElementById('yas').value = yas; 
       document.getElementById('meslek').value = meslek; 

       isimListesiSil(hedef)
     }


document.querySelector(".isimListesi").addEventListener("click",
    function (e) {

        const ui = new UI();

        ui.isimListesiSil(e.target);

        ui.uyarilar("Silme işlemi Başarılı !", "onay");

        e.preventDefault();
    }
 
);

