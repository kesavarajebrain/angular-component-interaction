import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Subject, Observable, timer } from 'rxjs';
import {
  OutgoingEvent,
  IncomingEvent
} from './socket.types';

@Injectable({ providedIn: 'root' })
export class SocketService {

  private socket$!: WebSocketSubject<any>;

  private stream$ = new Subject<IncomingEvent>();

  private reconnectDelay = 2000;
  private connected = false;
  private status$ = new Subject<'connected' | 'disconnected' | 'reconnecting'>();

  statusChanges$() {
    return this.status$.asObservable();
  }

  connect() {
    if (this.connected) return;

    console.log('🔌 Connecting WS...');

    this.socket$ = webSocket({
      url: 'wss://web-socket-server-4nt8.onrender.com',
      serializer: msg => JSON.stringify(msg),
      deserializer: msg => JSON.parse(msg.data),
      openObserver: {
        next: () => {
          console.log('✅ WS connected');
          this.connected = true;
          this.reconnectDelay = 2000;
          this.status$.next('connected');   // 👈
        }
      },
      closeObserver: {
        next: () => {
          console.warn('⚠️ WS closed');
          this.connected = false;
          this.status$.next('reconnecting');  // 👈
          this.scheduleReconnect();
        }
      }
    });

    this.socket$.subscribe({
      next: ev => this.stream$.next(ev as IncomingEvent),
      error: err => {
        console.error('WS error', err);
        this.connected = false;
        this.status$.next('reconnecting');   // 👈
        this.scheduleReconnect();
      }
    });
  }

  private scheduleReconnect() {
    console.log(`🔁 Reconnecting in ${this.reconnectDelay}ms...`);

    timer(this.reconnectDelay).subscribe(() => {
      this.connect();
    });

    // backoff up to 10s
    this.reconnectDelay = Math.min(
      this.reconnectDelay * 1.5,
      10000
    );
  }

  send(event: OutgoingEvent) {
    if (!this.socket$ || !this.connected) {
      console.warn('⚠️ Not connected yet');
      return;
    }

    this.socket$.next(event);
  }

  events$(): Observable<IncomingEvent> {
    return this.stream$.asObservable();
  }

  close() {
    this.socket$?.complete();
    this.connected = false;
    this.status$.next('disconnected');   // 👈
  }
}
