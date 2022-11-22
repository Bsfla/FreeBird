import { Method } from 'axios';

export const HTTP_METHODS: Record<string, Method> = {
  GET: 'get',
  POST: 'post',
  PATCH: 'patch',
  PUT: 'put',
  DELETE: 'delete',
};
