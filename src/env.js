export const PROJECTS = {
    PYRAMID: process.env.REACT_APP_PROJECT_PYRAMID,
    TRADE: process.env.REACT_APP_PROJECT_TRADE,
    SELLER: process.env.REACT_APP_PROJECT_SELLER
};

let IMAGE_UPLOAD_URL = process.env.REACT_APP_IMAGE_UPLOAD_URL;
let SFS_URL = process.env.REACT_APP_SFS_URL;

if (process.env.NODE_ENV === 'development') {
    if (/^localhost|\d+\.\d+$/.test(location.hostname)) {
        PROJECTS.PYRAMID = `http://${location.hostname}:10021/`;
        PROJECTS.TRADE = `http://${location.hostname}:10022/`;
        PROJECTS.SELLER = `http://${location.hostname}:10023/`;

        IMAGE_UPLOAD_URL = `http://localhost:7004/file/upload`;
        SFS_URL = `http://localhost:7004/file?name=`;
    }
}

export {
    IMAGE_UPLOAD_URL,
    SFS_URL
};
