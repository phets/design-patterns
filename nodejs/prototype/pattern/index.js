import Graduate from './Graduate.js'
import { memoryUsage } from 'process';

const start = new Date();

// Create a prototype for engineers with the three basic courses
// that all engineers must take.
const engineerPrototype = new Graduate();
engineerPrototype.addCourse("Mathematics 101");
engineerPrototype.addCourse("Physiscs 101");
engineerPrototype.addCourse("Mathematics 201");

// Create a prototype for life sciences graduates with the three basic
// courses that all life sciences graduates must take.
const lifesciencesPrototype = new Graduate();
lifesciencesPrototype.addCourse("Mathematics 101");
lifesciencesPrototype.addCourse("Chemistry 101");
lifesciencesPrototype.addCourse("Organic Chemistry 201");

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

const medicJohn = lifesciencesPrototype.clone();
medicJohn.name = "John";
medicJohn.subject = "Medicine";
medicJohn.addCourse("Human Anatomy");

const biochemistSarah = lifesciencesPrototype.clone();
biochemistSarah.name = "Sarah";
biochemistSarah.subject = "Biochemistry";
biochemistSarah.addCourse("Macromolecular Structure Determination");

const botanistJessica = lifesciencesPrototype.clone();
botanistJessica.name = "Jessica";
botanistJessica.subject = "Botany";
botanistJessica.addCourse("Plant Anatomy");

const finish = new Date();

console.log(JSON.stringify(engineerPaul));
console.log(JSON.stringify(engineerPeter));
console.log(JSON.stringify(engineerJane));
console.log(JSON.stringify(medicJohn));
console.log(JSON.stringify(biochemistSarah));
console.log(JSON.stringify(botanistJessica));
console.log(`Time taken to create 6 graduates: ${(finish.getTime() - start.getTime()) / 1000} seconds.`);