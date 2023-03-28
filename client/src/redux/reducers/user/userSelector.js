import {isEmptyObject} from '@/helpers/isEmpty';

export const getAuthUser = ((state) => isEmptyObject(state.user.data));
export const getUser = (state) => state.user.data;
