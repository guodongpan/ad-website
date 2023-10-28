

// 获取如 http://localhost:8080/#name=haha&age=25&city=beijing 类似地址的参数

export function getHashPram(pramName) {
    let pramSplitStr = window.location.hash.split("#")[1];
    const res = {};
    if (!pramSplitStr) return res;
    let resultPramStr = pramSplitStr.split("&");
    for (let i = 0, len = resultPramStr.length; i < len; i++) {
        const [key, val] = resultPramStr[i].split('=');
        res[key] = val;
    }
    return pramName ? res[pramName] : res;
}


export function getPath(){
    return window.location.pathname
}