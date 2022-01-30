import { ofType } from 'redux-observable';
import {
  debounceTime, map, mergeMap, pluck, takeUntil,
} from 'rxjs/operators';
import { from } from 'rxjs';
import {
 fetchedCategories,FETCH_CATEGORIES
} from '../actions/actionCategories';
import axios from 'axios';

const TAG = 'epicTransaction: ';

async function fetchCategoriesFromApi() {
  console.log(TAG, 'Successfully fetched');
  const url = "https://jsonplaceholder.typicode.com/comments?postId=1";
 const res = await axios.get(url)
  if (res?.status === 200 && res?.data) {
      const {data} = res;
    return ({ status: true, data: (data?.length > 0) ? data : [] });
  }
   return ({ status: false, data: [] });
}

export const FetchCategories = (actions$) => actions$.pipe(
  ofType(FETCH_CATEGORIES),
  debounceTime(500),
  pluck('payload'),
  mergeMap(() => from(fetchCategoriesFromApi()).pipe(
    map((status, data) => fetchedCategories(status, data)),
    takeUntil(actions$.pipe(ofType(FETCH_CATEGORIES))),
  )),
);
