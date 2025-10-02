 /**
 * @typedef {Object} Address
 * @property {string} id
 * @property {string} [street]
 * @property {string} [city]
 * @property {string} [province]
 * @property {string} [postalCode]
 * @property {string} [country]
 * @property {number} [latitude]
 * @property {number} [longitude]
 */

/**
 * @typedef {Object} Hub
 * @property {string} id
 * @property {string} name
 * @property {string} [image]
 * @property {string} bio
 * @property {string} [addressId]
 * @property {Address} [address]
 * @property {string} userId
 */

/**
 * @template T
 * @typedef {Object} Response
 * @property {string} [token]
 * @property {string} [message]
 * @property {boolean} isSuccess
 * @property {T} data
 */
