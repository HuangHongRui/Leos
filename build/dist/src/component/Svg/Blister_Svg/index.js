export default (function () {
    return (React.createElement("div", null,
        React.createElement("canvas", { id: "canvas" }, "Your browser doesn't support canvas"),
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1" },
            React.createElement("defs", null,
                React.createElement("filter", { id: "shadowed-goo" },
                    React.createElement("feGaussianBlur", { in: "SourceGraphic", result: "blur", stdDeviation: "10" }),
                    React.createElement("feColorMatrix", { in: "blur", mode: "matrix", values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7", result: "goo" }),
                    React.createElement("feGaussianBlur", { in: "goo", stdDeviation: "3", result: "shadow" }),
                    React.createElement("feColorMatrix", { in: "shadow", mode: "matrix", values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2", result: "shadow" }),
                    React.createElement("feOffset", { in: "shadow", dx: "1", dy: "1", result: "shadow" }),
                    React.createElement("feBlend", { in2: "shadow", in: "goo", result: "goo" }),
                    React.createElement("feBlend", { in2: "goo", in: "SourceGraphic", result: "mix" })),
                React.createElement("filter", { id: "goo" },
                    React.createElement("feGaussianBlur", { in: "SourceGraphic", result: "blur", stdDeviation: "10" }),
                    React.createElement("feColorMatrix", { in: "blur", mode: "matrix", values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7", result: "goo" }),
                    React.createElement("feBlend", { in2: "goo", in: "SourceGraphic", result: "mix" }))))));
})();
//# sourceMappingURL=index.js.map