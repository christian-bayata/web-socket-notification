import { Injectable } from '@nestjs/common';
import { NotificationGateway } from './notification.gateway';
import { AppResponse } from 'src/common/app.response';

@Injectable()
export class NotificationService {
  constructor(private readonly notificationGateway: NotificationGateway) {}

  /**
   * @Responsibility: dedicated service for storing notification(s)
   *
   * @param userId
   *
   * @returns {Promise<any>}
   */

  async createPetroData(userId: string): Promise<any> {
    try {
    } catch (error) {
      error.location = `NotificationService.${this.createPetroData.name} method`;
      AppResponse.error(error);
    }
  }
}
