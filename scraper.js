function getOverData() {

geeklist = document.querySelectorAll(`[ui-sref="geekitem.geeklists"]`)[1].outerText.replaceAll(",","").match("\\d+").toString()
if(document.querySelectorAll(`[ui-sref="geekitem.videos"]`)[1] == null) {
videos = "" } else {
videos = document.querySelectorAll(`[ui-sref="geekitem.videos"]`)[1].outerText.match("\\d+").toString()
}

if (document.getElementsByClassName("summary-media-grid-count ng-isolate-scope")[0] == null) {
images = "" } else {
images = document.getElementsByClassName("summary-media-grid-count ng-isolate-scope")[0].childNodes[1].outerText.replaceAll(",","").match("\\d+").toString()
}

forums = document.querySelectorAll(`[ui-sref="geekitem.forums"]`)[1].outerText.replaceAll(",","").match("\\d+").toString()

return videos + "|" + images + "|" + forums + "|" + geeklist;
}



function getStatsData() {
avgRanking = document.querySelectorAll(`[ui-sref="geekitem.ratings({comment:1})"]`)[0].outerText

numberOfRankings = document.querySelectorAll(`[ui-sref="geekitem.ratings({rated:1})"]`)[0].outerText

if (document.querySelectorAll(`[show-weight-graph]`)[0] == null) {
weight = "" } else {
weight = document.querySelectorAll(`[show-weight-graph]`)[0].outerText.match("\\d\\.\\d+").toString()
}

gameId = GEEK.googleTargets.gameid

fans = document.querySelectorAll("a[href='/fans/thing/"+gameId+"']")[0].parentNode.getAttribute("uib-tooltip").replaceAll(",","").match("\\d+").toString()

subscribers = document.querySelectorAll("subscription")[0].outerHTML.replaceAll(",","").match("(\\d+)\\sSubscribers")[1].toString()

pageviews = document.getElementsByClassName("row game-stats")[0].childNodes[3].querySelectorAll("div")[0].querySelectorAll("ul")[0].innerText.replaceAll(",","").match("Views\\n(\\d+)")[1].toString()

allPlays = document.querySelectorAll("a[href='/playstats/thing/"+gameId+"']")[0].outerText.replaceAll(",","").match("\\d+").toString()

thisMonth = document.querySelectorAll("a[href='/playstats/thing/"+gameId+"/2021-10']")[0].outerText.replaceAll(",","").match("\\d+").toString()

wishlist = document.querySelectorAll(`[ui-sref="geekitem.ratings({status:'wishlist'})"]`)[0].outerText.replaceAll(",","")



return avgRanking + "|" + numberOfRankings + "|" +weight + "|" + fans + "|" + subscribers + "|" + pageviews + "|" + allPlays + "|" + thisMonth + "|" + wishlist
}
