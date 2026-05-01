import type { Topic } from "../utils/types.ts";

export const topics: Topic[] = ["translations", "abbreviations", "definitions"];

export const pointsInfo: Record<Topic, string> = {
    translations: "перевод 25 единиц лексического материала (слов и устойчивых словосочетаний) с русского на английский язык – 5 баллов",
    abbreviations: "расшифровка 10 аббревиатур и других сокращений на английском языке – 2 балла",
    definitions: "определение 6 терминов на английском языке – 6 баллов"
};

export const translations = "1. access point – точка доступа\n" +
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

export const abbreviations = "1. 2FA — Two-Factor Authentication\n" +
    "2. ADSL — Asymmetric Digital Subscriber Line\n" +
    "3. AI — Artificial Intelligence\n" +
    "4. ALU — Arithmetic Logic Unit\n" +
    "5. ANN — Artificial Neural Network\n" +
    "6. AR — Augmented Reality\n" +
    "7. ASCII — American Standard Code for Information Interchange\n" +
    "8. BASIC — Beginner's All-purpose Symbolic Instruction Code\n" +
    "9. BD — Blu-ray disc\n" +
    "10.BIOS — Basic Input/Output System\n" +
    "11.CAPTCHA — Completely Automated Public Turing test to tell Computers and Humans Apart\n" +
    "12.CD-R — Compact Disc Recordable\n" +
    "13.CD-ROM — Compact Disc Read-Only Memory\n" +
    "14.CD-RW — Compact Disc Rewritable\n" +
    "15.CGI — Computer-Generated Image\n" +
    "16.CLI — Command Line Interface\n" +
    "17.CNN — Convolutional Neural Network\n" +
    "18.CPU — Central Processing Unit\n" +
    "19.CSS — Cascading Style Sheets\n" +
    "20.DDoS — Distributed Denial of Service\n" +
    "21.DDR4 — Double Data Rate 4\n" +
    "22.DNS — Domain Name System\n" +
    "23.DoS — Denial of Service\n" +
    "24.DRAM — Dynamic Random Access Memory\n" +
    "25.DSL — Digital Subscriber Line\n" +
    "26.DVD — Digital Versatile Disc\n" +
    "27.EEPROM — Electrically Erasable Programmable Read-Only Memory\n" +
    "28.ENIAC — Electronic Numerical Integrator and Computer\n" +
    "29.EPROM — Erasable Programmable Read-Only Memory\n" +
    "30.FGT — Floating Gate Transistors\n" +
    "31.FORTRAN — FORmula TRANslator\n" +
    "32.FTP — File Transfer Protocol\n" +
    "33.GB — Gigabyte\n" +
    "34.GHz — Gigahertz\n" +
    "35.GSM — Global System for Mobile Communications\n" +
    "36.GUI — Graphical User Interface\n" +
    "37.HDD — Hard Disk Drive\n" +
    "38.HLAI — Human-Like Artificial Intelligence; Human-Level Artificial Intelligence\n" +
    "39.HTML — Hyper Text Markup Language\n" +
    "40.HTTP — Hyper Text Transfer Protocol\n" +
    "41.IBM — International Business Machines\n" +
    "42.ICANN — Internet Corporation for Assigned Names and Numbers\n" +
    "43.IoT — the Internet of Things\n" +
    "44.IR — Instruction Register\n" +
    "45.ISDN — Integrated Services Digital Network\n" +
    "46.ISP — Internet Service Provider\n" +
    "47.JS — JavaScript\n" +
    "48.JVM — Java Virtual Machine\n" +
    "49.KB — Kilobyte\n" +
    "50.LAN — Local Area Network\n" +
    "51.LCD — Liquid Crystal Display\n" +
    "52.MAC address — Media Access Control address\n" +
    "53.MAN — Metropolitan Area Network\n" +
    "54.MFA — Multi-Factor Authentication\n" +
    "55.ML — Machine Learning\n" +
    "56.MROM — Masked Read-Only Memory\n" +
    "57.MS Word — Microsoft Word\n" +
    "58.MS-DOS — Microsoft Disk Operating System\n" +
    "59.NAND Flash — Not AND Flash\n" +
    "60.NN — Neural Networks\n" +
    "61.NOR Flash — Not OR Flash\n" +
    "62.OOP — Object-Oriented Programming\n" +
    "63.OS — Operating System\n" +
    "64.OSI — Open System Interconnection\n" +
    "65.PAN — Personal Area Network\n" +
    "66.PC — Personal Computer\n" +
    "67.PC — Program Counter\n" +
    "68.PHP — Hypertext Preprocessor\n" +
    "69.PROM — Programmable Read-Only Memory\n" +
    "70.RAM — Random Access Memory\n" +
    "71.RNN — Recurrent Neural Network\n" +
    "72.ROM — Read-Only Memory\n" +
    "73.SDRAM — Synchronous Dynamic Random Access Memory\n" +
    "74.SDSL — Symmetric Digital Subscriber Line\n" +
    "75.SEO — Search Engine Optimization\n" +
    "76.SMT — Simultaneous Multi-threading Technology\n" +
    "77.SMTP — Simple Mail Transfer Protocol\n" +
    "78.SQL — Structured Query Language\n" +
    "79.SRAM — Static Random Access Memory\n" +
    "80.SSD — Solid State Drive\n" +
    "81.SSL — Secure Sockets Layer\n" +
    "82.TB — TByte, Terabyte\n" +
    "83.TCP/IP — the Transmission Control Protocol and the Internet Protocol\n" +
    "84.UDP — User Datagram Protocol\n" +
    "85.UIDs — Unique Identifiers\n" +
    "86.UNIVAC I — Universal Automatic Computer\n" +
    "87.URL — Uniform Resource Locator\n" +
    "88.USB — Universal Serial Bus\n" +
    "89.VDSL — Very High Bit Rate DSL\n" +
    "90.VR — Virtual Reality\n" +
    "91.WAF — Web Application Protection Firewall\n" +
    "92.WAN — Wide Area Network\n" +
    "93.Wi-Fi — Wireless Fidelity\n" +
    "94.WiMAX — Worldwide Interoperability for Microwave Access\n" +
    "95.WIMP — Windows Icons Menus Pointer\n" +
    "96.WLAN — Wireless Local Area Network\n" +
    "97.WWW — World Wide Web\n" +
    "98.WYSIWYG — What You See Is What You Get\n" +
    "99.Yandex — Yet Another iNDEXer"

