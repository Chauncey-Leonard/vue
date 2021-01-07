const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 10001,
        name: '算法导论',
        published: '2006-09',
        price: 85.00,
        count: 0,
      },
      {
        id: 10002,
        name: 'UNIX编程艺术',
        published: '2006-02',
        price: 59.00,
        count: 0,
      },
      {
        id: 10003,
        name: '编程珠玑',
        published: '2008-10',
        price: 39.00,
        count: 0,
      },
      {
        id: 10004,
        name: '代码大全',
        published: '2006-03',
        price: 128.00,
        count: 0,
      },
    ],
  },
  methods: {
    increment(index) {
      this.books[index].count++;
    },
    decrement(index) {
      this.books[index].count--;
    }
  },
  filters: {
    finalPrice(price) {
      return `￥${price.toFixed(2)}`;
    },
  },
  computed: {
    totalPrice() {
      return this.books.reduce((previousValue, currentValue) =>
        previousValue + currentValue.count * currentValue.price,
        0
      );
    },
  },
});
