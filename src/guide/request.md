---
layout: doc
---

# System request

## Request setting

<br />

### 建立請求 function

在 `src/service/request/index.ts` 裡面建立請求 function

#### 1.建立請求 function：createRequest

```ts
import { createRequest } from './request';

export const request = createRequest(axiosConfig[, interceptorsObj]);
```

#### 2.createRequest 參數

**`axiosConfig`**：axios 設定，傳入 baseUrl，定義一些其他設定，參考 [The Axios Instance](https://axios-http.com/docs/instance)

**`interceptorsObj`**：自定義的攔截器

```ts
import type { InternalAxiosRequestConfig, AxiosError } from 'axios';

export interface RequestInterceptor<T, TR> {
  requestInterceptors?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig;
  requestInterceptorsCatch?: (err: AxiosError<TR>) => AxiosError<TR>;
  responseInterceptors?: (config: T) => T;
  responseInterceptorsCatch?: (err: AxiosError<TR>) => AxiosError<TR>;
}
```

#### 3.在 `service/request/index.ts` 中載入

例如：

```typescript
import { createRequest } from './request';

export const request = createRequest({
  baseURL: process.env.BASE_API_URL,
});
```

##### 4.在 `service/api` 資料夾內的檔案載入建立好的 function，需要傳入型別

例如：

```ts
// src/types/Api.d.ts
declare namespace ApiAuth {
  interface UserInfo {
    name: string;
    roles: string[];
    token: string;
  }
}
```

```typescript
/** 登入 */
import { request } from '../request';

interface LoginBody {
  email: string;
  password: string;
}

export function login(data: LoginBody) {
  return request.post<ApiAuth.UserInfo>('/login', data);
}
```
