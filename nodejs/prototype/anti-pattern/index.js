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

const medicJohn = new Graduate();
medicJohn.name = "John";
medicJohn.subject = "Medicine";
medicJohn.addCourse("Mathematics 101");
medicJohn.addCourse("Chemistry 101");
medicJohn.addCourse("Organic Chemistry 201");
medicJohn.addCourse("Human Anatomy");

const biochemistSarah = new Graduate();
biochemistSarah.name = "Sarah";
biochemistSarah.subject = "Biochemistry";
biochemistSarah.addCourse("Mathematics 101");
biochemistSarah.addCourse("Chemistry 101");
biochemistSarah.addCourse("Organic Chemistry 201");
biochemistSarah.addCourse("Macromolecular Structure Determination");

const botanistJessica = new Graduate();
botanistJessica.name = "Jessica";
botanistJessica.subject = "Botany";
botanistJessica.addCourse("Mathematics 101");
botanistJessica.addCourse("Chemistry 101");
botanistJessica.addCourse("Organic Chemistry 201");
botanistJessica.addCourse("Plant Anatomy");

const finish = new Date();

console.log(JSON.stringify(engineerPaul));
console.log(JSON.stringify(engineerPeter));
console.log(JSON.stringify(engineerJane));
console.log(JSON.stringify(medicJohn));
console.log(JSON.stringify(biochemistSarah));
console.log(JSON.stringify(botanistJessica));
console.log(`Time taken to create 6 graduates: ${(finish.getTime() - start.getTime()) / 1000} seconds.`);