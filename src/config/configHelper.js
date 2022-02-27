import { config } from './default';

const getConfig = () => {
    const env = process.env.NODE_ENV || "development";
    return config[env];
}

export const getUrl = (urlName) => {
    const config = getConfig();
    return config?.url[urlName];
}

export const getTimeout = (urlName, apiName) => {
    const config = getConfig();
    return config?.timeout[urlName][apiName];
}