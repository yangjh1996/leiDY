// 权限问题后期增加
import { get, post } from '/@/utils/http/axios';
// import axios from 'axios';
enum URL {
  login = '/api/user/login',
  userList = '/api/user/list',
  detail = '/api/user/detail',
  create = '/api/user/create',
  update = '/api/user/update',
  delete = '/api/user/delete',
  userLogin = '/api/user/userLogin',
  userRegister = '/api/user/userRegister',
  updateUserPwd = '/api/user/updatePwd',
  updateUserInfo = '/api/user/updateUserInfoPc',
}
interface LoginRes {
  token: string;
}

export interface LoginData {
  username: string;
  password: string;
}

const loginApi = async (data: LoginData) =>
  post<any>({ url: URL.login, data, headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' } });
const listApi = async (params: any) => get<any>({ url: URL.userList, params: params, data: {}, headers: {} });
const detailApi = async (params: any) => get<any>({ url: URL.detail, params: params, data: {}, headers: {} });
const createApi = async (data: any) =>
  post<any>({ url: URL.create, params: {}, data: data, headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' } });
const updateApi = async (data: any) =>
  post<any>({ url: URL.update, data: data, headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' } });
const deleteApi = async (params: any) => post<any>({ url: URL.delete, params: params, headers: {} });
const userLoginApi = async (data: LoginData) => post<any>({ url: URL.userLogin, data });
const userRegisterApi = async (data: any) => post<any>({ url: URL.userRegister, params: {}, data: data });
const updateUserPwdApi = async (params: any) => post<any>({ url: URL.updateUserPwd, params: params });
const updateUserInfoApi = async (data: any) =>
  post<any>({ url: URL.updateUserInfo, data: data, headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' } });

export {
  createApi,
  deleteApi,
  detailApi,
  listApi,
  loginApi,
  updateApi,
  updateUserInfoApi,
  updateUserPwdApi,
  userLoginApi,
  userRegisterApi
};

