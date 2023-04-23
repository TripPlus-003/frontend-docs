---
layout: doc
---

# Layout

::: info
在 Next.js 中實現頁面共用 layout 的模式，唯一可行的方式就是在 _app.tsx 中撰寫共用 layout 的邏輯，因為如果把邏輯撰寫在頁面中，在切換頁面時整個 UI 都會被重新渲染，而狀態當然也不會被保留。
:::

## 使用共用 Layout

1. pages 資料夾內建立新的頁面後
2. 引入型別 `App.NextPageWithLayout`
3. export Component 需再呼叫 `getLayout` 並引用要使用的 Layout Component

```ts
// App.d.ts
declare namespace App {
  type NextPageWithLayout<P = {}, IP = P> = import('next').NextPage<P, IP> & {
    getLayout?: (
      page: import('react').ReactElement
    ) => import('react').ReactNode;
  };
}
```

```tsx
// Home.tsx
import { Layout } from '@/components';
import type { ReactElement } from 'react';

const Home: App.NextPageWithLayout = () => {
  return (
    <h2>Home page</h2>
  )
};

export default Home;

Home.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};
```

## Reference
- [Layouts](https://nextjs.org/docs/basic-features/layouts)