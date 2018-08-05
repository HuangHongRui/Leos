import React from 'react';
import './index.scss';
export default function NameSvg() {
    return (React.createElement("div", { className: "hello-parent" },
        React.createElement("svg", { className: "hello-word", width: "50vw", height: "12vw", viewBox: "0 0 500 90" },
            React.createElement("g", { id: "H-letter" },
                React.createElement("line", { className: "H-left-stroke", x1: "20", y1: "-10", x2: "20", y2: "70" }),
                React.createElement("line", { className: "H-mid-stroke", x1: "28", y1: "30", x2: "56", y2: "30" }),
                React.createElement("line", { className: "H-right-stroke", x1: "65", y1: "-10", x2: "65", y2: "70" })),
            React.createElement("g", { id: "O-letter" },
                React.createElement("circle", { className: "O-stroke", cx: "118", cy: "40", r: "22" })),
            React.createElement("g", { id: "N-letter" },
                React.createElement("line", { className: "N-left-stroke", x1: "170", y1: "10", x2: "170", y2: "70" }),
                React.createElement("line", { className: "N-mid-stroke", x1: "170", y1: "20", x2: "210", y2: "60" }),
                React.createElement("line", { className: "N-right-stroke", x1: "210", y1: "10", x2: "210", y2: "70" })),
            React.createElement("g", { id: "G-letter" },
                React.createElement("path", { className: "G-left-stroke", d: "M 288,40 C 286,70 241,70 241,40 241,10 286,10 288,40 290,80 288,95 266,95 251,95 241,90 241,80" })),
            React.createElement("g", { id: "R-letter" },
                React.createElement("path", { className: "R-stroke", d: "M 322,70 L 322,0 C 367,0, 367,30 347,30 S 327,24 367,67" })),
            React.createElement("g", { id: "U-letter" },
                React.createElement("path", { className: "U-stroke", d: "M 395,20 S 380,65 417,65 432,45 440,20" })),
            React.createElement("g", { id: "I-letter" },
                React.createElement("circle", { className: "I-dot", cx: "475", cy: "5", r: "3" }),
                React.createElement("path", { className: "I-stroke", d: "M 475 65 L 475 30" })))));
}
//# sourceMappingURL=index.js.map