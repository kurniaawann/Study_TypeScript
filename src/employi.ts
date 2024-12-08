export interface  Employe{
    id: string,
    name: string,
    description:string


}

export interface Manager extends Employe{
    numberOfEmployes:number
}


