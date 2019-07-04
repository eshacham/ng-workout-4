import { ExerciseMedia } from '../models/ExerciseMedia';
import { Muscles } from '../models/enums';

export interface ExerciseMediaKV {
    key: string;
    value: ExerciseMedia;
}

const mediaUrl = (name: string): string => {
    return `assets/images/${name}`;
};

const addMedia = (map: Map<string, ExerciseMedia>, name: string, muscles: Muscles[]) => {
    const url = mediaUrl(name);
    const media = ExerciseMedia.buildDefaultExerciseMedia(url, new Set(muscles));
    map.set(url, media);
};

const init = (): Map<string, ExerciseMedia> => {
    const exercises = new Map<string, ExerciseMedia>();
    addMedia(exercises, 'BenchPressWideGrip.jpeg', [Muscles.Chest]);
    addMedia(exercises, 'BodyweightFlutterKicks.png', [Muscles.Glutes, Muscles.Hamstrings]);
    addMedia(exercises, 'CabelLatPulldownBehindNeckWideGrip.png', [Muscles.Shoulders, Muscles.Forearms]);
    addMedia(exercises, 'CableAbduction.png', [Muscles.Abductors]);
    addMedia(exercises, 'CableAdduction.png', [Muscles.Adductors]);
    addMedia(exercises, 'CableBicepsCurlUnderhandGrip.png', [Muscles.Biceps, Muscles.Forearms]);
    addMedia(exercises, 'CableCalfRaise.png', [Muscles.Calves]);
    addMedia(exercises, 'CableFly.png', [Muscles.Chest]);
    addMedia(exercises, 'CableLegCurl.png', [Muscles.Hamstrings]);
    addMedia(exercises, 'CableShrug.png', [Muscles.Neck]);
    addMedia(exercises, 'CableTricepsPushdownOverheadGrip.png', [Muscles.Forearms, Muscles.Triceps]);
    addMedia(exercises, 'CrossBodyCrunch.png', [Muscles.Core, Muscles.Abs]);
    addMedia(exercises, 'DeclineDumbbellPullover.png', [Muscles.Core, Muscles.Abs]);
    addMedia(exercises, 'CrossfitSitup.png', [Muscles.Core, Muscles.Abs]);
    addMedia(exercises, 'DeclineSitups.png', [Muscles.Core, Muscles.Abs]);
    addMedia(exercises, 'DragonFlags.png', [Muscles.Core, Muscles.Abs]);
    addMedia(exercises, 'DumbbellArmCircles.png', [Muscles.Shoulders]);
    addMedia(exercises, 'DumbbellBenshPressRotatingGrip.png', [Muscles.Chest]);
    addMedia(exercises, 'DumbbellFly.png', [Muscles.Chest]);
    addMedia(exercises, 'DumbbellHorizontalRowInclineProne.png', [Muscles.Chest]);
    addMedia(exercises, 'DumbbellTricepsExtensionSeated.png', [Muscles.Triceps]);
    addMedia(exercises, 'DumbbellWristCurl.png', [Muscles.Fingers]);
    addMedia(exercises, 'DummbellBicepsCurlStandingUnderhandGrip.png', [Muscles.Biceps]);
    addMedia(exercises, 'InclinePushupNarrowGrip.jpg', [Muscles.Core, Muscles.Abs, Muscles.Chest]);
    addMedia(exercises, 'LegRaiseMachine.png', [Muscles.Quads]);
    addMedia(exercises, 'LyingScissorsKicks.png', [Muscles.Glutes]);
    addMedia(exercises, 'MachineRowMediumGrip.png', [Muscles.Lats]);
    addMedia(exercises, 'Plank.png', [Muscles.Core, Muscles.Abs]);
    addMedia(exercises, 'ReverseCableFlyOnFlatBench.png', [Muscles.Chest]);
    addMedia(exercises, 'RussianTwist.png', [Muscles.Core, Muscles.Abs]);
    addMedia(exercises, 'SeatedRopeCableRow.png', [Muscles.Forearms, Muscles.Back]);
    addMedia(exercises, 'Situps.png', [Muscles.Core, Muscles.Abs]);
    addMedia(exercises, 'SitupsWithWeightAboveHead.png', [Muscles.Core, Muscles.Abs]);
    addMedia(exercises, 'Twist.png', [Muscles.Core, Muscles.Abs]);
    addMedia(exercises, 'WalkingLungeWithSideWeights.png', [Muscles.Quads, Muscles.Forearms]);
    addMedia(exercises, 'WeightedSitups.png', [Muscles.Core, Muscles.Abs]);

    return exercises;
};

export const defaultExerciseMedia = init();

export const getMedia = (name: string): ExerciseMedia => {
    return defaultExerciseMedia.get(name);
};
