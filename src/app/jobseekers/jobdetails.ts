export class Jobdetails {
  position: string;
  otherPosition: string;
  workingMode: string;
  previouslyWorked: boolean;
  when: Date;

  openPositions: string[] = ['SDE1', 'SDE2', 'Tester', 'DevOps', 'Others'];
  workingModeOptions: string[] = ['Hybrid', 'WFO', 'WFH'];

  constructor(
    position: string = '',
    otherPosition: string = '',
    workingMode: string = '',
    previouslyWorked: boolean = false,
    when: Date = new Date()
  ) {
    this.position = position;
    this.otherPosition = otherPosition;
    this.workingMode = workingMode;
    this.previouslyWorked = previouslyWorked;
    this.when = when;
  }
}
