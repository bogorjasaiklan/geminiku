/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiRequestEvent } from '../telemetry/types.js';
import { logApiRequest } from '../telemetry/loggers.js';
import { toContents } from '../code_assist/converter.js';
/**
 * A decorator that wraps a ContentGenerator to add logging to API calls.
 */
export class LoggingContentGenerator {
    wrapped;
    config;
    constructor(wrapped, config) {
        this.wrapped = wrapped;
        this.config = config;
    }
    logApiRequest(contents, model, promptId) {
        const requestText = JSON.stringify(contents);
        logApiRequest(this.config, new ApiRequestEvent(model, promptId, requestText));
    }
    async generateContent(req, userPromptId) {
        this.logApiRequest(toContents(req.contents), req.model, userPromptId);
        return this.wrapped.generateContent(req, userPromptId);
    }
    async generateContentStream(req, userPromptId) {
        this.logApiRequest(toContents(req.contents), req.model, userPromptId);
        return this.wrapped.generateContentStream(req, userPromptId);
    }
    async countTokens(req) {
        return this.wrapped.countTokens(req);
    }
    async embedContent(req) {
        return this.wrapped.embedContent(req);
    }
}
//# sourceMappingURL=loggingContentGenerator.js.map