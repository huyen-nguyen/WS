var stopWordList =
    ["brazo","we're","it's","can't","we’re","thk","it’","chk","you're","you'll","us","thx","the","a","an","republicans","republican","democrats","democratic","and","democrat","americans","american","america","hey","ok","wanna","lmao","lot","ur","im","thank","you?","&amp;","dm","just","dont","lol","lil","gonna","rt","...","..","--","about","above","according","accordingly","across","actually","adj","adv","after","afterwards","again","against","ago","ah","aint","al","albeit","all","almost","alone","along","already","also","alt","although","always","am","among","amongst","an","and","another","any","anybody","anyhow","anyone","anything","anyway","anyways","anywhere","apparently","appear","apply","are","area","areas","arent","around","as","aside","ask","asked","asking","asks","at","available","ave","away","aye","ba","back","backed","backing","backs","basic","basis","be","became","because","become","becomes","becoming","been","before","beforehand","began","begin","behind","being","beings","below","beside","besides","best","better","between","beyond","bi","big","both","brief","but","by","call","called","came","can","cannot","cant","certain","certainly","cf","clear","clearly","cm","co","come","comes","concerning","consequently","considering","contain","containing","contains","contrariwise","corresponding","could","couldnt","course","currently","date","dc","de","definitely","describe","described","describes","despite","determine","determined","di","did","didnt","differ","different","differently","do","does","doesnt","doing","done","dont","double","down","downed","downing","downs","downwards","dr","dual","during","each","early","ed","eg","eight","either","eleven","else","elsewhere","empty","end","ended","ending","ends","enough","entirely","especially","est","et","etc","even","evenly","ever","every","everybody","everyone","everything","everywhere","everywhere","exactly","example","except","excepted","excepting","exception","exclude","excluding","exclusive","face","faces","fact","facts","far","felt","few","fifteen","fifth","find","finds","first","five","for","forth","forty","forward","found","four","fr","free","from","front","ft","full","fully","further","furthered","furthering","furthermore","furthers","furthest","gave","general","generally","get","gets","getting","give","given","gives","go","goes","going","gone","good","goods","got","gotten","great","greater","greatest","group","grouped","grouping","groups","had","hadnt","half","halves","happens","hardly","has","hasnt","hast","hath","have","having","he","hear","heard","hed","hello","help","hence","henceforth","her","here","hereabouts","hereafter","hereby","herein","hereto","hereupon","hers","herself","hes","high","higher","highest","him","himself","hindmost","his","hither","hitherto","hopefully","how","howbeit","however","howsoever","hr","hundred","hyper","id","ie","if","ii","iii","im","immediate","important","in","inasmuch","inc","including","indeed","indicate","indicated","indicates","insofar","insomuch","instead","int","interest","interested","interesting","interests","into","intra","intro","inward","inwards","is","isnt","it","itd","item","itll","its","itself","iv","ive","ix","just","keep","keeps","kept","kg","km","knew","know","known","knows","large","largely","last","lat","lately","later","latest","latter","latterly","least","left","less","lest","let","lets","like","likely","little","ll","lon","long","longer","longest","look","looks","ltd","lt","made","made","mainly","make","making","man","many","may","maybe","md","me","mean","means","meant","meantime","meanwhile","merely","micro","might","mine","mm","more","moreover","morning","most","mostly","move","mph","mr","mrs","ms","mt","much","multi","must","mustnt","my","myself","name","namely","near","nearly","necessary","need","needed","needing","neednt","needs","neither","never","nevertheless","new","newer","newest","news","next","nine","no","nobody","non","none","nonetheless","noone","nope","nor","normally","not","nothing","notwithstanding","novel","now","nowadays","nowhere","nt","number","obs","obviously","of","off","often","oh","okay","old","older","oldest","on","once","one","ones","only","onto","op","open","opened","opening","opens","or","other","others","otherwise","ought","our","ours","ourselves","out","outside","over","overall","own","oz","page","part","parted","particular","particularly","parting","parts","per","perhaps","phr","pl","please","plus","pm","possible","pre","presumably","pro","probably","provided","pt","put","puts","quite","rather","re","really","reasonably","regarding","regardless","regards","related","relatively","required","respectively","results","right","said","saith","same","saw","say","saying","says","sec","second","secondly","seconds","see","seeing","seem","seemed","seeming","seems","seen","sees","seldom","self","selves","semi","seven","several","shall","shalt","she","shes","should","shouldnt","show","showed","showing","shown","shows","side","sides","since","sir","sixty","so","some","somebody","somehow","someone","something","sometime","sometimes","somewhat","somewhere","st","still","such","supposing","sure","take","tell","tends","th","than","thank","thanks","thanx","that","thatd","thatll","thats","the","thee","their","theirs","them","themselves","then","thence","thenceforth","there","thereabout","thereabouts","thereafter","thereby","thered","therefore","therein","thereof","thereon","theres","thereto","thereupon","therll","these","they","theyve","thine","thing","things","think","thinks","third","this","thorough","thoroughly","those","thou","though","three","thrice","through","throughout","thru","thus","thy","thyself","till","time","tm","to","today","together","told","too","took","toward","towards","trans","tried","tries","truly","trying","turn","turned","turning","turns","twelve","twenty","twice","two","under","unless","unlike","unlikely","until","unto","up","upon","upward","upwards","us","use","used","useful","uses","using","usually","various","ve","very","vi","vii","viii","via","viz","vs","was","wasnt","way","ways","we","well","wells","went","were","werent","weve","what","whatever","whatsoever","when","whence","whenever","whensoever","where","whereabouts","whereafter","whereas","whereat","whereby","wherefore","wherefrom","wherein","whereinto","whereof","whereon","wheresoever","whereto","whereunto","whereupon","wherever","wherewith","whether","whew","which","whichever","whichsoever","while","whilst","whither","who","whoa","whoever","whole","whom","whomever","whomsoever","whose","whosoever","why","will","willing","wilt","wish","with","within","without","wonder","wont","work","worked","working","works","worse","worst","would","wouldnt","wt","xi","xii","xiii","xiv","xv","xvi","xvii","xviii","xix","xx","yd","ye","year","years","yes","yet","yippee","you","youd","youll","young","younger","youngest","your","youre","yours","yourself","yourselves","youve","yup","zero","Lymphatic","province", "and/or", "district", "as", "reported", "jan", "feb", "mar", "apr", "may", "june", "july", "aug", "sept", "oct", "nov", "dec", "wa","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "ha", "bu", "jk", "hi"];

var partialWordList = ["january", "february",
    "march", "april", "may", "june", "july", "august", "september", "october", "november", "december", "1st",
    "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "/"];
var csvContent = "";
var topics = ["Battles", "Violence against civilians", "Remote violence", "Riots/Protests", "Others"];

function checkInclude(word){
    var flag = true;
    partialWordList.forEach(d => {
        if (word.includes(d)) flag = false;
    });
    return flag;
}
function buildWords(yearRecord, date, top) {
    var obj = {};
    topics.forEach((topic,j) => {
        yearRecord.values.forEach((event, i) => {
            if (yearRecord.values[i].key == topic) {
                console.log(j + " " + topic);
                obj[topic] = getWords(yearRecord.values[i]["values"], topic, date, top)
            }
        });
    });

    return obj;
}

function getWords(array, topic, date) {  1   // per a certain topic at a time
    var words = [];
    var freq = {}, fatal = {};
    array.forEach(d => {
        var met = {};
        d["keywords"].forEach(term => {         // create true properties met object
            met[term] = false;
        });

        d["keywords"].forEach(term => {
            freq[term] = (freq[term] == undefined) ? 1 : freq[term] + 1;

            while (!met[term]){
                fatal[term] = (fatal[term] == undefined) ? parseInt(d["fatalities"]) : fatal[term] + parseInt(d["fatalities"]);
                met[term] = true;
            }

        });
    });

    var keys = d3.keys(freq);                   // push into standard format
    for (var i = 0; i < keys.length; i++) {
        var term = keys[i];
        words.push({
            sudden: 0,
            fatality: fatal[term],
            frequency: freq[term],
            text: term,
            id: term + "_" + date + "_" + topic,
            topic: topic
        })
    }
    words.sort(function (a, b) {    //sort the terms by fatality
        return b.fatality - a.fatality;
    });

    return words;
}
function loadGeneralData(inputData){

    var attrOmit = ["iso", "event_id_cnty",
        "event_id_no_cnty", "event_date",
        "time_precision", "actor1",
        "assoc_actor_1", "inter1", "actor2",
        "assoc_actor_2", "inter2", "interaction",
        "region", "country", "admin1", "admin2",
        "admin3", "location", "latitude", "longitude",
        "geo_precision", "source", "source_scale",
        "timestamp", "iso3"];

    var reducedData = [],
        obj = {};

    inputData.forEach(d => {
        attrOmit.forEach(attr => {  // keep only wanted attributes
            delete d[attr];
        });
        d["notes"] = d["notes"].trim();     // remove black space 2 sides
        obj[d["notes"]] = d;                // remove duplicates
    });
    console.log("inputData length: " + inputData.length);
    for (var key in obj) {                   // write to new array
        reducedData.push(obj[key]);
    }
    console.log("reducedData length: " + reducedData.length);

    reducedData.forEach((d, i) => {
        var event = d["event_type"];        // change event name
        if ((event === "Battle-No change of territory") ||
            (event === "Battle-Non-state actor overtakes territory") ||
            (event === "Battle-Government regains territory")) {
            d["event_type"] = "Battles";
        }
        else if ((event === "Strategic development") ||
            (event === "Headquarters or base established") ||
            (event === "Non-violent transfer of territory") ||
            (event === "Remote explosive/landmine/IED")) {
            d["event_type"] = "Others";
        }
        d.keywords = [];
        d["notes"].toLowerCase().split(" ").forEach(w => {
            w = w.trim().replace(/\.|\,|\(|\)|\;|\:|\[|\]|\&|\-|\!|\?|\#|\"|\'/gi, '').replace(/s$/g, '');
            if ((stopWordList.find(wm => wm == w) == undefined) && (checkInclude(w)) && isNaN(w)) {
                d["keywords"].push(w);
            }
        });
    });
    reducedData.reverse();
    console.log("reducedData:");
    console.log(reducedData);
    return reducedData;
}
function loadSuddenData(inputData, top){
    var groupData = d3.nest()
        .key(d => d["year"])
        .key(d => d["event_type"])
        .entries(loadGeneralData(inputData))
        .map(d => {
            return {
                date: d.key,
                words: buildWords(d, d.key)     // d.key = date(year)
            }
        })
    ;
    console.log("groupData:");
    console.log(groupData);
    var suddenData = processSuddenFreq(groupData);
    suddenData.forEach((data) => {
        topics.forEach((topic) => {
            data["words"][topic] = data["words"][topic]
                .sort((a,b) => b["sudden"] - a["sudden"]).slice(0,top);
        })
    });
    return suddenData;
}
function loadAcledDataAsia() {
    d3.csv("data/asia.csv", function (error, inputData) {
        if (error) {
            console.log(error);
        }
        else {
            var suddenData = loadSuddenData(inputData, 40);
            data = tfidf(suddenData);
            draw(data);
        }
    });
}
function loadAcledDataME() {
    d3.json("data/me.json", function (error, inputData) {
        if (error) {
            console.log(error);
        }
        else {
            var suddenData = loadSuddenData(inputData, 80);
            data = tfidf(inputData);
            draw(data);
        }
    });
}
function loadAcledDataAfrica() {
    d3.csv("data/africa.csv", function (error, inputData) {
        if (error) {
            console.log(error);
        }
        else {
            var suddenData = loadSuddenData(inputData, 40);
            data = tfidf(suddenData);
            draw(data);


        }
    });
}