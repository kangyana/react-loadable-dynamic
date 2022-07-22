

const { nodeResolve } = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')

module.exports = {
  external: ['react'],
  input: 'lib/es/index.js',
  output: {
    name: 'react-loadable-dynamic',
    globals: {
      react: 'React',
    },
    file: 'lib/umd/react-loadable-dynamic.js',
    format: 'umd',
  },
  plugins: [nodeResolve(), commonjs()],
}