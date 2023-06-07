# react_training_project
С помощью команды ``npm ci`` установите зависимости репозитория.

Ход работы:

1) Компонент Cart был разделен на 4 компонента: Control, Menu, Preview и TextContent. Данное разделение помогает наглядно видеть, что именно входит в новостную карту.

2) В компонентах Control и TextContent имеются вложенные блоки под кнопки, текст и изображения. Было бы более логичным разделить данные компоненты на подкомпоненты, чтобы сократить код и быстро ориентироваться по общему компаненту.

3) В некоторых компонентах было использовано обращение к children. Данный подход позволяет передавать в компонент любой текст, изображение и т.д. 

В данном блоке я не использовала children для передачи изображений. Лучше не разделять блоки и не перемещать стили из одного компонента в другой. Это поможет коллеге по работе быстрее ориентироваться в коде и не тратить время на поиск стилей по всем компонентам.