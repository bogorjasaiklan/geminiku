import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Box, Text, useInput } from 'ink';
import { RadioButtonSelect, } from './components/shared/RadioButtonSelect.js';
export function IdeIntegrationNudge({ question, description, onComplete, }) {
    useInput((_input, key) => {
        if (key.escape) {
            onComplete('no');
        }
    });
    const OPTIONS = [
        {
            label: 'Yes',
            value: 'yes',
        },
        {
            label: 'No (esc)',
            value: 'no',
        },
        {
            label: "No, don't ask again",
            value: 'dismiss',
        },
    ];
    return (_jsxs(Box, { flexDirection: "column", borderStyle: "round", borderColor: "yellow", padding: 1, width: "100%", marginLeft: 1, children: [_jsxs(Box, { marginBottom: 1, flexDirection: "column", children: [_jsxs(Text, { children: [_jsx(Text, { color: "yellow", children: '> ' }), question] }), description && _jsx(Text, { dimColor: true, children: description })] }), _jsx(RadioButtonSelect, { items: OPTIONS, onSelect: onComplete, isFocused: true })] }));
}
//# sourceMappingURL=IdeIntegrationNudge.js.map