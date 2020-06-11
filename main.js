const tweet = document.getElementById("tweet");

const getAnimeList = ()=>{
    const listElement = document.getElementsByClassName("animeList");
    const animeList = [];
    for(let i = 0;i < 5;i++) {
        animeList.push((i+1)+ ". " +listElement[i].value.trim());
    }
    console.log(animeList);
    return animeList.join("\n");
}

const generateShareMassage = ()=>{
    const tweetUrl = "https://twitter.com/intent/tweet?text=" + 
        encodeURIComponent(
            "私の好きなアニメは……\n" + getAnimeList() + "\nURI\n"
        ) + "&hashtags=私が好きそうなアニメを教えて欲しい" + "&count=none&lang=ja";
    return tweetUrl;
}

tweet.addEventListener("click", ()=>{
    window.open().location.href = (generateShareMassage());
});