import { useState } from "react";

const definitions = "Abacus - an ancient counting tool invented in China around 1300 BC used to perform basic arithmetical operations such as addition, subtraction, multiplication, and division.\n" +
    
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

function Definitions() {
    const [parsedString] = useState<string[]>(definitions.split("\n"));
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
                    const word = s.substring(0, s.indexOf("-") + 1);
                    const def = s.substring(s.indexOf("-") + 1, s.length);
                    return (<div key={ s } className="flex gap-2">
                        <p>{ word }</p>
                        <p
                            className={ `${displays[ind] ? "bg-transparent" : "bg-black"} transition-all rounded-lg text-wrap` }
                            onClick={() => toggleWord(ind)}
                        >
                            { def }
                        </p>
                    </div>);
                })
            }
        </div>
    );
}

export default Definitions;