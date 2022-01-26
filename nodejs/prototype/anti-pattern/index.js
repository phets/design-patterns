import Graduate from './Graduate.js'
import { memoryUsage } from 'process';

const start = new Date();

const engineerPaul = new Graduate();
engineerPaul.name = "Paul";
engineerPaul.subject = "Civil Engineering";
engineerPaul.addCourse("Mathematics 101");
engineerPaul.addCourse("Physiscs 101");
engineerPaul.addCourse("Mathematics 201");
engineerPaul.addCourse("Building Materials 101");

const engineerPeter = new Graduate();
engineerPeter.name = "Peter";
engineerPeter.subject = "Aeronautical Engineering";
engineerPeter.addCourse("Mathematics 101");
engineerPeter.addCourse("Physiscs 101");
engineerPeter.addCourse("Mathematics 201");
engineerPeter.addCourse("Aircraft Performance");

const engineerJane = new Graduate();
engineerJane.name = "Jane";
engineerJane.subject = "Naval Engineering";
engineerJane.addCourse("Mathematics 101");
engineerJane.addCourse("Physiscs 101");
engineerJane.addCourse("Mathematics 201");
engineerJane.addCourse("Principles of Ship Performance");

const finish = new Date();

console.log(JSON.stringify(engineerPaul));
console.log(JSON.stringify(engineerPeter));
console.log(JSON.stringify(engineerJane));
console.log(`Time taken to create 3 graduates: ${(finish.getTime() - start.getTime()) / 1000} seconds.`);