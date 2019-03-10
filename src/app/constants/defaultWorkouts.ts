
import {
    GripType,
    GripWidth,
    RepetitionSpeed,
    WeightType,
    WeightUnit } from '../models/enums';

export const json = { workouts: [{
        'id': 1,
        'name': 'ABC + Full Body Option 1 *',
        'description': '4 days including upper, lower and core muscles',
        'days': [
            {
                'id': 4,
                'name': 'Full Body',
                'exercises': [
                    {
                        'id': 1,
                        'sets': [
                            {
                                'name': 'Bench Press, Wide Grip',
                                'imageUrl': 'constants/images/BenchPressWideGrip.jpeg',
                                'grip': {
                                    'type': 'N/A',
                                    'width': GripWidth.Wide,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                'weightType': WeightType.Barbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 2,
                        'sets': [
                            {
                                'name': 'Seated Rope Cable Row',
                                'imageUrl': 'constants/images/SeatedRopeCableRow.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 3,
                        'sets': [
                            {
                                'name': 'Dumbbell Wrist Curl',
                                'imageUrl': 'constants/images/DumbbellWristCurl.png',
                                grip: {
                                    type: GripType.Overhand,
                                    width: GripWidth.Normal,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Dumbbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 15
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 15
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 15
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 4,
                        'sets': [
                            {
                                'name': 'Cable Triceps Pushdown, Overhand Grip',
                                'imageUrl': 'constants/images/CableTricepsPushdownOverheadGrip.png',
                                grip: {
                                    type: GripType.Overhand,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 70,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 70,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 70,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 70,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 5,
                        'sets': [
                            {
                                'name': 'Cable Biceps Curl, Underhand Grip',
                                'imageUrl': 'constants/images/CableBicepsCurlUnderhandGrip.png',
                                grip: {
                                    type: GripType.Underhand,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 6,
                        'sets': [
                            {
                                'name': 'Leg Raise Machine',
                                'imageUrl': 'constants/images/LegRaiseMachine.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 80,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 80,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 80,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 80,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 7,
                        'sets': [
                            {
                                'name': 'Cable Leg Curl',
                                'imageUrl': 'constants/images/CableLegCurl.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 8,
                        'sets': [
                            {
                                'name': 'Crossfit Situps',
                                'imageUrl': 'constants/images/CrossfitSitup.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 9,
                        'sets': [
                            {
                                'name': 'Cross Body Crunch',
                                'imageUrl': 'constants/images/CrossBodyCrunch.png',
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.NoWeight,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 15
                                    },
                                    {
                                        'times': 15
                                    },
                                    {
                                        'times': 15
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    }
                ],
            },
            {
                'id': 2,
                'name': 'Upper Body 1',
                'exercises': [
                    {
                        'id': 1,
                        'sets': [
                            {
                                'name': 'Bench Press, Narrow Grip',
                                'imageUrl': 'constants/images/BenchPressNarrowGrip.png',
                                grip: {
                                    type: GripType.Overhand,
                                    width: GripWidth.Narrow,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Barbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 85,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 85,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 85,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            },
                            {
                                'id': 2,
                                'name': 'Dumbbell Bench Press, Rotating Grip',
                                'imageUrl': 'constants/images/DumbbellBenshPressRotatingGrip.png',
                                grip: {
                                    type: GripType.Neutral,
                                    width: GripWidth.Normal,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Dumbbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 10
                                    },
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 10
                                    },
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 10
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            },
                            {
                                'id': 3,
                                'name': 'Dumbbell Bench Press, Rotating Grip',
                                'imageUrl': 'constants/images/DumbbellBenshPressRotatingGrip.png',
                                grip: {
                                    type: GripType.Neutral,
                                    width: GripWidth.Normal,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Dumbbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 10
                                    },
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 10
                                    },
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 10
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 3,
                        'sets': [
                            {
                                'name': 'Cable Fly',
                                'imageUrl': 'constants/images/CableFly.png',
                                grip: {
                                    type: GripType.Underhand,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 4,
                        'sets': [
                            {
                                'name': 'Dumbbell Fly',
                                'imageUrl': 'constants/images/DumbbellFly.png',
                                grip: {
                                    type: GripType.Neutral,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Dumbbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 5,
                        'sets': [
                            {
                                'name': 'Dumbbell Horizontal Row, Inclined Prone',
                                'imageUrl': 'constants/images/DumbbellHorizontalRowInclineProne.png',
                                grip: {
                                    type: GripType.Overhand,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Dumbbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 10,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 10,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 10,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 6,
                        'sets': [
                            {
                                'name': 'Dumbbell Tricpes Extensions, Seated',
                                'imageUrl': 'constants/images/DumbbellTricepsExtensionSeated.png',
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Dumbbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 7,
                        'sets': [
                            {
                                'name': 'Inclined Pushup, Narrow Grip',
                                'imageUrl': 'constants/images/InclinePushupNarrowGrip.jpg',
                                'repetition': RepetitionSpeed.OneOne,
                                grip: {
                                    width: GripWidth.Narrow,
                                },
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 10
                                    },
                                    {
                                        'times': 10
                                    },
                                    {
                                        'times': 10
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 8,
                        'sets': [
                            {
                                'name': 'Reverse Cable Fly, On Flat Bench',
                                'imageUrl': 'constants/images/ReverseCableFlyOnFlatBench.png',
                                grip: {
                                    type: GripType.Overhand,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 55,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 55,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 55,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 9,
                        'sets': [
                            {
                                'name': 'Situps',
                                'imageUrl': 'constants/images/Situps.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 10,
                        'sets': [
                            {
                                'name': 'Situps with Weight Above Head',
                                'imageUrl': 'constants/images/SitupsWithWeightAboveHead.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 11,
                        'sets': [
                            {
                                'name': 'Russian Twist',
                                'imageUrl': 'constants/images/RussianTwist.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    }
                ],
            },
            {
                'id': 3,
                'name': 'Upper Body 2',
                'exercises': [
                    {
                        'id': 1,
                        'sets': [
                            {
                                'name': 'Cabel Lat Pulldown, Behind Neck Wide Grip',
                                'imageUrl': 'constants/images/CabelLatPulldownBehindNeckWideGrip.png',
                                grip: {
                                    type: GripType.Overhand,
                                    width: GripWidth.Wide,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            },
                            {
                                'id': 2,
                                'name': 'Decline Dumbbell Pullover',
                                'imageUrl': 'constants/images/DeclineDumbbellPullover.png',
                                grip: {
                                    type: GripType.Overhand,
                                    width: GripWidth.Wide,
                                },
                                weightType: WeightType.Dumbbell,
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 3,
                        'sets': [
                            {
                                'name': 'Dumbbell Arm Circles',
                                'imageUrl': 'constants/images/DumbbellArmCircles.png',
                                grip: {
                                    type: GripType.Overhand,
                                },
                                weightType: WeightType.Dumbbell,
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 10,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 10,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 10,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 4,
                        'sets': [
                            {
                                'name': 'Machine Row Medium Grip',
                                'imageUrl': 'constants/images/MachineRowMediumGrip.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 85,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 85,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 85,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 5,
                        'sets': [
                            {
                                'name': 'Dummbell Biceps Curl Standing Underhand Grip',
                                'imageUrl': 'constants/images/DummbellBicepsCurlStandingUnderhandGrip.png',
                                grip: {
                                    type: GripType.Underhand,
                                },
                                weightType: WeightType.Dumbbell,
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 6,
                        'sets': [
                            {
                                'name': 'Cable Shrug',
                                'imageUrl': 'constants/images/CableShrug.png',
                                grip: {
                                    width: GripWidth.Normal,
                                },
                                weightType: WeightType.Dumbbell,
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 7,
                        'sets': [
                            {
                                'name': 'Dragon Flags',
                                'imageUrl': 'constants/images/DragonFlags.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 8,
                        'sets': [
                            {
                                'name': 'Decline Situps',
                                'imageUrl': 'constants/images/DeclineSitups.png',
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.NoWeight,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 9,
                        'sets': [
                            {
                                'name': 'Cross Body Crunch',
                                'imageUrl': 'constants/images/CrossBodyCrunch.png',
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.NoWeight,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 15
                                    },
                                    {
                                        'times': 15
                                    },
                                    {
                                        'times': 15
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 10,
                        'sets': [
                            {
                                'name': 'Lying Scissors Kicks',
                                'imageUrl': 'constants/images/LyingScissorsKicks.png',
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.NoWeight,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 15
                                    },
                                    {
                                        'times': 15
                                    },
                                    {
                                        'times': 15
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ],
                    }
                ]
            },
            {
                'id': 1,
                'name': 'Lower Body',
                'exercises': [
                    {
                        'id': 1,
                        'sets': [
                            {
                                'name': 'Walking Lunge with Side Weights',
                                'imageUrl': 'constants/images/WalkingLungeWithSideWeights.png',
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Dumbbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 2,
                        'sets': [
                            {
                                'name': 'Cable Abduction',
                                'imageUrl': 'constants/images/CableAbduction.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            },
                            {
                                'id': 3,
                                'name': 'Cable Adduction',
                                'imageUrl': 'constants/images/CableAdduction.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 4,
                        'sets': [
                            {
                                'name': 'Cable Leg Curl',
                                'imageUrl': 'constants/images/CableLegCurl.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 5,
                        'sets': [
                            {
                                'name': 'Cable Calf Raise',
                                'imageUrl': 'constants/images/CableCalfRaise.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 70,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 70,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 70,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 6,
                        'sets': [
                            {
                                'name': 'Bodyweight Flutter Kicks',
                                'imageUrl': 'constants/images/BodyweightFlutterKicks.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 7,
                        'sets': [
                            {
                                'name': 'Weighted Situps',
                                'imageUrl': 'constants/images/WeightedSitups.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 8,
                        'sets': [
                            {
                                'name': 'Plank',
                                'imageUrl': 'constants/images/Plank.png',
                                'isFavorite': false,
                                'reps': [
                                    {
                                        seconds: 10
                                    },
                                    {
                                        seconds: 10
                                    },
                                    {
                                        seconds: 10
                                    },
                                ],
                                'restBetweenReps': 5,
                                'restAfterExercise': 10
                            }
                        ]
                    },
                    {
                        'id': 9,
                        'sets': [
                            {
                                'name': 'Twist',
                                'imageUrl': 'constants/images/Twist.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    }
                ],
            }
        ]
    }, {
       'id': 2,
       'name': 'default empty workout 1' ,
       'description': 'this is the description of the workout and should not be too long...'
    }, {
        'id': 3,
        'name': 'default empty workout 2' ,
        'description': 'this is the description # 2 of the workout and it\'s shorter.'
     }, {
        'id': 4,
        'name': 'default empty workout 3' ,
        'description': 'this is the description # 2 of the workout and it\'s shorter.'
     }]
};
