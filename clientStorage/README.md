# 客户端存储

1. 数据URL
	* data:[mimetype][;base64],[data]
	* 优点：减少了http请求，提高了性能
	* 缺点：
		1. 不会缓存，当在一个图片多次使用，使用URL数据就不太合理
		2. Base64编码比二进制文件大1/3左右。
2. WebStorage API存储数据

		复杂的数据可以使用JSON.stringfy(data)与JSON.parse(dataString)进行处理
	
	* localStorage.setItem(key,value)
	* localStorage.getItem(key)
	* localStorage.removeItem(key)
	* localStorage.clear()
	
	sessionStorage相比于localStorage而言是半持久的，过长时间后或关闭浏览器关闭后自动失效

	* window.sessionStorage["favouriteBeer"] = "Abita";

	__ployfill__
		
	* 通过 YepNope.js Modernizr和Storage.js模拟WebStorage
	* YepNode.js：polyfill代码加载器
	* modernizr：检测HTML5和CSS3功能支持情况的js库，包含了YepNode.js

3. 使用indexedDB 和 FullCalender.js构建里程碑日历 __失败__