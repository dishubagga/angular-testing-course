<<<<<<< Updated upstream
import {CalculatorService} from './calculator.service';
import {LoggerService} from './logger.service';
import {TestBed} from '@angular/core/testing';


describe('CalculatorService', () => {

    let calculator: CalculatorService,
        loggerSpy: any;

    beforeEach(()=> {

        console.log("Calling beforeEach");

        loggerSpy = jasmine.createSpyObj('LoggerService', ["log"]);

        TestBed.configureTestingModule({
            providers: [
                CalculatorService,
                {provide: LoggerService, useValue: loggerSpy}
            ]
        });

        calculator = TestBed.get(CalculatorService);

    });

    it('should add two numbers', () => {

        console.log("add test");

        const result = calculator.add(2, 2);

        expect(result).toBe(4);

        expect(loggerSpy.log).toHaveBeenCalledTimes(1);

    });


    it('should subtract two numbers', () => {

        console.log("subtract test");

        const result = calculator.subtract(2, 2);

        expect(result).toBe(0, "unexpected subtraction result");

        expect(loggerSpy.log).toHaveBeenCalledTimes(1);

    });

});
=======
import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';
import { TestBed } from '@angular/core/testing';

describe('Calculator service ', () => {
  let calculator: CalculatorService;
  let loggerSpy: any;

  beforeEach(() => {
    console.log('before each');
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useValue: loggerSpy }
      ]
    });

    calculator = TestBed.inject(CalculatorService);
  });

  it('should add two numbers', () => {
    console.log('Adding two');
    const result = calculator.add(2, 2);

    expect(result).toBe(4);

    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
  it('should subtract two numbers', () => {
    console.log('Subtract two numbers');
    const result = calculator.subtract(2, 2);

    expect(result).toBe(0);
  });
});
>>>>>>> Stashed changes
