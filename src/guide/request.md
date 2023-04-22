---
layout: doc
---

# System request

## Request setting

<br />

### 建立請求 function

在 src/service/request/index.ts 裡面建立請求 function

#### 1.建立請求 function：createRequest

createRequest => 回傳 Promise


#### 2.createRequest 參數

axiosConfig：axios 設定，傳入 baseUrl，定義一些其他設定，參考 [The Axios Instance](https://axios-http.com/docs/instance)

interceptorsObj：自定義的攔截器

```ts
interface RequestInterceptor<T> {
  requestInterceptors?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig;
  requestInterceptorsCatch?: (err: any) => any;
  responseInterceptors?: (config: T) => T;
  responseInterceptorsCatch?: (err: any) => any;
}

const interceptorsObj: RequestInterceptor<AxiosResponse> = {
  requestInterceptors: (config) => config,
  requestInterceptorsCatch: (error) => error,
  responseInterceptors: (response) => response,
  responseInterceptorsCatch: (error) => error
}
```

#### 3.在 service/request/index.ts 中載入

例如：

```typescript
import { createRequest } from './request';

export const request = createRequest({
  baseURL: process.env.BASE_URL
});
```

##### 4.在 service/api 資料夾內的檔案載入建立好的 function，需要傳入型別

例如：

```typescript
/** 登入 */
import { request } from '../request';

interface LoginBody {
  email: string;
  password: string;
}

// 表示請求成功後資料的型別
interface LoginResponseData {
  id: string;
  token: string;
  expired: number;
}

export function login(data: LoginBody) {
  return request.post<LoginResponseData>('/login', data);
}
```