export const definitions = "Abacus - an ancient counting tool invented in China around 1300 BC used to perform basic arithmetical operations such as addition, subtraction, multiplication, and division.\n" +

    "The Analytical Engine - a mechanical computer designed in the 1830s by Charles Babbage. It is considered the first machine resembling modern computers because it contained an Arithmetic Logic Unit (ALU), control unit, memory, and an input/output system.\n" +

    "Arithmetic Logic Unit (ALU) - a fundamental component of a computer's processor responsible for performing mathematical calculations and logical operations.\n" +

    "Integrated Circuit (IC) - often referred to as a microchip, is a miniature electronic circuit consisting of various interconnected components fabricated onto a single semiconductor substance.\n" +

    "Moore's Law - a theory based on a prediction made by Gordon Moore in 1965 stating that computer processing power doubles approximately every two years as manufacturing improves and more transistors are placed on a circuit.\n" +

    "The Pascaline - the first mechanical adding machine, built by Blaise Pascal between 1642 and 1644, capable of performing addition and subtraction. The device was basically a wooden box with a number of gears and wheels.\n" +

    "Parallel processing - a computing method where multiple processors or cores perform several calculations or execute processes simultaneously.\n" +

    "Semiconductor - a material, such as silicon, whose ability to conduct electricity increases as its temperature rises.\n" +

    "Transistor - a semiconductor that controls voltage or current flow in electronic signals acting as a switch. This small electronic component replaced vacuum tubes in second- generation computers, leading to higher speeds and smaller computer sizes.\n" +

    "Vacuum tube - an electronic device that regulates electron movement in a vacuum. It was an early electronic component used in first- generation computers (1940s) to control the flow of electricity.\n" +

    "The first- generation computers - electronic digital computers (1940s) characterized by the use of vacuum tubes, enormous physical size, high electricity consumption, and the ability to solve only one problem at a time.\n" +

    "The second- generation computers - computers (late 1950s- early 1960s) which utilized transistors instead of vacuum tubes. Consequently, these machines were ten times faster, smaller in size, and required less maintenance.\n" +

    "The third- generation computers - computers (1965- 1972) built with integrated circuits, enabling speeds of a million calculations per second and significantly lower production and maintenance costs.\n" +

    "The fourth- generation computers - computers (mid- 1970s- present) based on thousands of circuits placed on a single microprocessor chip, supporting Graphical User Interfaces (GUI) and network connectivity.\n" +

    "The fifth- generation computers - modern computers based on parallel processing and Artificial Intelligence, designed to simulate human reasoning and respond to natural language input.\n" +

    "Desktop PC - a personal computer designed for use in a single, stationary location, typically consisting of a system unit, monitor, keyboard, and mouse.\n" +

    "Laptop - a portable, lightweight computer with a hinged design, featuring a flat LCD screen, a built- in keyboard with a touchpad, and a battery for mobile use.\n" +

    "Mainframe - a large, powerful computer capable of supporting multiple users and thousands of simultaneous queries; it is often used for large- scale data processing in banks and big corporations.\n" +

    "Netbook - a mobile computer that is typically smaller than a laptop. They were popular for basic web browsing and often had fewer functions than a full- sized laptop.\n" +

    "Server - a central computer connected to a network of \"client\" workstations, designed to store data and provide services with higher processing power and memory than a standard workstation.\n" +

    "Supercomputer - the fastest type of computer, containing tens of thousands of processors for simultaneous execution of data- intensive tasks such as weather forecasting and aerodynamics.\n" +

    "Tablet PC - a highly portable mobile device with a touch screen interface, typically lacking a physical keyboard and using a mobile operating system.\n" +

    "Touchpad - a sensitive pad built into a laptop keyboard that allows the user to move the pointer on the screen by touch, serving as a replacement for a mouse.\n" +

    "Arithmetic Logic Unit (ALU) - the specific part of the CPU that performs actual arithmetic (e.g., addition, subtraction) and logical operations (e.g., AND, OR, NOT).\n" +

    "BIOS (Basic Input/Output System) - a ROM chip on the motherboard containing firmware used to perform hardware initialization during the booting process.\n" +

    "Bus - an electrical channel that carries signals and allows devices inside the computer to communicate with each other.\n" +

    "Central Processing Unit (CPU) - the \"brain\" of the computer, built into a single chip (microprocessor), responsible for executing program instructions and coordinating all other units.\n" +

    "Clock speed - the measurement of how many cycles a CPU executes per second, typically measured in gigahertz (GHz).\n" +

    "Control Unit - the component of the CPU that interprets instructions from the user's program and directs the rest of the hardware to execute them.\n" +

    "Expansion slot - a socket on the motherboard that allows users to install expansion cards to add features like sound or network capabilities.\n" +

    "Hardware - any physical, electronic, or mechanical part of a computer system that can be seen or touched.\n" +

    "Input device - a hardware unit that enables the user to enter data into the computer's memory, such as a keyboard, mouse, or scanner.\n" +

    "Motherboard - the main circuit board of a computer that holds the CPU, memory chips, expansion slots, and controllers for peripherals.\n" +

    "Mouse - small input device used to specify the position of the cursor or to make choices from menus.\n" +

    "Output device - any peripheral that allows the user to extract or view the finished results from the system, such as a monitor or printer.\n" +

    "Peripherals - physical units attached to the computer, including input, output, and storage devices.\n" +

    "Program counter (PC) - a CPU register that keeps track of the next instruction to be performed.\n" +

    "Instruction register (IR) - a CPU register that holds the instruction that is being executed now.\n" +

    "RAM (Random Access Memory) - volatile main memory used to temporarily store data and instructions while they are being processed by the CPU; its contents are lost when power is turned off.\n" +

    "Registers - high- speed memory units within the CPU used to store and control data immediately needed for instruction execution.\n" +

    "ROM (Read Only Memory) - non- volatile memory containing permanent instructions and routines for basic CPU operations, such as the BIOS.\n" +

    "Scanner - an input device that converts images, printed text or handwriting into a digital image.\n" +

    "Speaker - a device that provides sound output.\n" +

    "Storage device - a peripheral device used for permanent or long- term storage of data and programs, such as hard drives or flash drives.\n" +

    "SMT (simultaneous multi- threading technology) - a technology that allows two threads to run on a single core, which enables more effective use of CPU resources and improves overall performance.\n" +

    "Cache hit - a situation when the processor finds data in the cache area.\n" +

    "Cache memory - a type of very fast volatile memory that holds a small amount of recently accessed data and acts as a buffer between the main memory and the processor.\n" +

    "Cache miss - a situation when the processor does not find data in the cache area and reads it in the slower RAM.\n" +

    "RAM - a type of volatile memory inside a computer that stores data temporarily and gets erased when the computer is turned off.\n" +

    "ROM - a type of non- volatile memory including BIOS, firmware, bootloaders that store critical instructions to initiate the system.\n" +

    "Primary memory - an internal storage device, such as cache or RAM, which can be directly accessed by the CPU with minimum or no delay.\n" +

    "Write- back cache - a method changing data in the cache area first, while RAM is updated later.\n" +

    "Write- through cache - a method of refreshing data in the cache and main memory simultaneously.\n" +

    "Access time - the amount of time it takes for a storage device to search and locate the data you plan to open, copy, move.\n" +

    "Capacity - the maximum amount of data a storage device can contain.\n" +

    "CD R - a type of CD which is released blank and can be recorded on once only.\n" +

    "CD ROM - a type of CD which comes pre- recorded and doesn't allow to change data stored on it.\n" +

    "CD RW - a type of CD whose data can be written, read, erased, and rewritten.\n" +

    "Flash memory - a type of non- volatile memory which works by using electronic circuits to store and retrieve data.\n" +

    "Floppy disk - an outdated storage device of low capacity made of flexible plastic material upon which data is stored on magnetic tracks.\n" +

    "Magnetic storage - a type of storage in which data is written by magnetizing particles on a disk or tape.\n" +

    "NOR flash - a type of flash memory that provides fast access to small amounts of data used in bootloaders and firmware.\n" +

    "NAND flash - a type of flash memory that provides slow access to large amounts of data used in SSDs and USB flash drives.\n" +

    "Optical storage - a type of storage is which data is written as a series of reflective marks and read with a laser.\n" +

    "Read/write head - a part of an HDD which reads and writes data by magnetizing and demagnetizing fields on spinning platters.\n" +

    "Transfer rate - the average speed at which data can be transmitted from one device to another, often measured in megabytes per second.\n" +

    "CLI - the way to interact with a computer system through typing various commands in the form of lines of text.\n" +

    "Compatible - being able to work with another device or program.\n" +

    "Device driver - a type of software that controls specific hardware of the computer system.\n" +

    "Firmware - permanent software or set of instructions stored in ROM of the computer system.\n" +

    "GUI - a user- friendly interface based on graphics; it uses a WIMP environment.\n" +

    "Operating system - a set of programs that manage the computer's hardware resources, establish a user interface, and provide the environment for application programs to run.\n" +

    "Open source software - a type of computer software whose copyright holder grants users the rights to use, study, change, and distribute the software to anyone and for any purpose.\n" +

    "Proprietary software - non- free software whose users are not allowed to share, modify it, and distribute the modifications.\n" +

    "Spreadsheet - a computer application for organization, analysis and storage of data in a tabular form.\n" +

    "Word processor - a computer application used to compose and edit texts.\n" +

    "Preemptive multitasking - a type of multitasking where the operating system can initiate a context switch to satisfy the scheduling policy's priority, thus preempting the active task.\n" +

    "Cooperative multitasking - a computer multitasking technique in which the operating system never initiates a context switch from a running process to another process.\n" +

    "Topology - the configuration of the elements (nodes) of a network.\n" +

    "Local area network (LAN) - a collection of devices connected together in one physical location, such as a building, office, or home.\n" +

    "Metropolitan Area Network (MAN) - a high- speed network that interconnects multiple LANs (local area networks) within a specific geographic area, such as a city, large campus, or municipality.\n" +

    "Wide Area Network (WAN) - a type of computer network that connects computers and other devices over a large geographical area (a country or a continent).\n" +

    "Network hub - a node that broadcasts data to every computer or Ethernet- based device connected to it without restriction.\n" +

    "Network switch - identical to a network hub, but unlike a hub, a switch forwards data to the specific device only based on its MAC address.\n" +

    "Bus topology - a network setup where all nodes (computers, servers, printers) connect directly to a single, central cable, known as the backbone or bus.\n" +

    "Peer to peer network - a network architecture in which all the computers have the same capabilities, i.e. share files and peripherals, without requiring a separate server computer.\n" +

    "Client server network - a computing model in which multiple clients connect to a central server to access resources, such as files, applications, and data.\n" +

    "Ring topology - a LAN topology, in which all devices are interconnected in a continuous loop.\n" +

    "Tree topology - a type of network setup that combines elements from both star and bus topologies to create a hierarchical structure.\n" +

    "Mesh topology - a network configuration where every device is interconnected with every other device, providing multiple routes for data to travel.\n" +

    "Hybrid topology - a network structure that combines two or more different types of topologies into a single system.\n" +

    "Star topology - a LAN topology, in which all data flows through a central hub, a common connection point for the devices on the network.\n" +

    "Ad hoc topology - a wireless peer- to- peer network that does not rely on the existing infrastructure.\n" +

    "Bridge - a hardware component connecting networks that use the same protocol.\n" +

    "Router - a networking device that can send data packets from one network to another.\n" +

    "Gateway - a device or software used to enable communication between two networks that may be using different protocols.\n" +

    "Computer network - a group of computers that use a set of common communication protocols over digital interconnections for the purpose of sharing resources located on or provided by the network nodes.\n" +

    "Latency - the time delay between a user's action (request) and the system's response, typically measured in milliseconds (ms).\n" +

    "Modem (modulator- demodulator) - a computer hardware device that converts data from a digital format into a format suitable for an analog transmission medium such as telephone or radio.\n" +

    "Wired networks - communication systems that connect devices (computers, printers, servers) using physical cables, such as Ethernet (twisted pair), fiber optics, or coaxial cables, to a central router or switch.\n" +

    "Wireless network - a computer network that uses wireless data connections between network nodes.\n" +

    "Wireless LAN (WLAN) - a wireless computer network that forms a local area network by linking devices over Wi- Fi radio signals.\n" +

    "Backbone network - a high- capacity communications network that serves as the principal data path interconnecting multiple subnetworks.\n" +

    "The OSI (Open Systems Interconnection) model - a set of rules that explains how different computer systems communicate over a network.\n" +

    "The application layer - the layer that serves as the interface between the end- user applications and the underlying network services.\n" +

    "The presentation layer - the layer that acts as a translator and negotiator, ensuring that data from the application layer (Layer 7) can be understood by the receiving system.\n" +

    "The session layer of the OSI model - the layer that manages the establishment, maintenance, and termination of connections (sessions) between applications on different devices.\n" +

    "The transport layer of the OSI model - the layer that ensures reliable, ordered, and error- checked delivery of data between applications on different network hosts.\n" +

    "The network layer - the layer that handles routing, forwarding, and logical addressing (IP addresses) to send data packets between different networks or devices.\n" +

    "The data link layer - the OSI model layer responsible for node- to- node data transfer on a local network segment, ensuring reliable, error- free transmission between directly connected devices.\n" +

    "The physical layer - the lowest layer of the OSI model and it is responsible for transmitting raw bits of data from one node to the other over physical cable or wireless connection.\n" +

    "Media Access Control (MAC) address - a 12- digit hexadecimal number that uniquely identifies every device connected to a network.\n" +

    "Internet Protocol (IP) address - the unique identifying number assigned to every device connected to the internet.\n" +

    "Bluetooth - a wireless technology that allows mobile devices and other peripheral devices to communicate over short distances.\n" +

    "Coaxial cable - a type of cable that consists of four main components: inner conductor, insulation, metal shield, and jacket.\n" +

    "Virtual circuit switching - an approach in which a path is built between the source and the destination points through which all packets are routed.\n" +

    "Datagram switching - a packet switching method that treats each packet, or datagram, as a separate entity. Each packet is routed via the network on its own though different paths, and then the packets are reassembled at the destination point.\n" +

    "Digital Subscriber Line - a broadband communication technology designed for the use on telephone lines; it allows a single phone connection to be used for both Internet service and voice calls at the same time.\n" +

    "Fiber optic technology - the fastest wired way to access the Internet transmitting information as pulses of light through strands of fiber made of glass or plastic over long distances.\n" +

    "Bandwidth - the measure of how much information can pass through a data connection in a given amount of time, measured in bits per second.\n" +

    "Cellular network - a radio- based communication network distributed over land areas called cells, each served by a fixed- location transceiver, known as a cell tower.\n" +

    "Dial up connection - the least expensive but also the slowest way to access the Internet which uses a standard phone line and analog modem. This technology pre- existed the DSL connection and used one and the same frequency to transmit voice and data signal.\n" +

    "The TCP/IP stack - a four- layer protocol model used on the Internet to govern how data is transmitted between computers. It is named after the two main protocols TCP and IP and is widely used as a framework to model communication in a network.\n" +

    "The World Wide Web (WWW) - an information system accessible through the Internet where documents and other web resources are identified by a Uniform Resource Locator (URL).\n" +

    "Ranking - the process of ordering the search results from most relevant to least relevant.\n" +

    "Web crawler - a special program also known as a spider that regularly browses the web to discover new content. It works by following hyperlinks from page to page and storing copies of the pages in a search engine's index.\n" +

    "Human powered directories - systems that depend on human editors for their listings. A directory gets its information from submissions, which include a short description to the directory for the entire site, or from editors who write one for sites they review. When a user query is entered, the system looks for matches only in the descriptions submitted.\n" +

    "Meta search engine - a type of search engine which does not have a database of indexed pages of its own. Instead, it sends users' queries to several other search engines and compiles top results from each into one overall list.\n" +

    "Search bar - a field on the screen that allows users to enter keywords or phrases to find specific content.\n" +

    "Web browser - software that serves as a gateway to the World Wide Web. It identifies individual URLs and displays the corresponding page on the user's device.\n" +

    "Search engine - software system that scans, indexes, and retrieves web content to help users find information online.\n" +

    "Hyperlink - a highlighted word or image in a hypertext document that takes a user to another location when he/she clicks on it.\n" +

    "Backend development - a field of web development that is associated with the part of the site connected to the server.\n" +

    "Frontend development - a field of web development that focuses on the visible part of the site.\n" +

    "HTML - a code used to describe the structure of information on a webpage telling the web browser how to display its content.\n" +

    "Hyperlink - a text, image or button that takes you to other web pages when you click on it.\n" +

    "JavaScript - a programming language used by web developers to create dynamically updating content, use animations, pop- up menus, clickable buttons, etc.\n" +

    "CSS - a mechanism for adding style (e.g. fonts, colors, spacing) to web documents.\n" +

    "SEO - a set of improvements that increases visibility of a site and helps it rank higher on the results page.\n" +

    "Website builder - a platform that can be used to create a website without having to code.\n" +

    "Assembly language - a low- level programming language that uses symbolic instructions rather than raw binary coding to communicate directly with a computer's hardware.\n" +

    "Object oriented programming (OOP) - a programming paradigm in computer science that relies on the concept of classes and objects. Objects are defined as software entities that encapsulate data and functions.\n" +

    "Compiler - a special program that converts a source program (written in a high- level language) into object code in one go.\n" +

    "Interpreter - a special program that translates the source code line by line, as the program is running.\n" +

    "Inheritance - the ability of one class to use properties and behavior of another class.\n" +

    "Polymorphism - a programming language's ability to process objects differently depending on their data type or class.\n" +

    "Encapsulation - a fundamental concept that combines data (attributes) and methods (functions) into a single unit.\n" +

    "Source code - a set of instructions typically written in a high- level programming language that defines how a program or application should function.\n" +

    "Machine code - a code made of just two numbers (0 and 1).\n" +

    "Debugging - the technique of detecting and correcting errors which may occur in programs.\n" +

    "Spyware - malicious software designed to enter a computer device, gather data about a person or organization and forward it to a third party without a user's consent.\n" +

    "Adware - a form of financially supported malware that usually presents itself as unwanted commercials.\n" +

    "Keylogger - a type of spyware used to monitor and record each keystroke on a specific keyboard. The information is gathered and sent to the attacker. This malware is most often used for stealing passwords.\n" +

    "Worm - a standalone malicious computer program that replicates itself to infect other computers. It is able to spread across the network directly without attaching itself to a host file.\n" +

    "Hijacking - a type of cybercrime which involves redirecting anyone trying to visit a certain site elsewhere.\n" +

    "DDoS attack - an attack where hackers overload networks and servers with traffic so that computer systems are unable to keep up with legitimate needs.\n" +

    "Trojan - a type of malware that misleads users of its true intent by pretending to be a useful program.\n" +

    "Phishing - a type of cybercrime where the attacker sends a fake message designed to trick a person into revealing sensitive information to the attacker.\n" +

    "Ransomware - a type of malware that threatens to publish the victim's data, encrypts the victim's data or blocks access to the device unless a payment is made.\n" +

    "Miner - a virus which uses your computer power to earn cryptocurrency for others.\n" +

    "Piracy - unauthorized copying of a program for sale or distributing to other users.\n" +

    "Backdoor - a technique that involves leaving, within a completed program, an illicit program that allows unauthorized and unknown entry.\n" +

    "Defacement - a cybercrime which involves changing the information shown on another person's website.\n" +

    "Salami shaving - a computer crime in which a program is altered so that it transfers a small amount of money from a large number of accounts to make a large profit.\n" +

    "Misdirection routine - the component that allows a virus to hide itself.\n" +

    "Trigger - the component of a virus that activates payload.\n" +

    "Payload - the component of a virus that does the damage to the computer system.\n" +

    "Reproduction routine - the component that allows the virus to self- replicate and infect other programs.\n" +

    "Firewall - a combination of software and hardware used to protect private networks by filtering incoming data traffic.\n" +

    "Signature - a distinguishing feature that every computer virus contains.\n" +

    "Heuristic scanning - a type of malware detection technique which allows identifying potentially malicious software without having an exact match in signature database.\n" +

    "Cybersecurity - the practice employed to protect and secure computers, servers, networks, mobile devices, electronic systems, and data from being attacked.\n" +

    "Multi factor authentication (MFA) - a user verification technology that requires more than one type of user validation.\n" +

    "Encryption - a way of encoding data so that only authorized parties can understand the information.\n" +

    "Brute force - a cybersecurity threat where a hacker attempts to access a system by systematically testing different passwords.\n" +

    "Password - secret data, typically a string of characters, usually used to confirm a user's identity.\n" +

    "Cryptanalysis - a method of spotting a weakness in the cipher aiming to decrypt encoded data.\n" +

    "Secure Sockets Layer (SSL) - an Internet security protocol that encrypts data to ensure secure communication between devices over a network.\n" +

    "Web application firewall (WAF) - helps protect web applications by filtering and monitoring HTTP traffic between a web application and the Internet.\n" +

    "Ciphertext - encrypted text transformed from plaintext using an encryption algorithm.\n" +

    "Cryptography - the process of hiding or coding information so that only the person a message was intended for can read it.\n" +

    "Cryptographic key - a randomized string of bits used to encrypt and/or decrypt data\n" +

    "Symmetric encryption - the process of using a single key to both encrypt and decrypt data.\n" +

    "Asymmetric encryption (or public- key cryptography) - a security method that uses a mathematically linked pair of keys—a public key for encryption and a private key for decryption—to protect data.\n" +

    "Antivirus software - designed to detect, present and take action to disarm or remove malicious software from your computer such as viruses, worms and Trojan horses.\n" +

    "Packet filtering firewall - a network security device that filters incoming and outgoing network packets based on a predefined set of rules.\n" +

    "Backup program - a program that stores a copy of data on a storage device to keep it safe.\n" +

    "Incremental backup - a backup type that only copies data that has been changed or created since the previous full, differential or incremental backup.\n" +

    "Differential backup - a data protection method that copies all files changed since the last full backup.\n" +

    "Artificial Intelligence (AI) - a technology that simulates human intelligence in computer systems. It enables a computer or a robot controlled by a computer to do tasks that are usually done by humans.\n" +

    "The Internet of Things (IoT) - a system of interrelated computing devices, mechanical, and digital machines provided with the ability to share data in order to automate processes.\n" +

    "Virtual Reality (VR) - a computer- generated space in which the user interacts with artificial objects through 3- D computer simulation.\n" +

    "Neural Networks (NN) - computing systems with interconnected nodes that resemble neurons in the human brain. Using algorithms, they can recognize hidden patterns and correlations in raw data, classify it, and continuously learn and improve.\n" +

    "Augmented Reality (AR) - an enhanced version of the real physical world, which integrates digital information with the existing environment in real time.\n" +

    "Backpropagation - an algorithm that is designed to test for errors working back from output nodes to input nodes.\n" +

    "Unique Identifier (UID) - a numeric or alphanumeric string assigned to a specific entity—such as a user, device, file, or database record—to distinguish it from others within a system.\n" +

    "Machine Learning (ML) - a subset of AI that enables software to learn from data, identifying patterns to make predictions or decisions without being explicitly programmed.\n" +

    "Artificial neurons - units arranged in a series of layers, each of which connects to the layers on either side.\n" +

    "Input units - the layers of artificial neurons designed to receive various forms of information from the outside world that the network will attempt to learn about, recognize, or otherwise process.\n" +

    "Output units - the layers of artificial neurons designed to signal how the network responds to the information it has learned.\n" +

    "Hidden units - the layers of artificial neurons between the input and output layers that process information and form the core computational engine, or \"artificial brain,\" of a neural network.\n" +

    "Weight - a numerical value representing the strength of the connection between two units (neurons) in a neural network, where a positive value indicates excitation and a negative value indicates inhibition.\n" +

    "Human level artificial intelligence (HLAI) - a term used to describe artificial intelligence systems that have human- like abilities in terms of reasoning, learning, perception, and problem solving.\n" +

    "Turing Test - a test of whether a computer can show intelligent behavior like that of a human, done by seeing if a tester can tell whether the answers to a set of questions come from the computer or from a person.\n";