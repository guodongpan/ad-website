---
sidebar_position: 1
---

# Manage Docs Versions

Docusaurus can manage multiple versions of your docs.

## Create a docs version

Release a version 1.0 of your project:

```bash
npm run docusaurus docs:version 1.0
```

The `docs` folder is copied into `versioned_docs/version-1.0` and `versions.json` is created.

Your docs now have 2 versions:

- `1.0` at `http://localhost:3000/docs/` for the version 1.0 docs
- `current` at `http://localhost:3000/docs/next/` for the **upcoming, unreleased docs**

## Add a Version Dropdown

To navigate seamlessly across versions, add a version dropdown.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

The docs version dropdown appears in your navbar:

![Docs Version Dropdown](./img/docsVersionDropdown.png)

## Update an existing version

It is possible to edit versioned docs in their respective folder:

- `versioned_docs/version-1.0/hello.md` updates `http://localhost:3000/docs/hello`
- `docs/hello.md` updates `http://localhost:3000/docs/next/hello`


## other

```
import React from 'react';
import Provider from '@theme-original/Layout/Provider';

import { getHashPram, getPath } from '@site/src/utils/url';



const getProvider = (path, id) => {
  const codeObj = {
    "0110": Provider
  }
  const pathObj = {
    "/about": Provider,
    "/about/": Provider,
  }
  return (pathObj[path] && codeObj[id]) || (!pathObj[path] && !codeObj[id])
    ? Provider
    : function NotFound(props) {
      return <>401</>
    }
}

export default function ProviderWrapper(props) {
  // 不安全权限方式，访问正确的路径就知道内容了
  // 还需要的就是跟踪浏览记录
  const id = getHashPram("weid");
  const path = getPath();
  console.log(path)
  const Provider = getProvider(path, id);
  return (
    <>
      <Provider {...props} />
    </>
  );
}

```