interface IConfig {
  port: number;
  version: string;
  db: {
    url: string;
    name: string;
    params: string;
    uri: string;
  };
}

export default (): IConfig => ({
  port: parseInt(process.env.APP_PORT, 10) || 3000,
  version: process.env.APP_VERSION,
  db: {
    url: process.env.APP_DB_URL,
    name: process.env.APP_DB_NAME,
    params: process.env.APP_DB_PARAMS,
    uri: `mongodb+srv://${process.env.APP_DB_URL}/${process.env.APP_DB_NAME}?${process.env.APP_DB_PARAMS}`,
  },
});
