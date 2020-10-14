export class Quote {
  showDescription: boolean;
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public dateCreated: Date,
    /**
     * votes: number    */
    public votesUp: number,
    /**
     * voteDown  */

    public voteDown: number
  ) {
    this.showDescription = false;
  }
}
