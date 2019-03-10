import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataServiceProvider } from './data-service';
import { TestBed } from '@angular/core/testing';

describe('Data Service Provider', () => {
    let dataServiceProvider: DataServiceProvider;
    let backend: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            providers: [ DataServiceProvider ]
        });
        backend = TestBed.get(HttpTestingController);
        dataServiceProvider = TestBed.get(DataServiceProvider);
    });

    it('should get workout data - future use only', () => {
        const mockResponse = { workout: { name: 'dont care' }};
        dataServiceProvider.getWorkout()
        .subscribe(data => {
            expect(data).toBe(mockResponse);
        });

        backend.expectOne('mock-url-for-future-use').flush(mockResponse);
    });

    describe('workout data state cache', () => {

        let workoutName: string;

        beforeEach(() => {
            workoutName = '1st-workout';
        });

        it('default (new) selected workout day should be 0', () => {
            const new_selectedworkout_day =
                dataServiceProvider.getLastSelectedWorkoutDay(workoutName);
            expect(new_selectedworkout_day).toBe(0);
        });

        it('selected previous workout day should be correct', () => {
            dataServiceProvider.setLastSelectedWorkoutDay(workoutName, 5);
            const new_selectedworkout_day =
                dataServiceProvider.getLastSelectedWorkoutDay(workoutName);
            expect(new_selectedworkout_day).toBe(5);
        });

        it('should override previous workout day with last one', () => {
            dataServiceProvider.setLastSelectedWorkoutDay(workoutName, 1);
            dataServiceProvider.setLastSelectedWorkoutDay(workoutName, 2);
            dataServiceProvider.setLastSelectedWorkoutDay(workoutName, 3);

            const new_selectedworkout_day =
                dataServiceProvider.getLastSelectedWorkoutDay(workoutName);
            expect(new_selectedworkout_day).toBe(3);
        });
    });
});
