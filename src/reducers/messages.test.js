import messages from './messages'
import * as types from '../constants/ActionTypes'

describe('Messages reducer', () => {
  it('should return the initial state, empty', () => {
    expect(messages(undefined, {})).toEqual([])
  })

  it('should handle ADD_MESSAGE and store every message', () => {
    expect(messages([], {
      type: types.ADD_MESSAGE,
      message: 'Butts',
      author: 'Me'
    })).toEqual([{
      message: 'Butts',
      author: 'Me'
    }])

    expect(messages(
      [{
        message: 'yo',
        author: 'Me'
      }],
      {
        type: types.ADD_MESSAGE,
        message: 'what up doe',
        author: 'Another me'
      }
    )).toEqual([{
      message: 'yo',
      author: 'Me'
    },
    {
      message: 'what up doe',
      author: 'Another me'  
    }])
  })
})
