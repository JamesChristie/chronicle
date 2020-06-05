/// <reference types="react" />
/// <reference types="react-dom" />

const React = require('react')
const ReactDOM = require('react-dom')

import { Placeholder } from './components/placeholder'

ReactDOM.render(
  <Placeholder />,
  document.getElementById('app-root')
)
