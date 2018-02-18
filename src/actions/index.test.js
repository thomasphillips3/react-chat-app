import { addMessage, addUser } from '../actions'
import * as types from '../constants/ActionTypes'

describe('adding a message', () => {
  it('should create an action to add a message with id 0', () => {
    const message = 'Something'
    const author = 'Me'
    const action = {
      type: types.ADD_MESSAGE,
      message: message,
      author: author,
      id: 0
    }
    expect(addMessage(message, author)).toEqual(action)
  })
})

describe('adding a second message', () => {
  it('should create an action to add a message with id 1', () => {
    const message = 'Something else'
    const author = 'You'
    const action = {
      type: types.ADD_MESSAGE,
      message: message,
      author: 'You',
      id: 1
    }
    expect(addMessage(message, author)).toEqual(action)
  })
})

describe('adding a user', () => {
  it('should create an action to add a user with id 0', () => {
    const user = 'Kanye'
    const action = {
      type: types.ADD_USER,
      name: user,
      id: 0
    }
  })
})

describe('adding a second user', () => {
  it('should create an action to add a user with id 1', () => {
    const user = 'Linda'
    const action = {
      type: types.ADD_USER,
      name: user,
      id: 1
    }
  })
})
