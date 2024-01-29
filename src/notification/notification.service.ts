import { Injectable } from '@nestjs/common';
import { NotificationGateway } from './notification.gateway';
import { AppResponse } from 'src/common/app.response';
import { NotificationRepository } from './notification.repository';

@Injectable()
export class NotificationService {
  constructor(
    private readonly notificationGateway: NotificationGateway,
    private readonly notificationRepository: NotificationRepository,
  ) {}

  /**
   * @Responsibility: dedicated service for storing notification(s)
   *
   * @param userId
   *
   * @returns {Promise<any>}
   */

  async createNotifications(userId: string): Promise<any> {
    try {
      await this.notificationRepository.createNotification({ userId });
      return;
    } catch (error) {
      error.location = `NotificationService.${this.createNotifications.name} method`;
      AppResponse.error(error);
    }
  }

  /**
   * @Responsibility: dedicated service for notifying user(s)
   *
   * @param userId
   *
   * @returns {Promise<any>}
   */

  async notifyUser(userId: string): Promise<any> {
    try {
      const count = await this.notificationRepository.countNotifications({
        userId,
      });

      // Notify the user using WebSocket
      this.notificationGateway.sendNotification(userId, count);
      return;
    } catch (error) {
      error.location = `NotificationService.${this.notifyUser.name} method`;
      AppResponse.error(error);
    }
  }
}
