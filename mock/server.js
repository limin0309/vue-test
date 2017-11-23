//后台只提供接口，前端 只调用接口
let http = require('http');
let fs = require('fs');
let url = require('url');
let sliders = require('./slider');
// console.log(sliders);
/*判断是否引入sliders*/
function read(callback) {
  fs.readFile('./people.json', 'utf8', function (err, data) {
    data = data.length === 0 ? [] : JSON.parse(data)//对象转为字符串
    callback(data)
  });
}

/*@param data 要写入的数据
 @param callback 写入成功后的回调
 * */
function write(data, callback) {
  fs.writeFile('./people.json', JSON.stringify(data), callback)
  // console.log(data);
}


http.createServer(function (req, res) {
  let {pathname, query} = url.parse(req.url, true);
  // console.log('----:::',pathname,'\n', query);
  let id = query.id;//如果传递id 将id保留下来
  if (pathname === '/api/slider') {//API 相当于前缀
    return res.end(JSON.stringify(sliders));
  }
  if (pathname === '/api/hot') {
    read(function (data) {//data表示读到的结果
      var peoples = data.reverse().slice(0, 6);//取最新的六个  先倒序 然后再取6个
      setTimeout(function () {
        res.end(JSON.stringify(peoples));
      }, 1000);

    });
    return;
  }


  //图书的增删改查
  if (pathname === '/api/people') {
    switch (req.method) {
      case 'GET':
        // if(id){//获取一个人
        //   read(function (peoples) {
        //     let people=peoples.find(item=>item.id==id);
        //     res.end(JSON.stringify(book));
        //   })
        // }else{
        read(function (data) {//data 代表所有数据
          res.end(JSON.stringify(data));
          // console.log(data);
        });
        break;
      // }

      case 'POST':
        //发送过来的请求体默认就是对象格式{}
        var str = '';
        req.on('data', function (data) {
          str += data;
        });
        req.on('end', function () {
          var people = JSON.parse(str);
          read(function (peoples) {//读取所有的人物，获取最后一项的id 累加
            people.id = peoples.length > 0 ? peoples[peoples.length - 1].id + 1 : 1;
            peoples.push(people);//将新人物放进去

            write(peoples, function () {
              peoples=res.end(JSON.stringify(people));
            })
          });
        });
        break;
      case 'DELETE':
        //先把所有的数据都拿出来，然后去掉删除的那个(指定的id)，然后再去渲染出来
        //api/people?id=1;
        read(function (peoples) {
          peoples=peoples.filter(item => id != item.id);
          console.log(222)
          write(peoples, function () {
            res.end(JSON.stringify({}));
            console.log(111)
          });
        });
        break;
      case 'PUT':
        break;
    }
  }

}).listen(3000);

