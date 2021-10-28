function test(){
word = ""
for (let i =2; i < 150; i+=2) {
item = document.querySelectorAll("div[geekmarket-cart]")[0].childNodes[2].childNodes[i]
title = item.querySelectorAll("h3")[0].outerText
thumbs = item.querySelectorAll(`[ng-class="{ 'active': geekrec_ctrl.reactioninfo.thumbsup }"]`)[0].outerText.replaceAll(",","").match("\\d+").toString()
musthave = item.querySelectorAll(`[ng-if="itemsctrl.showstats"]`)[0].childNodes[1].childNodes[3].outerText
interested = item.querySelectorAll(`[ng-if="itemsctrl.showstats"]`)[0].childNodes[3].childNodes[3].outerText
undecided = item.querySelectorAll(`[ng-if="itemsctrl.showstats"]`)[0].childNodes[5].childNodes[3].outerText
word = ""
word += title + "|" + thumbs + "|" + musthave + "|" + interested + "|" + undecided
console.log(word)
}
}
// scraper for Spiel manifest
