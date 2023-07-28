import mongoose, { Document, model, Model, models, Schema } from 'mongoose';

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
    require:true
  },
  description: {
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
    require:true
  },
  tags:{
    type: Array,
    require: true
  },
//  repo:{
//    type:string,
//    require:true
//  },
//  site:{
//    type:string,
//    require: true
//  }
});

export const Project = (models.Project ||
  model('Project', ProjectSchema)) as Model<IProject>;
