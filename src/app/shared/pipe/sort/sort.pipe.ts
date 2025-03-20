import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: any[], sortBy: string, order: 'asc' | 'desc' = 'asc'): any[] {
    if (!items || !sortBy) {
      return items; 
    }

    return items.sort((a, b) => {
      const valueA = a[sortBy];
      const valueB = b[sortBy];

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return order === 'asc'
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      } else {
        return order === 'asc'
          ? valueA - valueB
          : valueB - valueA;
      }
    });
  }
}
