const settings = {
  "name": "frontity-tutorial",
  "state": {
    "frontity": {
      "url": "blog.fellyph.com.br",
      "title": "Blog Frontity Fellyph Cintra",
      "description": "Theme created to the frontity tutorial"
    }
  },
  "packages": [
    {
      "name": "tutorial-fellyph"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://blog.fellyph.com.br/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
