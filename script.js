document.addEventListener("DOMContentLoaded", function () {
    let phrases = [
        "I love youu", "Goodnight, Mahal ko", "Miss na kita :<", "babyyyyy",
        "Mahal ko naman eh", "Miss ko na ikaw babyy", "Kumain na po ba ikaw?",
        "Mahal naman eh", "Ihhhhhh", "Baby kooo", "I miss youuu",
        "Pahinga ikaw nang mabuti mahal ko", "Night nightyy", "Sleep call us, mahal ko?",
        "Vc us laterrr?", "Study date hehe", "Opo, promise", "Never me aalisss",
        "Baby promise po", "Sleep na tayo mahal ko", "Kumusta po yung baby ko?",
        "Sana malambingg :<", "Favorite ko yunnn", "Ihhh wag na kasiii", "Baby haaaa",
        "Top 1 halata ka talaga mahal", "Mahal na mahaaaaal kitaaa", "Opoooo",
        "Opo, pleaseee", "Miss na miss na miss po :<", "TALAGA", "hehe", "ANO NAMAN",
        "ih mahaaal", "Okay lang poo", "Opooo", "nyenyee", "nakauwi na po me baby",
        "dito na po me sa school", "ayaawwww", "goodluckk babyyy", "studywell po babyy",
        "gwaenchanaa", "baby", "ingat mahal ko", "eatwell my loveee",
        "goodluck on your day,  mahal ko", "nakatulog mee *crying emoji*",
        "gaya gaya ikaww", "TOTOO", "sorryy rin po, mahal ko", "sorry po baby",
        "ikaw haa", "achuchuu", "*kisses*", "hindi pooo", "mahal *crying emojis*",
        "want mo po vc us?", "me rin po babyy", "call na po me baby?", "bet na bet mahal ko",
        "ingat baby haa", "hmmmm?", "I love youu moreee", "Mas mahal nga kasi kita",
        "Hindii, mas mahal kitaaa", "I love you moree", "I love you the mostt",
        "I love you more thann mostt", "Mahal naman ehh", "Babyyyyyy",
        "My loveeee", "Mahaaaal", "I miss youuuuuu", "Here lang po me always mahal ko",
        "Ikaw lang po baby ko", "Magpahinga nang mabutii, you need it mahal ko",
        "I'm always proud of youuuuuuu :>", "Help kita sa assignment mo po babyy",
        "want mo po vc us?", "wag na mag sorry mahal", "*sent a reel* us baby",
        "ayawwww", "hayy nakooo", "congrats my loveee!!", "so galing ng baby koo",
        "mag ingat babyy", "*angry cat emojis*", "cutie hehe", "I need baby timee",
        "I'm so proud of my baby kayaa"
    ];

    function generateText() {
        let textElement = document.getElementById("text-mask");
        if (!textElement) return;

        let text = "";
        while (text.length < 30000) { // Ensuring enough text to fill
            let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
            text += randomPhrase + " ︱ ";
        }

        textElement.innerText = text;
    }

    generateText(); // Auto-generate text on page load
});
