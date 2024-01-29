import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Moment } from 'moment';
import { Document } from 'mongoose';
import * as moment from 'moment';

export type NotificationDocument = Notification & Document;

@Schema()
export class Notification {
  @Prop({ type: String, required: false })
  userId: string;

  @Prop({ type: String, default: false })
  isRead: boolean;

  @Prop({ default: () => moment().utc().toDate(), type: Date })
  createdAt: Moment;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
