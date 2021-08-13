/* eslint-disable no-undef */
/* eslint-disable no-async-promise-executor */
const ida = async () => await import('@resystem/ida-js-sdk');

// ida configurations, contains the app keys
const idaConfiguration = {
  appId: process.env.IDA_API_ID,
  appKey: process.env.IDA_API_KEY,
  sandboxMode: process.env.DEV_MODE === '1',
};

/**
 * this open ida connection, defining the standards functions
 * @param {object} params ida configurations
 * @param {function} params.onAuthChange run when the authorized IDa user is changing
 * @returns {Promise} contains new IDa user or error
 */
export const init = ({ onAuthChange }) =>
new Promise(async (res) => {
  console.log('🚀 ~ process.env.DEV_MODE', process.env.DEV_MODE);
    console.log('🚀 ~ idaConfiguration', idaConfiguration);
    const localIda = await ida();
    localIda.initializeApp({
      ...idaConfiguration,
      onAuthChange,
      
      onLoad: (payload) => res(payload),
      onOpen: (data) => console.log('Initialized IDa!', data)
    });
  });

export default init;
