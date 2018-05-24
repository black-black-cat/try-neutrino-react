import instance from '../src/api/flyio'
import Fly from 'flyio/dist/npm/fly'

test('instance', function () {
  expect(instance instanceof Fly).toBe(true)
})

test('type of Fly', function () {
  expect(typeof Fly).toBe('function')
  expect(typeof Fly.name).toBe('string')
})
