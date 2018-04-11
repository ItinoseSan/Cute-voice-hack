const googlehome = require('google-home-notifier');

googlehome.device('Google-Home-aea44c0f02eda5797f0449c7a900fd5b') 
googlehome.ip('192.168.25.52')
googlehome.language('ja');

function speechHome(text){
    googlehome.notify(text, function(res) {
        console.log(res)
     })
}

