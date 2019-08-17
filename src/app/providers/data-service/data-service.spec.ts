import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataServiceProvider } from './data-service';
import { TestBed } from '@angular/core/testing';

describe('Data Service Provider', () => {
    let dataServiceProvider: DataServiceProvider;
    let backend: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [DataServiceProvider]
        });
        backend = TestBed.get(HttpTestingController);
        dataServiceProvider = TestBed.get(DataServiceProvider);
    });

    describe('workout data state cache', () => {

        let workoutName: string;

        beforeEach(() => {
            workoutName = '1st-workout';
        });
    });
});
