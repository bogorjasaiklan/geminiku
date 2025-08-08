/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
export type IdeIntegrationNudgeResult = 'yes' | 'no' | 'dismiss';
interface IdeIntegrationNudgeProps {
    question: string;
    description?: string;
    onComplete: (result: IdeIntegrationNudgeResult) => void;
}
export declare function IdeIntegrationNudge({ question, description, onComplete, }: IdeIntegrationNudgeProps): import("react/jsx-runtime").JSX.Element;
export {};
