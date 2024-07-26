// set of random words

const words = [
  "a", "an", "as", "at", "be", "by", "do", "go", "he", "if",
  "in", "is", "it", "me", "my", "no", "of", "on", "or", "so",
  "to", "up", "we", "and", "are", "bad", "bag", "bat", "bed",
  "big", "bit", "box", "bun", "but", "cat", "cod", "cow", "cut",
  "dog", "dry", "egg", "far", "fat", "fix", "fun", "gap", "gas",
  "get", "gig", "hat", "hot", "ice", "ink", "jar", "jet", "key",
  "kit", "lap", "leg", "log", "man", "map", "net", "nut", "oak",
  "odd", "off", "oil", "old", "pad", "pen", "pet", "pig", "pot",
  "red", "rib", "rod", "run", "sad", "sat", "say", "see", "set",
  "she", "sit", "son", "sun", "tag", "tap", "tip", "toy", "use",
  "van", "was", "way", "yes", "yet", "able", "also", "area", "baby",
  "back", "ball", "band", "bank", "base", "bath", "bear", "beat",
  "been", "beer", "bell", "best", "bill", "bird", "blow", "blue",
  "boat", "body", "bomb", "bond", "bone", "book", "boom", "born",
  "boss", "both", "bowl", "bulk", "burn", "bush", "busy", "call",
  "calm", "came", "camp", "card", "care", "case", "cash", "cast",
  "cell", "chat", "chip", "city", "club", "coal", "coat", "code",
  "cold", "come", "cook", "cool", "cope", "cost", "crew", "crop",
  "dark", "data", "date", "deal", "dear", "debt", "deep", "deny",
  "desk", "dial", "diet", "disc", "disk", "does", "done", "door",
  "dose", "down", "draw", "drew", "drop", "drug", "dual", "duck",
  "duke", "duty", "each", "earn", "ease", "east", "easy", "edge",
  "else", "even", "ever", "exam", "exit", "face", "fact", "fail",
  "fair", "fall", "farm", "fast", "fate", "fear", "feed", "feel",
  "feet", "fell", "felt", "file", "fill", "film", "find", "fine",
  "fire", "firm", "fish", "five", "flat", "flow", "food", "foot",
  "ford", "form", "fort", "four", "free", "from", "fuel", "full",
  "fund", "gain", "game", "gate", "gave", "gear", "gene", "gift",
  "girl", "give", "glad", "goal", "goes", "gold", "golf", "gone",
  "good", "gray", "grew", "grey", "grow", "gulf", "hair", "half",
  "hall", "hand", "hang", "hard", "harm", "hate", "have", "head",
  "hear", "heat", "held", "hell", "help", "here", "hero", "high",
  "hill", "hire", "hold", "hole", "holy", "home", "hope", "host",
  "hour", "huge", "hung", "hunt", "hurt", "idea", "inch", "into",
  "iron", "item", "jack", "jane", "jean", "john", "join", "jump",
  "jury", "just", "keen", "keep", "kent", "kept", "kick", "kill",
  "kind", "king", "knee", "knew", "know", "lack", "lady", "laid",
  "lake", "land", "lane", "last", "late", "lead", "left", "less",
  "life", "lift", "like", "link", "list", "live", "load", "loan",
  "lock", "logo", "long", "look", "lord", "lose", "loss", "lost",
  "love", "luck", "made", "mail", "main", "make", "male", "many",
  "mark", "mass", "matt", "meal", "mean", "meat", "meet", "menu",
  "mere", "mike", "mile", "milk", "mill", "mind", "mine", "miss",
  "mode", "mood", "moon", "more", "most", "move", "much", "must",
  "name", "navy", "near", "neck", "need", "news", "next", "nice",
  "nick", "nine", "none", "nose", "note", "okay", "once", "only",
  "onto", "open", "oral", "over", "pace", "pack", "page", "paid",
  "pain", "pair", "palm", "park", "part", "pass", "past", "path",
  "peak", "pick", "pink", "pipe", "plan", "play", "plot", "plug",
  "plus", "poll", "pool", "poor", "port", "post", "pull", "pure",
  "push", "race", "rail", "rain", "rank", "rare", "rate", "read",
  "real", "rear", "rely", "rent", "rest", "rice", "rich", "ride",
  "ring", "rise", "risk", "road", "rock", "role", "roll", "roof",
  "room", "root", "rose", "rule", "rush", "ruth", "safe", "said",
  "sake", "sale", "salt", "same", "sand", "save", "seat", "seed",
  "seek", "seem", "seen", "self", "sell", "send", "sent", "sept",
  "ship", "shop", "shot", "show", "shut", "sick", "side", "sign",
  "site", "size", "skin", "slip", "slow", "snow", "soft", "soil",
  "sold", "sole", "some", "song", "soon", "sort", "soul", "spot",
  "star", "stay", "step", "stop", "such", "suit", "sure", "take",
  "tale", "talk", "tall", "tank", "tape", "task", "team", "tech",
  "tell", "tend", "term", "test", "text", "than", "that", "them",
  "then", "they", "thin", "this", "thus", "till", "time", "tiny",
  "told", "toll", "tone", "tony", "took", "tool", "tour", "town",
  "tree", "trip", "true", "tune", "turn", "twin", "type", "unit",
  "upon", "used", "user", "vary", "vast", "very", "vice", "view",
  "vote", "wage", "wait", "wake", "walk", "wall", "want", "ward",
  "warm", "wash", "wave", "ways", "weak", "wear", "week", "well",
  "went", "were", "west", "what", "when", "whom", "wide", "wife",
  "wild", "will", "wind", "wine", "wing", "wire", "wise", "wish",
  "with", "wood", "word", "wore", "work", "yard", "yeah", "year",
  "your", "zero", "zone"
];

