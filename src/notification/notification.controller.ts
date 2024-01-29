import { Controller, Post, Query, Req, Res } from '@nestjs/common';
import { AppResponse } from 'src/common/app.response';
import { NotificationService } from './notification.service';
import { Response } from 'express';

const { success } = AppResponse;

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('/create')
  async createNotifications(
    @Req() req: any,
    @Res() res: Response,
    @Query('userId') userId: string,
  ): Promise<Response> {
    const data = await this.notificationService.createNotifications(userId);
    return res
      .status(200)
      .json(success('Successfully created notification(s)', 201, data));
  }
}
