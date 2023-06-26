const CONFIG = {
  KEY: 'YOUR_API_KEY',
  BASE_URL: 'https://restaurant-api.dicoding.dev',
  BASE_IMAGE_URL: (size, pictureId) => `https://restaurant-api.dicoding.dev/images/${size}/${pictureId}`,
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: 'Eatery',
  DATABASE_NAME: 'eatery-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
};

export default CONFIG;
