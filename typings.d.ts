interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset:{
        _ref:string;
        _type:"reference";
    };
}

export interface PageInfo extends SanityBody{
    _type:"pageInfo";
    adresse:string;
    backgroundInformation:string;
    email:string;
    role:string;
    heroImage:Image;
    name:string;
    mobile:string;
    profilPic: Image
}

export interface skill extends SanityBody{
    _type:'skill';
    image:Image;
    progress:number;
    title:string;
}

export interface competence extends SanityBody{
    _type:'competence';
    title:string;
    points:string[]
}

export interface experience extends SanityBody{
    _type:"experience";
    company:string;
    companyImage: Image;
    dateEnded:date;
    dateStarted:date;
    jobTitle: string;
    isCurrentlyWorkingHere:boolean;
    points:competence[];
    technologies:skill[];

}

export interface projet extends SanityBody{
    title:string;
    _type:'projet';
    image:Image;
    linkToBuild:string;
    summary:string;
    technologies:skill[];
}




