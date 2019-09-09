var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled, { css } from 'styled-components';
import { withTheme } from '../../hocs/withTheme';
import { isTouchDevice } from '../../libs/ua';
var TabItemComponent = function (_a) {
    var id = _a.id, label = _a.label, onClick = _a.onClick, theme = _a.theme, _b = _a.selected, selected = _b === void 0 ? false : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d;
    var classNames = className + " " + (selected ? 'selected' : '');
    var handleClick = function () {
        onClick(id);
    };
    return (React.createElement(Wrapper, { role: "tab", "aria-selected": selected, className: classNames, onClick: handleClick, theme: theme, disabled: disabled }, label));
};
export var TabItem = withTheme(TabItemComponent);
var resetButtonStyle = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  padding: 0;\n  appearance: none;\n"], ["\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  padding: 0;\n  appearance: none;\n"])));
var Wrapper = styled.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ",
    "\n"])), resetButtonStyle, function (_a) {
    var theme = _a.theme;
    var size = theme.size, palette = theme.palette, interaction = theme.interaction;
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      font-weight: bold;\n      font-size: ", ";\n      color: ", ";\n      height: 40px;\n      border-bottom: solid 3px transparent;\n      padding: 0 ", ";\n      box-sizing: border-box;\n      transition: ", ";\n\n      &.selected {\n        color: ", ";\n        border-color: ", ";\n      }\n\n      :hover {\n        background-color: ", ";\n        color: ", ";\n      }\n\n      :disabled {\n        background-color: inherit;\n        color: ", ";\n        cursor: not-allowed;\n      }\n    "], ["\n      font-weight: bold;\n      font-size: ", ";\n      color: ", ";\n      height: 40px;\n      border-bottom: solid 3px transparent;\n      padding: 0 ", ";\n      box-sizing: border-box;\n      transition: ",
        ";\n\n      &.selected {\n        color: ", ";\n        border-color: ", ";\n      }\n\n      :hover {\n        background-color: ", ";\n        color: ", ";\n      }\n\n      :disabled {\n        background-color: inherit;\n        color: ", ";\n        cursor: not-allowed;\n      }\n    "])), size.pxToRem(size.font.TALL), palette.TEXT_GREY, size.pxToRem(size.space.S), isTouchDevice
        ? 'none'
        : "background-color " + interaction.hover.animation + ", color " + interaction.hover.animation, palette.TEXT_BLACK, palette.MAIN, palette.COLUMN, palette.TEXT_BLACK, palette.disableColor(palette.TEXT_GREY));
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=TabItem.js.map