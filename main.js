const express = require('express')
const app = express()
const http = require('http').Server(app);
const io = require('socket.io').listen(http);
const PORT = 3000;

var scObj;

io.on('connection', (socket) => {
    console.log('connected');
    io.emit("scObj",scObj)
    socket.on('refresh', () => { // init時など
        io.emit("scObj",scObj)
    })
    socket.on('update', (obj) => {
        // コンパネから送られたデータを適用、正しく無ければエラーを返す
        updatedata(obj)
    })
    socket.on("error", function() {
        socket.emit("error","Unknown err")
    });
});

function updatedata(data) {
    console.dir(data)
    if (!data["bestOf"] || !data['stage'] || !data["pName1"] || !data["pTwitter1"] || !data["pScore1"] || !data["pCountry1"] || !data["pName2"] || !data["pTwitter2"] || !data["pScore2"] || !data["pCountry2"]) {
        console.log('no enough data')
    }
    else {
        console.log('updating scObj')
        data["bestOf"] = "bo" + data["bestOf"]
        scObj = data;
        io.emit("scObj",scObj)
        //scObj.timestamp = 
    }
}

setInterval(function() {
    io.emit('ShowTwitterTag')
}, 15000);
  
app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.static('public'));


app.get('/', (req, res) => {
    // アクセスされたクライアントにscObj情報を描画させる
    res.render('index', { scObj: scObj });
})

http.listen(PORT, function(){
    console.log('server listening. Port:' + PORT);
});