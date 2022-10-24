export class Serie{
    public id: number;
    public name: string;
    public channel: string;
    public seasons: number;
    public description: string;
    public link: string;
    public image: string;


    constructor(idS: number, nameS: string, channelS: string, seasonsS:number, descriptionS: string, linkS: string, imageS:string){
        this.id = idS;
        this.name = nameS;
        this.channel = channelS;
        this.seasons = seasonsS;
        this.description = descriptionS;
        this.link = linkS;
        this.image = imageS;
    }
}
