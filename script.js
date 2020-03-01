const shemas = {
  RoadFence: {
    name: "Односторонние дорожные ограждения",
    nameSecond: "односторонних дорожных ограждений",
    balks: [
      {
        name: "СБ-0 2320 мм",
        fullname: "Секция балки СБ-0 3х2320 мм",
        link: "балка2320",
        length: 2,
        weight: 26 // kg
      },
      {
        name: "СБ-3,3  3х3320 мм",
        fullname: "Секция балки СБ-3,3 3х3320 мм",
        link: "балка4320",
        length: 3,
        weight: 37 // kg
      },
      {
        name: "СБ-1 3х4320 мм",
        fullname: "Секция балки СБ-1 3х4320 мм",
        link: "балка4320",
        length: 4,
        weight: 47.5 // kg
      },
      {
        name: "СБ-5,3 3х5320 мм",
        fullname: "Секция балки СБ-5,3 3х5320 мм",
        link: "балка5320",
        length: 5,
        weight: 59.1 // kg
      },
      {
        name: "СБ-2 3х6320 мм",
        fullname: "Секция балки СБ-2 3х6320 мм",
        link: "балка6320",
        length: 6,
        weight: 70.1 // kg
      }
    ],
    struts: [
      {
        name: "11-ДО/130-0,75-2,0÷1,50 У1 (СД-1)",
        fullname: "Стойка дорожная СД-1 (1,8 ГОСТ 2012)	",
        type: "КЖ",
        balksMultiply: 1,
        weight: 18.7,
        step: 2
      },
      {
        name: "11-ДО/130-0,75-4,0÷1,50 У1 (СД-2)",
        fullname: "Стойка дорожная СД-2 (1,8 ГОСТ 2012)	",
        type: "КЖ",
        balksMultiply: 1,
        weight: 22.1,
        step: 4
      },
      {
        name: "11-ДО/130-0,75-2,5÷1,50 У1 (СД-1)",
        fullname: "Стойка дорожная СД-1 (1,8 ГОСТ 2012)	",
        type: "КЖ",
        balksMultiply: 1,
        weight: 18.7,
        step: 2.5
      },
      {
        name: "11-ДО/130-0,75-3,0÷1,50 У1 (СД-2)",
        fullname: "Стойка дорожная СД-2 (1,8 ГОСТ 2012)	",
        type: "КЖ",
        balksMultiply: 1,
        weight: 22.1,
        step: 3
      },
      {
        name: "11-ДО/130-0,75-4,0÷1,50 У1 (СД-3*)",
        fullname: "Стойка дорожная СД-3* (1,8 ГОСТ 2012)",
        type: "КЖ",
        balksMultiply: 1,
        weight: 14.5,
        step: 4
      },
      {
        name: "11-ДО/190-0,75-1,5÷1,50 У2 (СД-1)",
        fullname: "Стойка дорожная СД-1 (1,8 ГОСТ 2012)	",
        type: "КЖ",
        balksMultiply: 1,
        weight: 18.7,
        step: 1
      },
      {
        name: "11-ДО/190-0,75-2,0÷1,25 У2 (СД-2)",
        fullname: "Стойка дорожная СД-2 (1,8 ГОСТ 2012)	",
        type: "КЖ",
        balksMultiply: 1,
        weight: 22.1,
        step: 2
      },
      {
        name: "11-ДО/190-0,75-2,5÷1,25 У2 (СД-3)",
        fullname: "Стойка дорожная СД-3 (1,8 ГОСТ 2012)	",
        type: "КЖ",
        balksMultiply: 1,
        weight: 25.6,
        step: 2.5
      },
      {
        name: "11-ДО/190-0,75-2,0÷1,25 У2 (СД-2)",
        fullname: "Стойка дорожная СД-2 (1,8 ГОСТ 2012)	",
        type: "КЖ",
        balksMultiply: 1,
        weight: 22.1,
        step: 2
      },
      {
        name: "11-ДО/190-0,75-4,0÷1,50 У2 (СД-3)",
        fullname: "Стойка дорожная СД-3 (1,8 ГОСТ 2012)	",
        type: "КЖ",
        balksMultiply: 1,
        weight: 25.6,
        step: 4
      },
      {
        name: "11-ДО/190-0,75-2,0÷1,25 У2 (СД-3*)",
        fullname: "Стойка дорожная СД-3* (1,8 ГОСТ 2012)",
        type: "КЖ",
        balksMultiply: 1,
        weight: 14.5,
        step: 2
      },
      {
        name: "11-ДО/250-0,75-1,33÷1,50 У3 (СД-2)",
        fullname: "Стойка дорожная СД-2 (1,8 ГОСТ 2012)	",
        type: "КЖ",
        balksMultiply: 1,
        weight: 22.1,
        step: 1.33
      },
      {
        name: "11-ДО/250-0,75-1,0÷1,50 У3 (СД-1)",
        fullname: "Стойка дорожная СД-1 (1,8 ГОСТ 2012)	",
        type: "КЖ",
        balksMultiply: 1,
        weight: 18.7,
        step: 1
      },
      {
        name: "11-ДО/250-0,75-1,5÷1,25 У3 (СД-2)",
        fullname: "Стойка дорожная СД-2 (1,8 ГОСТ 2012)	",
        type: "КЖ",
        balksMultiply: 1,
        weight: 22.1,
        step: 1
      },
      {
        name: "11-ДО/250-0,75-2,0÷1,00 У3 (СД-3)",
        fullname: "Стойка дорожная СД-3 (1,8 ГОСТ 2012)	",
        type: "КЖ",
        balksMultiply: 1,
        weight: 25.6,
        step: 2
      },
      {
        name: "11-ДО/250-0,75-1,33÷1,50 У3 (СД-3*)",
        fullname: "Стойка дорожная СД-3* (1,8 ГОСТ 2012)",
        type: "КЖ",
        balksMultiply: 1,
        weight: 14.5,
        step: 1
      },
      {
        name: "11-ДО/250-0,75-1,5÷1,25 У3 (СД-3*)",
        fullname: "Стойка дорожная СД-3* (1,8 ГОСТ 2012)",
        type: "КЖ",
        balksMultiply: 1,
        weight: 14.5,
        step: 1.5
      },
      {
        name: "11-ДО/300-0,75-1,0÷1,25 У4 (СД-3*)",
        fullname: "Стойка дорожная СД-3* (1,8 ГОСТ 2012)",
        type: "КЖ",
        balksMultiply: 1,
        weight: 14.5,
        step: 1
      },
      {
        name: "11-ДО/130-0,75-2,5÷1,00 У1 (СД-6)",
        fullname: "Стойка дорожная СД-6 (ГОСТ 2012)	",
        type: "КА",
        balksMultiply: 1,
        weight: 21.8,
        step: 2.5
      },
      {
        name: "11-ДО/130-0,75-3,0÷1,25 У1 (СД-6)",
        fullname: "Стойка дорожная СД-6 (ГОСТ 2012)	",
        type: "КА",
        balksMultiply: 1,
        weight: 21.8,
        step: 3
      },
      {
        name: "11-ДО/190-0,75-1,5÷1,00 У2 (СД-6)",
        fullname: "Стойка дорожная СД-6 (ГОСТ 2012)	",
        type: "КА",
        balksMultiply: 1,
        weight: 21.8,
        step: 3
      },
      {
        name: "11-ДО/190-0,75-2,0÷1,00 У2 (СД-6)",
        fullname: "Стойка дорожная СД-6 (ГОСТ 2012)	",
        type: "КА",
        balksMultiply: 1,
        weight: 21.8,
        step: 2
      },
      {
        name: "11-ДО/190-0,75-2,5÷1,25 У2 (СД-6)",
        fullname: "Стойка дорожная СД-6 (ГОСТ 2012)	",
        type: "КА",
        balksMultiply: 1,
        weight: 21.8,
        step: 2.5
      },
      {
        name: "11-ДО/250-0,75-1,0÷1,00 У3 (СД-6)",
        fullname: "Стойка дорожная СД-6 (ГОСТ 2012)	",
        type: "КА",
        balksMultiply: 1,
        weight: 21.8,
        step: 1
      },
      {
        name: "11-ДО/250-0,75-2,0÷1,00 У3 (СД-7)",
        fullname: "Стойка дорожная СД-7 (ГОСТ 2012)	",
        type: "КА",
        balksMultiply: 1,
        weight: 26,
        step: 2
      },
      {
        name: "11-ДО/300-0,75-1,0÷1,00 У4 (СД-7)",
        fullname: "Стойка дорожная СД-7 (ГОСТ 2012)	",
        type: "КА",
        balksMultiply: 1,
        weight: 26,
        step: 1
      },
      {
        name: "11-ДО/350-1,10-1,5÷1,20 У5 (СД-8)",
        fullname: "Стойка дорожная СД-8 (ГОСТ 2012)	",
        type: "КА",
        balksMultiply: 2,
        weight: 25.87,
        step: 1.5
      },
      {
        name: "11-ДО/350-1,10-2,0÷1,10 У5 (СД-8)",
        fullname: "Стойка дорожная СД-8 (ГОСТ 2012)	",
        type: "КА",
        balksMultiply: 2,
        weight: 25.87,
        step: 2
      },
      {
        name: "11-ДО/400-1,10-1,0÷1,10 У6 (СД-8)",
        fullname: "Стойка дорожная СД-8 (ГОСТ 2012)	",
        type: "КА",
        balksMultiply: 2,
        weight: 25.87,
        step: 1
      },
      {
        name: "11-ДО/400-1,10-1,5÷1,00 У6 (СД-8)",
        fullname: "Стойка дорожная СД-8 (ГОСТ 2012)	",
        type: "КА",
        balksMultiply: 2,
        weight: 25.87,
        step: 1.5
      },
      {
        name: "11-ДО/450-1,10-1,0÷1,00 У7 (СД-9)",
        fullname: "Стойка дорожная СД-9 (ГОСТ 2012)	",
        type: "КА",
        balksMultiply: 2,
        weight: 30.8,
        step: 1.5
      }
    ],
    brackets: [
      {
        name: "Консоль амортизатор нижний КН",
        fullname: "Консоль амортизатор нижний КН",
        type: "КА",
        weight: 3.5 // kg
      },
      {
        name: "Консоль жесткая КЖ-18 (ГОСТ 2012)",
        fullname: "Консоль жесткая КЖ-18 (ГОСТ 2012)",
        type: "КЖ",
        weight: 3.38 // kg
      },
    ],
    products: {
      retroreflective: {
        name: "Элемент световозвращающий ЭС, гор цинк",
        fullname: "Элемент световозвращающий ЭС, гор цинк",
        weight: 0.33 // kg
      },
      bolt1645: {
        name: "Болт М16х45 7802, гор цинк",
        fullname: "Болт М16х45 7802, гор цинк",
        weight: 0.102 // kg
      },
      bolt1640: {
        name: "Болт М16х40 7802, гор цинк",
        fullname: "Болт М16х40 7802, гор цинк",
        weight: 0.098 // kg
      },
      bolt1630: {
        name: "Болт М16х30 7798, гор цинк",
        fullname: "Болт М16х30 7798, гор цинк",
        weight: 0.0833 // kg
      },
      strew: {
        name: "Гайка М16 5915, гор цинк",
        fullname: "Гайка М16 5915, гор цинк",
        weight: 0.037 // kg
      },
      spacer: {
        name: "Шайба М20 11371, гор цинк",
        fullname: "Шайба М20 11371, гор цинк",
        weight: 0.016 // kg
      },
      spacerSquare: {
        name: "Шайба прямоугольная ПШ (80x40x4)	",
        fullname: "Шайба прямоугольная ПШ (80x40x4)	",
        weight: 0.07 // kg
      }
    }
  },
  RoadFenceTwoWay: {
    name: "Двустороннее дорожное ограждение",
    nameSecond: "двусторонних дорожных ограждений",
    balks: [
      {
        name: "СБ-0 2320 мм",
        fullname: "Секция балки СБ-0 3х2320 мм",
        link: "балка2320",
        length: 2,
        weight: 26 // kg
      },
      {
        name: "СБ-3,3 3320 мм",
        fullname: "Секция балки СБ-3,3 3х3320 мм",
        link: "балка3320",
        length: 3,
        price: 5168, // ruble
        weight: 37 // kg
      },
      {
        name: "СБ-1 3х4320 мм",
        fullname: "Секция балки СБ-1 3х4320 мм",
        link: "балка4320",
        length: 4,
        weight: 47.5 // kg
      },
      {
        name: "СБ-5,3 5320 мм",
        fullname: "Секция балки СБ-5,3 3х5320 мм",
        link: "балка4320",
        length: 5,
        weight: 59.1 // kg
      },
      {
        name: "СБ-2 3х6320 мм",
        fullname: "Секция балки СБ-2 3х6320 мм",
        link: "балка6320",
        length: 6,
        weight: 70.1 // kg
      }
    ],
    struts: [
      {
        name: "11-ДД/300-0,75-1,0÷1,00 У4 (СД-4)",
        fullname: "Стойка дорожная СД-4 (ГОСТ 2012)",
        type: "КР-14",
        balksMultiply: 1,
        weight: 22.1,
        step: 1
      },
      {
        name: "11-ДД/300-0,75-2,0÷1,20 У4 (СД-5)",
        fullname: "Стойка дорожная СД-5 (ГОСТ 2012)",
        type: "КР-16",
        balksMultiply: 1,
        weight: 25.6,
        step: 2
      },
      {
        name: "11-ДД/300-0,75-1,0÷1,25 У4 (СД-4)",
        fullname: "Стойка дорожная СД-4 (ГОСТ 2012)",
        type: "КР-14",
        balksMultiply: 1,
        weight: 22.1,
        step: 1
      },
      {
        name: "11-ДД/350-1,10-1,5÷1,20 У5 (СД-8)",
        fullname: "Стойка дорожная СД-8 (ГОСТ 2012)",
        type: "КА",
        balksMultiply: 2,
        weight: 25.87,
        step: 1.5
      },
      {
        name: "11-ДД/350-1,10-2,0÷1,10 У5 (СД-8)",
        fullname: "Стойка дорожная СД-8 (ГОСТ 2012)",
        type: "КА",
        balksMultiply: 2,
        weight: 25.87,
        step: 2
      },
      {
        name: "11-ДД/400-1,10-1,0÷1,10 У6 (СД-8)",
        fullname: "Стойка дорожная СД-8 (ГОСТ 2012)",
        type: "КА",
        balksMultiply: 2,
        weight: 25.87,
        step: 1
      },
      {
        name: "11-ДД/400-1,10-1,5÷1,00 У6 (СД-8)",
        fullname: "Стойка дорожная СД-8 (ГОСТ 2012)",
        type: "КА",
        balksMultiply: 2,
        weight: 25.87,
        step: 1.5
      },
      {
        name: "11-ДД/450-1,10-1,0÷1,00 У7 (СД-9)",
        fullname: "Стойка дорожная СД-9 (ГОСТ 2012)",
        type: "КА",
        balksMultiply: 2,
        weight: 30.8,
        step: 1
      }
    ],
    brackets: [
      {
        name: "Консоль-распорка КР-14",
        fullname: "Консоль-распорка КР-14",
        type: "КР-14",
        weight: 10.7 // kg
      },
      {
        name: "Консоль-распорка КР-16",
        fullname: "Консоль-распорка КР-16",
        type: "КР-16",
        weight: 11.8 // kg
      },
      {
        name: "Консоль амортизатор нижний КН",
        fullname: "Консоль амортизатор нижний КН",
        type: "КА",
        weight: 3.5 // kg
      }
    ],
    products: {
      retroreflective: {
        name: "Элемент световозвращающий ЭС",
        fullname: "Элемент световозвращающий ЭС",
        weight: 0.33 // kg
      },
      bolt1645: {
        name: "Болт М16х45 7802",
        fullname: "Болт М16х45 7802",
        weight: 0.102 // kg
      },
      bolt1640: {
        name: "Болт М16х40 7802",
        fullname: "Болт М16х40 7802",
        weight: 0.098 // kg
      },
      strew: {
        name: "Гайка М16 5915",
        fullname: "Гайка М16 5915",
        weight: 0.037 // kg
      },
      spacer: {
        name: "Шайба М20 11371",
        fullname: "Шайба М20 11371",
        weight: 0.016 // kg
      },
      spacerSquare: {
        name: "Шайба прямоугольная ПШ (80x40x4)	",
        fullname: "Шайба прямоугольная ПШ (80x40x4)	",
        weight: 0.07 // kg
      }
    }
  },
  BridgeFence: {
    name: "Мостовое ограждение",
    nameSecond: "мостовых дорожных ограждений",
    balks: [
      {
        name: "СБ-0 2320 мм",
        fullname: "Секция балки СБ-0 3х2320 мм",
        link: "балка2320",
        length: 2,
        weight: 26 // kg
      },
      {
        name: "СБ-3,3 3х3320 мм",
        fullname: "Секция балки СБ-3,3 3х3320 мм	",
        link: "балка3320",
        length: 3,
        weight: 37 // kg
      },
      {
        name: "СБ-1 3х4320 мм",
        fullname: "Секция балки СБ-1 3х4320 мм (0,5 м)",
        link: "балка4320",
        length: 4,
        weight: 47.5 // kg
      },
      {
        name: "СБ-5,3 3х5320 мм",
        fullname: "Секция балки СБ-5,3 3х5320 мм",
        link: "балка6320",
        length: 5,
        weight: 59.1 // kg
      },
      {
        name: "СБ-2 6320 мм",
        fullname: "Секция балки СБ-2 3х6320 мм (0,5 м)",
        link: "балка6320",
        length: 6,
        weight: 70.1 // kg
      }
    ],
    struts: [
      {
        name: "11-МО/130-0,75-3,0÷0,70 У1 (СМ-1)",
        fullname: "Стойка мостовая СМ-1 (ГОСТ 2012)",
        balksMultiply: 1,
        weight: 16.3,
        step: 3
      },
      {
        name: "11-МО/130-0,75-2,5÷0,75 У1 (СМ-1)",
        fullname: "Стойка мостовая СМ-1 (ГОСТ 2012)",
        balksMultiply: 1,
        weight: 16.3,
        step: 2.5
      },
      {
        name: "11-МО/130-0,75-3,0÷0,75 У1 (СМ-2)",
        fullname: "Стойка мостовая СМ-2 (ГОСТ 2012)",
        balksMultiply: 1,
        weight: 20.6,
        step: 3
      },
      {
        name: "11-МО/130-0,75-4,0÷0,75 У1 (СМ-2)",
        fullname: "Стойка мостовая СМ-2 (ГОСТ 2012)",
        balksMultiply: 1,
        weight: 20.6,
        step: 4
      },
      {
        name: "11-МО/190-0,75-1,5÷0,75 У2 (СМ-1)",
        fullname: "Стойка мостовая СМ-1 (ГОСТ 2012)",
        balksMultiply: 1,
        weight: 16.3,
        step: 1.5
      },
      {
        name: "11-МО/190-0,75-2,0÷0,75 У2 (СМ-2)",
        fullname: "Стойка мостовая СМ-2 (ГОСТ 2012)",
        balksMultiply: 1,
        weight: 20.6,
        step: 2
      },
      {
        name: "11-МО/190-0,75-1,5÷0,75 У2 (СМ-1)",
        fullname: "Стойка мостовая СМ-1 (ГОСТ 2012)",
        balksMultiply: 1,
        weight: 16.3,
        step: 1.5
      },
      {
        name: "11-МО/190-0,75-2,0÷0,75 У2 (СМ-2)",
        fullname: "Стойка мостовая СМ-2 (ГОСТ 2012)",
        balksMultiply: 1,
        weight: 20.6,
        step: 2
      },
      {
        name: "11-МО/250-0,75-1,0÷0,70 У3 (СМ-1)",
        fullname: "Стойка мостовая СМ-1 (ГОСТ 2012)",
        balksMultiply: 1,
        weight: 16.3,
        step: 1
      },
      {
        name: "11-МО/250-0,75-1,0÷0,70 У3 (СМ-2)",
        fullname: "Стойка мостовая СМ-2 (ГОСТ 2012)",
        balksMultiply: 1,
        weight: 20.6,
        step: 1
      },
      {
        name: "11-МО/250-0,75-1,5÷0,70 У3 (СМ-2)",
        fullname: "Стойка мостовая СМ-2 (ГОСТ 2012)",
        balksMultiply: 1,
        weight: 20.6,
        step: 1.5
      },
      {
        name: "11-МО/300-0,75-1,0÷0,70 У4 (СМ-2)",
        fullname: "Стойка мостовая СМ-2 (ГОСТ 2012)",
        balksMultiply: 1,
        weight: 20.6,
        step: 1
      },
      {
        name: "11-МО/300-0,75-1,5÷0,70 У4 (СМ-3)",
        fullname: "Стойка мостовая СМ-3 (ГОСТ 2012)",
        balksMultiply: 1,
        weight: 25,
        step: 1.5
      },
      {
        name: "11-МО/190-1,10-3,0÷1,15 У2 (СМ-7)",
        fullname: "Стойка мостовая СМ-7 (ГОСТ 2012)",
        balksMultiply: 2,
        weight: 20.5,
        step: 3
      },
      {
        name: "11-МО/190-1,10-4,0÷1,10 У2 (СМ-8)",
        fullname: "Стойка мостовая СМ-8 (ГОСТ 2012)",
        balksMultiply: 2,
        weight: 25.5,
        step: 4
      },
      {
        name: "11-МО/250-1,10-2,0÷1,10 У3 (СМ-7)",
        fullname: "Стойка мостовая СМ-7 (ГОСТ 2012)",
        balksMultiply: 2,
        weight: 20.5,
        step: 2
      },
      {
        name: "11-МО/250-1,10-2,5÷1,00 У3 (СМ-8)",
        fullname: "Стойка мостовая СМ-8 (ГОСТ 2012)",
        balksMultiply: 2,
        weight: 25.5,
        step: 2.5
      },
      {
        name: "11-МО/300-1,10-1,5÷1,05 У4 (СМ-7)",
        fullname: "Стойка мостовая СМ-7 (ГОСТ 2012)",
        balksMultiply: 2,
        weight: 20.5,
        step: 1.5
      },
      {
        name: "11-МО/300-1,10-2,0÷1,00 У4 (СМ-8)",
        fullname: "Стойка мостовая СМ-8 (ГОСТ 2012)",
        balksMultiply: 2,
        weight: 25.5,
        step: 2
      },
      {
        name: "11-МО/350-1,30-2,0÷1,00 У5 (СМ-10)",
        fullname: "Стойка мостовая СМ-10 (ГОСТ 2012)",
        balksMultiply: 2,
        weight: 34.16,
        step: 2
      },
      {
        name: "11-МО/400-1,30-1,5÷1,00 У6 (СМ-10)",
        fullname: "Стойка мостовая СМ-10 (ГОСТ 2012)",
        balksMultiply: 2,
        weight: 34.16,
        step: 1.5
      },
      {
        name: "11-МО/450-1,50-1,0÷1,00 У7 (СМ-11)",
        fullname: "Стойка мостовая СМ-11 (ГОСТ 2012)",
        balksMultiply: 2,
        weight: 37.4,
        step: 1
      }
    ],
    brackets: [
      {
        name: "Консоль амортизатор нижний КН",
        fullname: "Консоль амортизатор нижний КН",
        type: "КА",
        weight: 3.5 // kg
      },
      {
        name: "Консоль жесткая КЖ-18 (ГОСТ 2012)",
        fullname: "Консоль жесткая КЖ-18 (ГОСТ 2012)",
        type: "КЖ",
        weight: 3.38 // kg
      },
    ],
    products: {
      retroreflective: {
        name: "Элемент световозвращающий ЭС",
        fullname: "Элемент световозвращающий ЭС",
        weight: 0.33 // kg
      },
      bolt1645: {
        name: "Болт М16х45 ГОСТ 7802",
        fullname: "Болт М16х45 ГОСТ 7802",
        weight: 0.102 // kg
      },
      bolt1640: {
        name: "Болт М16х40 ГОСТ 7798",
        fullname: "Болт М16х40 ГОСТ 7798",
        weight: 0.098 // kg
      },
      bolt1630: {
        name: "Болт М20х70 ГОСТ 7798",
        fullname: "Болт М20х70 ГОСТ 7798",
        weight: 0.241 // kg
      },
      strew: {
        name: "Гайка М16 ГОСТ 5915",
        fullname: "Гайка М16 ГОСТ 5915",
        weight: 0.037 // kg
      },
      spacer: {
        name: "Шайба 20 ГОСТ 11371",
        fullname: "Шайба 20 ГОСТ 11371",
        weight: 0.016 // kg
      }
    }
  }
};

