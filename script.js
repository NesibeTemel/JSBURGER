function burgerHesapla()
{
    let burgerFiyati,odenecekTutar;

    let i;
    let liste,secenek;
    
    liste=document.getElementById("listeBurger");
    liste.addEventListener("change",burgerHesapla);

    secenek=liste[liste.selectedIndex].value;
    burgerFiyati=Number(secenek);

    liste=document.getElementsByName("burgerUrunler")
    for(i=0;i<liste.lenght;i++)
    {
    if(liste[i].checked)
        {
            burgerFiyati=burgerFiyati+6;
        }
    }
   
    
}
