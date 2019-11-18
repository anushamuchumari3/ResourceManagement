import { AddJDComponent } from "../components/add-jd/add-jd.component";
import { ListJDComponent } from '../components/list-jd/list-jd.component';
import { descriptions } from './descriptions';

export const JOBS: descriptions[] = [
    {
        position:"full stack developer",
        noPositions: 2,
        category:"IT",
        location:"Noida",
        boardingTime: new Date,
        experience:6,
        skill:"Html,css,react",
        JDDescription:"details of position",
        comment:"NA",
        skillMatrix: false,
        requestAcknowledgment: false,
        requestRecieveTime:"18/11/2019 12:10:00"
      }, {
        position:"SAP developer",
        noPositions: 2,
        category:"IT",
        location:"Noida",
        boardingTime: new Date,
        experience:6,
        skill:"SAP",
        JDDescription:"details of position",
        comment:"NA",
        skillMatrix: true,
        requestAcknowledgment: true,
        requestRecieveTime:"18/11/2019 12:10:00"
      }, {
        position:"Oracle developer",
        noPositions: 2,
        category:"DB",
        location:"Banglore",
        boardingTime: new Date(11/11/2019),
        experience:6,
        skill:"oracle database",
        JDDescription:"details of position",
        comment:"NA",
        skillMatrix: true,
        requestAcknowledgment: true,
        requestRecieveTime:"18/11/2019 12:10:00"
      }
  ];