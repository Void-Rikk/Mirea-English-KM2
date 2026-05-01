import { useState } from "react";


const abbreviations = "1. 2FA — Two-Factor Authentication\n" +
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

function Abbreviations() {
    const [parsedString] = useState<string[]>(abbreviations.split("\n"));
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
        <div className="flex flex-col gap-4 mt-5 mb-10">
            {
                parsedString.map((s, ind) => {
                    const leftPart = s.substring(0, s.indexOf("—") + 2);
                    const rightPart = s.substring(s.indexOf("—") + 2, s.length);
                    return (<div key={ s } className="flex self-start">
                        <p>{ leftPart }</p>
                        <p
                            className={ `${displays[ind] ? "bg-transparent" : "bg-black"} transition-all rounded-lg` }
                            onClick={() => toggleWord(ind)}
                        >
                            { rightPart }
                        </p>
                    </div>);
                })
            }
        </div>
    );
}

export default Abbreviations;