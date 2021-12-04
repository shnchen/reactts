module.exports={
  resolve:{
    extensions:['.ts','.tsx','.js']
  },
  module:{
    rules:[
      {
        test:/\.tsx?$/,
        loaders:['babel-loader','ts-loader']
      },
      {
        test: /\.less$/,
        use:['style-loader','css-loader','less-loader']
    },
    ]
  }
}