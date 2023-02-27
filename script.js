let firstName = ["<b>Ahmet</b> <br> Greatly praised", "<b>Alp</b> <br>Meaning: Heroic.","<b>Ayaz</b><br>Meaning: Cool breeze.","<b>Berat</b><br>Meaning: The night of forgiveness.","<b>Deniz</b><br>Meaning: Sea.","<b>Emir</b><br>Meaning: King or commander.","<b>Emre</b><br>Meaning: “Friend” in Turkish.","<b>Eren</b><br>Meaning: Holy.","<b>Kerem</b><br>Meaning: Nobility and generosity.","<b>Mehmet</b><br>Meaning: One who praise","<b>Emir</b> <br>Meaning: King or commander.",
"<b>Emre</b> <br>Meaning: “Friend” in Turkish.",
"<b>Eren</b> <br>Meaning: Holy.",
"<b>Hamza</b> <br>Meaning: Lion, steadfast, strong and brave.",
"<b>Haşim</b> <br>Meaning: Turkish form of Hashem.",
"<b>Kerem</b> <br>Meaning: Nobility and generosity.",
"<b>Mehmet</b> <br>Meaning: One who praises.",
"<b>Musa</b> <br>Meaning: Child.",
"<b>Mustafa</b> <br>Meaning: Chosen, selected, appointed.",
"<b>Ömar</b> <br>Meaning: Populous and flourishing.",
"<b>Selim</b> <br>Meaning: Safe.",
"<b>Yusuf</b> <br>Meaning: God increases.",
"<b>Adlee</b> <br>Meaning: The one who is measured by God.",
"<b>Afshin</b> <br>Meaning: Ancient king.",
"<b>Bayram</b> <br>Meaning: Celebration.",
"<b>Burak</b> <br>Meaning: Fast and strong, like a lightning bolt.",
"<b>Cahill</b> <br>Meaning: Young and innocent.",
"<b>Candana</b> <br>Meaning: Sincerity and honesty.",
"<b>Ceyhun</b> <br>Meaning: The name of a central Asian river.",
"<b>Hosmunt</b> <br>Meaning: Clever person.",
"<b>Kahraman</b> <br>Meaning: Hero.",
"<b>Mazhar</b> <br>Meaning: Esteemed.",
"<b>Miraç</b> <br>Meaning: Muhammads ascent to heaven.",
"<b>Nijaz</b> <br>Meaning: Desire or wish.",
"<b>Okan</b> <br>Meaning: An individual of a noble nature.",
"<b>Ozan</b> <br>Meaning:: A composer or storyteller.",
"<b>Ruslan</b> <br>Meaning: Lion - a perfect name for your strong little man.",
"<b>Safet</b> <br>Meaning: Pure.",
"<b>Volkan</b> <br>Meaning: Volcanic."]

function getname(){
let Name = firstName[Math.floor(Math.random() * firstName.length)] 
return Name;
}
function nameQty(){
    let userQty = document.querySelector('.qty').value
    document.querySelector('.nameList').innerHTML  = ""

    if(userQty > 5){
        document.querySelector('.nameList').innerHTML  = "Sorry You can search only 5 Name"
    }
    else{
        for(let i = 0; i< userQty; i++){
            document.querySelector('.nameList').innerHTML  += getname() + "<br>";
        }
    }
}

"<b>Emir:</b> <br>Meaning: King or commander.",
"<b>Emre:</b> <br>Meaning: “Friend” in Turkish.",
"<b>Eren:</b> <br>Meaning: Holy.",
"<b>Hamza:</b> <br>Meaning: Lion, steadfast, strong and brave.",
"<b>Haşim:</b> <br>Meaning: Turkish form of Hashem.",
"<b>Kerem:</b> <br>Meaning: Nobility and generosity.",
"<b>Mehmet:</b> <br>Meaning: One who praises.",
"<b>Musa:</b> <br>Meaning: Child.",
"<b>Mustafa:</b> <br>Meaning: Chosen, selected, appointed.",
"<b>Ömar:</b> <br>Meaning: Populous and flourishing.",
"<b>Selim:</b> <br>Meaning: Safe.",
"<b>Yusuf:</b> <br>Meaning: God increases.",
"<b>Adlee:</b> <br>Meaning: The one who is measured by God.",
"<b>Afshin:</b> <br>Meaning: Ancient king.",
"<b>Bayram:</b> <br>Meaning: Celebration.",
"<b>Burak:</b> <br>Meaning: Fast and strong, like a lightning bolt.",
"<b>Cahill:</b> <br>Meaning: Young and innocent.",
"<b>Candana:</b> <br>Meaning: Sincerity and honesty.",
"<b>Ceyhun:</b> <br>Meaning: The name of a central Asian river.",
"<b>Hosmunt:</b> <br>Meaning: Clever person.",
"<b>Kahraman:</b> <br>Meaning: Hero.",
"<b>Mazhar:</b> <br>Meaning: Esteemed.",
"<b>Miraç:</b> <br>Meaning: Muhammads ascent to heaven.",
"<b>Nijaz:</b> <br>Meaning: Desire or wish.",
"<b>Okan:</b> <br>Meaning: An individual of a noble nature.",
"<b>Ozan</b> <br>Meaning:: A composer or storyteller.",
"<b>Ruslan:</b> <br>Meaning: Lion - a perfect name for your strong little man.",
"<b>Safet:</b> <br>Meaning: Pure.",
"<b>Volkan:</b> <br>Meaning: Volcanic."