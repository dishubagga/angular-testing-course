<<<<<<< Updated upstream
import {fakeAsync, flush, flushMicrotasks, tick} from '@angular/core/testing';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';


describe('Async Testing Examples', () => {

    it('Asynchronous test example with Jasmine done()', (done: DoneFn) => {

        let test = false;

        setTimeout(() => {

            console.log('running assertions');

            test = true;

            expect(test).toBeTruthy();

            done();

        }, 1000);

    });


    it('Asynchronous test example - setTimeout()', fakeAsync(() => {

        let test = false;

        setTimeout(() => {
        });

        setTimeout(() => {

            console.log('running assertions setTimeout()');

            test = true;

        }, 1000);

        flush();

        expect(test).toBeTruthy();

    }));


    it('Asynchronous test example - plain Promise', fakeAsync(() => {

        let test = false;

        console.log('Creating promise');

        Promise.resolve().then(() => {

            console.log('Promise first then() evaluated successfully');

            return Promise.resolve();
        })
        .then(() => {

            console.log('Promise second then() evaluated successfully');

            test = true;

        });

        flushMicrotasks();

        console.log('Running test assertions');

        expect(test).toBeTruthy();

    }));


    it('Asynchronous test example - Promises + setTimeout()', fakeAsync(() => {

        let counter = 0;

        Promise.resolve()
            .then(() => {

               counter+=10;

               setTimeout(() => {

                   counter += 1;

               }, 1000);

            });

        expect(counter).toBe(0);

        flushMicrotasks();

        expect(counter).toBe(10);

        tick(500);

        expect(counter).toBe(10);

        tick(500);

        expect(counter).toBe(11);

    }));

    it('Asynchronous test example - Observables', fakeAsync(() => {

        let test = false;

        console.log('Creating Observable');

        const test$ = of(test).pipe(delay(1000));

        test$.subscribe(() => {

            test = true;

        });

        tick(1000);

        console.log('Running test assertions');

        expect(test).toBe(true);


    }));
=======
import { fakeAsync, tick, flush, flushMicrotasks } from '@angular/core/testing';
import { count } from 'console';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
describe('Async testing examples', () => {
  it('Async test example with jasmine done()', (done: DoneFn) => {

    let test = false;

    setTimeout(() => {
      console.log('running assertions');

      test = true;

      expect(test).toBeTruthy();
      done();
    }, 1000);

  });

  it('Async test example with set timeout()', fakeAsync(() => {
    let test = false;

    setTimeout(() => { });

    setTimeout(() => {
      console.log('running assertions set timeout()');
      test = true;
    }, 1000);

    flush();

    expect(test).toBeTruthy();

  }));

  it('Asyncronous test example -plain promise', fakeAsync(() => {

    let test = false;

    Promise.resolve().then(() => {

      console.log('Promise first then() evaluated successfully');

      test = true;

      return Promise.resolve();
    }).then(() => {
      console.log('Promise second then() evaluated successfully');
    });

    flushMicrotasks();

    console.log('running assertions');

    expect(test).toBeTruthy();
  }));

  it('Asynchronous tes texample Promises + setTimeout()', fakeAsync(() => {
    let counter = 0;

    Promise.resolve().then(() => {

      counter += 10;

      setTimeout(() => {
        counter += 1;
      }, 1000);
    });

    expect(counter).toBe(0);

    flushMicrotasks();

    expect(counter).toBe(10);

    tick(500);

    expect(counter).toBe(10);

    tick(500);

    expect(counter).toBe(11);


  }));

  it('Async observabe', fakeAsync(() => {
    let test = false;

    console.log('Creating observabel');

    const test$ = of(test).pipe(delay(1000));

    test$.subscribe(() => {
      test = true;
    });
    tick(1000);
    console.log('Running test assertions');

    expect(test).toBe(true);

  }));
>>>>>>> Stashed changes


});


<<<<<<< Updated upstream














=======
>>>>>>> Stashed changes
