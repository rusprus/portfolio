function asset(path) {
  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\//, '')}`
}

export const shelves = [
  { id: 'all', label: 'Все' },
  { id: 'vehicle', label: 'Аппарат целиком' },
  { id: 'cad', label: '3D и печать' },
  { id: 'electronics', label: 'Электрика' },
  { id: 'software', label: 'Софт и связь' },
  { id: 'vision', label: 'Зрение и навигация' },
  { id: 'sim', label: 'Симуляция' },
]

export const projects = [
  {
    id: 'oceanica',
    index: '01',
    title: 'Oceanica',
    lede: 'Учебный подводный аппарат: геометрия корпуса под печать и схема борта с четырьмя движителями.',
    shelves: ['vehicle', 'cad', 'electronics'],
    featured: true,
    depth: 'full',
    cover: asset('media/oceanica/preview_iso.png'),
    coverAlt: 'Изометрия модели Oceanica в FreeCAD',
    summary:
      'По фотографиям готового аппарата собрана модель в FreeCAD: покупная труба корпуса и печатная оснастка. Рядом схема KiCad — ESP32, Ethernet и четыре регулятора хода.',
    task: 'Нужен комплект, который можно напечатать и собрать вокруг покупной трубы, и принципиальная схема силовой части с бортовым контроллером. На исходных фотографиях нет масштабной линейки, поэтому корпус принят как труба HTEM DN/OD 75×1.9, отрез 200 мм.',
    result:
      'Модель аппарата с фланцами, крышками, хомутами, стрингерами, кронштейнами двигателей и винтами. Печатные детали рассчитаны под сопло 0.4 мм. Схема: ESP32-WROOM-32, Ethernet W5500, четыре ESC 30A на двигатели 2212, питание от 3S LiPo.',
    stages: [
      {
        title: 'Образец',
        text: 'Геометрия снята с фотографий учебного аппарата. Кадры в репозитории — исходный образец, по нему восстановлены пропорции корпуса, иллюминатора и подвеса двигателей.',
      },
      {
        title: '3D',
        text: 'Сборка в FreeCAD. Труба — покупная деталь. Крышки, кольцо иллюминатора, хомуты и рама — модель под печать. Уплотнение шнуром Ø3.53, крышка на восьми винтах M4.',
      },
      {
        title: 'Печать',
        text: 'Набор STL: фланцы, крышки носа и кормы, стрингеры, лыжи, обечайки горизонтальных и вертикальных двигателей, кронштейны, винты прямого и обратного вращения.',
      },
      {
        title: 'Электрика',
        text: 'Схема KiCad. Борт: ESP32-WROOM-32 и W5500. Сила: аккумулятор 3S, предохранитель, четыре ESC 30A. Питание логики — LM2596 на 5 В и AMS1117 на 3.3 В, уровни согласует 74AHCT125.',
      },
      {
        title: 'Дальше по цепочке',
        text: 'Пульт, мост MAVLink и прошивка двигателя разобраны отдельными работами: Roll drone и Driver for ESC. На этой странице — механика и схема.',
      },
    ],
    stack: [
      'FreeCAD',
      'Python',
      'STL',
      'KiCad',
      'ESP32-WROOM-32',
      'W5500',
      'ESC 30A',
      '3S LiPo',
    ],
    parts: [
      ['01', 'Фланец фиксирующий'],
      ['02', 'Крышка кормы'],
      ['03', 'Кольцо иллюминатора'],
      ['04', 'Хомут'],
      ['05', 'Стрингер'],
      ['06', 'Лыжа'],
      ['07', 'Обечайка горизонтального двигателя'],
      ['08', 'Обечайка вертикального двигателя'],
      ['09', 'Кронштейн и половинка кронштейна'],
      ['10', 'Винт'],
      ['14', 'Держатель горизонтальный'],
      ['15', 'Крышка носа'],
      ['16', 'Винт левого вращения'],
    ],
    media: [
      {
        src: asset('media/oceanica/preview_iso.png'),
        alt: 'Изометрия модели Oceanica',
        caption: 'Сборка в FreeCAD: труба, крышки, рама и четыре двигателя.',
      },
      {
        src: asset('media/oceanica/preview_side.png'),
        alt: 'Вид на носовую крышку',
        caption: 'Носовая крышка и иллюминатор.',
      },
      {
        src: asset('media/oceanica/preview_front.png'),
        alt: 'Вид модели сбоку',
        caption: 'Боковой вид. Корпус — отрез трубы 200 мм.',
      },
      {
        src: asset('media/oceanica/preview_top.png'),
        alt: 'Вид модели сверху',
        caption: 'Сверху: стрингеры и вертикальные двигатели.',
      },
      {
        src: asset('media/oceanica/reference.jpg'),
        alt: 'Фотография исходного учебного аппарата',
        caption: 'Исходный образец. Модель собрана по таким фотографиям, без масштабной линейки.',
      },
      {
        src: asset('media/oceanica/schematic.png'),
        alt: 'Принципиальная схема Oceanica',
        caption: 'Схема: ESP32, Ethernet W5500, питание и четыре ESC.',
      },
    ],
  },
  {
    id: 'roll-dron',
    index: '02',
    title: 'Roll drone',
    lede: 'Управление подводным аппаратом: две платы ESP32, Ethernet и телеметрия MAVLink.',
    shelves: ['vehicle', 'software', 'electronics'],
    featured: true,
    depth: 'brief',
    summary:
      'WT32-ETH01 принимает MAVLink по TCP и отдаёт его по UART на ESP32 с датчиками. Веб-пульт на Vue по-прежнему говорит JSON, прокси переводит его в MAVLink.',
  },
  {
    id: 'esc',
    index: '03',
    title: 'Driver for ESC',
    lede: 'Джойстик в браузере крутит подводный двигатель через регулятор хода.',
    shelves: ['electronics', 'software'],
    featured: false,
    depth: 'brief',
    summary:
      'Vue-пульт, Python-мост pymavlink и Arduino Nano выдают ШИМ на ESC 30A. Нейтраль 1500 мкс, реверс без перепрошивки регулятора в другой протокол.',
  },
  {
    id: 'starnav',
    index: '04',
    title: 'StarNav',
    lede: 'Астронавигация: кадр, наблюдения светил и обсервованное место.',
    shelves: ['vision', 'software'],
    featured: true,
    depth: 'brief',
    summary:
      'Конвейер от источника кадра через зрение к линиям положения и fix. В репозитории эмулятор с интерфейсом и агент, который может работать на Raspberry Pi.',
  },
  {
    id: 'sonogram',
    index: '05',
    title: 'Sonogram',
    lede: 'Склейка фрагментов сонограммы в строки и общую мозаику.',
    shelves: ['vision'],
    featured: false,
    depth: 'brief',
    summary:
      'Кадры FRAME_{row}_{col}.png собираются в горизонтальные полосы, затем в одно полотно. Исходный набор — 28 строк на 10 колонок.',
  },
  {
    id: 'stonefish',
    index: '06',
    title: 'Stonefish',
    lede: 'Симуляция подводного аппарата класса «Клавесин» на обычном процессоре.',
    shelves: ['sim', 'vehicle', 'software'],
    featured: false,
    depth: 'brief',
    summary:
      'Stonefish и ROS 2 Jazzy в Docker без видеокарты. Корпус, движители, датчики, контур PID и сравнение с обученным регулятором.',
  },
]

export function projectById(id) {
  return projects.find((item) => item.id === id)
}

export function shelfLabel(id) {
  return shelves.find((item) => item.id === id)?.label ?? id
}
