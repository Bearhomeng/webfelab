express = require("express");
request = require("request");
BuffList = require("bufferlist").BuffferList;
app = express.createServer(express.logger(),express.bodyParser());
app.get "/",(req,res) ->
	if req.param("url")
		url = unescape(req.param("url"));
		request
			uri:url
			encoding:'binary'
			, (error, response, body) ->
			if not error and response.statusCode is 200
				data_uri_prefix="data:"+response.headers["content-type"] + ";base64,"
				image = new Buffer(body.toString(),"binary").toString("base64");
				image = data_uri_prefix + image;
				res.send "<img src=\""+ image +"\">";

app.listen 3000

