const shemasGOST = {
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
      }
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
        weight: 0.241 // kg
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
        type: "КА",
        balksMultiply: 1,
        weight: 17.3,
        step: 3
      },
      {
        name: "11-МО/130-0,75-2,5÷0,75 У1 (СМ-1)",
        fullname: "Стойка мостовая СМ-1 (ГОСТ 2012)",
        type: "КА",
        balksMultiply: 1,
        weight: 17.3,
        step: 2.5
      },
      {
        name: "11-МО/130-0,75-3,0÷0,75 У1 (СМ-2)",
        fullname: "Стойка мостовая СМ-2 (ГОСТ 2012)",
        type: "КА",
        balksMultiply: 1,
        weight: 21.3,
        step: 3
      },
      {
        name: "11-МО/130-0,75-4,0÷0,75 У1 (СМ-2)",
        fullname: "Стойка мостовая СМ-2 (ГОСТ 2012)",
        type: "КА",
        balksMultiply: 1,
        weight: 21.3,
        step: 4
      },
      {
        name: "11-МО/190-0,75-1,5÷0,75 У2 (СМ-1)",
        fullname: "Стойка мостовая СМ-1 (ГОСТ 2012)",
        type: "КА",
        balksMultiply: 1,
        weight: 17.3,
        step: 1.5
      },
      {
        name: "11-МО/190-0,75-2,0÷0,75 У2 (СМ-2)",
        fullname: "Стойка мостовая СМ-2 (ГОСТ 2012)",
        type: "КА",
        balksMultiply: 1,
        weight: 21.3,
        step: 2
      },
      {
        name: "11-МО/190-0,75-1,5÷0,75 У2 (СМ-1)",
        fullname: "Стойка мостовая СМ-1 (ГОСТ 2012)",
        type: "КА",
        balksMultiply: 1,
        weight: 17.3,
        step: 1.5
      },
      {
        name: "11-МО/190-0,75-2,0÷0,75 У2 (СМ-2)",
        fullname: "Стойка мостовая СМ-2 (ГОСТ 2012)",
        type: "КА",
        balksMultiply: 1,
        weight: 21.3,
        step: 2
      },
      {
        name: "11-МО/250-0,75-1,0÷0,70 У3 (СМ-1)",
        fullname: "Стойка мостовая СМ-1 (ГОСТ 2012)",
        type: "КА",
        balksMultiply: 1,
        weight: 16.3,
        step: 1
      },
      {
        name: "11-МО/250-0,75-1,0÷0,70 У3 (СМ-2)",
        fullname: "Стойка мостовая СМ-2 (ГОСТ 2012)",
        type: "КА",
        balksMultiply: 1,
        weight: 21.3,
        step: 1
      },
      {
        name: "11-МО/250-0,75-1,5÷0,70 У3 (СМ-2)",
        fullname: "Стойка мостовая СМ-2 (ГОСТ 2012)",
        type: "КА",
        balksMultiply: 1,
        weight: 21.3,
        step: 1.5
      },
      {
        name: "11-МО/300-0,75-1,0÷0,70 У4 (СМ-2)",
        fullname: "Стойка мостовая СМ-2 (ГОСТ 2012)",
        type: "КА",
        balksMultiply: 1,
        weight: 21.3,
        step: 1
      },
      {
        name: "11-МО/300-0,75-1,5÷0,70 У4 (СМ-3)",
        fullname: "Стойка мостовая СМ-3 (ГОСТ 2012)",
        type: "КА",
        balksMultiply: 1,
        weight: 21,
        step: 1.5
      },
      {
        name: "11-МО/190-1,10-3,0÷1,15 У2 (СМ-7)",
        fullname: "Стойка мостовая СМ-7 (ГОСТ 2012)",
        type: "КА",
        balksMultiply: 2,
        weight: 20.5,
        step: 3
      },
      {
        name: "11-МО/190-1,10-4,0÷1,10 У2 (СМ-8)",
        fullname: "Стойка мостовая СМ-8 (ГОСТ 2012)",
        type: "КА",
        balksMultiply: 2,
        weight: 25.5,
        step: 4
      },
      {
        name: "11-МО/250-1,10-2,0÷1,10 У3 (СМ-7)",
        fullname: "Стойка мостовая СМ-7 (ГОСТ 2012)",
        type: "КА",
        balksMultiply: 2,
        weight: 20.5,
        step: 2
      },
      {
        name: "11-МО/250-1,10-2,5÷1,00 У3 (СМ-8)",
        fullname: "Стойка мостовая СМ-8 (ГОСТ 2012)",
        type: "КА",
        balksMultiply: 2,
        weight: 25.5,
        step: 2.5
      },
      {
        name: "11-МО/300-1,10-1,5÷1,05 У4 (СМ-7)",
        fullname: "Стойка мостовая СМ-7 (ГОСТ 2012)",
        type: "КА",
        balksMultiply: 2,
        weight: 20.5,
        step: 1.5
      },
      {
        name: "11-МО/300-1,10-2,0÷1,00 У4 (СМ-8)",
        fullname: "Стойка мостовая СМ-8 (ГОСТ 2012)",
        type: "КА",
        balksMultiply: 2,
        weight: 25.5,
        step: 2
      },
      {
        name: "11-МО/350-1,30-2,0÷1,00 У5 (СМ-10)",
        fullname: "Стойка мостовая СМ-10 (ГОСТ 2012)",
        type: "КА",
        balksMultiply: 2,
        weight: 34.16,
        step: 2
      },
      {
        name: "11-МО/400-1,30-1,5÷1,00 У6 (СМ-10)",
        fullname: "Стойка мостовая СМ-10 (ГОСТ 2012)",
        type: "КА",
        balksMultiply: 2,
        weight: 34.16,
        step: 1.5
      },
      {
        name: "11-МО/450-1,50-1,0÷1,00 У7 (СМ-11)",
        fullname: "Стойка мостовая СМ-11 (ГОСТ 2012)",
        type: "КА",
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
      }
    ],
    products: {
      retroreflective: {
        name: "Элемент световозвращающий ЭС",
        fullname: "Элемент световозвращающий ЭС",
        weight: 0.33 // kg
      },
      bolt2070: {
        name: "Болт М20х70 ГОСТ 7798",
        fullname: "Болт М20х70 ГОСТ 7798",
        weight: 0.102 // kg
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

const shemasTY = {
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
        name: "11-ДО(КЖ) У1 3 СД-Ш12",
        fullname: "Стойка дорожная СД-Ш12",
        type: "КЖ",
        balksMultiply: 1,
        weight: 17.2,
        step: 1
      },
      {
        name: "11-ДО (КЖ) У1 4 СД-Ш12",
        fullname: "Стойка дорожная СД-Ш12",
        type: "КЖ",
        balksMultiply: 1,
        weight: 17.2,
        step: 2
      },
      {
        name: "11-ДО (КЖ) У2 4 СД-Ш12",
        fullname: "Стойка дорожная СД-Ш12",
        type: "КЖ",
        balksMultiply: 1,
        weight: 17.2,
        step: 1.5
      },
      {
        name: "11-ДО (КЖ) У2 4 СД-Ш14",
        fullname: "Стойка дорожная СД-Ш14",
        type: "КЖ",
        balksMultiply: 1,
        weight: 18.7,
        step: 2
      },
      {
        name: "11-ДО (КЖ) У3 4 СД-Ш14",
        fullname: "Стойка дорожная СД-Ш14",
        type: "КЖ",
        balksMultiply: 1,
        weight: 18.7,
        step: 1
      },
      {
        name: "11-ДО (КЖ) У3 4 СД-Ш16",
        fullname: "Стойка дорожная СД-Ш16",
        type: "КЖ",
        balksMultiply: 1,
        weight: 20,
        step: 2
      },
      {
        name: "11-ДО (КЖ) У3 4 СД-С100",
        fullname: "Стойка дорожная СД-С100",
        type: "КЖ",
        balksMultiply: 1,
        weight: 18.7,
        step: 2
      },
      {
        name: "11-ДО (КЖ) У4 3 СД-Ш16",
        fullname: "Стойка дорожная СД-Ш16",
        type: "КЖ",
        balksMultiply: 1,
        weight: 20,
        step: 1.5
      },
      {
        name: "11-ДО (КЖ) У4 3 СД-С100",
        fullname: "Стойка дорожная СД-С100",
        type: "КЖ",
        balksMultiply: 1,
        weight: 18.7,
        step: 1.5
      },
      {
        name: "11-ДО (КЖ) У4 4 СД-Ш14",
        fullname: "Стойка дорожная СД-Ш14",
        type: "КЖ",
        balksMultiply: 1,
        weight: 18.7,
        step: 1
      },
      {
        name: "11-ДО (КЖ) У4 3 СД-С120",
        fullname: "Стойка дорожная СД-С120",
        type: "КЖ",
        balksMultiply: 1,
        weight: 18.7,
        step: 1
      },
      {
        name: "11-ДО (КЖ) У4 3 СД-Ш16",
        fullname: "Стойка дорожная СД-Ш16",
        type: "КЖ",
        balksMultiply: 1,
        weight: 20,
        step: 2
      },
      {
        name: "11-ДО (КЖ) У4 3 СД-С100",
        fullname: "Стойка дорожная СД-С100",
        type: "КЖ",
        balksMultiply: 1,
        weight: 18.7,
        step: 2
      },
      {
        name: "11-ДД (КР) У4 3 СД-Ш14",
        fullname: "Стойка дорожная СД-Ш14",
        type: "КЖ",
        balksMultiply: 1,
        weight: 18.7,
        step: 1
      },
      {
        name: "11-ДД (КР) У4 3 СД-С100",
        fullname: "Стойка дорожная СД-С100",
        type: "КЖ",
        balksMultiply: 1,
        weight: 18.7,
        step: 1
      },
      {
        name: "11-ДД (КР) У4 3 СД-Ш16",
        fullname: "Стойка дорожная СД-Ш16",
        type: "КЖ",
        balksMultiply: 1,
        weight: 20,
        step: 2
      },
      {
        name: "11-ДД (КР) У4 4 СД-Ш14",
        fullname: "Стойка дорожная СД-Ш14",
        type: "КЖ",
        balksMultiply: 1,
        weight: 18.7,
        step: 1
      },
      {
        name: "11-ДО (КА) У1 3 СД-Ш12",
        fullname: "Стойка дорожная СД-Ш12",
        type: "КА",
        balksMultiply: 1,
        weight: 17.2,
        step: 3
      },
      {
        name: "11-ДО (КА) У2 3 СД-Ш12",
        fullname: "Стойка дорожная СД-Ш12",
        type: "КА",
        balksMultiply: 1,
        weight: 17.2,
        step: 2
      },
      {
        name: "11-ДО (КА) У2 3 СД-С120",
        fullname: "Стойка дорожная С-120",
        type: "КА",
        balksMultiply: 1,
        weight: 18.7,
        step: 2
      },
      {
        name: "11-ДО (КА) У2 3 СД-Ш16",
        fullname: "Стойка дорожная СД-Ш16",
        type: "КА",
        balksMultiply: 1,
        weight: 20,
        step: 3
      },
      {
        name: "11-ДО (КА) У3 3 СД-Ш12",
        fullname: "Стойка дорожная СД-Ш12",
        type: "КА",
        balksMultiply: 1,
        weight: 17.2,
        step: 1
      },
      {
        name: "11-ДО (КА) У3 3 СД-С120",
        fullname: "Стойка дорожная СД-С120",
        type: "КА",
        balksMultiply: 1,
        weight: 18.7,
        step: 1
      },
      {
        name: "11-ДО (КА) У3 4 СД-Ш12",
        fullname: "Стойка дорожная СД-Ш12",
        type: "КА",
        balksMultiply: 1,
        weight: 17.2,
        step: 2
      },
      {
        name: "11-ДО (КА) У3 4 СД-Ш16",
        fullname: "Стойка дорожная СД-Ш16",
        type: "КА",
        balksMultiply: 1,
        weight: 20,
        step: 3
      },
      {
        name: "11-ДО (КА) У4 4 СД-Ш12",
        fullname: "Стойка дорожная СД-Ш12",
        type: "КА",
        balksMultiply: 1,
        weight: 17.2,
        step: 1
      },
      {
        name: "11-ДО (КА) У4 4 СД-Ш16",
        fullname: "Стойка дорожная СД-Ш16",
        type: "КА",
        balksMultiply: 1,
        weight: 20,
        step: 2
      },
      {
        name: "11-ДО (УБ)(КА) У4 3 СД-Д12",
        fullname: "Стойка дорожная СД-Д12",
        type: "КА",
        balksMultiply: 1,
        weight: 18.7,
        step: 2
      },
      {
        name: "11-ДО (УБ)(КА) У4 4 СД-Д14",
        fullname: "Стойка дорожная СД-Д14",
        type: "КА",
        balksMultiply: 1,
        weight: 18.7,
        step: 2.5
      },
      {
        name: "11-ДО (УБ)(КА) У5 3 СД-Д12",
        fullname: "Стойка дорожная СД-Д12",
        type: "КА",
        balksMultiply: 2,
        weight: 18.7,
        step: 1.5
      },
      {
        name: "11-ДО (УБ)(КА) У5 3 СД-Ш16",
        fullname: "Стойка дорожная СД-Ш16",
        type: "КА",
        balksMultiply: 2,
        weight: 20,
        step: 2
      },
      {
        name: "11-ДО (УБ)(КА) У6 4 СД-Д12",
        fullname: "Стойка дорожная СД-Д12",
        type: "КА",
        balksMultiply: 2,
        weight: 18.7,
        step: 1.5
      },
      {
        name: "11-ДО (УБ)(КА) У6 4 СД-Ш14",
        fullname: "Стойка дорожная СД-Ш14",
        type: "КА",
        balksMultiply: 2,
        weight: 18.7,
        step: 1.5
      },
      {
        name: "11-ДО (УБ)(КА) У6 4 СД-Д14",
        fullname: "Стойка дорожная СД-Д14",
        type: "КА",
        balksMultiply: 2,
        weight: 18.7,
        step: 2
      },
      {
        name: "11-ДО (УБ)(КА) У7 4 СД-Ш16",
        fullname: "Стойка дорожная СД-Ш16",
        type: "КА",
        balksMultiply: 2,
        weight: 20,
        step: 2
      },
      {
        name: "11-ДО (УБ)(КА) У7 4 СД-Д12",
        fullname: "Стойка дорожная СД-Д12",
        type: "КА",
        balksMultiply: 2,
        weight: 18.7,
        step: 1
      },
      {
        name: "11-ДО (УБ)(КА) У7 4 СД-Ш14",
        fullname: "Стойка дорожная СД-Ш14",
        type: "КА",
        balksMultiply: 2,
        weight: 18.7,
        step: 1
      },
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
      }
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
        name: "11-ДД (КА) У1 3 СД-Ш12",
        fullname: "Стойка дорожная СД-Ш12",
        type: "КА",
        balksMultiply: 1,
        weight: 17.2,
        step: 4
      },
      {
        name: "11-ДД (КА) У2 3 СД-Ш12",
        fullname: "Стойка дорожная СД-Ш12",
        type: "КА",
        balksMultiply: 1,
        weight: 17.2,
        step: 3
      },
      {
        name: "11-ДД (КА) У3 3 СД-Ш12",
        fullname: "Стойка дорожная СД-Ш12",
        type: "КА",
        balksMultiply: 1,
        weight: 17.2,
        step: 2
      },
      {
        name: "11-ДД (КА) У4 3 СД-Ш16",
        fullname: "Стойка дорожная СД-Ш16",
        type: "КА",
        balksMultiply: 1,
        weight: 20,
        step: 3
      },
      {
        name: "11-ДД (КА) У4 4 СД-Ш14",
        fullname: "Стойка дорожная СД-Ш14",
        type: "КА",
        balksMultiply: 1,
        weight: 22.1,
        step: 2
      },
      {
        name: "11-ДД (УБ)(КА) У5 3 СД-Ш14",
        fullname: "Стойка дорожная СД-Ш14",
        type: "КА",
        balksMultiply: 2,
        weight: 22.1,
        step: 2
      },
      {
        name: "11-ДД (УБ)(КА) У5 3 СД-Ш16",
        fullname: "Стойка дорожная СД-Ш16",
        type: "КА",
        balksMultiply: 2,
        weight: 20,
        step: 3
      },
      {
        name: "11-ДД (УБ)(КА) У6 3 СД-Ш16",
        fullname: "Стойка дорожная СД-Ш16",
        type: "КА",
        balksMultiply: 2,
        weight: 20,
        step: 2
      },
      {
        name: "11-ДД (УБ)(КА) У7 4 СД-Ш16",
        fullname: "Стойка дорожная СД-Ш16",
        type: "КА",
        balksMultiply: 2,
        weight: 20,
        step: 1.5
      },
      {
        name: "11-ДД (УБ)(КА) У7 4 СД-Д16",
        fullname: "Стойка дорожная СД-Д16",
        type: "КА",
        balksMultiply: 2,
        weight: 22.1,
        step: 3
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
        weight: 0.241 // kg
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
        name: "11-МО У1 3 СМ-1",
        fullname: "Стойка мостовая СМ-1",
        balksMultiply: 1,
        weight: 16.3,
        step: 3
      },
      {
        name: "11-МО У1 4 СМ-1",
        fullname: "Стойка мостовая СМ-1",
        balksMultiply: 1,
        weight: 16.3,
        step: 2.5
      },
      {
        name: "11-МО У1 4 СМ-2",
        fullname: "Стойка мостовая СМ-2",
        balksMultiply: 1,
        weight: 16.3,
        step: 3
      },
      {
        name: "11-МО У1 4 СМ-2",
        fullname: "Стойка мостовая СМ-2",
        balksMultiply: 1,
        weight: 16.3,
        step: 4
      },
      {
        name: "11-МО У1 4 СМ-С120",
        fullname: "Стойка мостовая СМ-С120",
        balksMultiply: 1,
        weight: 16.3,
        step: 4
      },
      {
        name: "11-МО У2 3 СМ-1",
        fullname: "Стойка мостовая СМ-1",
        balksMultiply: 1,
        weight: 16.3,
        step: 1.5
      },
      {
        name: "11-МО У2 3 СМ-2",
        fullname: "Стойка мостовая СМ-2",
        balksMultiply: 1,
        weight: 16.3,
        step: 2
      },
      {
        name: "11-МО У2 3 СМ-120",
        fullname: "Стойка мостовая СМ-120",
        balksMultiply: 1,
        weight: 16.3,
        step: 2
      },
      {
        name: "11-МО У2 4 СМ-1",
        fullname: "Стойка мостовая СМ-1",
        balksMultiply: 1,
        weight: 16.3,
        step: 1.5
      },
      {
        name: "11-МО У2 4 СМ-2",
        fullname: "Стойка мостовая СМ-2",
        balksMultiply: 1,
        weight: 16.3,
        step: 2
      },
      {
        name: "11-МО У3 3 СМ-1",
        fullname: "Стойка мостовая СМ-1",
        balksMultiply: 1,
        weight: 16.3,
        step: 1
      },
      {
        name: "11-МО У3 3 СМ-2",
        fullname: "Стойка мостовая СМ-2",
        balksMultiply: 1,
        weight: 16.3,
        step: 1
      },
      {
        name: "11-МО У3 4 СМ-2",
        fullname: "Стойка мостовая СМ-2",
        balksMultiply: 1,
        weight: 16.3,
        step: 1.5
      },
      {
        name: "11-МО У4 4 СМ-2",
        fullname: "Стойка мостовая СМ-2",
        balksMultiply: 1,
        weight: 16.3,
        step: 1
      },
      {
        name: "11-МО У4 4 СМ-3",
        fullname: "Стойка мостовая СМ-3",
        balksMultiply: 1,
        weight: 21,
        step: 1.5
      },
      {
        name: "11-МД У4 4 СМ-1",
        fullname: "Стойка мостовая СМ-1",
        balksMultiply: 1,
        weight: 16.3,
        step: 1
      },
      {
        name: "11-МД У4 4 СМ-2",
        fullname: "Стойка мостовая СМ-2",
        balksMultiply: 1,
        weight: 16.3,
        step: 1.5
      },
      {
        name: "11-МД У4 4 СМ-3",
        fullname: "Стойка мостовая СМ-3",
        balksMultiply: 1,
        weight: 21,
        step: 2
      },
      {
        name: "11-МО (УБ) У2 3 СМ-7",
        fullname: "Стойка мостовая СМ-7",
        balksMultiply: 1,
        weight: 16.3,
        step: 3
      },
      {
        name: "11-МО (УБ) У2 3 СМ-8",
        fullname: "Стойка мостовая СМ-8",
        balksMultiply: 1,
        weight: 16.3,
        step: 4
      },
      {
        name: "11-МО (УБ) У3 3 СМ-7",
        fullname: "Стойка мостовая СМ-7",
        balksMultiply: 1,
        weight: 16.3,
        step: 2
      },
      {
        name: "11-МО (УБ) У3 3 СМ-8",
        fullname: "Стойка мостовая СМ-8",
        balksMultiply: 1,
        weight: 16.3,
        step: 2.5
      },
      {
        name: "11-МО (УБ) У4 4 СМ-7",
        fullname: "Стойка мостовая СМ-7",
        balksMultiply: 1,
        weight: 16.3,
        step: 1.5
      },
      {
        name: "11-МО (УБ) У4 4 СМ-8",
        fullname: "Стойка мостовая СМ-8",
        balksMultiply: 1,
        weight: 16.3,
        step: 2
      },
      {
        name: "11-МО (УБ) У5 4 СМ-9",
        fullname: "Стойка мостовая СМ-9",
        balksMultiply: 2,
        weight: 16.3,
        step: 2
      },
      {
        name: "11-МО (УБ) У6 4 СМ-9",
        fullname: "Стойка мостовая СМ-9",
        balksMultiply: 2,
        weight: 16.3,
        step: 1.5
      },
      {
        name: "11-МО (УБ) У7 4 СМ-9",
        fullname: "Стойка мостовая СМ-9",
        balksMultiply: 2,
        weight: 16.3,
        step: 1.5
      },
      {
        name: "11-МД (УБ) У5 4 СМ-7",
        fullname: "Стойка мостовая СМ-7",
        balksMultiply: 2,
        weight: 16.3,
        step: 2
      },
      {
        name: "11-МД (УБ) У6 4 СМ-8",
        fullname: "Стойка мостовая СМ-8",
        balksMultiply: 2,
        weight: 16.3,
        step: 1.5
      },
      {
        name: "15-МО (К) У1 3 СМ-4",
        fullname: "Стойка мостовая СМ-4",
        balksMultiply: 1,
        weight: 26,
        step: 2
      },
      {
        name: "15-МО (К) У1 4 СМ-5",
        fullname: "Стойка мостовая СМ-5",
        balksMultiply: 1,
        weight: 16.3,
        step: 3
      },
      {
        name: "15-МО (К) У2 3 СМ-4",
        fullname: "Стойка мостовая СМ-4",
        balksMultiply: 1,
        weight: 26,
        step: 1
      },
      {
        name: "15-МО (К) У2 3 СМ-5",
        fullname: "Стойка мостовая СМ-5",
        balksMultiply: 1,
        weight: 16.3,
        step: 1.5
      },
      {
        name: "15-МО (К) У2 4 СМ-6",
        fullname: "Стойка мостовая СМ-6",
        balksMultiply: 1,
        weight: 16.3,
        step: 2
      },
      {
        name: "15-МО (К) У3 4 СМ-6",
        fullname: "Стойка мостовая СМ-6",
        balksMultiply: 1,
        weight: 16.3,
        step: 1.5
      },
      {
        name: "15-МО (К) У1 3 СМ-4",
        fullname: "Стойка мостовая СМ-4",
        balksMultiply: 1,
        weight: 26,
        step: 2
      },
      {
        name: "15-МО (К) У2 3 СМ-4",
        fullname: "Стойка мостовая СМ-4",
        balksMultiply: 1,
        weight: 26,
        step: 1
      },
      {
        name: "15-МО (К) У2 3 СМ-4",
        fullname: "Стойка мостовая СМ-4",
        balksMultiply: 1,
        weight: 26,
        step: 1.5
      },
      {
        name: "15-МО (К) У3 4 СМ-5",
        fullname: "Стойка мостовая СМ-4",
        balksMultiply: 1,
        weight: 26,
        step: 1
      },
      {
        name: "15-МО (К) У3 4 СМ-6",
        fullname: "Стойка мостовая СМ-6",
        balksMultiply: 1,
        weight: 16.3,
        step: 1.5
      },
      {
        name: "15-МО (К) У4 4 СМ-5",
        fullname: "Стойка мостовая СМ-4",
        balksMultiply: 1,
        weight: 26,
        step: 1
      },
      {
        name: "15-МО (К) У4 4 СМ-6",
        fullname: "Стойка мостовая СМ-6",
        balksMultiply: 1,
        weight: 16.3,
        step: 1.5
      },
      {
        name: "15-МО (К) У5 4 СМ-6",
        fullname: "Стойка мостовая СМ-6",
        balksMultiply: 2,
        weight: 16.3,
        step: 1
      },
      {
        name: "15-МД (К) У3 4 СМ-4",
        fullname: "Стойка мостовая СМ-4",
        balksMultiply: 1,
        weight: 26,
        step: 1
      },
      {
        name: "15-МД (К) У3 4 СМ-5",
        fullname: "Стойка мостовая СМ-5",
        balksMultiply: 1,
        weight: 16.3,
        step: 1.5
      },
      {
        name: "15-МД (К) У3 4 СМ-6",
        fullname: "Стойка мостовая СМ-6",
        balksMultiply: 1,
        weight: 16.3,
        step: 2
      },
      {
        name: "15-МД (К) У4 4 СМ-6",
        fullname: "Стойка мостовая СМ-6",
        balksMultiply: 1,
        weight: 16.3,
        step: 1
      },
      {
        name: "15-МД (К) У3 4 СМ-5",
        fullname: "Стойка мостовая СМ-5",
        balksMultiply: 1,
        weight: 16.3,
        step: 1.5
      },
      {
        name: "15-МД (К) У3 4 СМ-6",
        fullname: "Стойка мостовая СМ-6",
        balksMultiply: 1,
        weight: 16.3,
        step: 2
      },
      {
        name: "15-МД (К) У4 4 СМ-5",
        fullname: "Стойка мостовая СМ-5",
        balksMultiply: 1,
        weight: 16.3,
        step: 1
      },
      {
        name: "15-МД (К) У4 4 СМ-6",
        fullname: "Стойка мостовая СМ-6",
        balksMultiply: 1,
        weight: 16.3,
        step: 1.5
      },
      {
        name: "15-МД (К) У4 3 СМ-4",
        fullname: "Стойка мостовая СМ-4",
        balksMultiply: 1,
        weight: 26,
        step: 1
      },
      {
        name: "15-МД (К) У4 3 СМ-5",
        fullname: "Стойка мостовая СМ-5",
        balksMultiply: 1,
        weight: 16.3,
        step: 1.5
      },
      {
        name: "15-МД (К) У5 3 СМ-5",
        fullname: "Стойка мостовая СМ-5",
        balksMultiply: 2,
        weight: 16.3,
        step: 1
      },
      {
        name: "15-МД (К) У5 3 СМ-6",
        fullname: "Стойка мостовая СМ-6",
        balksMultiply: 2,
        weight: 16.3,
        step: 1.5
      },
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
      }
    ],
    products: {
      retroreflective: {
        name: "Элемент световозвращающий ЭС",
        fullname: "Элемент световозвращающий ЭС",
        weight: 0.33 // kg
      },
      bolt2070: {
        name: "Болт М20х70 ГОСТ 7798",
        fullname: "Болт М20х70 ГОСТ 7798",
        weight: 0.102 // kg
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
    lenghtWorkSections: 0,
    amountWorkSections: 1,
    selectBalk: {},
    selectStrut: {},
    currentSсheme: {},
    weight: 0,
    schemes: shemasGOST,
    types: ["ГОСТ", "ТУ"],
    selectType: ""
  },
  methods: {
    clearAll() {
      this.currentProduct = {};
      this.currentSсheme = {};
      this.lenghtWorkSections = 0;
      this.amountWorkSections = 1;
      this.weight = 0;
    },

    selectSchemas(type) {
      switch (type) {
        case "ГОСТ":
          this.schemes = shemasGOST;
          this.selectType = "ГОСТ";
          break;
        case "ТУ":
          this.schemes = shemasTY;
          this.selectType = "ТУ";
          break;
        default:
          this.schemes = shemasGOST;
          this.selectType = "ГОСТ";
          break;
      }
      this.clearAll();
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
      });
      return braket;
    },

    consumables(complect, balksCount) {
      switch (this.currentSсheme.name) {
        case "Односторонние дорожные ограждения":
          // односторонка ====================================
          // однаярустная
          // болты 45 для односторонки КЖ КН КА
          // балки * 8 + консоли + 8 (крайняя)
          // болты 40 для односторонки КЖ = консоль * 1
          // болты 40 для односторонки КН КА = консоль * 2
          // гайки и шайбы = все болты сложить
          // прямоугольные шайбы = болты 40
          if (this.selectStrut.balksMultiply === 1) {
            this.currentSсheme.products.bolt1645.count =
              balksCount * 8 + complect.struts.count + 8;
            if (this.selectStrut.type === "КЖ") {
              this.currentSсheme.products.bolt1640.count =
                complect.struts.count * 1;
            } else {
              this.currentSсheme.products.bolt1640.count =
                complect.struts.count * 2;
            }
            this.currentSсheme.products.bolt1640.count =
              complect.struts.count * 1;
            this.currentSсheme.products.strew.count =
              this.currentSсheme.products.bolt1645.count +
              this.currentSсheme.products.bolt1640.count;
            this.currentSсheme.products.spacer.count =
              this.currentSсheme.products.bolt1645.count +
              this.currentSсheme.products.bolt1640.count;
            this.currentSсheme.products.spacerSquare.count = this.currentSсheme.products.bolt1640.count;
          } else {
            if (this.selectStrut.type === "КЖ") {
              this.currentSсheme.products.bolt1645.count =
                balksCount * 8 + complect.struts.count + 8 * 2;
              this.currentSсheme.products.bolt1640.count =
                complect.struts.count * 1;
              this.currentSсheme.products.spacerSquare.count = this.currentSсheme.products.bolt1640.count;
            } else {
              this.currentSсheme.products.bolt1645.count =
                balksCount * 8 + complect.struts.count * 4 + 8 * 2;
              this.currentSсheme.products.bolt1640.count =
                complect.struts.count * 4;
              this.currentSсheme.products.spacerSquare.count = 0;
            }
            this.currentSсheme.products.strew.count =
              this.currentSсheme.products.bolt1645.count +
              this.currentSсheme.products.bolt1640.count;
            this.currentSсheme.products.spacer.count =
              this.currentSсheme.products.bolt1645.count +
              this.currentSсheme.products.bolt1640.count;
          }

          break;
        case "Двустороннее дорожное ограждение":
          // Для двусторонки ====================================
          // КР14 КР16
          // болт 45 = балки * 8 + консоли + (8 * 2)
          // болт 40 = консоль * 3
          // гайки и шайбы = все болты сложить
          // прямоугольные шайбы = стойки * 2

          // Для двусторонки КА
          // болт 45 = балки * 8 + консоли * 2 (8 * 4)
          // болт 40 = консоль * 2

          // двуяростная КА (кж не существует)
          // болты 45 для односторонки КА
          // балки * 8 + консоли * 2 + 8 * 2 (крайняя)
          // болты 40 для односторонки КЖ = консоль * 2
          // гайки и шайбы = все болты сложить
          // прямоугольные шайбы = болты 40
          if (this.selectStrut.balksMultiply === 1) {
            if (this.selectStrut.type === "КА") {
              this.currentSсheme.products.bolt1645.count =
                balksCount * 8 + complect.struts.count + 8 * 4;
              this.currentSсheme.products.bolt1640.count =
                complect.struts.count * 2;
            } else {
              this.currentSсheme.products.bolt1645.count =
                balksCount * 8 + complect.struts.count + 8 * 2;
              this.currentSсheme.products.bolt1640.count =
                complect.struts.count * 3;
            }

            this.currentSсheme.products.strew.count =
              this.currentSсheme.products.bolt1645.count +
              this.currentSсheme.products.bolt1640.count;
            this.currentSсheme.products.spacer.count =
              this.currentSсheme.products.bolt1645.count +
              this.currentSсheme.products.bolt1640.count;
            this.currentSсheme.products.spacerSquare.count =
              complect.struts.count * 2;
          } else {
            if (this.selectStrut.type === "КА") {
              this.currentSсheme.products.bolt1645.count =
                balksCount * 8 + complect.struts.count * 2 + 8 * 4;
              this.currentSсheme.products.bolt1640.count =
                complect.struts.count * 2;
            } else {
              this.currentSсheme.products.bolt1645.count =
                balksCount * 8 + complect.struts.count * 2 + 8 * 2;
              this.currentSсheme.products.bolt1640.count =
                complect.struts.count * 3;
            }

            this.currentSсheme.products.strew.count =
              this.currentSсheme.products.bolt1645.count +
              this.currentSсheme.products.bolt1640.count;
            this.currentSсheme.products.spacer.count =
              this.currentSсheme.products.bolt1645.count +
              this.currentSсheme.products.bolt1640.count;
            this.currentSсheme.products.spacerSquare.count =
              complect.struts.count * 2;
          }
          break;
        case "Мостовое ограждение":
          // мостовое   =========================================
          // CM1 CM2 CM7 CM8 КА
          // болты 45 для односторонки КЖ КН КА
          // балки * 8 + консоли + 8 (крайняя)
          // болты 40 для односторонки КН КА = консоль * 2
          // болты 70 для односторонки КН КА = консоль * 4
          // гайки и шайбы = все болты сложить
          // прямоугольные шайбы = болты 40 + болты 45
          break;
      }
    }
  },
  computed: {
    currentProduct() {
      let complect = {};
      let balksCount = 0;

      this.calcBalks().forEach((balk, index) => {
        complect["balk" + index] = balk;
        balksCount += balk.count;
      });

      complect.struts = this.calcStrut();
      complect.bracket = this.calcBrackets(complect.struts);
      complect.bracket.count =
        complect.struts.count * complect.struts.balksMultiply;
      this.consumables(complect, balksCount);

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

      this.weight = 0;
      for (let [key, value] of Object.entries(complect)) {
        this.weight += value.count * value.weight;
      }

      console.log(complect);
      return complect;
    }
  },
  created: function() {
    // `this` указывает на экземпляр vm
  }
});
