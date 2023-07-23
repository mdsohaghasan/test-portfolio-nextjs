module.exports = {
    // ...other webpack configuration options...
  
    module: {
      rules: [
        // ...other rules...
  
        {
          test: /\.mp3$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/audio/',
              },
            },
          ],
        },
      ],
    },
  };
  