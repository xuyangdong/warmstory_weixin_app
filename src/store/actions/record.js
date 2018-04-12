import wepy from 'wepy'
import api from '@/api'
import { FINISH_RECORD,CLEAN_RECORD } from '../types/record'
import { createAction } from 'redux-actions'

export const finishRecord = createAction(FINISH_RECORD, record => Promise.resolve(record))

export const cleanRecord = createAction(CLEAN_RECORD, record => Promise.resolve(record))
