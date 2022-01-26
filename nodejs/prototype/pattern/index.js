import Graduate from './Graduate.js'
import { memoryUsage } from 'process';

const start = new Date();

const engineerPrototype = new Graduate();
engineerPrototype.addCourse("Mathematics 101");
engineerPrototype.addCourse("Physiscs 101");
engineerPrototype.addCourse("Mathematics 201");

const engineerPaul = engineerPrototype.clone();
engineerPaul.name = "Paul";
engineerPaul.subject = "Civil Engineering";
engineerPaul.addCourse("Building Materials");

const engineerPeter = engineerPrototype.clone();
engineerPeter.name = "Peter";
engineerPeter.subject = "Aeronautical Engineering";
engineerPeter.addCourse("Fundamentals of Aircraft Performance");

const engineerJane = engineerPrototype.clone();
engineerJane.name = "Jane";
engineerJane.subject = "Naval Engineering";
engineerJane.addCourse("Principles of Ship Performance");

const finish = new Date();
console.log(memoryUsage());
console.log(JSON.stringify(engineerPaul));
console.log(JSON.stringify(engineerPeter));
console.log(JSON.stringify(engineerJane));
console.log(`Time taken to create 3 graduates: ${(finish.getTime() - start.getTime()) / 1000} seconds.`);