// loading random words to the screen
let chosenWords = ""
for (let i = 1; i <= 65; i++) {
  const temp = words[Math.floor(Math.random() * 581)]
  chosenWords += temp + " "
}
chosenWords = chosenWords.slice(0,-1)

const splited = chosenWords.split("")

splited.forEach(element => {
    const para = document.createElement("p")
    para.innerHTML = element
    document.querySelector("#screen").appendChild(para)
});



const screen = document.querySelector(`#screen`)
const children = screen.children
let index = 0;
children[index].style.borderBottom = "3px solid yellow"
function createBorderBottom(params) {
    children[index].style.borderBottom = "3px solid yellow"
}
function removeBorderBottom(){
    children[index].style.borderBottom = "none"
}
function colorElement(color){
    children[index].style.backgroundColor = `${color}`
}
function colorText(color) {
    children[index].style.color = `${color}`
}
var entries = 0;
let timer = false;
function end(){
    document.querySelector("#screen").style.display = "none"
    document.querySelector(`#main button`).style.display = "none"
    document.querySelector("#pop").style.display = "flex"
    document.querySelector(`#result`).innerHTML = `You'r done... Your typing speed is ${parseInt((entries/5)/0.25)} WPM`

}
function start(){
    setTimeout(end, 15 * 1000)
}


document.addEventListener("keydown",function(e){
    if (timer == false) {
        timer = true
        start()

    }

    if (index<0) {
        index = 0;
    }
    else if (index>=0) {
        if(e.key == "Backspace"){
            if (index>0) {
                removeBorderBottom()
                --index;
                colorElement("transparent")
                createBorderBottom()
                if (children[index].style.backgroundColor != "#E2B714") {
                    --entries;
                }
                colorElement("transparent")
                colorText("grey")
            }
            
        }
        if (e.key.length === 1 && e.key.match(/[a-zA-Z ]/)) {
            if (e.key == children[index].innerHTML) {
                ++entries
                colorElement("lightslategray")
            }
            else{
                colorElement("#E2B714");
                colorText("black")
            }
            removeBorderBottom()
            
            colorText("black")
            ++index;
            createBorderBottom()
            
        }
    }
    else{
        end();
    }
    // console.log(entries)
    
})


