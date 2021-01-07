const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 10001,
        name: '算法导论',
        published: '2006-09',
        price: 85.00,
        count: 1,
      },
      {
        id: 10002,
        name: 'UNIX编程艺术',
        published: '2006-02',
        price: 59.00,
        count: 1,
      },
      {
        id: 10003,
        name: '编程珠玑',
        published: '2008-10',
        price: 39.00,
        count: 1,
      },
      {
        id: 10004,
        name: '代码大全',
        published: '2006-03',
        price: 128.00,
        count: 1,
      }
    ]
  },
  methods: {
    /**
     * 增加书籍数量
     * @param {number} index 增加书籍的下标
     */
    increment(index) {
      this.books[index].count++;
    },
    /**
     * 减少书籍数量
     * @param {number} index 减少书籍的下标
     */
    decrement(index) {
      this.books[index].count--;
    },
    /**
     * 将书籍从购物车中移除
     * @param {number} index 移除书籍的下标
     */
    removeBook(index) {
      this.books.splice(index, 1);
    }
  },
  filters: {
    /**
     * 过滤价格显示
     * @param {number} price 价格
     * @returns {string} 最终显示的价格
     */
    finalPrice(price) {
      return `￥${price.toFixed(2)}`;
    },
  },
  computed: {
    /**
     * 计算购物车中书籍的总价
     * @returns {number} 书籍总价
     */
    totalPrice() {
      return this.books.reduce((previousValue, currentValue) =>
        previousValue + currentValue.count * currentValue.price,
        0
      );
    },
  },
});
