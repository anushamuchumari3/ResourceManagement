export class Resource {
    id: number;
    name: string;
    position: string;
    doj: string;
    exp: string;
    location: string;
    primeSkill: string;
    mob: string;
    ktPlan: string;
    availablity: string;
    comment: string;
    profile: string;

    constructor(
      id: number,
      name: string,
      position: string,
      doj: string,
      exp: string,
      location: string,
      primeSkill: string,
      mob: string,
      ktPlan: string,
      availablity: string,
      comment: string,
      profile: string){
      this.name = name,
      this.position = position, 
      this.doj = doj,
      this. exp = exp,
      this.location = location,
      this.primeSkill = primeSkill,
      this.mob = mob,
      this.ktPlan = ktPlan,
      this.availablity = availablity,
      this.comment = comment,
      this.profile = profile
    }

  } 