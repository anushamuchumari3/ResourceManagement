export class Resource {
    name: string;
    position: string;
    doj: string;
    exp: string;
    location: string;
    primeSkill: string;
    mob: string;
    ktPlan: string;
    availablity: boolean;
    comment: string;
    profile: string;
    matchPercentage: number;

    constructor(name: string,
      position: string,
      doj: string,
      exp: string,
      location: string,
      primeSkill: string,
      mob: string,
      ktPlan: string,
      availablity: boolean,
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