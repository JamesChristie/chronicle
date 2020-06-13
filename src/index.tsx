import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { DiaryCardFormStore } from './redux/store'
import { DiaryCard } from './components/DiaryCard'

ReactDOM.render(
  <Provider store={DiaryCardFormStore}>
    <DiaryCard />
  </Provider>,
  document.getElementById('app-root')
)
