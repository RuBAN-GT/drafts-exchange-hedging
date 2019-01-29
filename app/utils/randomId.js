/**
 * Generate random id with selected length
 *
 * @param {Number} length
 * @returns {String}
 */
export const randomId = (length = 6) => {
  const max = 10 ** length
  const min = 10 ** (length - 1)

  const random = Math.floor(Math.random() * (max - min)) + min

  return random.toString()
}
