import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Box, Text } from 'ink';
import path from 'node:path';
import { Colors } from '../colors.js';
export function IDEContextDetailDisplay({ ideContext, detectedIdeDisplay, }) {
    const openFiles = ideContext?.workspaceState?.openFiles;
    if (!openFiles || openFiles.length === 0) {
        return null;
    }
    const basenameCounts = new Map();
    for (const file of openFiles) {
        const basename = path.basename(file.path);
        basenameCounts.set(basename, (basenameCounts.get(basename) || 0) + 1);
    }
    return (_jsxs(Box, { flexDirection: "column", marginTop: 1, borderStyle: "round", borderColor: Colors.AccentCyan, paddingX: 1, children: [_jsxs(Text, { color: Colors.AccentCyan, bold: true, children: [detectedIdeDisplay ? detectedIdeDisplay : 'IDE', " Context (ctrl+e to toggle)"] }), openFiles.length > 0 && (_jsxs(Box, { flexDirection: "column", marginTop: 1, children: [_jsx(Text, { bold: true, children: "Open files:" }), openFiles.map((file) => {
                        const basename = path.basename(file.path);
                        const isDuplicate = (basenameCounts.get(basename) || 0) > 1;
                        const parentDir = path.basename(path.dirname(file.path));
                        const displayName = isDuplicate
                            ? `${basename} (/${parentDir})`
                            : basename;
                        return (_jsxs(Text, { children: ["- ", displayName, file.isActive ? ' (active)' : ''] }, file.path));
                    })] }))] }));
}
//# sourceMappingURL=IDEContextDetailDisplay.js.map