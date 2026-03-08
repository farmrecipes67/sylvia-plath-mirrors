'use strict';

/**
 * sylvia-plath-mirrors
 * An npm package inspired by Sylvia Plath
 * An npm package inspired by Sylvia Plath — generates intensely vivid, confessional poetry with sharp imagery and emotional depth.
 */

const poems = [
  "This is a placeholder poem in the style of Sylvia Plath.",
  "Replace these with generated or curated verses.",
  "Each invocation returns a random selection."
];

/**
 * Returns a random poem inspired by Sylvia Plath
 * @returns {string} A poem string
 */
function getPoem() {
  const idx = Math.floor(Math.random() * poems.length);
  return poems[idx];
}

/**
 * Returns all poems in the collection
 * @returns {string[]} Array of poem strings
 */
function getAllPoems() {
  return poems.slice();
}

module.exports = { getPoem, getAllPoems };

if (require.main === module) {
  console.log(getPoem());
}
