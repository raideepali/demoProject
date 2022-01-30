import { combineEpics } from 'redux-observable';
import { catchError } from 'rxjs/operators';
import { FetchCategories } from './demoproject/epics/epicCategories';

const epics = [
    FetchCategories,
];

const TAG = 'rootEpic: ';

const rootEpic = (action$, store$, dependencies) => combineEpics(...epics)(action$, store$, dependencies).pipe(
  catchError((error, source) => {
    console.log(TAG, error);
    return source;
  }),
);

export default rootEpic;
