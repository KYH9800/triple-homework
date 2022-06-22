const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true', // true여야 실행된다
})

module.exports = withBundleAnalyzer({
  compress: true, // 파일을 압축한다(gzip: 파일 압축에 쓰이는 응용 소프트웨어)
  webpack(config, { webpack }) {
    const prod = process.env.NODE_ENV === 'production'
    return {
      ...config,
      mode: prod ? 'production' : 'development', // 배포면 'production' 아니라면 'development'
      devtool: prod ? 'hidden-source-map' : 'eval', // 배포면 'hidden-source-map'(배포 환경에서 소스코드를 숨겨준다) 아니라면 'eval'
      plugins: [
        ...config.plugins,
        // new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),
      ], // googling: 'webpack moment locale tree shaking'
    }
  },
})
