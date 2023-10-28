import React from 'react';
import Provider from '@theme-original/Layout/Provider';
import NotFound from '@theme-original/NotFound';
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
