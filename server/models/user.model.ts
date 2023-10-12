import { model, Schema, Model, Types } from 'mongoose';
import validator from 'validator';
import { IUser } from '../repository/types';

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 50,
      sparse: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: (email: string) => validator.isEmail(email),
      set: (email: string) => email.toLowerCase(),
    },
    status: {
      type: String,
      required: true,
      default: 'active',
      enum: ['active', 'pending', 'blocked'],
    },
    group: { type: Types.ObjectId, ref: 'Group', required: false },
  },
  { timestamps: true }
);

export const UserModel: Model<IUser> = model<IUser>('User', UserSchema);
