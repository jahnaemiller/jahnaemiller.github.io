var openingdiv = document.getElementById("opening");
var imgdiv = document.getElementById("food-picture");
var descdiv = document.getElementById("food-description");

function monday()
{
    openingdiv.innerHTML += "<h2>It's time for Monday's catch!</h2>";
    imgdiv.innerHTML += "<img src='monday.png'>";
    descdiv.innerHTML = "<h1>Lobster Lunacy</h1><p>Lobster lightly grilled, served with noodles and covered in our special sauce.</p>"
    
}

function tuesday()
{
    openingdiv.innerHTML += "<p>Tuesday's catch is in!</p>";
    imgdiv.innerHTML += "<img src='tuesday.png'>";
    descdiv.innerHTML = "<h1>Fried Delight</h1><p>Tender fillets of fish, fried to perfection in hot oil with a dash of lemon zest. Lightly salted.</p>"
}

function wednesday()
{
    openingdiv.innerHTML += "<p>The best part of every Wednesday!</p>";
    imgdiv.innerHTML += "<img src='wednesday.png'>";
    descdiv.innerHTML = "<h1>Crab Thai</h1><p>Crab, boiled in its shell and served on-top of stir fried rice noodles</p>"
}

function thursday()
{
    openingdiv.innerHTML += "<p>Freshly caught, every Thursday!</p>";
    imgdiv.innerHTML += "<img src='thursday.png'>";
    descdiv.innerHTML = "<h1>Salmon Salad</h1><p>Grilled salmon with a hint of lemon glaze, served on a bed of fresh vegetables.</p>"
}

function friday()
{
    openingdiv.innerHTML += "<p>Ring in the weekend with our favourite dish!</p>";
    imgdiv.innerHTML += "<img src='friday.png'>";
    descdiv.innerHTML = "<h1>Classic Fish&Chips</h1><p>Everyone's favourite. Classic fish and chips with a dash of lemon. Salty, cripsy, absolutely delicious.</p>"
}

function saturday()
{
    openingdiv.innerHTML += "<p>Kick back and relax this Saturday!</p>";
    imgdiv.innerHTML += "<img src='saturday.png'>";
    descdiv.innerHTML = "<h1>Shrimp Stir-Fry</h1><p>Succulent shrimp, served with stir-fried noodles and vegetables.</p>"
}

function sunday()
{
    openingdiv.innerHTML += "<p>Eat this before hitting the high seas tomorrow!</p>";
    imgdiv.innerHTML += "<img src='sunday.png'>";
    descdiv.innerHTML = "<h1>Hook, Line and Sinker</h1><p>Our namesake. Grilled prawns, grilled shrimp, fried fish, and fried calamari, all on one plate. Served with a side of fries.</p>"
}

switch (new Date().getDay())
{
    case 0:
        sunday();
        break;
        
    case 1:
        monday();
        break;
        
    case 2:
        tuesday();
        break;
        
    case 3:
        wednesday();
        break;
        
    case 4:
        thursday();
        break;
        
    case 5:
        friday();
        break;
        
    case 6:
        saturday();
        break;
}