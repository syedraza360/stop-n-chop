import moment from 'moment'

export const getTime = (createdAt) => {
  return `${moment(createdAt).format('dddd')}, ${moment(createdAt).format(
    'MMMM',
  )} ${moment(createdAt).format('D')}-${moment(createdAt).format('H')}:${moment(
    createdAt,
  ).format('m')} ${moment(createdAt).format('A')}`
} 
