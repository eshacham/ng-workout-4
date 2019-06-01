export enum WeightType {
    EzBar = 'Ez-Bar',
    Barbell = 'Barbell',
    Dumbbell = 'Dumbbell',
    Kettleball = 'Kettlebell',
    Plate = 'Plate',
    NoWeight = 'N/A'
}
export enum GripType {
    Underhand = 'Underhand',
    Overhand = 'Overhand',
    Neutral = 'Neutral',
    NoGrip = 'N/A'
}
export enum GripWidth {
    Narrow = 'Narrow',
    Normal = 'Normal',
    Wide = 'Wide',
    NoGrip = 'N/A'
}
export enum RepetitionSpeed {
    OneOne = '1:1',
    TwoTwo = '2:2',
    TwoFour = '2:4',
    NA = 'N/A'
}
export enum WeightUnit {
    Lbs = 'Lbs',
    Kg = 'Kg'
}

export enum DisplayMode {
    Display,
    Edit,
    Workout
}

export enum ExerciseSetAction {
    Completed,
    Delete,
    Edit,
    Run,
    Save,
    AddDay,
    DeleteDay,
    MoveDayForward,
    MoveDayBack
}
