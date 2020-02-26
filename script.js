new Vue({
  el: "#app",
  data: {
    lenghtWorkSections: 0,
    amountWorkSections: 0,
    currentSсheme: {},
    currentProduct: {},
    weight: 0,
    schemes: {
      RoadFence: {
        name: "Односторонние дорожные ограждения",
        nameSecond: "односторонних дорожных ограждений",
        balks: {
          2320: {
            name: "СБ-0 2320 мм",
            fullname: "Секция балки СБ-0 3х2320 мм",
            link: "балка2320",
            length: 2,
            weight: 26, // kg
          },
          4320: {
            name: "СБ-1 3х4320 мм",
            fullname: "Секция балки СБ-1 3х4320 мм",
            link: "балка4320",
            length: 4,
            weight: 47.5, // kg
          },
          6320: {
            name: "СБ-2 3х6320 мм",
            fullname: "Секция балки СБ-2 3х6320 мм",
            link: "балка6320",
            length: 6,
            weight: 70.100, // kg
          }
        },
        products: {
          balk: {
            name: "Секция балки СБ-0 3х2320 мм",
            link: "балка",
            length: 2,
            weight: 26, // kg
          },
          strut: {
            name: "Стойка дорожная СД-1 (1,8 ГОСТ 2012)",
            link: "стойка",
            weight: 18.7, // kg
          },
          bracket: {
            name: "Консоль жесткая КЖ-18 (ГОСТ 2012)",
            link: "консоль",
            weight: 3.38, // kg
          },
          retroreflective: {
            name: "Элемент световозвращающий ЭС, гор цинк",
            link: "свет",
            weight: 0.33, // kg
          },
          bolt1645: {
            name: "Болт М16х45 7802, гор цинк",
            link: "bolt45",
            weight: 0.102, // kg
          },
          bolt1640: {
            name: "Болт М16х40 7802, гор цинк",
            link: "bolt40",
            weight: 0.098, // kg
          },
          bolt1630: {
            name: "Болт М16х30 7798, гор цинк",
            weight: 0.0833, // kg
          },
          strew: {
            name: "Гайка М16 5915, гор цинк",
            link: "гайка",
            weight: 0.037, // kg
          },
          spacer: {
            name: "Шайба М20 11371, гор цинк",
            link: "шайба",
            weight: 0.016, // kg
          }
        }
      },
      RoadFenceTwoWay: {
        name: "Двустороннее дорожное ограждение",
        nameSecond: "двусторонних дорожных ограждений",
        balks: {
          2320: {
            name: "СБ-0 2320 мм",
            fullname: "Секция балки СБ-0 3х2320 мм",
            link: "балка2320",
            length: 2,
            price: 5168.1, // ruble
            weight: 26, // kg
            count: 0,
            totalPrice: 0,
            totalWeight: 0
          },
          3320: {
            name: "СБ-3,3 3320 мм",
            fullname: "Секция балки СБ-3,3 3х3320 мм",
            link: "балка3320",
            length: 4,
            price: 5168.1, // ruble
            weight: 37, // kg
            count: 0,
            totalPrice: 0,
            totalWeight: 0
          },
          4320: {
            name: "СБ-1 3х4320 мм",
            fullname: "Секция балки СБ-1 3х4320 мм",
            link: "балка4320",
            length: 4,
            price: 5168.1, // ruble
            weight: 47.5, // kg
            count: 0,
            totalPrice: 0,
            totalWeight: 0
          },
          5320: {
            name: "СБ-5,3 5320 мм",
            fullname: "Секция балки СБ-5,3 3х5320 мм",
            link: "балка4320",
            length: 4,
            price: 5168.1, // ruble
            weight: 59.1, // kg
            count: 0,
            totalPrice: 0,
            totalWeight: 0
          },
          6320: {
            name: "СБ-2 3х6320 мм",
            fullname: "Секция балки СБ-2 3х6320 мм",
            link: "балка6320",
            length: 6,
            price: 5168.1, // ruble
            weight: 70.100, // kg
            count: 0,
            totalPrice: 0,
            totalWeight: 0
          }
        },
        products: {}
      },
      BridgeFence: {
        name: "Мостовое ограждение",
        nameSecond: "мостовых дорожных ограждений",
        balks: {
          3320: {
            name: "СБ-3,3 3320 мм",
            fullname: "Секция балки СБ-3,3 3х3320 мм (0,5 м)",
            link: "балка2320",
            length: 2,
            price: 5168.1, // ruble
            weight: 37, // kg
            count: 0,
            totalPrice: 0,
            totalWeight: 0
          },
          4320: {
            name: "СБ-1 3х4320 мм",
            fullname: "Секция балки СБ-1 3х4320 мм (0,5 м)",
            link: "балка4320",
            length: 4,
            price: 5168.1, // ruble
            weight: 47.5, // kg
            count: 0,
            totalPrice: 0,
            totalWeight: 0
          },
          6320: {
            name: "СБ-2 6320 мм",
            fullname: "Секция балки СБ-2 3х6320 мм (0,5 м)",
            link: "балка6320",
            length: 6,
            price: 5168.1, // ruble
            weight: 70.100, // kg
            count: 0,
            totalPrice: 0,
            totalWeight: 0
          }
        },
        products: {}
      }
    }
  },
  computed: {
    countBalk() {
      return this.lenghtWorkSections / this.products.balk.length;
    }
  },
  methods: {
    clearAll() {
      this.currentProduct = {};
      this.currentSсheme = {};
      this.lenghtWorkSections = 0;
      this.amountWorkSections = 0;
      this.weight = 0;
    },
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
  },
  created: function() {
    // `this` указывает на экземпляр vm
  }
});
