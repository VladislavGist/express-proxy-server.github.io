//сервер app.js и является proxy (посредником) сервером

var app = require("express")()
var request = require("request");
app.listen(8080);

//устанавили конфигурационную переменную 
//пеывй аргумент - шаблон представления
//второй - где лежат его файлы
app.set("views", __dirname);
//в каком формате будут приниматься view файлы
//если указали, то в render расширение не пишем
app.set("view engine", "ejs");

var names = {"john": "admin", "mike": "manager", "ivan": "user"};

app.get("/", (req, res) => {

});

//реакция сервера на get запрос по адресу /user/:name
app.get("/user/:name", (req, res) => {
	var name = req.params.name;
	//формируем url к которому будет обращаться наш proxy сервер
	var needUrl = "http://localhost:8081/?name=" + name;

	//request посылает запрос
	//первый арумент url
	//второй функция
	//err - ошибка
	//response - 
	//body - в него придет ответ
	request(needUrl, (err, response, body) => {
		console.log(body);
	});
});
