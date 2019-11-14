export class Resource {
    name: string;
    position: string;
    doj: string;
    location: string;
    primeSkill: string;
    mob: string;
    ktPlan: string;
    availablity: string;
    comment: string;

    constructor(name: string,
      position: string,
      doj: string,
      location: string,
      primeSkill: string,
      mob: string,
      ktPlan: string,
      availablity: string,
      comment: string){
      this.name = name,
      this.position = position, 
      this.doj = doj,
      this.location = location,
      this.primeSkill = primeSkill,
      this.mob = mob,
      this.ktPlan = ktPlan,
      this.availablity = availablity,
      this.comment = comment
    }

  } 