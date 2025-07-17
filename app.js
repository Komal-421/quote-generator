const quoteElement = document.querySelector("#quote");
const btn = document.querySelector("button");

btn.addEventListener("click", getQuotes);

const quotes = ["When you forgive you win.",
                "Fear is wisdom as a child.",
                "Forgiveness is always possible, but reconciliation is not always possible.",
                "Forgiveness gives us the freedom to stay and the freedom to walk away.",
                "We need to be willing to accept our feelings around an event in order to fully gain the benefits, which are available from it.",
                "Forgiveness is an act of willingness not an act of will.",
                "Practising forgiveness on the small things makes it easier to forgive the big things.",
                "When we are absolutely sure we are right, we can be absolutely sure we are wrong.",
                "The truth is not a stick with which to beat yourself.",
                "Cynicism is the ability to create a better world—stuck in reverse.",
                "Cynicism is a bad tempered guard dog, which keeps biting its owner.",
                "When we forgive we choose to be empowered, rather than being a victim.",
                "Four Steps to Forgiveness",
                "Self forgiveness is one of the most unselfish things you can do."
];

function getQuotes(){
    idx = Math.floor(Math.random() * 13);
    quoteElement.innerText = quotes[idx];
}

