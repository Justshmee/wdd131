const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: "images/snortleblat.png",

    attacked() {
        if (this.health > 0) {
            this.health -= 20;

            if (this.health <= 0) {
                this.health = 0;
                alert(this.name + " has died!");
            }

            updateCard();
        }
    },

    levelUp() {
        this.level += 1;
        updateCard();
    }
};

function updateCard() {
    document.getElementById("name").textContent = character.name;
    document.getElementById("class").textContent = character.class;
    document.getElementById("level").textContent = character.level;
    document.getElementById("health").textContent = character.health;
    document.getElementById("char-image").src = character.image;
}

updateCard();