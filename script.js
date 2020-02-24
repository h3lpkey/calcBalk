new Vue({
  el: "#app",
  data: {
    lenghtWorkSections: 10,
    amountWorkSections: 1,
    products: {
      balk: {
        name: "Секция балки СБ-0 3х2320 мм",
        link: "балка",
        length: 2,
        price: 5168.1, // ruble
        weight: 26, // kg
        count: 0,
        totalPrice: 0,
        totalWeight: 0
      },
      strut: {
        name: "Стойка дорожная СД-1 (1,8 ГОСТ 2012)",
        link: "стойка",
        price: 1498, // ruble
        weight: 18.7, // kg
        count: 0,
        totalPrice: 0,
        totalWeight: 0
      },
      bracket: {
        name: "Консоль жесткая КЖ-18 (ГОСТ 2012)",
        link: "консоль",
        price: 299.6, // ruble
        weight: 3.38, // kg
        count: 0,
        totalPrice: 0,
        totalWeight: 0
      },
      retroreflective: {
        name: "Элемент световозвращающий ЭС, гор цинк",
        link: "свет",
        price: 85.6, // ruble
        weight: 0.33, // kg
        count: 0,
        totalPrice: 0,
        totalWeight: 0
      },
      bolt1645: {
        name: "Болт М16х45 7802, гор цинк",
        link: "bolt45",
        price: 16.6712186632572, // ruble
        weight: 0.102, // kg
        count: 0,
        totalPrice: 0,
        totalWeight: 0
      },
      bolt1640: {
        name: "Болт М16х40 7802, гор цинк",
        link: "bolt40",
        price: 14.5336307441926, // ruble
        weight: 0.098, // kg
        count: 0,
        totalPrice: 0,
        totalWeight: 0
      },
      bolt1630: {
        name: "Болт М16х30 7798, гор цинк",
        price: 13.2756850247805, // ruble
        weight: 0.0833, // kg
        count: 0,
        totalPrice: 0,
        totalWeight: 0
      },
      strew: {
        name: "Гайка М16 5915, гор цинк",
        link: "гайка",
        price: 5.58002245130064, // ruble
        weight: 0.037, // kg
        count: 0,
        totalPrice: 0,
        totalWeight: 0
      },
      spacer: {
        name: "Шайба М20 11371, гор цинк",
        link: "шайба",
        price: 4.0330865646, // ruble
        weight: 0.016, // kg
        count: 0,
        totalPrice: 0,
        totalWeight: 0
      }
    }
  },
  computed: {
    countBalk() {
      return this.lenghtWorkSections / this.products.balk.length;
    }
  },
  methods: {
    counter(product) {
      let count = 0;
      switch (product.link) {
        case "балка":
          this.products.balk.count = this.lenghtWorkSections / product.length;
        case "стойка":
        case "консоль":
          count = this.products.balk.count + 1;
          this.products.strut.count = count;
          this.products.bracket.count = count;
        case "свет":
          this.products.retroreflective.count = this.lenghtWorkSections / 4;
        case "bolt45":
          this.products.bolt1645.count =
            this.products.strut.count * 8 + this.products.strut.count;
        case "bolt40":
          this.products.bolt1640.count = this.products.strut.count;
        case "гайка":
        case "шайба":
          count =
            this.products.bolt1645.count +
            this.products.bolt1640.count +
            this.products.bolt1630.count;
          this.products.strew.count = count;
          this.products.spacer.count = count;
        default:
          break;
      }
      return product.count;
    },
    totalPrice(product) {
      product.totalPrice = product.price * product.count;
      return product.totalPrice;
    },
    totalWeight(product) {
      product.totalWeight = product.weight * product.count;
      return product.totalWeight;
    },
    finalWeight() {
      let weight = 0;
      for (let [key, value] of Object.entries(this.products)) {
        weight += value.totalWeight;
      }
      return weight;
    },
    finalPrice() {
      let price = 0;
      for (let [key, value] of Object.entries(this.products)) {
        price += value.totalPrice;
      }
      return price;
    }
  },
  created: function() {
    // `this` указывает на экземпляр vm
  }
});
