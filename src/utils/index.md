---
layout: doc
---

# Utils

## localStorage

- 型別設定: `src/types/Storage.d.ts`

  ```ts
  declare namespace StorageInterface {
    interface Local {
      userInfo: ApiAuth.UserInfo;
    }
  }
  ```

- 引入並使用

  ```ts
  import { localStg } from '@/utils';

  localStg.set(key, value[, expire]);
  localStg.get(key);
  localStg.remove(key);
  localStg.clear();
  ```

  - key: 存放於 localStorage 的 key
  - value: 存放於 localStorage 的 value
  - expire: 存放於 localStorage 的過期時間(預設 7 天)
