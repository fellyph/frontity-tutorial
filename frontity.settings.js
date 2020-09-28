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
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Tutoriais",
              "/category/tutoriais/"
            ],
            [
              "Curso PWA",
              "/curso-online-progressive-web-apps/"
            ],
            [
              "Sobre",
              "/sobre/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
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
