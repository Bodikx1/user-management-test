import { model, Schema, Model, Types } from 'mongoose';
import { IGroup } from '../repository/types';

const GroupSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 50,
      sparse: true,
    },
    status: {
      type: String,
      required: true,
      default: 'empty',
      enum: ['empty', 'notEmpty'],
    },
    users: [{ type: Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);

export const GroupModel: Model<IGroup> = model<IGroup>('Group', GroupSchema);
