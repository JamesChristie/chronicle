import { Store, Action, AnyAction, Unsubscribe, Observable } from "redux";

import { PrescriptionMedicationFormAction } from '../../src/redux/store'

export interface MockStore<S = any, A extends Action = AnyAction> extends Store<S, A> {
  getDispatchCalls: () => Action[]
}

export const buildMockStore = (): MockStore => {
  const dispatchCalls: Action[] = []

  const dispatch = <T extends Action>(action: T): T => {
    dispatchCalls.push(action)
    return action
  }

  const getState = () => { }
  const subscribe = (listener: () => void): Unsubscribe => { return () => {} }
  const replaceReducer = () => { }
  const getObserver = (): Observable<any> => { throw 'not implemented' }

  const getDispatchCalls = (): Action[] => dispatchCalls

  return {
    dispatch,
    getState,
    subscribe,
    replaceReducer,
    [Symbol.observable]: getObserver,
    getDispatchCalls
  }
}
