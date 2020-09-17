import { SiteList } from "./types.ts";

export const sites: SiteList = {
  "2Dimensions": {
    "errorType": "status_code",
    "url": "https://2Dimensions.com/a/{}",
    "urlMain": "https://2Dimensions.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "3dnews": {
    "errorMsg": "Пользователь не зарегистрирован и не имеет профиля для просмотра.",
    "errorType": "message",
    "url": "http://forum.3dnews.ru/member.php?username={}",
    "urlMain": "http://forum.3dnews.ru/",
    "username_claimed": "red",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "4pda": {
    "errorMsg": "[1,false,0]",
    "errorType": "message",
    "url": "https://4pda.ru/forum/index.php?act=search&source=pst&noform=1&username={}",
    "urlMain": "https://4pda.ru/",
    "urlProbe": " https://4pda.ru/forum/index.php?act=auth&action=chkname&login={}",
    "username_claimed": "green",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "7Cups": {
    "errorType": "status_code",
    "url": "https://www.7cups.com/@{}",
    "urlMain": "https://www.7cups.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "9GAG": {
    "errorType": "status_code",
    "url": "https://www.9gag.com/u/{}",
    "urlMain": "https://www.9gag.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "About.me": {
    "errorType": "status_code",
    "url": "https://about.me/{}",
    "urlMain": "https://about.me/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Academia.edu": {
    "errorType": "status_code",
    "regexCheck": "^[^.]*$",
    "url": "https://independent.academia.edu/{}",
    "urlMain": "https://www.academia.edu/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Alik.cz": {
    "errorType": "status_code",
    "url": "https://www.alik.cz/u/{}",
    "urlMain": "https://www.alik.cz/",
    "username_claimed": "julian",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "AllTrails": {
    "errorMsg": "User could not be found.",
    "errorType": "message",
    "url": "https://www.alltrails.com/members/{}",
    "urlMain": "https://www.alltrails.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "Anobii": {
    "errorType": "response_url",
    "url": "https://www.anobii.com/{}/profile",
    "urlMain": "https://www.anobii.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Archive.org": {
    "errorMsg": "cannot find account",
    "errorType": "message",
    "url": "https://archive.org/details/@{}",
    "urlMain": "https://archive.org",
    "username_claimed": "blue",
    "username_unclaimed": "noonewould"
  },
  "Asciinema": {
    "errorType": "status_code",
    "url": "https://asciinema.org/~{}",
    "urlMain": "https://asciinema.org",
    "username_claimed": "red",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Ask Fedora": {
    "errorType": "status_code",
    "url": "https://ask.fedoraproject.org/u/{}",
    "urlMain": "https://ask.fedoraproject.org/",
    "username_claimed": "red",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "AskFM": {
    "errorMsg": "Well, apparently not anymore.",
    "errorType": "message",
    "regexCheck": "^[a-zA-Z0-9_]{3,40}$",
    "url": "https://ask.fm/{}",
    "urlMain": "https://ask.fm/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Audiojungle": {
    "errorType": "status_code",
    "regexCheck": "^[a-zA-Z0-9_]+$",
    "url": "https://audiojungle.net/user/{}",
    "urlMain": "https://audiojungle.net/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Avizo": {
    "errorType": "response_url",
    "errorUrl": "https://www.avizo.cz/",
    "url": "https://www.avizo.cz/{}/",
    "urlMain": "https://www.avizo.cz/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "BLIP.fm": {
    "errorType": "status_code",
    "regexCheck": "^[a-zA-Z0-9_]{1,30}$",
    "url": "https://blip.fm/{}",
    "urlMain": "https://blip.fm/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "BOOTH": {
    "errorType": "response_url",
    "errorUrl": "https://booth.pm/",
    "url": "https://{}.booth.pm/",
    "urlMain": "https://booth.pm/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Badoo": {
    "errorType": "status_code",
    "url": "https://badoo.com/profile/{}",
    "urlMain": "https://badoo.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Bandcamp": {
    "errorType": "status_code",
    "url": "https://www.bandcamp.com/{}",
    "urlMain": "https://www.bandcamp.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Bazar.cz": {
    "errorType": "response_url",
    "errorUrl": "https://www.bazar.cz/error404.aspx",
    "url": "https://www.bazar.cz/{}/",
    "urlMain": "https://www.bazar.cz/",
    "username_claimed": "pianina",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "Behance": {
    "errorType": "status_code",
    "url": "https://www.behance.net/{}",
    "urlMain": "https://www.behance.net/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "BinarySearch": {
    "errorMsg": "{}",
    "errorType": "message",
    "regexCheck": "^[a-zA-Z0-9-_]{1,15}$",
    "url": "https://binarysearch.io/@/{}",
    "urlMain": "https://binarysearch.io/",
    "urlProbe": "https://binarysearch.io/api/users/{}/profile",
    "username_claimed": "Eyes_Wide_Shut",
    "username_unclaimed": "hihowareyou101"
  },
  "BitBucket": {
    "errorType": "status_code",
    "regexCheck": "^[a-zA-Z0-9-_]{1,30}$",
    "url": "https://bitbucket.org/{}/",
    "urlMain": "https://bitbucket.org/",
    "username_claimed": "white",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "BitCoinForum": {
    "errorMsg": "The user whose profile you are trying to view does not exist.",
    "errorType": "message",
    "url": "https://bitcoinforum.com/profile/{}",
    "urlMain": "https://bitcoinforum.com",
    "username_claimed": "bitcoinforum.com",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Blogger": {
    "errorType": "status_code",
    "regexCheck": "^[a-zA-Z][a-zA-Z0-9_-]*$",
    "url": "https://{}.blogspot.com",
    "urlMain": "https://www.blogger.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "BodyBuilding": {
    "errorType": "response_url",
    "errorUrl": "https://bodyspace.bodybuilding.com/",
    "url": "https://bodyspace.bodybuilding.com/{}",
    "urlMain": "https://bodyspace.bodybuilding.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Bookcrossing": {
    "errorType": "status_code",
    "url": "https://www.bookcrossing.com/mybookshelf/{}/",
    "urlMain": "https://www.bookcrossing.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "BuyMeACoffee": {
    "errorType": "status_code",
    "url": "https://buymeacoff.ee/{}",
    "urlMain": "https://www.buymeacoffee.com/",
    "urlProbe": "https://www.buymeacoffee.com/{}",
    "username_claimed": "red",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "BuzzFeed": {
    "errorType": "status_code",
    "url": "https://buzzfeed.com/{}",
    "urlMain": "https://buzzfeed.com/",
    "username_claimed": "blue",
    "username_unclaimed": "xgtrq"
  },
  "CNET": {
    "errorType": "status_code",
    "url": "https://www.cnet.com/profiles/{}/",
    "urlMain": "https://www.cnet.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "CapFriendly": {
    "errorMsg": "<div class=\"err show p5\">No results found</div>",
    "errorType": "message",
    "regexCheck": "^[a-zA-z][a-zA-Z0-9_]{2,79}$",
    "url": "https://www.capfriendly.com/users/{}",
    "urlMain": "https://www.capfriendly.com/",
    "username_claimed": "thisactuallyexists",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Career.habr": {
    "errorMsg": "<h1>Ошибка 404</h1>",
    "errorType": "message",
    "url": "https://career.habr.com/{}",
    "urlMain": "https://career.habr.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "CashMe": {
    "errorType": "status_code",
    "url": "https://cash.me/${}",
    "urlMain": "https://cash.me/",
    "username_claimed": "Jenny",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Cent": {
    "errorMsg": "<title>Cent</title>",
    "errorType": "message",
    "url": "https://beta.cent.co/@{}",
    "urlMain": "https://cent.co/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Chatujme.cz": {
    "errorMsg": "Neexistujicí profil",
    "errorType": "message",
    "regexCheck": "^[a-zA-Z][a-zA-Z1-9_-]*$",
    "url": "https://profil.chatujme.cz/{}",
    "urlMain": "https://chatujme.cz/",
    "username_claimed": "david",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "Chess": {
    "errorMsg": "Missing page... somebody made a wrong move.",
    "errorType": "message",
    "url": "https://www.chess.com/member/{}",
    "urlMain": "https://www.chess.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Cloob": {
    "errorType": "status_code",
    "url": "https://www.cloob.com/name/{}",
    "urlMain": "https://www.cloob.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "CloudflareCommunity": {
    "errorType": "status_code",
    "url": "https://community.cloudflare.com/u/{}",
    "urlMain": "https://community.cloudflare.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "Clozemaster": {
    "errorMsg": "Oh no! Player not found.",
    "errorType": "message",
    "url": "https://www.clozemaster.com/players/{}",
    "urlMain": "https://www.clozemaster.com",
    "username_claimed": "green",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Codecademy": {
    "errorType": "status_code",
    "url": "https://www.codecademy.com/profiles/{}",
    "urlMain": "https://www.codecademy.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Codechef": {
    "errorType": "response_url",
    "errorUrl": "https://www.codechef.com/",
    "url": "https://www.codechef.com/users/{}",
    "urlMain": "https://www.codechef.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Codewars": {
    "errorType": "status_code",
    "url": "https://www.codewars.com/users/{}",
    "urlMain": "https://www.codewars.com",
    "username_claimed": "example",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Contently": {
    "errorMsg": "We can't find that page!",
    "errorType": "message",
    "regexCheck": "^[a-zA-Z][a-zA-Z0-9_-]*$",
    "url": "https://{}.contently.com/",
    "urlMain": "https://contently.com/",
    "username_claimed": "jordanteicher",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Coroflot": {
    "errorType": "status_code",
    "url": "https://www.coroflot.com/{}",
    "urlMain": "https://coroflot.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Countable": {
    "errorType": "status_code",
    "url": "https://www.countable.us/{}",
    "urlMain": "https://www.countable.us/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Cracked": {
    "errorType": "response_url",
    "errorUrl": "https://www.cracked.com/",
    "url": "https://www.cracked.com/members/{}/",
    "urlMain": "https://www.cracked.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "Crevado": {
    "errorType": "status_code",
    "url": "https://{}.crevado.com",
    "urlMain": "https://crevado.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "DEV Community": {
    "errorType": "status_code",
    "regexCheck": "^[a-zA-Z][a-zA-Z0-9_-]*$",
    "url": "https://dev.to/{}",
    "urlMain": "https://dev.to/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "DailyMotion": {
    "errorType": "status_code",
    "url": "https://www.dailymotion.com/{}",
    "urlMain": "https://www.dailymotion.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Designspiration": {
    "errorType": "status_code",
    "url": "https://www.designspiration.net/{}/",
    "urlMain": "https://www.designspiration.net/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "DeviantART": {
    "errorType": "status_code",
    "regexCheck": "^[a-zA-Z][a-zA-Z0-9_-]*$",
    "url": "https://{}.deviantart.com",
    "urlMain": "https://deviantart.com",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Discogs": {
    "errorType": "status_code",
    "url": "https://www.discogs.com/user/{}",
    "urlMain": "https://www.discogs.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Discuss.Elastic.co": {
    "errorType": "status_code",
    "url": "https://discuss.elastic.co/u/{}",
    "urlMain": "https://discuss.elastic.co/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Disqus": {
    "errorType": "status_code",
    "url": "https://disqus.com/{}",
    "urlMain": "https://disqus.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Docker Hub": {
    "errorType": "status_code",
    "url": "https://hub.docker.com/u/{}/",
    "urlMain": "https://hub.docker.com/",
    "urlProbe": "https://hub.docker.com/v2/users/{}/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Dribbble": {
    "errorMsg": "Whoops, that page is gone.",
    "errorType": "message",
    "regexCheck": "^[a-zA-Z][a-zA-Z0-9_-]*$",
    "url": "https://dribbble.com/{}",
    "urlMain": "https://dribbble.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Ebay": {
    "errorMsg": "<title>eBay Profile - error</title>",
    "errorType": "message",
    "url": "https://www.ebay.com/usr/{}",
    "urlMain": "https://www.ebay.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Ello": {
    "errorMsg": "We couldn't find the page you're looking for",
    "errorType": "message",
    "url": "https://ello.co/{}",
    "urlMain": "https://ello.co/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Etsy": {
    "errorType": "status_code",
    "url": "https://www.etsy.com/shop/{}",
    "urlMain": "https://www.etsy.com/",
    "username_claimed": "JennyKrafts",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Euw": {
    "errorMsg": "This summoner is not registered at OP.GG. Please check spelling.",
    "errorType": "message",
    "url": "https://euw.op.gg/summoner/userName={}",
    "urlMain": "https://euw.op.gg/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "EyeEm": {
    "errorMsg": "<title>Not Found (404) | EyeEm</title>",
    "errorType": "message",
    "url": "https://www.eyeem.com/u/{}",
    "urlMain": "https://www.eyeem.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "F3.cool": {
    "errorType": "status_code",
    "url": "https://f3.cool/{}/",
    "urlMain": "https://f3.cool/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Facebook": {
    "errorType": "status_code",
    "regexCheck": "^[a-zA-Z0-9\\.]{3,49}(?<!\\.com|\\.org|\\.net)$",
    "url": "https://www.facebook.com/{}",
    "urlMain": "https://www.facebook.com/",
    "urlProbe": "https://www.facebook.com/{}/videos/",
    "username_claimed": "hackerman",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Facenama": {
    "errorType": "response_url",
    "errorUrl": "https://facenama.com/404.html",
    "url": "https://facenama.com/{}",
    "urlMain": "https://facenama.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis77"
  },
  "Fandom": {
    "errorType": "status_code",
    "url": "https://www.fandom.com/u/{}",
    "urlMain": "https://www.fandom.com/",
    "username_claimed": "Jungypoo",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Filmogs": {
    "errorType": "status_code",
    "url": "https://www.filmo.gs/users/{}",
    "urlMain": "https://www.filmo.gs/",
    "username_claimed": "cupparober",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Flickr": {
    "errorType": "status_code",
    "url": "https://www.flickr.com/people/{}",
    "urlMain": "https://www.flickr.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Flightradar24": {
    "errorType": "status_code",
    "regexCheck": "^[a-zA-Z0-9_]{3,20}$",
    "url": "https://my.flightradar24.com/{}",
    "urlMain": "https://www.flightradar24.com/",
    "username_claimed": "jebbrooks",
    "username_unclaimed": "xgtrq"
  },
  "Flipboard": {
    "errorType": "status_code",
    "regexCheck": "^([a-zA-Z0-9_]){1,15}$",
    "url": "https://flipboard.com/@{}",
    "urlMain": "https://flipboard.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewould"
  },
  "Football": {
    "errorMsg": "Пользователь с таким именем не найден",
    "errorType": "message",
    "url": "https://www.rusfootball.info/user/{}/",
    "urlMain": "https://www.rusfootball.info/",
    "username_claimed": "solo87",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "FortniteTracker": {
    "errorType": "status_code",
    "url": "https://fortnitetracker.com/profile/all/{}",
    "urlMain": "https://fortnitetracker.com/challenges",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "Freelance.habr": {
    "errorMsg": "<div class=\"icon_user_locked\"></div>",
    "errorType": "message",
    "url": "https://freelance.habr.com/freelancers/{}",
    "urlMain": "https://freelance.habr.com/",
    "username_claimed": "adam",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Freelancer.com": {
    "errorMsg": "\"users\":{}",
    "errorType": "message",
    "url": "https://www.freelancer.com/api/users/0.1/users?usernames%5B%5D={}&compact=true",
    "urlMain": "https://www.freelancer.com/",
    "username_claimed": "red0xff",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "Freesound": {
    "errorType": "status_code",
    "url": "https://freesound.org/people/{}/",
    "urlMain": "https://freesound.org/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "GDProfiles": {
    "errorType": "status_code",
    "url": "https://gdprofiles.com/{}",
    "urlMain": "https://gdprofiles.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "Gamespot": {
    "errorType": "status_code",
    "url": "https://www.gamespot.com/profile/{}/",
    "urlMain": "https://www.gamespot.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "GetMyUni": {
    "errorType": "status_code",
    "url": "https://www.getmyuni.com/user/{}",
    "urlMain": "https://getmyuni.com/",
    "username_claimed": "Upneet.Grover17",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Giphy": {
    "errorType": "status_code",
    "url": "https://giphy.com/{}",
    "urlMain": "https://giphy.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "GitHub": {
    "errorType": "status_code",
    "regexCheck": "^[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}$",
    "url": "https://www.github.com/{}",
    "urlMain": "https://www.github.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "GitLab": {
    "errorMsg": "[]",
    "errorType": "message",
    "url": "https://gitlab.com/{}",
    "urlMain": "https://gitlab.com/",
    "urlProbe": "https://gitlab.com/api/v4/users?username={}",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Gitee": {
    "errorType": "status_code",
    "url": "https://gitee.com/{}",
    "urlMain": "https://gitee.com/",
    "username_claimed": "wizzer",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "GoodReads": {
    "errorType": "status_code",
    "url": "https://www.goodreads.com/{}",
    "urlMain": "https://www.goodreads.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Gravatar": {
    "errorType": "status_code",
    "regexCheck": "^((?!\\.).)*$",
    "url": "http://en.gravatar.com/{}",
    "urlMain": "http://en.gravatar.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Gumroad": {
    "errorMsg": "Page not found.",
    "errorType": "message",
    "url": "https://www.gumroad.com/{}",
    "urlMain": "https://www.gumroad.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "GunsAndAmmo": {
    "errorType": "status_code",
    "url": "https://forums.gunsandammo.com/profile/{}",
    "urlMain": "https://gunsandammo.com/",
    "username_claimed": "adam",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "GuruShots": {
    "errorType": "status_code",
    "url": "https://gurushots.com/{}/photos",
    "urlMain": "https://gurushots.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "HackTheBox": {
    "errorType": "status_code",
    "url": "https://forum.hackthebox.eu/profile/{}",
    "urlMain": "https://forum.hackthebox.eu/",
    "username_claimed": "angar",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "Hackaday": {
    "errorType": "status_code",
    "url": "https://hackaday.io/{}",
    "urlMain": "https://hackaday.io/",
    "username_claimed": "adam",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "HackerNews": {
    "errorMsg": "No such user.",
    "errorType": "message",
    "url": "https://news.ycombinator.com/user?id={}",
    "urlMain": "https://news.ycombinator.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "HackerOne": {
    "errorMsg": "Page not found",
    "errorType": "message",
    "url": "https://hackerone.com/{}",
    "urlMain": "https://hackerone.com/",
    "username_claimed": "stok",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "HackerRank": {
    "errorMsg": "Something went wrong",
    "errorType": "message",
    "url": "https://hackerrank.com/{}",
    "urlMain": "https://hackerrank.com/",
    "username_claimed": "satznova",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "House-Mixes.com": {
    "errorMsg": "Profile Not Found",
    "errorType": "message",
    "regexCheck": "^[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*$",
    "url": "https://www.house-mixes.com/profile/{}",
    "urlMain": "https://www.house-mixes.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Houzz": {
    "errorMsg": "The page you requested was not found.",
    "errorType": "message",
    "url": "https://houzz.com/user/{}",
    "urlMain": "https://houzz.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "HubPages": {
    "errorType": "status_code",
    "url": "https://hubpages.com/@{}",
    "urlMain": "https://hubpages.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "Hubski": {
    "errorMsg": "No such user",
    "errorType": "message",
    "url": "https://hubski.com/user/{}",
    "urlMain": "https://hubski.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "IFTTT": {
    "errorMsg": "The requested page or file does not exist",
    "errorType": "message",
    "regexCheck": "^[A-Za-z0-9]{3,35}$",
    "url": "https://www.ifttt.com/p/{}",
    "urlMain": "https://www.ifttt.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "ImgUp.cz": {
    "errorType": "status_code",
    "url": "https://imgup.cz/{}",
    "urlMain": "https://imgup.cz/",
    "username_claimed": "adam",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "Instagram": {
    "errorType": "status_code",
    "request_head_only": false,
    "url": "https://www.instagram.com/{}",
    "urlMain": "https://www.instagram.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Instructables": {
    "errorMsg": "404: We're sorry, things break sometimes",
    "errorType": "message",
    "url": "https://www.instructables.com/member/{}",
    "urlMain": "https://www.instructables.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Issuu": {
    "errorType": "status_code",
    "url": "https://issuu.com/{}",
    "urlMain": "https://issuu.com/",
    "username_claimed": "jenny",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Itch.io": {
    "errorType": "status_code",
    "url": "https://{}.itch.io/",
    "urlMain": "https://itch.io/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Jimdo": {
    "errorType": "status_code",
    "noPeriod": "True",
    "url": "https://{}.jimdosite.com",
    "urlMain": "https://jimdosite.com/",
    "username_claimed": "jenny",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Kaggle": {
    "errorType": "status_code",
    "url": "https://www.kaggle.com/{}",
    "urlMain": "https://www.kaggle.com/",
    "username_claimed": "dansbecker",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Kali community": {
    "errorMsg": "This user has not registered and therefore does not have a profile to view.",
    "errorType": "message",
    "url": "https://forums.kali.org/member.php?username={}",
    "urlMain": "https://forums.kali.org/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Keybase": {
    "errorType": "status_code",
    "url": "https://keybase.io/{}",
    "urlMain": "https://keybase.io/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Kik": {
    "errorMsg": "The page you requested was not found",
    "errorType": "message",
    "url": "https://kik.me/{}",
    "urlMain": "http://kik.me/",
    "urlProbe": "https://ws2.kik.com/user/{}",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Kongregate": {
    "errorMsg": "Sorry, no account with that name was found.",
    "errorType": "message",
    "regexCheck": "^[a-zA-Z][a-zA-Z0-9_-]*$",
    "url": "https://www.kongregate.com/accounts/{}",
    "urlMain": "https://www.kongregate.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "LOR": {
    "errorType": "status_code",
    "url": "https://www.linux.org.ru/people/{}/profile",
    "urlMain": "https://linux.org.ru/",
    "username_claimed": "red",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Launchpad": {
    "errorType": "status_code",
    "url": "https://launchpad.net/~{}",
    "urlMain": "https://launchpad.net/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "LeetCode": {
    "errorType": "status_code",
    "url": "https://leetcode.com/{}",
    "urlMain": "https://leetcode.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Letterboxd": {
    "errorMsg": "Sorry, we can’t find the page you’ve requested.",
    "errorType": "message",
    "url": "https://letterboxd.com/{}",
    "urlMain": "https://letterboxd.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Lichess": {
    "errorMsg": "Page not found!",
    "errorType": "message",
    "url": "https://lichess.org/@/{}",
    "urlMain": "https://lichess.org",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Linkedin": {
    "errorMsg": "could not be found",
    "errorType": "message",
    "rank": 0,
    "url": "https://www.linkedin.com/in/{}",
    "urlMain": "https://www.linkedin.com/",
    "username_claimed": "alex",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "LiveJournal": {
    "errorType": "status_code",
    "regexCheck": "^[a-zA-Z][a-zA-Z0-9_-]*$",
    "url": "https://{}.livejournal.com",
    "urlMain": "https://www.livejournal.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "LiveLeak": {
    "errorMsg": "channel not found",
    "errorType": "message",
    "url": "https://www.liveleak.com/c/{}",
    "urlMain": "https://www.liveleak.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "Lobsters": {
    "errorType": "status_code",
    "regexCheck": "[A-Za-z0-9][A-Za-z0-9_-]{0,24}",
    "url": "https://lobste.rs/u/{}",
    "urlMain": "https://lobste.rs/",
    "username_claimed": "jcs",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Lolchess": {
    "errorMsg": "No search results",
    "errorType": "message",
    "url": "https://lolchess.gg/profile/na/{}",
    "urlMain": "https://lolchess.gg/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Medium": {
    "errorType": "status_code",
    "url": "https://medium.com/@{}",
    "urlMain": "https://medium.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Memrise": {
    "errorType": "status_code",
    "url": "https://www.memrise.com/user/{}/",
    "urlMain": "https://www.memrise.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "MixCloud": {
    "errorType": "status_code",
    "url": "https://www.mixcloud.com/{}/",
    "urlMain": "https://www.mixcloud.com/",
    "urlProbe": "https://api.mixcloud.com/{}/",
    "username_claimed": "jenny",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Munzee": {
    "errorType": "status_code",
    "url": "https://www.munzee.com/m/{}",
    "urlMain": "https://www.munzee.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "MyAnimeList": {
    "errorType": "status_code",
    "url": "https://myanimelist.net/profile/{}",
    "urlMain": "https://myanimelist.net/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "MyMiniFactory": {
    "errorType": "status_code",
    "url": "https://www.myminifactory.com/users/{}",
    "urlMain": "https://www.myminifactory.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Myspace": {
    "errorType": "status_code",
    "url": "https://myspace.com/{}",
    "urlMain": "https://myspace.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "NICommunityForum": {
    "errorMsg": "The specified member cannot be found",
    "errorType": "message",
    "url": "https://www.native-instruments.com/forum/members?username={}",
    "urlMain": "https://www.native-instruments.com/forum/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "NPM": {
    "errorType": "status_code",
    "url": "https://www.npmjs.com/~{}",
    "urlMain": "https://www.npmjs.com/",
    "username_claimed": "kennethsweezy",
    "username_unclaimed": "noonewould"
  },
  "NPM-Package": {
    "errorType": "status_code",
    "url": "https://www.npmjs.com/package/{}",
    "urlMain": "https://www.npmjs.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "NameMC (Minecraft.net skins)": {
    "errorMsg": "Profiles: 0 results",
    "errorType": "message",
    "url": "https://namemc.com/profile/{}",
    "urlMain": "https://namemc.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "NationStates Nation": {
    "errorMsg": "Was this your nation? It may have ceased to exist due to inactivity, but can rise again!",
    "errorType": "message",
    "url": "https://nationstates.net/nation={}",
    "urlMain": "https://nationstates.net",
    "username_claimed": "the_holy_principality_of_saint_mark",
    "username_unclaimed": "noonewould"
  },
  "NationStates Region": {
    "errorMsg": "does not exist.",
    "errorType": "message",
    "url": "https://nationstates.net/region={}",
    "urlMain": "https://nationstates.net",
    "username_claimed": "the_west_pacific",
    "username_unclaimed": "noonewould"
  },
  "Naver": {
    "errorType": "status_code",
    "url": "https://blog.naver.com/{}",
    "urlMain": "https://naver.com",
    "username_claimed": "blue",
    "username_unclaimed": "noonewould"
  },
  "Newgrounds": {
    "errorType": "status_code",
    "regexCheck": "^[a-zA-Z][a-zA-Z0-9_-]*$",
    "url": "https://{}.newgrounds.com",
    "urlMain": "https://newgrounds.com",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Nightbot": {
    "errorType": "status_code",
    "url": "https://nightbot.tv/t/{}/commands",
    "urlMain": "https://nightbot.tv/",
    "urlProbe": "https://api.nightbot.tv/1/channels/t/{}",
    "username_claimed": "green",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "NotABug.org": {
    "errorType": "status_code",
    "url": "https://notabug.org/{}",
    "urlMain": "https://notabug.org/",
    "urlProbe": "https://notabug.org/{}/followers",
    "username_claimed": "red",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "OK": {
    "errorType": "status_code",
    "regexCheck": "^[a-zA-Z][a-zA-Z0-9_.-]*$",
    "url": "https://ok.ru/{}",
    "urlMain": "https://ok.ru/",
    "username_claimed": "ok",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "OpenStreetMap": {
    "errorType": "status_code",
    "url": "https://www.openstreetmap.org/user/{}",
    "urlMain": "https://www.openstreetmap.org/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Opensource": {
    "errorType": "status_code",
    "url": "https://opensource.com/users/{}",
    "urlMain": "https://opensource.com/",
    "username_claimed": "red",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Oracle Community": {
    "errorType": "status_code",
    "url": "https://community.oracle.com/people/{}",
    "urlMain": "https://community.oracle.com",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Otzovik": {
    "errorType": "status_code",
    "url": "https://otzovik.com/profile/{}",
    "urlMain": "https://otzovik.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "OurDJTalk": {
    "errorMsg": "The specified member cannot be found",
    "errorType": "message",
    "url": "https://ourdjtalk.com/members?username={}",
    "urlMain": "https://ourdjtalk.com/",
    "username_claimed": "steve",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "PCGamer": {
    "errorMsg": "The specified member cannot be found. Please enter a member's entire name.",
    "errorType": "message",
    "url": "https://forums.pcgamer.com/members/?username={}",
    "urlMain": "https://pcgamer.com",
    "username_claimed": "admin",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "PCPartPicker": {
    "errorType": "status_code",
    "url": "https://pcpartpicker.com/user/{}",
    "urlMain": "https://pcpartpicker.com",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "PSNProfiles.com": {
    "errorType": "response_url",
    "errorUrl": "https://psnprofiles.com/?psnId={}",
    "url": "https://psnprofiles.com/{}",
    "urlMain": "https://psnprofiles.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "Packagist": {
    "errorType": "response_url",
    "errorUrl": "https://packagist.org/search/?q={}&reason=vendor_not_found",
    "url": "https://packagist.org/packages/{}/",
    "urlMain": "https://packagist.org/",
    "username_claimed": "psr",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Pastebin": {
    "errorMsg": "Not Found (#404)",
    "errorType": "message",
    "url": "https://pastebin.com/u/{}",
    "urlMain": "https://pastebin.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Patreon": {
    "errorType": "status_code",
    "url": "https://www.patreon.com/{}",
    "urlMain": "https://www.patreon.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Periscope": {
    "errorType": "status_code",
    "url": "https://www.periscope.tv/{}/",
    "urlMain": "https://www.periscope.tv/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Pinkbike": {
    "errorType": "status_code",
    "url": "https://www.pinkbike.com/u/{}/",
    "urlMain": "https://www.pinkbike.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Pinterest": {
    "errorType": "status_code",
    "url": "https://www.pinterest.com/{}/",
    "urlMain": "https://www.pinterest.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "PlayStore": {
    "errorType": "status_code",
    "url": "https://play.google.com/store/apps/developer?id={}",
    "urlMain": "https://play.google.com/store",
    "username_claimed": "Facebook",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Plug.DJ": {
    "errorType": "status_code",
    "url": "https://plug.dj/@/{}",
    "urlMain": "https://plug.dj/",
    "username_claimed": "plug-dj-rock",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Pokemon Showdown": {
    "errorType": "status_code",
    "url": "https://pokemonshowdown.com/users/{}",
    "urlMain": "https://pokemonshowdown.com",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "PokerStrategy": {
    "errorType": "status_code",
    "url": "http://www.pokerstrategy.net/user/{}/profile/",
    "urlMain": "http://www.pokerstrategy.net",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Polygon": {
    "errorType": "status_code",
    "url": "https://www.polygon.com/users/{}",
    "urlMain": "https://www.polygon.com/",
    "username_claimed": "swiftstickler",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "ProductHunt": {
    "errorMsg": "Page Not Found",
    "errorType": "message",
    "url": "https://www.producthunt.com/@{}",
    "urlMain": "https://www.producthunt.com/",
    "username_claimed": "jenny",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "PromoDJ": {
    "errorType": "status_code",
    "url": "http://promodj.com/{}",
    "urlMain": "http://promodj.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "PyPi": {
    "errorType": "status_code",
    "url": "https://pypi.org/user/{}",
    "urlMain": "https://pypi.org",
    "username_claimed": "Blue",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "Quora": {
    "errorType": "response_url",
    "errorUrl": "https://www.quora.com/profile/{}",
    "url": "https://www.quora.com/profile/{}",
    "urlMain": "https://www.quora.com/",
    "username_claimed": "Matt-Riggsby",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Rajce.net": {
    "errorType": "status_code",
    "url": "https://{}.rajce.idnes.cz/",
    "urlMain": "https://www.rajce.idnes.cz/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Rate Your Music": {
    "errorType": "status_code",
    "url": "https://rateyourmusic.com/~{}",
    "urlMain": "https://rateyourmusic.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Realmeye": {
    "errorMsg": "Sorry, but we either:",
    "errorType": "message",
    "url": "https://www.realmeye.com/player/{}",
    "urlMain": "https://www.realmeye.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Redbubble": {
    "errorType": "status_code",
    "url": "https://www.redbubble.com/people/{}",
    "urlMain": "https://www.redbubble.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis77777"
  },
  "Reddit": {
    "errorType": "status_code",
    "url": "https://www.reddit.com/user/{}",
    "urlMain": "https://www.reddit.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Repl.it": {
    "errorMsg": "404",
    "errorType": "message",
    "url": "https://repl.it/@{}",
    "urlMain": "https://repl.it/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "ReverbNation": {
    "errorMsg": "Sorry, we couldn't find that page",
    "errorType": "message",
    "url": "https://www.reverbnation.com/{}",
    "urlMain": "https://www.reverbnation.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Roblox": {
    "errorMsg": "Page cannot be found or no longer exists",
    "errorType": "message",
    "url": "https://www.roblox.com/user.aspx?username={}",
    "urlMain": "https://www.roblox.com/",
    "username_claimed": "bluewolfekiller",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "RubyGems": {
    "errorType": "status_code",
    "regexCheck": "^[a-zA-Z][a-zA-Z0-9_-]{1,40}",
    "url": "https://rubygems.org/profiles/{}",
    "urlMain": "https://rubygems.org/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Sbazar.cz": {
    "errorType": "status_code",
    "url": "https://www.sbazar.cz/{}",
    "urlMain": "https://www.sbazar.cz/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "Scratch": {
    "errorType": "status_code",
    "url": "https://scratch.mit.edu/users/{}",
    "urlMain": "https://scratch.mit.edu/",
    "username_claimed": "griffpatch",
    "username_unclaimed": "noonewould"
  },
  "Scribd": {
    "errorMsg": "Page not found",
    "errorType": "message",
    "url": "https://www.scribd.com/{}",
    "urlMain": "https://www.scribd.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "ShitpostBot5000": {
    "errorType": "status_code",
    "url": "https://www.shitpostbot.com/user/{}",
    "urlMain": "https://www.shitpostbot.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "Signal": {
    "errorMsg": "Oops! That page doesn’t exist or is private.",
    "errorType": "message",
    "url": "https://community.signalusers.org/u/{}",
    "urlMain": "https://community.signalusers.org",
    "username_claimed": "jlund",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Slack": {
    "errorType": "status_code",
    "regexCheck": "^[a-zA-Z][a-zA-Z0-9_-]*$",
    "url": "https://{}.slack.com",
    "urlMain": "https://slack.com",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Slashdot": {
    "errorMsg": "user you requested does not exist",
    "errorType": "message",
    "url": "https://slashdot.org/~{}",
    "urlMain": "https://slashdot.org",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "SlideShare": {
    "errorType": "status_code",
    "url": "https://slideshare.net/{}",
    "urlMain": "https://slideshare.net/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Smashcast": {
    "errorType": "status_code",
    "url": "https://www.smashcast.tv/api/media/live/{}",
    "urlMain": "https://www.smashcast.tv/",
    "username_claimed": "hello",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Smule": {
    "errorType": "status_code",
    "url": "https://www.smule.com/{}",
    "urlMain": "https://www.smule.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "SoundCloud": {
    "errorType": "status_code",
    "url": "https://soundcloud.com/{}",
    "urlMain": "https://soundcloud.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "SourceForge": {
    "errorType": "status_code",
    "url": "https://sourceforge.net/u/{}",
    "urlMain": "https://sourceforge.net/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "SoylentNews": {
    "errorMsg": "The user you requested does not exist, no matter how much you wish this might be the case.",
    "errorType": "message",
    "url": "https://soylentnews.org/~{}",
    "urlMain": "https://soylentnews.org",
    "username_claimed": "adam",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "SparkPeople": {
    "errorMsg": "We couldn't find that user",
    "errorType": "message",
    "url": "https://www.sparkpeople.com/mypage.asp?id={}",
    "urlMain": "https://www.sparkpeople.com",
    "username_claimed": "adam",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Speedrun.com": {
    "errorMsg": "not found.",
    "errorType": "message",
    "url": "https://speedrun.com/user/{}",
    "urlMain": "https://speedrun.com/",
    "username_claimed": "3Tau",
    "username_unclaimed": "noonewould"
  },
  "Splits.io": {
    "errorType": "status_code",
    "url": "https://splits.io/users/{}",
    "urlMain": "https://splits.io",
    "username_claimed": "cambosteve",
    "username_unclaimed": "noonewould"
  },
  "Sporcle": {
    "errorType": "status_code",
    "url": "https://www.sporcle.com/user/{}/people",
    "urlMain": "https://www.sporcle.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "SportsRU": {
    "errorType": "status_code",
    "url": "https://www.sports.ru/profile/{}/",
    "urlMain": "https://www.sports.ru/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Spotify": {
    "errorType": "status_code",
    "url": "https://open.spotify.com/user/{}",
    "urlMain": "https://open.spotify.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Star Citizen": {
    "errorType": "status_code",
    "url": "https://robertsspaceindustries.com/citizens/{}",
    "urlMain": "https://robertsspaceindustries.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Steam": {
    "errorMsg": "The specified profile could not be found",
    "errorType": "message",
    "url": "https://steamcommunity.com/id/{}",
    "urlMain": "https://steamcommunity.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "SteamGroup": {
    "errorMsg": "No group could be retrieved for the given URL",
    "errorType": "message",
    "url": "https://steamcommunity.com/groups/{}",
    "urlMain": "https://steamcommunity.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Steamid": {
    "errorMsg": "<div class=\"alert alert-warning\">Profile not found</div>",
    "errorType": "message",
    "url": "https://steamid.uk/profile/{}",
    "urlMain": "https://steamid.uk/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Strava": {
    "errorMsg": "Strava | Run and Cycling Tracking on the Social Network for Athletes",
    "errorType": "message",
    "url": "https://www.strava.com/athletes/{}",
    "urlMain": "https://www.strava.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "SublimeForum": {
    "errorType": "status_code",
    "url": "https://forum.sublimetext.com/u/{}",
    "urlMain": "https://forum.sublimetext.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "Telegram": {
    "errorMsg": "<meta property=\"og:description\" content=\"\">",
    "errorType": "message",
    "regexCheck": "^[a-zA-Z0-9_]{5,32}$",
    "url": "https://t.me/{}",
    "urlMain": "https://t.me/",
    "username_claimed": "roopeshvs",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Tellonym.me": {
    "errorType": "status_code",
    "url": "https://tellonym.me/{}",
    "urlMain": "https://tellonym.me/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Tinder": {
    "errorMsg": "<title data-react-helmet=\"true\">Tinder | Match. Chat. Date.</title>",
    "errorType": "message",
    "url": "https://www.gotinder.com/@{}",
    "urlMain": "https://tinder.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "TrackmaniaLadder": {
    "errorMsg": "player unknown or invalid",
    "errorType": "message",
    "url": "http://en.tm-ladder.com/{}_rech.php",
    "urlMain": "http://en.tm-ladder.com/index.php",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "TradingView": {
    "errorType": "status_code",
    "url": "https://www.tradingview.com/u/{}/",
    "urlMain": "https://www.tradingview.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Trakt": {
    "errorType": "status_code",
    "regexCheck": "^[^.]*$",
    "url": "https://www.trakt.tv/users/{}",
    "urlMain": "https://www.trakt.tv/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "TrashboxRU": {
    "errorMsg": "Пользователь не найден",
    "errorType": "message",
    "regexCheck": "^[A-Za-z0-9_-]{3,16}$",
    "url": "https://trashbox.ru/users/{}",
    "urlMain": "https://trashbox.ru/",
    "username_claimed": "blue",
    "username_unclaimed": "never-never-ever"
  },
  "Travellerspoint": {
    "errorMsg": "Wooops. Sorry!",
    "errorType": "message",
    "url": "https://www.travellerspoint.com/users/{}",
    "urlMain": "https://www.travellerspoint.com",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Trello": {
    "errorMsg": "model not found",
    "errorType": "message",
    "url": "https://trello.com/{}",
    "urlMain": "https://trello.com/",
    "urlProbe": "https://trello.com/1/Members/{}",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "TripAdvisor": {
    "errorMsg": "This page is on vacation…",
    "errorType": "message",
    "url": "https://tripadvisor.com/members/{}",
    "urlMain": "https://tripadvisor.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "TryHackMe": {
    "errorType": "status_code",
    "url": "https://tryhackme.com/p/{}",
    "urlMain": "https://tryhackme.com/",
    "username_claimed": "ashu",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Twitch": {
    "errorType": "status_code",
    "url": "https://www.twitch.tv/{}",
    "urlMain": "https://www.twitch.tv/",
    "urlProbe": "https://m.twitch.tv/{}",
    "username_claimed": "jenny",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Twitter": {
    "errorType": "status_code",
    "headers": {
      "User-Agent": ""
    },
    "url": "https://mobile.twitter.com/{}",
    "urlMain": "https://mobile.twitter.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Typeracer": {
    "errorMsg": "Profile Not Found",
    "errorType": "message",
    "url": "https://data.typeracer.com/pit/profile?user={}",
    "urlMain": "https://typeracer.com",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Ultimate-Guitar": {
    "errorType": "status_code",
    "url": "https://ultimate-guitar.com/u/{}",
    "urlMain": "https://ultimate-guitar.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Unsplash": {
    "errorType": "status_code",
    "url": "https://unsplash.com/@{}",
    "urlMain": "https://unsplash.com/",
    "username_claimed": "jenny",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "VK": {
    "errorType": "response_url",
    "errorUrl": "https://www.quora.com/profile/{}",
    "url": "https://vk.com/{}",
    "urlMain": "https://vk.com/",
    "username_claimed": "smith",
    "username_unclaimed": "blah62831"
  },
  "VSCO": {
    "errorType": "status_code",
    "url": "https://vsco.co/{}",
    "urlMain": "https://vsco.co/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Velomania": {
    "errorMsg": "Пользователь не зарегистрирован и не имеет профиля для просмотра.",
    "errorType": "message",
    "url": "https://forum.velomania.ru/member.php?username={}",
    "urlMain": "https://forum.velomania.ru/",
    "username_claimed": "red",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Venmo": {
    "errorType": "status_code",
    "url": "https://venmo.com/{}",
    "urlMain": "https://venmo.com/",
    "username_claimed": "jenny",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Vimeo": {
    "errorType": "status_code",
    "url": "https://vimeo.com/{}",
    "urlMain": "https://vimeo.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Virgool": {
    "errorMsg": "۴۰۴",
    "errorType": "message",
    "url": "https://virgool.io/@{}",
    "urlMain": "https://virgool.io/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "VirusTotal": {
    "errorMsg": "not found",
    "errorType": "message",
    "url": "https://www.virustotal.com/ui/users/{}/trusted_users",
    "urlMain": "https://www.virustotal.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Warrior Forum": {
    "errorType": "status_code",
    "url": "https://www.warriorforum.com/members/{}.html",
    "urlMain": "https://www.warriorforum.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis77777"
  },
  "Wattpad": {
    "errorMsg": "userError-404",
    "errorType": "message",
    "url": "https://www.wattpad.com/user/{}",
    "urlMain": "https://www.wattpad.com/",
    "username_claimed": "Dogstho7951",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "We Heart It": {
    "errorMsg": "Oops! You've landed on a moving target!",
    "errorType": "message",
    "url": "https://weheartit.com/{}",
    "urlMain": "https://weheartit.com/",
    "username_claimed": "ventivogue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "WebNode": {
    "errorType": "status_code",
    "url": "https://{}.webnode.cz/",
    "urlMain": "https://www.webnode.cz/",
    "username_claimed": "radkabalcarova",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Whonix Forum": {
    "errorType": "status_code",
    "url": "https://forums.whonix.org/u/{}",
    "urlMain": "https://forums.whonix.org/",
    "username_claimed": "red",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Wikidot": {
    "errorMsg": "User does not exist.",
    "errorType": "message",
    "url": "http://www.wikidot.com/user:info/{}",
    "urlMain": "http://www.wikidot.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Wikipedia": {
    "errorMsg": "<b>Wikipedia does not have a <a href=\"/wiki/Wikipedia:User_pages\" title=\"Wikipedia:User pages\">user page</a> with this exact name.</b>",
    "errorType": "message",
    "url": "https://www.wikipedia.org/wiki/User:{}",
    "urlMain": "https://www.wikipedia.org/",
    "username_claimed": "Hoadlck",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Windy": {
    "errorType": "status_code",
    "url": "https://community.windy.com/user/{}",
    "urlMain": "https://windy.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Wix": {
    "errorType": "status_code",
    "url": "https://{}.wix.com",
    "urlMain": "https://wix.com/",
    "username_claimed": "support",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "WordPress": {
    "errorType": "response_url",
    "errorUrl": "wordpress.com/typo/?subdomain=",
    "regexCheck": "^[a-zA-Z][a-zA-Z0-9_-]*$",
    "url": "https://{}.wordpress.com/",
    "urlMain": "https://wordpress.com",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Xbox Gamertag": {
    "errorType": "status_code",
    "url": "https://xboxgamertag.com/search/{}",
    "urlMain": "https://xboxgamertag.com/",
    "username_claimed": "red",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "YouPic": {
    "errorType": "status_code",
    "url": "https://youpic.com/photographer/{}/",
    "urlMain": "https://youpic.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "YouTube": {
    "errorMsg": "Not Found",
    "errorType": "message",
    "url": "https://www.youtube.com/{}",
    "urlMain": "https://www.youtube.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "Zhihu": {
    "errorType": "response_url",
    "errorUrl": "https://www.zhihu.com/people/{}",
    "url": "https://www.zhihu.com/people/{}",
    "urlMain": "https://www.zhihu.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "akniga": {
    "errorType": "status_code",
    "url": "https://akniga.org/profile/{}",
    "urlMain": "https://akniga.org/profile/blue/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "allmylinks": {
    "errorMsg": "Page not found",
    "errorType": "message",
    "url": "https://allmylinks.com/{}",
    "urlMain": "https://allmylinks.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "aminoapp": {
    "errorType": "status_code",
    "url": "https://aminoapps.com/u/{}",
    "urlMain": "https://aminoapps.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis77777"
  },
  "authorSTREAM": {
    "errorType": "status_code",
    "url": "http://www.authorstream.com/{}/",
    "urlMain": "http://www.authorstream.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "babyRU": {
    "errorMsg": "Упс, страница, которую вы искали, не существует",
    "errorType": "message",
    "url": "https://www.baby.ru/u/{}/",
    "urlMain": "https://www.baby.ru/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "babyblogRU": {
    "errorMsg": "<title>BabyBlog — крупнейшее сообщество родителей</title>",
    "errorType": "message",
    "url": "https://www.babyblog.ru/user/info/{}",
    "urlMain": "https://www.babyblog.ru/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "chaos.social": {
    "errorType": "status_code",
    "url": "https://chaos.social/@{}",
    "urlMain": "https://chaos.social/",
    "username_claimed": "rixx",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "couchsurfing": {
    "errorType": "status_code",
    "url": "https://www.couchsurfing.com/people/{}",
    "urlMain": "https://www.couchsurfing.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "d3RU": {
    "errorType": "status_code",
    "url": "https://d3.ru/user/{}/posts",
    "urlMain": "https://d3.ru/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "dailykos": {
    "errorType": "status_code",
    "url": "https://www.dailykos.com/user/{}",
    "urlMain": "https://www.dailykos.com",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "datingRU": {
    "errorType": "status_code",
    "url": "http://dating.ru/{}",
    "urlMain": "http://dating.ru",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "devRant": {
    "errorType": "response_url",
    "errorUrl": "https://devrant.com/",
    "url": "https://devrant.com/users/{}",
    "urlMain": "https://devrant.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "drive2": {
    "errorType": "status_code",
    "url": "https://www.drive2.ru/users/{}",
    "urlMain": "https://www.drive2.ru/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "eGPU": {
    "errorType": "status_code",
    "url": "https://egpu.io/forums/profile/{}/",
    "urlMain": "https://egpu.io/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "eintracht": {
    "errorType": "status_code",
    "url": "https://community.eintracht.de/fans/{}",
    "urlMain": "https://eintracht.de",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "fixya": {
    "errorType": "status_code",
    "url": "https://www.fixya.com/users/{}",
    "urlMain": "https://www.fixya.com",
    "username_claimed": "adam",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "fl": {
    "errorType": "status_code",
    "url": "https://www.fl.ru/users/{}",
    "urlMain": "https://www.fl.ru/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "forum_guns": {
    "errorMsg": "action=https://forum.guns.ru/forummisc/blog/search",
    "errorType": "message",
    "url": "https://forum.guns.ru/forummisc/blog/{}",
    "urlMain": "https://forum.guns.ru/",
    "username_claimed": "red",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "forumhouseRU": {
    "errorMsg": "Указанный пользователь не найден. Пожалуйста, введите другое имя.",
    "errorType": "message",
    "url": "https://www.forumhouse.ru/members/?username={}",
    "urlMain": "https://www.forumhouse.ru/",
    "username_claimed": "red",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "geocaching": {
    "errorType": "status_code",
    "url": "https://www.geocaching.com/p/default.aspx?u={}",
    "urlMain": "https://www.geocaching.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "gfycat": {
    "errorType": "status_code",
    "url": "https://gfycat.com/@{}",
    "urlMain": "https://gfycat.com/",
    "username_claimed": "Test",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "habr": {
    "errorType": "status_code",
    "url": "https://habr.com/ru/users/{}",
    "urlMain": "https://habr.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "hackster": {
    "errorType": "status_code",
    "url": "https://www.hackster.io/{}",
    "urlMain": "https://www.hackster.io",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "hunting": {
    "errorMsg": "Указанный пользователь не найден. Пожалуйста, введите другое имя.",
    "errorType": "message",
    "url": "https://www.hunting.ru/forum/members/?username={}",
    "urlMain": "https://www.hunting.ru/forum/",
    "username_claimed": "red",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "iMGSRC.RU": {
    "errorType": "response_url",
    "errorUrl": "https://imgsrc.ru/",
    "url": "https://imgsrc.ru/main/user.php?user={}",
    "urlMain": "https://imgsrc.ru/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "igromania": {
    "errorMsg": "Пользователь не зарегистрирован и не имеет профиля для просмотра.",
    "errorType": "message",
    "url": "http://forum.igromania.ru/member.php?username={}",
    "urlMain": "http://forum.igromania.ru/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "interpals": {
    "errorMsg": "The requested user does not exist or is inactive",
    "errorType": "message",
    "url": "https://www.interpals.net/{}",
    "urlMain": "https://www.interpals.net/",
    "username_claimed": "blue",
    "username_unclaimed": "noneownsthisusername"
  },
  "irecommend": {
    "errorType": "status_code",
    "url": "https://irecommend.ru/users/{}",
    "urlMain": "https://irecommend.ru/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "jeuxvideo": {
    "errorMsg": "Vous êtes",
    "errorType": "message",
    "url": "http://www.jeuxvideo.com/profil/{}?mode=infos",
    "urlMain": "http://www.jeuxvideo.com",
    "username_claimed": "adam",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "kofi": {
    "errorType": "response_url",
    "errorUrl": "https://ko-fi.com/art?=redirect",
    "url": "https://ko-fi.com/{}",
    "urlMain": "https://ko-fi.com",
    "username_claimed": "yeahkenny",
    "username_unclaimed": "noonewouldeverusethis77777"
  },
  "kwork": {
    "errorType": "status_code",
    "url": "https://kwork.ru/user/{}",
    "urlMain": "https://www.kwork.ru/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "labpentestit": {
    "errorType": "response_url",
    "errorUrl": "https://lab.pentestit.ru/{}",
    "url": "https://lab.pentestit.ru/profile/{}",
    "urlMain": "https://lab.pentestit.ru/",
    "username_claimed": "CSV",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "last.fm": {
    "errorType": "status_code",
    "url": "https://last.fm/user/{}",
    "urlMain": "https://last.fm/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "leasehackr": {
    "errorType": "status_code",
    "url": "https://forum.leasehackr.com/u/{}/summary/",
    "urlMain": "https://forum.leasehackr.com/",
    "username_claimed": "adam",
    "username_unclaimed": "noonewouldeverusethis"
  },
  "livelib": {
    "errorType": "status_code",
    "url": "https://www.livelib.ru/reader/{}",
    "urlMain": "https://www.livelib.ru/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "mastodon.cloud": {
    "errorType": "status_code",
    "url": "https://mastodon.cloud/@{}",
    "urlMain": "https://mastodon.cloud/",
    "username_claimed": "TheAdmin",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "mastodon.social": {
    "errorType": "status_code",
    "url": "https://mastodon.social/@{}",
    "urlMain": "https://chaos.social/",
    "username_claimed": "Gargron",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "mastodon.technology": {
    "errorType": "status_code",
    "url": "https://mastodon.technology/@{}",
    "urlMain": "https://mastodon.xyz/",
    "username_claimed": "ashfurrow",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "mastodon.xyz": {
    "errorType": "status_code",
    "url": "https://mastodon.xyz/@{}",
    "urlMain": "https://mastodon.xyz/",
    "username_claimed": "TheKinrar",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "mercadolivre": {
    "errorType": "status_code",
    "url": "https://www.mercadolivre.com.br/perfil/{}",
    "urlMain": "https://www.mercadolivre.com.br",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis77777"
  },
  "metacritic": {
    "errorMsg": "User not found",
    "errorType": "message",
    "regexCheck": "^(?![-_].)[A-Za-z0-9-_]{3,15}$",
    "url": "https://www.metacritic.com/user/{}",
    "urlMain": "https://www.metacritic.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewould"
  },
  "moikrug": {
    "errorType": "status_code",
    "url": "https://moikrug.ru/{}",
    "urlMain": "https://moikrug.ru/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "mstdn.io": {
    "errorType": "status_code",
    "url": "https://mstdn.io/@{}",
    "urlMain": "https://mstdn.io/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "nairaland.com": {
    "errorType": "status_code",
    "url": "https://www.nairaland.com/{}",
    "urlMain": "https://www.nairaland.com/",
    "username_claimed": "red",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "nnRU": {
    "errorType": "status_code",
    "url": "https://{}.www.nn.ru/",
    "urlMain": "https://https://www.nn.ru/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "note": {
    "errorType": "status_code",
    "url": "https://note.com/{}",
    "urlMain": "https://note.com/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "opennet": {
    "errorMsg": "Имя участника не найдено",
    "errorType": "message",
    "regexCheck": "^[^_]*$",
    "url": "https://www.opennet.ru/~{}",
    "urlMain": "https://www.opennet.ru/",
    "username_claimed": "anonismus",
    "username_unclaimed": "noneownsthisusername"
  },
  "osu!": {
    "errorType": "status_code",
    "url": "https://osu.ppy.sh/users/{}",
    "urlMain": "https://osu.ppy.sh/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "phpRU": {
    "errorMsg": "Указанный пользователь не найден. Пожалуйста, введите другое имя.",
    "errorType": "message",
    "url": "https://php.ru/forum/members/?username={}",
    "urlMain": "https://php.ru/forum/",
    "username_claimed": "apple",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "pikabu": {
    "errorType": "status_code",
    "url": "https://pikabu.ru/@{}",
    "urlMain": "https://pikabu.ru/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "prog.hu": {
    "errorType": "response_url",
    "errorUrl": "https://prog.hu/azonosito/info/{}",
    "url": "https://prog.hu/azonosito/info/{}",
    "urlMain": "https://prog.hu/",
    "username_claimed": "Sting",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "radio_echo_msk": {
    "errorType": "status_code",
    "url": "https://echo.msk.ru/users/{}",
    "urlMain": "https://echo.msk.ru/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "satsisRU": {
    "errorType": "status_code",
    "url": "https://satsis.info/user/{}",
    "urlMain": "https://satsis.info/",
    "username_claimed": "red",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "social.tchncs.de": {
    "errorType": "status_code",
    "url": "https://social.tchncs.de/@{}",
    "urlMain": "https://social.tchncs.de/",
    "username_claimed": "Milan",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "spletnik": {
    "errorType": "status_code",
    "url": "https://spletnik.ru/user/{}",
    "urlMain": "https://spletnik.ru/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "svidbook": {
    "errorType": "status_code",
    "url": "https://www.svidbook.ru/user/{}",
    "urlMain": "https://www.svidbook.ru/",
    "username_claimed": "green",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "toster": {
    "errorType": "status_code",
    "url": "https://www.toster.ru/user/{}/answers",
    "urlMain": "https://www.toster.ru/",
    "username_claimed": "adam",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "tracr.co": {
    "errorMsg": "No search results",
    "errorType": "message",
    "regexCheck": "^[A-Za-z0-9]{2,32}$",
    "url": "https://tracr.co/users/1/{}",
    "urlMain": "https://tracr.co/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  },
  "uid": {
    "errorType": "status_code",
    "url": "http://uid.me/{}",
    "urlMain": "https://uid.me/",
    "username_claimed": "blue",
    "username_unclaimed": "noonewouldeverusethis7"
  }
};
