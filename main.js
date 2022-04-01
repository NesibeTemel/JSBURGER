
let liste,secenek;
let i;


document.addEventListener("change",burgerHesapla);


function toogle()
{
    
    liste=document.getElementsByName("grupIndirim");
    for(i=0;i<liste.length;i++)
    {
        if(liste[i].checked)
        {
            if(liste[i].value=="Aktif")
            {
                document.getElementById("txtIndirimKodu").disabled=false;
            }
            else if(liste[i].value=="Pasif")
            {
                
                document.getElementById("txtIndirimKodu").disabled=true;
                document.getElementById("txtIndirimKodu").value="";
                document.getElementById("dogrulama").innerHTML="";
            }
        }
    }

}

function burgerHesapla()
{
    
let burgerFiyati,girilenKod,malzeme;

    const indirimKodu="PROMO";

    
    liste=document.getElementById("listeBurger");
    secenek=liste[liste.selectedIndex].value;
    burgerFiyati=Number(secenek);

   
    liste=document.getElementsByName("burgerUrunler");
    document.querySelectorAll('#listeSecim option').forEach(option => option.remove());

    for(i=0;i<liste.length;i++)
    {

        if(liste[i].checked)
        {
            burgerFiyati=burgerFiyati+6;
            malzeme=liste[i].value;

            secenek=document.createElement("option");
            document.getElementById("listeSecim").options.add(secenek);
            secenek.text=malzeme;
        }


    }

    
    if(document.getElementById("kodTrue").checked)
    {
        girilenKod=document.getElementById("txtIndirimKodu").value;
        if(indirimKodu==girilenKod)
        {
            burgerFiyati=burgerFiyati-5;
            document.getElementById("dogrulama").innerHTML="";
        }
        else
        {
            document.getElementById("dogrulama").innerHTML="Lütfen geçerli bir kod giriniz!";
            
        }
    }

   
    document.getElementById("sonuc").innerHTML="Ödenecek tutar: "+burgerFiyati;
}