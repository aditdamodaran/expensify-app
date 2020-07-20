import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters'
import moment from 'moment'

test('Should generate set start date action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  })
})

test('Should generate set end date action object', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  })
})

test('Should generate set text filter action object', () => {
  const text = 'abc'
  const action = setTextFilter(text)
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  })
})

test('Should generate set text filter action object with default values', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

test('Should generate action object for sort by date', () => {
  expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'})
})

test('Should generate action object for sort by amount', () => {
  expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'})
})