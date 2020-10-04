import { html } from "./index.js";

describe("When using html tagged template literal", () => {
    describe("and giving a simple, single element html string", () => {

        test("it returns an HTMLElement", () => {
            const result = html`<div></div>`;
            expect(result instanceof HTMLElement).toBeTruthy();
        });

        test.each([
            [ "div", html`<div></div>`, HTMLDivElement ],
            [ "span", html`<span></span>`, HTMLSpanElement ],
            [ "anchor", html`<a></a>`, HTMLAnchorElement ],
            [ "paragraph", html`<p></p>`, HTMLParagraphElement ],
            [ "article", html`<article></article>`, HTMLElement ],
            [ "audio", html`<audio></audio>`, HTMLAudioElement ],
            [ "img", html`<img>`, HTMLImageElement ]
        ])("it returns the correct type - %s", (_, result, elementType) => {
            expect(result instanceof elementType, `Got ${result} instead an ${elementType.name}`).toBe(true);
        });

        test.each([
            [ "class", html`<div class="myDiv"></div>`, "class", "myDiv" ],
            [ "id", html`<span id="myId"></span>`, "id", "myId" ],
            [ "style", html`<a style="color: red"></a>`, "style", "color: red" ],
            [ "aria-label", html`<a aria-label="Meow"></a>`, "aria-label", "Meow" ],
            [ "imgsrc", html`<img src="https://picsum.photos/200">`, "src", "https://picsum.photos/200" ]
        ])("it respects attributes - %s", (_, result, attributeName, attributeValue) => {
            expect(result.getAttribute(attributeName)).toBe(attributeValue);
        });

        test.each([
            [ "text", html`<div class="myDiv">hello world</div>`, "hello world" ],
            [ "elements with text", html`<a style="color: red">meow<span>hello world</span></a>`, "hello world" ],
        ])("it respects content - %s", (_, result, expectedText) => {
            expect(result.innerHTML).toContain(expectedText);
        });

        test.each([
            [ "elements", html`<div id="an-id"><span class="nested"></span></div>`, ".nested" ],
            [ "elements with text", html`<div id="an-id">hello <span class="nested">world</span>!</div>`, ".nested" ],
            [ "elements with elements", html`<div id="an-id"><div><span class="nested"></div><article></article></span></div>`, ".nested" ],
        ])("it respects content - %s", (_, result, querySelector) => {
            expect(result.querySelector(querySelector)).not.toBeUndefined();
        });

    });
});