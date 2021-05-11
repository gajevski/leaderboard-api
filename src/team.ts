export class Team {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly image: string;
  readonly logo: string;
  readonly totalCount: number;
  readonly members: {
    readonly name: string;
    readonly count: number;
  };
}
