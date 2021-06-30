// 商品分类的静态数据
// 商品分类的静态数据

const  goods = [
  {
      "cat_id": 1,
      "cat_name": "大家电",
      "cat_pid": 0,
      "cat_level": 0,
      "cat_deleted": false,
      "children": [
          {
              "cat_id": 1-1,
              "cat_name": "电视",
              "cat_pid": 1,
              "cat_level": 1,
              "cat_deleted": false,
          },
          {
            "cat_id": 1-2,
            "cat_name": "空调",
            "cat_pid": 1,
            "cat_level": 1,
            "cat_deleted": false,
          },
          {
            "cat_id": 1-3,
            "cat_name": "洗衣机",
            "cat_pid": 1,
            "cat_level": 1,
            "cat_deleted": false,
          },
       ],
  },
  {
    "cat_id": 2,
    "cat_name": "热门推荐",
    "cat_pid": 0,
    "cat_level": 0,
    "cat_deleted": false,
    "children": [
        {
            "cat_id": 1-4,
            "cat_name": "小米11手机",
            "cat_pid": 1,
            "cat_level": 1,
            "cat_deleted": false,
        },
        {
          "cat_id": 1-5,
          "cat_name": "苹果平板电脑",
          "cat_pid": 1,
          "cat_level": 1,
          "cat_deleted": false,
        },
        
     ],
  },
  {
    "cat_id": 3,
    "cat_name": "海外购",
    "cat_pid": 0,
    "cat_level": 0,
    "cat_deleted": false,
    "children": [
        {
            "cat_id": 1-6,
            "cat_name": "国际名牌",
            "cat_pid": 1,
            "cat_level": 1,
            "cat_deleted": false,
        },
        {
          "cat_id": 1-7,
          "cat_name": "母婴儿童",
          "cat_pid": 1,
          "cat_level": 1,
          "cat_deleted": false,
        },
        
     ],
  },
  {
    "cat_id": 4,
    "cat_name": "服装鞋子",
    "cat_pid": 0,
    "cat_level": 0,
    "cat_deleted": false,
    "children": [
        {
            "cat_id": 1-8,
            "cat_name": "安踏短袖",
            "cat_pid": 1,
            "cat_level": 1,
            "cat_deleted": false,
        },
        {
          "cat_id": 1-9,
          "cat_name": "李宁球鞋",
          "cat_pid": 1,
          "cat_level": 1,
          "cat_deleted": false,
        },
        {
          "cat_id": 1-10,
          "cat_name": "阿迪达斯",
          "cat_pid": 1,
          "cat_level": 1,
          "cat_deleted": false,
        },
        
     ],
  },
  {
    "cat_id": 5,
    "cat_name": "小米品牌",
    "cat_pid": 0,
    "cat_level": 0,
    "cat_deleted": false,
    "children": [
        {
            "cat_id": 1-11,
            "cat_name": "小米10s",
            "cat_pid": 1,
            "cat_level": 1,
            "cat_deleted": false,
        },
        {
          "cat_id": 1-2,
          "cat_name": "小米11",
          "cat_pid": 1,
          "cat_level": 1,
          "cat_deleted": false,
        },
        {
          "cat_id": 1-13,
          "cat_name": "小米MIX4",
          "cat_pid": 1,
          "cat_level": 1,
          "cat_deleted": false,
        },
        
     ],
  },
  {
    "cat_id": 6,
    "cat_name": "华为品牌",
    "cat_pid": 0,
    "cat_level": 0,
    "cat_deleted": false,
    "children": [
        {
            "cat_id": 1-14,
            "cat_name": "华为P50",
            "cat_pid": 1,
            "cat_level": 1,
            "cat_deleted": false,
        },
        {
          "cat_id": 1-15,
          "cat_name": "华为mate40Pro",
          "cat_pid": 1,
          "cat_level": 1,
          "cat_deleted": false,
        },
        {
          "cat_id": 1-16,
          "cat_name": "华为mateX",
          "cat_pid": 1,
          "cat_level": 1,
          "cat_deleted": false,
        },
        
     ],
  },

]

export default goods