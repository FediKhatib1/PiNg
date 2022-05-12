import { DomainActivity } from "./domain-activity";
import { Experience } from "./experience";
import { Formation } from "./formation";
import { Profession } from "./profession";
import { Skill } from "./skill";
import { User } from "./user";

export class Profile {
    idProfile : number ;
    phoneNumber : string ;
    viewsNumber : bigint ;
    user : User ;
    experiences : Experience[] ;
    formations : Formation[] ;
    professions : Profession[] ;
    activityDomains : DomainActivity[] ;
    skills : Skill[] ;
}
