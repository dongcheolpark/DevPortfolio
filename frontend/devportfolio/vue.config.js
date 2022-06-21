var path = require("path")
module.exports = {
    outputDir : path.resolve(__dirname, "../../backend/public/"),
	devServer: { 
		proxy: { // proxyTable 설정
			'/testapi': {
				target: 'http://localhost:3000/testapi',
				changeOrigin: true	,
                pathRewrite:{
					"^/testapi" : ''
				}
			}
		}
	}
}