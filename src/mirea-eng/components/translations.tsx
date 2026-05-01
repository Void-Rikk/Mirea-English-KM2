import { useState } from "react";

const translations = "1. access point – точка доступа\n" +
    "2. access time (seek time) – время доступа\n" +
    "3. addition – сложение\n" +
    "4. adware – рекламное ПО\n" +
    "5. AI (artificial intelligence) – искусственный интеллект\n" +
    "6. analog and digital signals – аналоговый, цифровой сигналы\n" +
    "7. application code – код приложения\n" +
    "8. application/ app – приложение\n" +
    "9. AR (augmented reality) – дополненная реальность\n" +
    "10. ALU (Arithmetic Logic Unit) – арифметико-логическое устройство\n" +
    "11. artificial neural network – искусственная нейронная сеть, ИНС\n" +
    "12. аssembler – ассемблер\n" +
    "13. assembly languages – языки ассемблера, низкоуровневые языки, близкие к ассемблеру\n" +
    "14. asynchronous transmission – асинхронная передача данных\n" +
    "15. attenuation of a signal – затухание (ослабление) сигнала\n" +
    "16. backbone – магистраль\n" +
    "17. backdoor – лазейка в системе безопасности\n" +
    "18. backend development – разработка серверных компонентов приложения\n" +
    "19. background templates – фоновые шаблоны\n" +
    "20. backpropagation – алгоритм обратного распространения ошибки\n" +
    "21. backup – резервное копирование\n" +
    "22. bandwidth – пропускная способность (ширина полосы пропускания)\n" +
    "23. BIOS (Basic Input/Output System) – базовая система ввода/вывода\n" +
    "24. battery pack – аккумуляторная батарея\n" +
    "25. binary code – двоичный код\n" +
    "26. biometric security devices – биометрические средства защиты\n" +
    "27. bridge – мост\n" +
    "28. broadband connection – широкополосный интернет\n" +
    "29. built-in webcam – встроенная камера\n" +
    "30. bus – шина\n" +
    "31. bus width – разрядность шины\n" +
    "32. bus topology – топология шины\n" +
    "33. cache coherency – когерентность кэша\n" +
    "34. cache hit – попадание в кэш\n" +
    "35. cache miss – промах кэша\n" +
    "36. cache line size – размер кэш-строки\n" +
    "37. calculations – вычисления\n" +
    "38. capacitor – конденсатор (электронный компонент, накапливающий заряд)\n" +
    "39. cellular connection – сотовая связь\n" +
    "40. CPU (Central Processing Unit) – центральный процессор\n" +
    "41. circuit board – печатная плата\n" +
    "42. client-server architecture – архитектура клиент-сервер\n" +
    "43. clock speed – тактовая частота\n" +
    "44. cloud computing – облачные вычисления\n" +
    "45. coaxial cable – коаксиальный кабель\n" +
    "46. compatible – совместимый\n" +
    "47. compiler – компилятор\n" +
    "48. consistent data – согласованные данные\n" +
    "49. control unit – блок управления\n" +
    "50. cooperative multitasking – кооперативная многозадачность; совместная многозадачность, невытесняющая многозадачность\n" +
    "51. copper cable – медный провод\n" +
    "52. crawler-based search engine – автоматизированная поисковая система\n" +
    "53. crawling – поиск (сканирование информации)\n" +
    "54. CSS (Cascading Style Sheets) – каскадные таблицы стилей\n" +
    "55. data link layer – канальный уровень\n" +
    "56. data transmission – передача данных\n" +
    "57. datagram packet switching – коммутация дейтаграммных пакетов\n" +
    "58. DDoS attack (Distributed Denial of Service) – распределённая атака на отказ в обслуживании\n" +
    "59. debugging – отладка\n" +
    "60. dedicated line – выделенная линия\n" +
    "61. default settings – настройки по умолчанию (стандартные)\n" +
    "62. delay/ latency – задержка (передачи сигнала)\n" +
    "63. desktop PC – стационарный компьютер\n" +
    "64. detachable keyboard – съемная клавиатура\n" +
    "65. dial-up connection – коммутируемое соединение\n" +
    "66. differential backup – частичное копирование, разностное резервное копирование\n" +
    "67. digital signal – цифровой сигнал\n" +
    "68. DSL (Digital Subscriber Line) – цифровая абонентская линия\n" +
    "69. directory – каталог, папка\n" +
    "70. distortion of a signal – искажение сигнала (расхождение)\n" +
    "71. division – деление\n" +
    "72. download speed – скорость скачивания (загрузки)\n" +
    "73. encapsulation – инкапсуляция (for OOP)\n" +
    "74. encryption – шифрование\n" +
    "75. energy consumption – энергопотребление\n" +
    "76. erasable – перезаписываемый, допускающий возможность стирания\n" +
    "77. executable file – исполняемый файл\n" +
    "78. expansion card – карта расширения\n" +
    "79. expansion slots – слоты расширения\n" +
    "80. external hard disk drive (HDD) – внешний жёсткий диск\n" +
    "81. feature – характеристика, особенность\n" +
    "82. fiber-optic cables – оптоволоконный кабель\n" +
    "83. firewall – брэндмауэр, межсетевой экран\n" +
    "84. firmware – прошивка\n" +
    "85. flash drive – флэшка\n" +
    "86. floating gate transistor – транзистор с плавающим затвором\n" +
    "87. floppy disk – дискета\n" +
    "88. font – шрифт\n" +
    "89. footer – нижний колонтитул\n" +
    "90. formatting – форматирование\n" +
    "91. freeware – бесплатное ПО\n" +
    "92. front side bus – системная (фронтальная) шина\n" +
    "93. FTP (File Transfer Protocol) – протокол передачи данных\n" +
    "94. fully connected neural networks – полносвязные нейросети\n" +
    "95. gateway – шлюз, межсетевой шлюз сетевое устройство или компьютер\n" +
    "96. geostationary satellite – геостационарный спутник\n" +
    "97. GUI (Graphical User Interface) – графический интерфейс пользователя\n" +
    "98. handheld, palmtop, portable devices – портативные устройства\n" +
    "99. hardware – аппаратное техническое обеспечение\n" +
    "100. header – верхний колонтитул\n" +
    "101. head crash – авария головки (поломка магнитной головки у HDD)\n" +
    "102. headphones – наушники\n" +
    "103. help-desk troubleshooter (technician) – сотрудник службы технической поддержки\n" +
    "104. heuristic scanning – эвристическое сканирование\n" +
    "105. hidden units – скрытые элементы\n" +
    "106. high level language – высокоуровневый язык\n" +
    "107. high-speed Internet connection – высокоскоростное интернет-соединение\n" +
    "108. host-based firewall – межсетевой экран узлов (software)\n" +
    "109. hot spot – общая точка доступа\n" +
    "110. HTML (Hypertext Markup Language) – язык разметки гипертекста\n" +
    "111. HTTP (Hyper Text Transfer Protocol) – протокол гипертекстовой передачи\n" +
    "112. hub – концентратор или повторитель\n" +
    "113. human-powered directory – веб-каталог\n" +
    "114. hyperlinks – гиперссылки\n" +
    "115. incremental backup – выборочное копирование\n" +
    "116. indexing – индексирование\n" +
    "117. indent – отступ\n" +
    "118. input/ output device – устройство ввода/вывода информации\n" +
    "119. IR (Instruction Register) – регистр инструкций\n" +
    "120. integrated circuits – микросхема, интегральная схема\n" +
    "121. interconnected nodes – взаимосвязанные узлы\n" +
    "122. internal/external storage device – внутреннее/внешнее устройство хранения\n" +
    "123. Internet access – доступ к интернету\n" +
    "124. interpreter – интерпретатор\n" +
    "125. inheritance – наследование\n" +
    "126. IoT (the Internet of Things) – интернет вещей\n" +
    "127. jump command – команда перехода\n" +
    "128. kernel – ядро\n" +
    "129. key features – основные характеристики, отличительные признаки\n" +
    "130. keylogger – клавиатурный шпион\n" +
    "131. laptop – ноутбук\n" +
    "132. laser beam – лазерный луч\n" +
    "133. layout – расположение, макет (сайта)\n" +
    "134. line spacing – межстрочный интервал\n" +
    "135. LAN (Local Area Network) – локальная сеть\n" +
    "136. LCD (liquid crystal display) – жидкокристаллический дисплей\n" +
    "137. lowercase – нижный регистр\n" +
    "138. low-level language – низкоуровневый язык\n" +
    "139. machine learning – машинное обучение\n" +
    "140. magnetic tape – магнитная лента\n" +
    "141. mainframe – мейнфрейм, мощный сервер\n" +
    "142. make a backup – сделать резервную копию\n" +
    "143. malware – вредоносное ПО\n" +
    "144. MAN (Metropolitan Area Network) – городская сеть\n" +
    "145. margins – поля\n" +
    "146. markup tags – теги разметки\n" +
    "147. memory allocation – выделение памяти, распределение памяти\n" +
    "148. memory capacity – объём памяти\n" +
    "149. memory card – карта памяти\n" +
    "150. mesh topology – топология сетки, ячеистая топология, многосвязная сеть\n" +
    "151. Meta-Search engine – метапоисковая система\n" +
    "152. misdirection routine – процедура дезориентации\n" +
    "153. multi-core CPU – многоядерный процессор\n" +
    "154. multiplication – умножение\n" +
    "155. multi-tasking – многозадачный\n" +
    "156. nested folders – вложенные папки\n" +
    "157. network security – безопасность в сети\n" +
    "158. network topology (ring, star, bus, tree) – топология сети\n" +
    "159. network-based firewall – сетевой брандмауэр (combination of software and hardware)\n" +
    "160. neural network – нейронная сеть\n" +
    "161. node – узел, устройство подключенное к компьютерной сети\n" +
    "162. non-volatile – энергонезависимый\n" +
    "163. Off-Page SEO – внешняя поисковая оптимизация\n" +
    "164. office suite (package) – пакет офисных приложений\n" +
    "165. On-Page SEO – поисковая оптимизация страницы\n" +
    "166. open-source software – программы с открытым исходным кодом\n" +
    "167. organic results – естественные результаты (работы поисковой машины, противопоставляются \"спонсированным\" (оплаченным рекламодателем) результатам\n" +
    "168. OSI model (Open Systems Interconnection) – модель взаимодействия открытых систем\n" +
    "169. output unit – блок вывода\n" +
    "170. overwriting virus – вирус перезаписи\n" +
    "171. packet switching – пакетная коммутация (передача данных)\n" +
    "172. page source code – исходный код страницы\n" +
    "173. particle – частица\n" +
    "174. partition – раздел на жёстком диске\n" +
    "175. payload – полезная нагрузка\n" +
    "176. PC (Program Counter) – счётчик команд, программный счетчик\n" +
    "177. peer-to-peer architecture – одноранговая сеть\n" +
    "178. performance – производительность\n" +
    "179. peripherals – подключаемое оборудование\n" +
    "180. PAN (Personal Area Network) – персональная сеть\n" +
    "181. pervasive computing – повсеместные вычисления\n" +
    "182. phishing – фишинг, интернет-мошенничество с целью хищения личных данных, выуживание паролей\n" +
    "183. piggybacking – несанкционированное проникновение вслед за зарегистрированным пользователем (напр., проникновение в сеть )\n" +
    "184. pit – ячейка памяти у оптических дисков\n" +
    "185. plaintext – открытый текст, незашифрованный текст\n" +
    "186. platter – пластина жёсткого диска\n" +
    "187. power-supply unit – блок питания\n" +
    "188. preemptive multitasking – вытесняющая многозадачность, прерывающая программа (программа, вытесняющая из памяти другую программу в соответствии с приоритетом)\n" +
    "189. primary storage – основное запоминающее устройство\n" +
    "190. proprietary software – закрытое программное обеспечение (защищённое) (в отличие от программного обеспечения, являющегося открытым (open-source software) )\n" +
    "191. protocol – протокол в общем случае, набор правил\n" +
    "192. punched card – перфокарта\n" +
    "193. RAM (Random Access Memory) – оперативное запоминающее устройство (ОЗУ)\n" +
    "194. ranking – ранжирование (у автоматизированного поисковика)\n" +
    "195. ransomware – программы-вымогатели\n" +
    "196. raw data – необработанные данные\n" +
    "197. ROM (Read Only Memory) – постоянное запоминающее устройство (ПЗУ)\n" +
    "198. read-write head – головка чтения/записи\n" +
    "199. real-time OS – операционная система, управляющая обработкой данных в реальном времени; операционная система реального времени\n" +
    "200. registers (IR, PC) – регистры процессора\n" +
    "201. remote access – удалённый доступ\n" +
    "202. reproduction routine – процедура самокопирования/ воспроизводства\n" +
    "203. request/ query/ search string – запрос\n" +
    "204. ring topology – кольцевая топология\n" +
    "205. robotics – робототехника\n" +
    "206. router – маршрутизатор\n" +
    "207. satellite connection – спутниковая связь\n" +
    "208. satellite Internet access – доступ к спутниковому интернету\n" +
    "209. search engine – поисковая система\n" +
    "210. search index – база данных у поисковика\n" +
    "211. search box/ search bar – строка поиска\n" +
    "212. security measures – меры безопасности\n" +
    "213. semiconductor – полупроводник\n" +
    "214. semiconductor technology – полупроводниковая технология\n" +
    "215. sensitive data – конфиденциальные данные\n" +
    "217. session layer – сеансовый уровень\n" +
    "218. shading – заливка\n" +
    "219. shareware – условно бесплатное ПО (ПО, предоставляемое на испытательный срок)\n" +
    "220. signature-based scanning – сигнатурное сканирование\n" +
    "221. silicon – кремний\n" +
    "222. SMT (Simultaneous MultiThreading) – одновременная многопоточность\n" +
    "223. smart home appliances – умные приборы\n" +
    "224. software – программное обеспечение\n" +
    "225. solid state technology – твердотельная технология\n" +
    "226. source code – исходный ход\n" +
    "227. speakers – колонки\n" +
    "228. spreadsheets – электронные таблицы\n" +
    "229. spyware – шпионские программы\n" +
    "230. SSD (Solid State Drive) – твердотельный накопитель\n" +
    "231. SSL (Secure Sockets Layer) – протокол защищённых соединений\n" +
    "232. star topology – топология “звезда”\n" +
    "233. storage device – устройство хранения данных\n" +
    "234. storage medium – носитель информации\n" +
    "235. streaming video – потоковое видео\n" +
    "236. subscribers – абоненты\n" +
    "237. supercomputer – cуперкомпьютер\n" +
    "238. supervisor program – организующая программа\n" +
    "239. switch – переключатель, коммутатор\n" +
    "240. system clock – тактовый генератор\n" +
    "241. system unit – системный блок\n" +
    "242. tablet – планшет\n" +
    "243. timesharing operating systems – операционная система с режимом разделения времени\n" +
    "244. to archive – архивировать\n" +
    "245. to click a suspicious link – переходить по подозрительной ссылке\n" +
    "246. to deny access – отказать в доступе, отклонить доступ\n" +
    "247. to edit – редактировать\n" +
    "248. to encrypt data – шифровать данные\n" +
    "249. to erase/ delete/ remove – стирать (данные)\n" +
    "250. to prevent an unauthorized access – предотвратить несанкционированный/неавторизованный доступ\n" +
    "251. to run an infected program – запускать заражённую программу\n" +
    "252. to spread/ propagate viruses – распространять вирусы\n" +
    "253. to update antivirus software – обновлять антивирусное ПО\n" +
    "254. touch screen – сенсорный экран\n" +
    "255. touchpad – сенсорная панель\n" +
    "256. track – дорожка на CD/жёстком диске\n" +
    "257. transceiver – приемопередатчик\n" +
    "258. transfer rate – скорость передачи данных\n" +
    "259. trigger – запуск, активация вируса\n" +
    "260. Trojan – Троянский конь\n" +
    "261. twisted-pair cable – витая пара\n" +
    "262. UDP (User Datagram Protocol) – протокол пользовательских дэйтаграмм\n" +
    "263. unauthorized access – неавторизованный доступ, несанкционированный доступ\n" +
    "264. URL (Uniform Resource Locator) – универсальный указатель ресурса\n" +
    "265. USB (Universal Serial Bus) port – USB порт\n" +
    "266. USB-flash drive / memory stick – флеш-накопитель\n" +
    "267. vacuum tubes – электронные лампы\n" +
    "268. virtual keyboard – виртуальная клавиатура\n" +
    "269. virtual circuit switching – коммутация виртуальных каналов\n" +
    "270. volatile – энергозависимый\n" +
    "271. voltage – напряжение\n" +
    "272. VR (Virtual Reality) – виртуальная реальность\n" +
    "273. website builder – конструктор веб-сайтов\n" +
    "274. Website defacement – искажение информации на вебсайте\n" +
    "275. weight – вес (веса)\n" +
    "276. WLAN (Wireless Local Area Network) – беспроводная локальная сеть\n" +
    "277. word processor – текстовый редактор\n" +
    "278. worm – червь\n" +
    "279. write-back сache – кэш с обратной (отложенной) записью\n" +
    "280. write-through сache – кэш со сквозной записью"

function Translations() {
    const [parsedString] = useState<string[]>(translations.split("\n"));
    const [displays, setDisplays] = useState<Record<number, boolean>>({});

    const toggleWord = (ind: number) => {
        if (displays[ind]) {
            setDisplays(prev => ({ ...prev, [ind]: false }));
        }
        else {
            setDisplays(prev => ({ ...prev, [ind]: true }));
        }
    }

    return (
        <div className="flex flex-col gap-4 mt-5 mb-10 w-[60%]">
            {
                parsedString.map((s, ind) => {
                    const leftPart = s.substring(0, s.indexOf(".") + 1);
                    const darkPart = s.substring(s.indexOf(".") + 1, s.indexOf("–"));
                    const rightPart = s.substring(s.indexOf("–"), s.length);
                    return (<div key={ s } className="flex">
                        <p>{ leftPart }</p>
                        <p
                            className={ `${displays[ind] ? "bg-transparent" : "bg-black"} transition-all rounded-lg text-wrap` }
                            onClick={() => toggleWord(ind)}
                        >
                            { darkPart }
                        </p>
                        <p>
                            { rightPart }
                        </p>
                    </div>);
                })
            }
        </div>
    );
}

export default Translations;