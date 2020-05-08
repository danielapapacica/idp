const AdsService = require('./Ads/services.js');
const UserssService = require('./Users/services.js');


let adContent = async () =>{

    let users = [];

    try {
    await UserssService.add("Dana Budean", "dana_b", "parola-dana", "example2@yahoo.com", "0721222334", "Bucureti");
    }catch(err){};

    try {
        users = await UserssService.getUsers();
    }catch(err){};


    try {
        AdsService.add("/", "Masina decapotabila", 5000, "Arad", "Cea mai frumoasa masina in care ati mers vreodata. Este rosie si nu are nicio zgarietura", "automoto", users[0]._id);
    }catch(err){};

    try {
        AdsService.add("/", "Bicicleta electrica ultima generatie", 1000, "Deva", "Merge ca unsa", "sport",  users[0]._id);
    }catch(err){};


    try {
        AdsService.add("/", "Caine ciobanesc german rasa pura", 500, "Deva", "Femela, rasa pura. Caine ascultator si bun la casa omului", "animale",  users[0]._id);
    }catch(err){};
    try {
        AdsService.add("/", "Audi A6", 50000, "Arad", "Pret modest. Negociabil. Stare perfecta","automoto", users[0]._id);
    }catch(err){};


    try {
        AdsService.add("/", "Bicicleta pegas", 1000, "Arad", "Merge ca unsa", "sport",  users[0]._id);
    }catch(err){};

    try {
        AdsService.add("/", "Carte dezvoltare personala", 5, "Covasna", "Cunoasterea sinelui est ein concordanta cu cunoasterea spirituala. Astfel eu va ofer o carte care garantat va va schimba viata in bine. Mai am 3 astfel de exemplare. Livrarea disponibila.", "sport",  users[0]._id);
    }catch(err){};

    try {
        AdsService.add("/", "Pisica rasa birmaneza", 600, "Arges", "Merge ca unsa", "animale", users[0]._id);
    }catch(err){};

    try {
        AdsService.add("/", "Caine ciobanesc german", 400, "Deva", "Mascul, rasa pura. Caine ascultator si bun la casa omului", "animale",  users[0]._id);
    }catch(err){};

    try {
        AdsService.add("/", "Culegere matematica", 20, "Arad", "Culegere pregatire pentru bac",  users[0]._id);
    }catch(err){};

    
    try {
        AdsService.add("/", "Bratara pandora", 1000, "Arges", "Originala, cumparata din magazin. Are 8 talismane din argint, pe fiecare am dat 200 de lei", "modafrumusete",  users[0]._id);
    }catch(err){};

    try {
        AdsService.add("/", "Cana rosie", 5, "Covasna", "Buna pentru servit ceai si bauturi calde", "casagradina",  users[0]._id);
    }catch(err){};

    try {
        AdsService.add("/", "Role decathlon", 200, "Deva", "Achizitionate in urma cu un an. Prezinta mici semne de uzura", "sport",  users[0]._id);
    }catch(err){};

    try {
        AdsService.add("/", "Angajez femeie de serviciu Bucuresti", 1200, "Bucureti", "Program de lucru 10:16. Salaraiu: 1200 de lei pe luna. Contract. Rog seriozitate", "munca",  users[0]._id);
    }catch(err){};

    try {
        AdsService.add("/", "Angajez casier magazin alimentar tura de noapte", 2000, "Arad", "Mai multe informatii la telefon","munca", users[0]._id);
    }catch(err){};

    try {
        AdsService.add("/", "Bicicleta pegas", 1000, "Arad", "Merge ca unsa", "sport",  users[0]._id);
    }catch(err){};
    
    try {
        AdsService.add("/", "Carte dezvoltare personala", 5, "Covasna", "Cunoasterea sinelui est ein concordanta cu cunoasterea spirituala. Astfel eu va ofer o carte care garantat va va schimba viata in bine. Mai am 3 astfel de exemplare. Livrarea disponibila.", "sport",  users[0]._id);
    }catch(err){};
    
    try {
        AdsService.add("/", "Bicicleta electrica ultima generatie", 1000, "Deva", "Merge ca unsa", "sport", users[0]._id);
    }catch(err){};
    try {
        AdsService.add("/", "Caine ciobanesc german rasa pura", 500, "Deva", "Femela, rasa pura. Caine ascultator si bun la casa omului", "animale",  users[0]._id);
    }catch(err){};


    try {
        AdsService.add("/", "Audi A6", 50000, "Arad", "Pret modest. Negociabil. Stare perfecta","automoto", users[0]._id);
    }catch(err){};

    try {
        AdsService.add("/", "Bicicleta pegas", 1000, "Arad", "Merge ca unsa", "sport",  users[0]._id);
    }catch(err){};

    
    try {
        AdsService.add("/", "Carte dezvoltare personala", 5, "Covasna", "Cunoasterea sinelui est ein concordanta cu cunoasterea spirituala. Astfel eu va ofer o carte care garantat va va schimba viata in bine. Mai am 3 astfel de exemplare. Livrarea disponibila.", "sport",  users[0]._id);
    }catch(err){};

    try {
        AdsService.add("/", "Pisica rasa birmaneza", 600, "Arges", "Merge ca unsa", "animale", users[0]._id);
    }catch(err){};

    try {
        AdsService.add("/", "Caine ciobanesc german", 400, "Deva", "Mascul, rasa pura. Caine ascultator si bun la casa omului", "animale",  users[0]._id);
    }catch(err){};

    try {
        AdsService.add("/", "Culegere matematica", 20, "Arad", "Culegere pregatire pentru bac",  users[0]._id);
    }catch(err){};

    try {
        AdsService.add("/", "Bratara pandora", 1000, "Arges", "Originala, cumparata din magazin. Are 8 talismane din argint, pe fiecare am dat 200 de lei", "modafrumusete",  users[0]._id);
    }catch(err){};

    
    try {
        AdsService.add("/", "Cana rosie", 5, "Covasna", "Buna pentru servit ceai si bauturi calde", "casagradina",  users[0]._id);
    }catch(err){};

    try {
        AdsService.add("/", "Role decathlon", 200, "Deva", "Achizitionate in urma cu un an. Prezinta mici semne de uzura", "sport",  users[0]._id);
    }catch(err){};

    try {
        AdsService.add("/", "Angajez femeie de serviciu Bucuresti", 1200, "Bucureti", "Program de lucru 10:16. Salaraiu: 1200 de lei pe luna. Contract. Rog seriozitate", "munca",  users[0]._id);
    }catch(err){};
    
    try {
        AdsService.add("/", "Angajez casier magazin alimentar tura de noapte", 2000, "Arad", "Mai multe informatii la telefon","munca",  users[0]._id);
    }catch(err){};

    try {
        AdsService.add("/", "Bicicleta pegas", 1000, "Arad", "Merge ca unsa", "sport", users[0]._id);
    }catch(err){};

    try {
        AdsService.add("/", "Carte dezvoltare personala", 5, "Covasna", "Cunoasterea sinelui est ein concordanta cu cunoasterea spirituala. Astfel eu va ofer o carte care garantat va va schimba viata in bine. Mai am 3 astfel de exemplare. Livrarea disponibila.", "sport", users[0]._id);
    }catch(err){};
    
    
};

adContent();
