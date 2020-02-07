module.exports = {
  '/entities': {
    method: 'get',
    handler: (req, res) => {
      res.jsonp([
        {
          order: 1,
          name: '刘欢',
          property:
            '刘欢（Huan Liu），现为美国亚利桑那州立大学（Arizona State University）计算机科学与工程系的副教授。刘欢，1983年毕业于中国上海交通大学计算机科学......',
          result: {
            wrong: 2,
            right: 1,
          },
        },
        {
          order: 2,
          name: '张长水',
          property:
            '张长水，男，1965年生，河北人。智能技术与系统国家重点实验室学术委员会委员，清华大学自动化系教授、博士生导师智能技术与系统国家重点实验室副......',
          result: {
            wrong: 2,
            right: 1,
          },
        },
        {
          order: 3,
          name: '梅宏',
          property:
            '梅宏，男，1963年5月生，汉族，籍贯重庆，出生并成长于贵州。1984和1987年分别于南京航空学院获学士和硕士学位1992年于上海交通大学获博士学位，1994......',
          result: {
            wrong: 2,
            right: 1,
          },
        },
        {
          order: 4,
          name: '黄庆明',
          property:
            '黄庆明：男，博士，教授，国家杰出青年基金获得者。1984至1994年在哈尔滨工业大学获学士硕士和博士学, 1996年在新加坡国立大学工学院 从事博士后研究......',
          result: {
            wrong: 2,
            right: 1,
          },
        },
        {
          order: 5,
          name: '胡事民',
          property:
            '胡事民，清华大学计算机系副主任、学位分委员会主席。教育部长江学者特聘教授。1968年生于浙江长兴。1986年考入吉林数学系；1990年免试进入浙江大学......',
          result: {
            wrong: 2,
            right: 1,
          },
        },
        {
          order: 6,
          name: '戴琼海',
          property:
            '戴琼海，1964年12月26日生，1996年博士毕业，清华大学自动化系教授、博导、宽带网数字媒体实验室主任。主要研究领域为视频处理及宽带通信......',
          result: {
            wrong: 2,
            right: 1,
          },
        },
      ]);
    },
  },
};
