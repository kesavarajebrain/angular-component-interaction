/* ============ TYPES ============ */

// -------- OUTGOING ----------
export interface OutgoingMessage {
  type: 'message';
  user: string;
  text: string;
}

export interface TypingEvent {
  type: 'typing';
  user: string;
}

export interface ReactionEvent {
  type: 'reaction';
  messageId: string;
  emoji: string;
  user: string;
}

export type OutgoingEvent =
  | OutgoingMessage
  | TypingEvent
  | ReactionEvent;

// -------- INCOMING ----------
export interface ChatMessage {
  type: 'message';
  id: string;
  user: string;
  text: string;
  timestamp: number;
  reactions?: Record<string, string[]>;
}

export type IncomingEvent =
  | ChatMessage
  | TypingEvent
  | ReactionEvent;
