/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Buffer } from 'buffer';
import { HttpsProxyAgent } from 'https-proxy-agent';
import { StartSessionEvent, EndSessionEvent, UserPromptEvent, ToolCallEvent, ApiRequestEvent, ApiResponseEvent, ApiErrorEvent, FlashFallbackEvent, LoopDetectedEvent, NextSpeakerCheckEvent, SlashCommandEvent, MalformedJsonResponseEvent, IdeConnectionEvent } from '../types.js';
import { EventMetadataKey } from './event-metadata-key.js';
import { Config } from '../../config/config.js';
export interface LogResponse {
    nextRequestWaitMs?: number;
}
export interface LogEventEntry {
    event_time_ms: number;
    source_extension_json: string;
}
export type EventValue = {
    gemini_cli_key: EventMetadataKey | string;
    value: string;
};
export type LogEvent = {
    console_type: string;
    application: number;
    event_name: string;
    event_metadata: EventValue[][];
    client_email?: string;
    client_install_id?: string;
};
export declare class ClearcutLogger {
    private static instance;
    private config?;
    private readonly events;
    private last_flush_time;
    private flush_interval_ms;
    private readonly max_events;
    private readonly max_retry_events;
    private flushing;
    private pendingFlush;
    private constructor();
    static getInstance(config?: Config): ClearcutLogger | undefined;
    /** For testing purposes only. */
    static clearInstance(): void;
    enqueueLogEvent(event: object): void;
    createLogEvent(name: string, data: EventValue[]): LogEvent;
    flushIfNeeded(): void;
    flushToClearcut(): Promise<LogResponse>;
    decodeLogResponse(buf: Buffer): LogResponse | undefined;
    logStartSessionEvent(event: StartSessionEvent): void;
    logNewPromptEvent(event: UserPromptEvent): void;
    logToolCallEvent(event: ToolCallEvent): void;
    logApiRequestEvent(event: ApiRequestEvent): void;
    logApiResponseEvent(event: ApiResponseEvent): void;
    logApiErrorEvent(event: ApiErrorEvent): void;
    logFlashFallbackEvent(event: FlashFallbackEvent): void;
    logLoopDetectedEvent(event: LoopDetectedEvent): void;
    logNextSpeakerCheck(event: NextSpeakerCheckEvent): void;
    logSlashCommandEvent(event: SlashCommandEvent): void;
    logMalformedJsonResponseEvent(event: MalformedJsonResponseEvent): void;
    logIdeConnectionEvent(event: IdeConnectionEvent): void;
    logEndSessionEvent(event: EndSessionEvent): void;
    getProxyAgent(): HttpsProxyAgent<string> | undefined;
    shutdown(): void;
    private requeueFailedEvents;
}
