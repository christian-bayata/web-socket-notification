import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway()
export class NotificationGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  private readonly logger = new Logger(NotificationGateway.name);

  @WebSocketServer()
  private server: Server;

  handleConnection(client: Socket) {
    this.logger.log(`Successful client connection: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Successful client disconnection: ${client.id}`);
  }

  sendNotification(userId: string, count: number) {
    this.server.to(userId).emit('notification', { count });
  }
}
