import mongoose, { Document, model, Model, Schema } from 'mongoose';

export interface IProject extends Document {
  title: string;
  date: string;
  sub: string;
  createdAt: number;
  time: string;
  role?;
}

const ProjectSchema: Schema = new Schema({
  title: {
    type: String,
    require: true,
  },
  client: {
    type: String,
  },
  sub: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Number,
    require: true,
  },
  time: {
    type: String,
    require: true,
  },
  role: {
    type: Array,
  },
});

export const Project = (mongoose.models.Project ||
  model('Project', ProjectSchema)) as Model<IProject>;
