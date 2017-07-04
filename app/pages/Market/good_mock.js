import Mock from 'mockjs';

const Random = Mock.Random;

export default Mock.mock({
  'goods|3-6': [
    {
      title: Random.sentence(3, 5),
      desc: Random.paragraph(1, 3),
      'price|1-100': 100,
      'like|1-100': 100,
      'tag|+1': ['图书', '百货', '数码', '衣物', '出行'],
      img: Random.image(`200x${Random.natural(60, 150)}`)
    }
  ]
});