new Vue({
  el: "#app",
  data: {
    lenghtWorkSections: 0, // TODO: set 0
    amountWorkSections: 0, // TODO: set 0
    selectBalk: {}, // TODO: set {}
    selectStrut: {}, // TODO: set {}
    currentSсheme: {},
    weight: 0,
    schemes: shemas
  },
  methods: {
    clearAll() {
      this.currentProduct = {};
      this.currentSсheme = {};
      this.lenghtWorkSections = 0;
      this.amountWorkSections = 0;
      this.weight = 0;
    },

    calcBalks() {
      const mainBalk = this.selectBalk;
      const surplus = this.lenghtWorkSections % mainBalk.length;
      let countMain = Math.floor(this.lenghtWorkSections / mainBalk.length);

      const balks = [];
      const newBalks = [];

      // если есть остаток
      if (surplus != 0) {
        if (surplus === 1) {
          // когда остаток 1 метр, это исключительный случай...
          // далеко не лучшее решение, но оно работает, а я заебался это ковырять пока что :)

          countMain = countMain - 1;
          const newsurplus = mainBalk.length + surplus;

          // береберём все возможные варианты склеек балок
          this.currentSсheme.balks.forEach(balk1 => {
            this.currentSсheme.balks.forEach(balk2 => {
              // добавляем одну балку
              if (balk1.length === newsurplus && newBalks.length <= 0) {
                balk1.count = 1;
                newBalks.push(balk1);
              }
              // добавляем две разных балки
              if (
                balk1.length + balk2.length === newsurplus &&
                newBalks.length <= 0
              ) {
                balk1.count = 1;
                balk2.count = 1;
                newBalks.push(balk1);
                newBalks.push(balk2);
              }
            });
          });
        } else {
          // остаток от 2х метров решается подбором подходяшей балки
          this.currentSсheme.balks.forEach(balk => {
            if (balk.length === surplus) {
              balk.count = 1;
              newBalks.push(balk);
            }
          });
        }
      }

      mainBalk.count = countMain;

      balks.push(mainBalk);
      newBalks.forEach(balk => {
        balks.push(balk);
      });

      // двухъярусные балки
      balks.forEach(balk => {
        balk.count = balk.count * this.selectStrut.balksMultiply;
      });

      if (this.currentSсheme.name === "Двустороннее дорожное ограждение") {
        balks.forEach(balk => {
          balk.count = balk.count * 2;
        });
      }
      return balks;
    },

    calcStrut() {
      let strut = this.selectStrut;
      strut.count =
        Math.ceil(this.lenghtWorkSections / this.selectStrut.step) +
        this.amountWorkSections;

      return strut;
    },

    calcBrackets(strut) {
      let braket = {};
      this.currentSсheme.brackets.forEach(searchBraket => {
        if (searchBraket.type == strut.type) {
          braket = searchBraket;
        }
      })
      return braket;
    },

  },
  computed: {
    currentProduct() {
      let complect = {};

      this.calcBalks().forEach((balk, index) => {
        complect["balk" + index] = balk;
      });

      complect.struts = this.calcStrut();
      complect.bracket = this.calcBrackets(complect.struts);
      complect.bracket.count = complect.struts.count;

      for (let [key, value] of Object.entries(this.currentSсheme.products)) {
        complect[key] = value;
      }

      if (this.currentSсheme.name === "Двустороннее дорожное ограждение") {
        complect.retroreflective.count = Math.ceil(
          (this.lenghtWorkSections * 2) / 4
        );
      } else {
        complect.retroreflective.count = Math.ceil(this.lenghtWorkSections / 4);
      }

      // посчитаем болты 45 для односторонки КА
      // консоль * 8 + коносли, но если двуярустная то консоль * 8
      // посчитаем болты 40 для односторонки
      // консоль * 2
      // КЖ ебал я это покачто

      console.log(complect);
      return complect;
    }
  },
  created: function() {
    // `this` указывает на экземпляр vm
  }
});
