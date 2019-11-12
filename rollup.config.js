import resolve from 'rollup-plugin-node-resolve';
import common from 'rollup-plugin-commonjs';
// https://43081j.com/2018/09/polymer-lit-with-rollup
export default {
  input: 'build/index.js',
  output: {
    file: 'eos-components.bundle.js',
    format: 'esm'
  },
  plugins: [
    common(),
    resolve()
  ]
};