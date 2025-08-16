// --- 1. Start the Game (Variables, Template Literals, Type Conversion) ---
let playerName = prompt("Welcome, apprentice! What is your name?");
let playerAge = Number(prompt("How old are you?"));
let favoriteElement = prompt("What is your favorite element? (fire, water, earth, air)").toLowerCase();

alert(`Welcome ${playerName}! At ${playerAge}, you're just the right age to master the powers of ${favoriteElement}!`);

// --- 2. Stock Setup (Arrays, Objects, and Methods) ---
let potions = ['Healing Potion', 'Mana Elixir', 'Invisibility Draft', 'Fire Resistance'];
let potionStock = {
  'Healing Potion': { quantity: 5, price: 10 },
  'Mana Elixir': { quantity: 3, price: 15 },
  'Invisibility Draft': { quantity: 2, price: 25 },
  'Fire Resistance': { quantity: 4, price: 20 }
};
let gold = 0;
let customersHelped = 0;
let potionsBrewed = 0;

// --- Helper: Display Potion Menu ---
function displayPotionMenu() {
  // Bonus: Use .map() for a prettier menu
  return potions.map((p, i) => `${i + 1}. ${p} (Stock: ${potionStock[p].quantity}, ${potionStock[p].price} gold)`).join('\n');
}

// --- 3. Customer Orders (if/else, switch, loops) ---
for (let i = 1; i <= 3; i++) {
  let customer = prompt("A customer is here! Take their order? (yes/no)").toLowerCase();
  if (customer === "yes") {
    alert("Potion Menu:\n" + displayPotionMenu());
    let order = prompt("Which potion does the customer want? (Type the name)").toLowerCase().trim();

    // Find potion by name (case-insensitive)
    let potionName = potions.find(p => p.toLowerCase() === order);

    if (potionName) {
      if (potionStock[potionName].quantity > 0) {
        potionStock[potionName].quantity--;
        gold += potionStock[potionName].price;
        customersHelped++;
        alert(`You sold a ${potionName}! You earned ${potionStock[potionName].price} gold.`);
      } else {
        alert(`Sorry, ${potionName} is out of stock!`);
      }
    } else {
      alert("That potion isn't on the menu.");
    }
  } else {
    alert("You let the customer leave.");
  }
}

// --- 4. Brewing Potions (Functions, Loops, Array Methods) ---
function brewPotion(potionName, amount) {
  if (potionStock[potionName]) {
    potionStock[potionName].quantity += amount;
    potionsBrewed += amount;
    alert(`You brewed ${amount} ${potionName}(s)!`);
  } else {
    alert("That potion doesn't exist!");
  }
}

let brewTimes = 0;
while (brewTimes < 3) {
  let brew = prompt("Would you like to brew more potions? (yes/no)").toLowerCase();
  if (brew === "yes") {
    let brewName = prompt("Which potion would you like to brew?").toLowerCase().trim();
    let potionName = potions.find(p => p.toLowerCase() === brewName);
    if (potionName) {
      let amount = Number(prompt("How many would you like to brew? (1-5)"));
      if (!isNaN(amount) && amount > 0 && amount <= 5) {
        brewPotion(potionName, amount);
      } else {
        alert("Invalid amount.");
      }
    } else {
      alert("That potion isn't on the menu.");
    }
    brewTimes++;
  } else {
    break;
  }
}

// --- 5. End of Day Report (Objects, Destructuring, String Methods) ---
let stockReport = Object.entries(potionStock)
  .map(([name, { quantity }]) => `${name}: ${quantity} left`)
  .join('\n');

alert(
  `End of Day Report:\n\n${stockReport}\n\nGold earned: ${gold}\n\nGreat job, ${playerName}! You brewed ${potionsBrewed} potion(s) and helped ${customersHelped} customer(s) today!`
);

// --- End of Game ---