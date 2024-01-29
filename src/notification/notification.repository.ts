import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PropDataInput } from 'src/common/utils/util.interface';
import {
  Notification,
  NotificationDocument,
} from 'src/schema/notification.schema';

@Injectable()
export class NotificationRepository {
  constructor(
    @InjectModel(Notification.name)
    private notificationModel: Model<NotificationDocument>,
  ) {}

  /**
   * @Responsibility: Repo for notification creation
   *
   * @param data
   * @returns {Promise<NotificationDocument>}
   */

  async createNotification(data: any): Promise<NotificationDocument> {
    try {
      return await this.notificationModel.create(data);
    } catch (error) {
      throw new Error(error?.messsage);
    }
  }

  /**
   * @Responsibility: Repo for counting user notification(s)
   *
   * @param data
   * @returns {Promise<NotificationDocument>}
   */

  async countNotifications(where: PropDataInput): Promise<number> {
    try {
      return await this.notificationModel.countDocuments(where);
    } catch (error) {
      throw new Error(error?.messsage);
    }
  }

  // count = await this.notificationModel.countDocuments(where);
}
