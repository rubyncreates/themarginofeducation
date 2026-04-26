module.exports = function(eleventyConfig) {
  // Copy assets folder to output
  eleventyConfig.addPassthroughCopy("src/assets");

  // Copy admin folder (Decap CMS) to output
  eleventyConfig.addPassthroughCopy("src/admin");

  // Format dates nicely
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateObj).toLocaleDateString('en-AU', options);
  });
// Get all unique tags across all posts
  eleventyConfig.addFilter("getAllTags", (collections) => {
    const tagSet = new Set();
    for (const item of collections.posts || []) {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    }
    return Array.from(tagSet).sort();
  });
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return new Date(dateObj).toISOString().split('T')[0];
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
