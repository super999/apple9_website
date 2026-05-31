'use strict'

hexo.extend.generator.register('categories-index', function (locals) {
  const config = this.config
  const categoryDir = config.category_dir
  const categoryDirWithSlash = categoryDir[categoryDir.length - 1] === '/' ? categoryDir : categoryDir + '/'

  return {
    path: categoryDirWithSlash,
    layout: ['page', 'index'],
    data: {
      title: '分类',
      type: 'categories',
      comments: false
    }
  }
})

hexo.extend.generator.register('tags-index', function (locals) {
  const config = this.config
  const tagDir = config.tag_dir
  const tagDirWithSlash = tagDir[tagDir.length - 1] === '/' ? tagDir : tagDir + '/'

  return {
    path: tagDirWithSlash,
    layout: ['page', 'index'],
    data: {
      title: '标签',
      type: 'tags',
      comments: false
    }
  }
})
