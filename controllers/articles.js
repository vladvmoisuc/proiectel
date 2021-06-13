const { readdir, readFile } = require('fs/promises');
const path = require('path');
const showdown = require('showdown');
const utils = require('../utils');
const showdownConverter = new showdown.Converter();
const markdownsFolder = '../markdown';

const getAllArticles = async (_req, res, _next) => {
  try {
    const files = await readdir(path.join(__dirname, markdownsFolder));
    const articles = [];

    await Promise.all(
      files.map(async (file) => {
        const article = {
          path: utils.getUrlFriendlyPath(file),
          file,
        };
        const filePath = path.join(__dirname, markdownsFolder, file);

        await utils.readLines(filePath, async (line, done, next) => {
          if (line.includes('title:')) {
            article.title = line.split(': ')[1].replace(/\"/g, '');
            return done();
          }

          next();
        });

        articles.push(article);
      })
    );

    return res.json(articles);
  } catch (error) {
    res.status(500).send();
  }
};

const getArticle = async (req, res, _next) => {
  try {
    const filePath = decodeURI(req.params.path);
    const files = await readdir(path.join(__dirname, markdownsFolder));
    const fileName = files.filter((file) => {
      if (utils.getUrlFriendlyPath(file) === filePath) {
        return true;
      }
    })[0];
    const file = await readFile(
      path.join(__dirname, markdownsFolder, fileName),
      {
        encoding: 'utf8',
      }
    );
    const html = showdownConverter.makeHtml(file);

    res.json({ html });
  } catch (error) {
    res.status(500).send();
  }
};

module.exports = {
  getAllArticles,
  getArticle,
};
