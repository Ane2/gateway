const Exceptions = require('./exceptions.js')

class Cache{
  constructor(){}

  async put(key, value, expires_in){ throw new Exceptions.CACHE_DEFAULT_PUT }
  async get(key, value){ throw new Exceptions.CACHE_DEFAULT_GET }
  async patch(key, value){ throw new Exceptions.CACHE_DEFAULT_PATCH }
  async invalidate(key){ throw new Exceptions.CACHE_DEFAULT_INVALIDATE }
  async expire(key, expires_in){ throw new Exceptions.CACHE_DEFAULT_EXPIRE }
}

module.exports = Cache
