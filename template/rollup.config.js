import VuePlugin from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import nodeResolve from 'rollup-plugin-node-resolve'
import autoprefixer from 'autoprefixer'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'src/index.js',
  output: {
    format: 'cjs',
    file: 'dist/bundle.js'
  },
  plugins: [
    VuePlugin({
      style: {
        postcssPlugins: [ autoprefixer() ]
      }
    }),
    buble(),
    nodeResolve({ browser: true, jsnext: true, main: true }),
    uglify()
  ]
}
