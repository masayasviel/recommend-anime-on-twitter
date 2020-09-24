const https = require("https");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");
const data = require("./seasonAnimeTitle.json")
const url = "https://www.animatetimes.com/tag/details.php?id=5947"; // 2020秋

let html = "";

function getAnimeTitle() {
    const { document } = (new JSDOM(html)).window;
    const getdata = document.querySelectorAll(".c-heading-h2");
    const animeTitles = [];
    const n = getdata.length;
    for (let i = 0;i < n-3;i++) {
        if(i == 0) continue;
        animeTitles.push(getdata[i].textContent);
    }
    // console.log(animeTitles);
    // const data = {
    //     "2020アニメ": animeTitles
    // };
    data["autumn"] = animeTitles;
    fs.writeFileSync("./seasonAnimeTitle.json", JSON.stringify(data, null, "    "));
}

https.get(url, res => {
    res.on("data", line => html += line + "\n");
    res.on("end", getAnimeTitle);
});