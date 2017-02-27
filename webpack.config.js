var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  entry: APP_PATH,//项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  output: {  //输出的文件名 合并以后的js会命名为bundle.js
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  plugins: [  //添加插件 会自动生成一个html文件
    new HtmlwebpackPlugin({
      title: 'Hello World app'
    })
  ],
	devServer:{
		historyApiFallback:true,
		hot:true,
		inline:true,
		progress:true
	},
	module:{
		loaders:[
			{
			test:/\.scss$/,//匹配的文件类型
			loaders:['style','css','sass'],//处理这些程序的loaders
			include:APP_PATH
		},
		{
			test:/\.(png|jpg)$/,
			loader:'url?limit=400000'//图片大小超过40000时启动base64
		}
	]
},
plugins:[
	new HtmlwebpackPlugin({
		title:"Hello World app"
})
]
};
